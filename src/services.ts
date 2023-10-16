import { CallContext, Server, createServer } from "nice-grpc";
import {
  ChallengeEventRequest,
  CloseChannelRequest,
  ForceCloseChannelRequest,
  GetAssetsRequest,
  OpenChannelRequest,
  SignMessageRequest,
  SignTransactionRequest,
  UpdateNotificationRequest,
  WalletServiceDefinition,
  WalletServiceImplementation,
} from "./perun-wallet";

export interface SimpleChannelServiceClient {
  openChannel(): Promise<void>;
  updateChannel(): Promise<void>;
  closeChannel(): Promise<void>;
}

export class WalletServiceServer implements WalletServiceImplementation {
  openChannel(request: OpenChannelRequest, context: CallContext): Promise<{}> {
    throw new Error("Method not implemented.");
  }
  closeChannel(
    request: CloseChannelRequest,
    context: CallContext,
  ): Promise<{}> {
    throw new Error("Method not implemented.");
  }
  forceCloseChannel(
    request: ForceCloseChannelRequest,
    context: CallContext,
  ): Promise<{}> {
    throw new Error("Method not implemented.");
  }
  challengeEvent(
    request: ChallengeEventRequest,
    context: CallContext,
  ): Promise<{}> {
    throw new Error("Method not implemented.");
  }
  updateNotification(
    request: UpdateNotificationRequest,
    context: CallContext,
  ): Promise<{ accepted?: boolean | undefined }> {
    throw new Error("Method not implemented.");
  }
  signMessage(
    request: SignMessageRequest,
    context: CallContext,
  ): Promise<{
    rejected?: { reason?: string | undefined } | undefined;
    signature?: Uint8Array | undefined;
  }> {
    throw new Error("Method not implemented.");
  }
  signTransaction(
    request: SignTransactionRequest,
    context: CallContext,
  ): Promise<{
    rejected?: { reason?: string | undefined } | undefined;
    signature?: Uint8Array | undefined;
  }> {
    throw new Error("Method not implemented.");
  }
  getAssets(
    request: GetAssetsRequest,
    context: CallContext,
  ): Promise<{
    rejected?:
      | { assetIdx?: number | undefined; reason?: string | undefined }
      | undefined;
    assets?:
      | {
          assets?:
            | {
                assetId?: Uint8Array | undefined;
                outpoints?: Uint8Array[] | undefined;
              }[]
            | undefined;
        }
      | undefined;
  }> {
    throw new Error("Method not implemented.");
  }
}

export function mkWalletServiceServer(): Server<{}> {
  const server = createServer();
  server.add(WalletServiceDefinition, new WalletServiceServer());
  return server;
}
