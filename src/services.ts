import { CallContext, Server, createServer } from "nice-grpc";
import {
  ChannelServiceImplementation,
  GetAssetsRequest,
  OpenChannelRequest,
  SignMessageRequest,
  SignTransactionRequest,
  UpdateNotificationRequest,
  WalletServiceDefinition,
  WalletServiceImplementation,
} from "./perun-wallet";
import { PerunError } from "./error";
import {
  ValidOpenChannelRequest,
  ValidSignMessageRequest,
  verifyOpenChannelRequest,
} from "./verifier";
import { Allocation } from "./wire";

export function channelIdToString(id: Uint8Array): string {
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(id);
}

export function channelIdFromString(id: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(id);
}

export interface SimpleChannelServiceClient {
  // Request to open a channel with the given peer using the given allocation
  // as the initial channel state. For more information on the Allocation see
  // `verifier.ts` ValidOpenChannelRequest.initBals.
  openChannel(
    me: Uint8Array,
    peerToConnectTo: Uint8Array,
    allocation: Allocation,
    challengeDuration: number,
  ): ServiceResponse<ChannelServiceImplementation["openChannel"]>;

  // Update the channel by paying the given amount to the peer. The asset is
  // identified by the idx of said asset in the channels state. See
  // ValidOpenChannelRequest.fundingAgreement in `verifier.ts` for more
  // details.
  updateChannel(
    channelId: Uint8Array,
    assetIdx: number,
    amount: bigint,
  ): ServiceResponse<ChannelServiceImplementation["updateChannel"]>;

  // Close and settle the channel.
  closeChannel(
    channelId: Uint8Array,
  ): ServiceResponse<ChannelServiceImplementation["closeChannel"]>;
}

// The WalletBackend is parameterized on the MessageType it is able to sign
// when requested to sign an arbitrary data blob.
export interface WalletBackend<MessageType> {
  // A request to open a channel from another peer.
  openChannelRequest(
    req: ValidOpenChannelRequest,
  ): ServiceResponse<WalletServiceImplementation["openChannel"]>;

  // A notification to the wallet, which should be forwarded to the user to ask
  // for agreement to the update.
  updateNotificationRequest(
    req: ServiceRequest<WalletServiceImplementation["updateNotification"]>,
  ): ServiceResponse<WalletServiceImplementation["updateNotification"]>;

  // A request to sign an arbitrary message. The message that is signed is per
  // definition a byte-blob but the wallet can choose to interpret it and deny
  // signing it if it is not of a format it understands.
  signMessageRequest(
    req: ValidSignMessageRequest<MessageType>,
  ): ServiceResponse<WalletServiceImplementation["signMessage"]>;

  signTransactionRequest(
    req: ServiceRequest<WalletServiceImplementation["signTransaction"]>,
  ): ServiceResponse<WalletServiceImplementation["signTransaction"]>;
}

export interface MessageValidator<T> {
  // Tries to parse the message into a known format. If the message is not
  // understood an PerunError is thrown.
  (message: Uint8Array): T;
}

export class WalletServiceServer<MessageType>
  implements WalletServiceImplementation
{
  private b: WalletBackend<MessageType>;

  private messageValidator: MessageValidator<MessageType>;

  constructor(
    backend: WalletBackend<MessageType>,
    messageValidator: MessageValidator<MessageType>,
  ) {
    this.b = backend;
    this.messageValidator = messageValidator;
  }

  async openChannel(
    request: OpenChannelRequest,
    _context: CallContext,
  ): Promise<{
    rejected?: { reason?: string | undefined } | undefined;
    nonceShare?: Uint8Array | undefined;
  }> {
    try {
      let validRequest = verifyOpenChannelRequest(request);
      return this.b.openChannelRequest(validRequest);
    } catch (e) {
      if (e instanceof PerunError) {
        return { rejected: { reason: e.message } };
      }

      // Rethrow unexpected errors.
      throw e;
    }
  }

  updateNotification(
    request: UpdateNotificationRequest,
    _context: CallContext,
  ): Promise<{ accepted?: boolean | undefined }> {
    return this.b.updateNotificationRequest(request);
  }

  async signMessage(
    request: SignMessageRequest,
    _context: CallContext,
  ): Promise<{
    rejected?: { reason?: string | undefined } | undefined;
    signature?: Uint8Array | undefined;
  }> {
    try {
      const validMessage = this.messageValidator(request.data);
      return this.b.signMessageRequest({ ...request, decoded: validMessage });
    } catch (e) {
      if (e instanceof PerunError) {
        return { rejected: { reason: e.message } };
      }
      throw e;
    }
  }

  signTransaction(
    request: SignTransactionRequest,
    _context: CallContext,
  ): Promise<{
    rejected?: { reason?: string | undefined } | undefined;
    transaction?: Uint8Array | undefined;
  }> {
    return this.b.signTransactionRequest(request);
  }

  getAssets(
    _request: GetAssetsRequest,
    _context: CallContext,
  ): Promise<{
    rejected?:
      | { assetIdx?: number | undefined; reason?: string | undefined }
      | undefined;
  }> {
    throw new Error("Method not implemented.");
  }
}

export function mkWalletServiceServer<MessageType>(
  b: WalletBackend<MessageType>,
  v: MessageValidator<MessageType>,
): Server<{}> {
  const server = createServer();
  server.add(WalletServiceDefinition, new WalletServiceServer(b, v));
  return server;
}

export type ServiceRequest<T> = T extends (
  request: infer U,
  context: CallContext,
) => infer _
  ? U
  : never;

export type ServiceResponse<T> = T extends (
  request: infer _,
  context: CallContext,
) => infer U
  ? U
  : never;
