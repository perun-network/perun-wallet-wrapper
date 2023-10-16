/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import { Balances, State } from "./wire";

export const protobufPackage = "perunservice";

/** Generic rejected message. Returned by any endpoint on failure. */
export interface Rejected {
  reason: string;
}

export interface ChannelOpenRequest {
  peer: Uint8Array;
  assets: Assets | undefined;
}

export interface ChannelOpenResponse {
  rejected?: Rejected | undefined;
  channelId?: Uint8Array | undefined;
}

export interface ChannelUpdateRequest {
  /** The state with which the channel should be updated. */
  state:
    | State
    | undefined;
  /** The channel id of the channel to be updated. */
  channelId: Uint8Array;
}

export interface SuccessfulUpdate {
  /** The state with which the channel was updated. */
  state:
    | State
    | undefined;
  /** The channel id of the channel which was updated. */
  channelId: Uint8Array;
}

export interface ChannelUpdateResponse {
  rejected?: Rejected | undefined;
  update?: SuccessfulUpdate | undefined;
}

export interface ChannelCloseRequest {
  /** The channel id of the channel to be closed. */
  channelId: Uint8Array;
}

export interface SuccessfulClose {
  /** The channel id of the channel which was closed. */
  channelId: Uint8Array;
}

export interface ChannelCloseResponse {
  rejected?: Rejected | undefined;
  close?: SuccessfulClose | undefined;
}

export interface ChannelForceCloseRequest {
  /** The channel id of the channel to be force closed. */
  channelId: Uint8Array;
}

export interface SuccessfulForceClose {
  /** The channel id of the channel which was force closed. */
  channelId: Uint8Array;
}

export interface ChannelForceCloseResponse {
  rejected?: Rejected | undefined;
  close?: SuccessfulClose | undefined;
}

export interface ChallengeChannelRequest {
  /** The channel id of the channel to be challenged. */
  channelId: Uint8Array;
  /** The state with which the channel should be challenged. */
  state: State | undefined;
}

export interface ChallengeChannelResponse {
  rejected?:
    | Rejected
    | undefined;
  /**
   * In case the challenge was successful return the updated channel state.
   * Can be used for confirmation in the frontend.
   */
  update?: SuccessfulUpdate | undefined;
}

/**
 * Called by the Perun channel service if it received a channel opening request
 * from another peer. The proposed channel state is passed to the wallet which
 * might use it to show it in to the user.
 */
export interface OpenChannelRequest {
  /** The state with which the channel should be opened. */
  state:
    | State
    | undefined;
  /** The channel id of the channel to be opened. */
  channelId: Uint8Array;
}

export interface CloseChannelRequest {
  /** The channel id of the channel to be closed. */
  channelId: Uint8Array;
  /** The state with which the channel should be closed. */
  state: State | undefined;
}

export interface ForceCloseChannelRequest {
  /** The channel id of the channel to be closed. */
  channelId: Uint8Array;
  /** The state with which the channel should be closed. */
  state: State | undefined;
}

export interface ChallengeEventRequest {
  /** The channel id of the channel which was challenged. */
  channelId: Uint8Array;
  /** The state with which the channel was challenged. */
  state: State | undefined;
}

export interface UpdateNotificationRequest {
  /** The state with which the channel should be updated. */
  state:
    | State
    | undefined;
  /** The channel id of the channel to be updated. */
  channelId: Uint8Array;
}

export interface UpdateNotificationResponse {
  /** Whether or not the channel update was accepted by the user. */
  accepted: boolean;
}

export interface SignMessageRequest {
  /** The message to be signed. */
  data: Uint8Array;
}

export interface SignMessageResponse {
  rejected?:
    | Rejected
    | undefined;
  /** The signature of the message. */
  signature?: Uint8Array | undefined;
}

export interface GetAssetsRequest {
  /** The requested assets. */
  assets: Balances | undefined;
}

export interface Asset {
  /** The asset id of the asset. */
  assetId: Uint8Array;
  /** A list of outpoints of the given asset_id. */
  outpoints: Uint8Array[];
}

export interface Assets {
  assets: Asset[];
}

export interface UnmatchableAssetsResponse {
  /** The index of the unmatchable assets from the original request. */
  assetIdx: number;
  /** A possible reason if more information is available. */
  reason: string;
}

export interface GetAssetsResponse {
  rejected?: UnmatchableAssetsResponse | undefined;
  assets?: Assets | undefined;
}

export interface SignTransactionRequest {
  /** The transaction to be signed. */
  transaction: Uint8Array;
}

export interface SignTransactionResponse {
  rejected?:
    | Rejected
    | undefined;
  /** The signature of the transaction. */
  signature?: Uint8Array | undefined;
}

function createBaseRejected(): Rejected {
  return { reason: "" };
}

export const Rejected = {
  encode(message: Rejected, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== "") {
      writer.uint32(10).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Rejected {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRejected();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Rejected {
    return { reason: isSet(object.reason) ? globalThis.String(object.reason) : "" };
  },

  toJSON(message: Rejected): unknown {
    const obj: any = {};
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create(base?: DeepPartial<Rejected>): Rejected {
    return Rejected.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Rejected>): Rejected {
    const message = createBaseRejected();
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseChannelOpenRequest(): ChannelOpenRequest {
  return { peer: new Uint8Array(0), assets: undefined };
}

export const ChannelOpenRequest = {
  encode(message: ChannelOpenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.peer.length !== 0) {
      writer.uint32(10).bytes(message.peer);
    }
    if (message.assets !== undefined) {
      Assets.encode(message.assets, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelOpenRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelOpenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.peer = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.assets = Assets.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelOpenRequest {
    return {
      peer: isSet(object.peer) ? bytesFromBase64(object.peer) : new Uint8Array(0),
      assets: isSet(object.assets) ? Assets.fromJSON(object.assets) : undefined,
    };
  },

  toJSON(message: ChannelOpenRequest): unknown {
    const obj: any = {};
    if (message.peer.length !== 0) {
      obj.peer = base64FromBytes(message.peer);
    }
    if (message.assets !== undefined) {
      obj.assets = Assets.toJSON(message.assets);
    }
    return obj;
  },

  create(base?: DeepPartial<ChannelOpenRequest>): ChannelOpenRequest {
    return ChannelOpenRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChannelOpenRequest>): ChannelOpenRequest {
    const message = createBaseChannelOpenRequest();
    message.peer = object.peer ?? new Uint8Array(0);
    message.assets = (object.assets !== undefined && object.assets !== null)
      ? Assets.fromPartial(object.assets)
      : undefined;
    return message;
  },
};

function createBaseChannelOpenResponse(): ChannelOpenResponse {
  return { rejected: undefined, channelId: undefined };
}

export const ChannelOpenResponse = {
  encode(message: ChannelOpenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejected !== undefined) {
      Rejected.encode(message.rejected, writer.uint32(10).fork()).ldelim();
    }
    if (message.channelId !== undefined) {
      writer.uint32(18).bytes(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelOpenResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelOpenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rejected = Rejected.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelOpenResponse {
    return {
      rejected: isSet(object.rejected) ? Rejected.fromJSON(object.rejected) : undefined,
      channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : undefined,
    };
  },

  toJSON(message: ChannelOpenResponse): unknown {
    const obj: any = {};
    if (message.rejected !== undefined) {
      obj.rejected = Rejected.toJSON(message.rejected);
    }
    if (message.channelId !== undefined) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    return obj;
  },

  create(base?: DeepPartial<ChannelOpenResponse>): ChannelOpenResponse {
    return ChannelOpenResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChannelOpenResponse>): ChannelOpenResponse {
    const message = createBaseChannelOpenResponse();
    message.rejected = (object.rejected !== undefined && object.rejected !== null)
      ? Rejected.fromPartial(object.rejected)
      : undefined;
    message.channelId = object.channelId ?? undefined;
    return message;
  },
};

function createBaseChannelUpdateRequest(): ChannelUpdateRequest {
  return { state: undefined, channelId: new Uint8Array(0) };
}

export const ChannelUpdateRequest = {
  encode(message: ChannelUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    if (message.channelId.length !== 0) {
      writer.uint32(18).bytes(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.state = State.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelUpdateRequest {
    return {
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined,
      channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0),
    };
  },

  toJSON(message: ChannelUpdateRequest): unknown {
    const obj: any = {};
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    return obj;
  },

  create(base?: DeepPartial<ChannelUpdateRequest>): ChannelUpdateRequest {
    return ChannelUpdateRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChannelUpdateRequest>): ChannelUpdateRequest {
    const message = createBaseChannelUpdateRequest();
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    message.channelId = object.channelId ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSuccessfulUpdate(): SuccessfulUpdate {
  return { state: undefined, channelId: new Uint8Array(0) };
}

export const SuccessfulUpdate = {
  encode(message: SuccessfulUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    if (message.channelId.length !== 0) {
      writer.uint32(18).bytes(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuccessfulUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuccessfulUpdate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.state = State.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SuccessfulUpdate {
    return {
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined,
      channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0),
    };
  },

  toJSON(message: SuccessfulUpdate): unknown {
    const obj: any = {};
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    return obj;
  },

  create(base?: DeepPartial<SuccessfulUpdate>): SuccessfulUpdate {
    return SuccessfulUpdate.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SuccessfulUpdate>): SuccessfulUpdate {
    const message = createBaseSuccessfulUpdate();
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    message.channelId = object.channelId ?? new Uint8Array(0);
    return message;
  },
};

function createBaseChannelUpdateResponse(): ChannelUpdateResponse {
  return { rejected: undefined, update: undefined };
}

export const ChannelUpdateResponse = {
  encode(message: ChannelUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejected !== undefined) {
      Rejected.encode(message.rejected, writer.uint32(10).fork()).ldelim();
    }
    if (message.update !== undefined) {
      SuccessfulUpdate.encode(message.update, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rejected = Rejected.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = SuccessfulUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelUpdateResponse {
    return {
      rejected: isSet(object.rejected) ? Rejected.fromJSON(object.rejected) : undefined,
      update: isSet(object.update) ? SuccessfulUpdate.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: ChannelUpdateResponse): unknown {
    const obj: any = {};
    if (message.rejected !== undefined) {
      obj.rejected = Rejected.toJSON(message.rejected);
    }
    if (message.update !== undefined) {
      obj.update = SuccessfulUpdate.toJSON(message.update);
    }
    return obj;
  },

  create(base?: DeepPartial<ChannelUpdateResponse>): ChannelUpdateResponse {
    return ChannelUpdateResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChannelUpdateResponse>): ChannelUpdateResponse {
    const message = createBaseChannelUpdateResponse();
    message.rejected = (object.rejected !== undefined && object.rejected !== null)
      ? Rejected.fromPartial(object.rejected)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? SuccessfulUpdate.fromPartial(object.update)
      : undefined;
    return message;
  },
};

function createBaseChannelCloseRequest(): ChannelCloseRequest {
  return { channelId: new Uint8Array(0) };
}

export const ChannelCloseRequest = {
  encode(message: ChannelCloseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId.length !== 0) {
      writer.uint32(10).bytes(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelCloseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelCloseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelCloseRequest {
    return { channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0) };
  },

  toJSON(message: ChannelCloseRequest): unknown {
    const obj: any = {};
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    return obj;
  },

  create(base?: DeepPartial<ChannelCloseRequest>): ChannelCloseRequest {
    return ChannelCloseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChannelCloseRequest>): ChannelCloseRequest {
    const message = createBaseChannelCloseRequest();
    message.channelId = object.channelId ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSuccessfulClose(): SuccessfulClose {
  return { channelId: new Uint8Array(0) };
}

export const SuccessfulClose = {
  encode(message: SuccessfulClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId.length !== 0) {
      writer.uint32(10).bytes(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuccessfulClose {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuccessfulClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SuccessfulClose {
    return { channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0) };
  },

  toJSON(message: SuccessfulClose): unknown {
    const obj: any = {};
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    return obj;
  },

  create(base?: DeepPartial<SuccessfulClose>): SuccessfulClose {
    return SuccessfulClose.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SuccessfulClose>): SuccessfulClose {
    const message = createBaseSuccessfulClose();
    message.channelId = object.channelId ?? new Uint8Array(0);
    return message;
  },
};

function createBaseChannelCloseResponse(): ChannelCloseResponse {
  return { rejected: undefined, close: undefined };
}

export const ChannelCloseResponse = {
  encode(message: ChannelCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejected !== undefined) {
      Rejected.encode(message.rejected, writer.uint32(10).fork()).ldelim();
    }
    if (message.close !== undefined) {
      SuccessfulClose.encode(message.close, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelCloseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelCloseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rejected = Rejected.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.close = SuccessfulClose.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelCloseResponse {
    return {
      rejected: isSet(object.rejected) ? Rejected.fromJSON(object.rejected) : undefined,
      close: isSet(object.close) ? SuccessfulClose.fromJSON(object.close) : undefined,
    };
  },

  toJSON(message: ChannelCloseResponse): unknown {
    const obj: any = {};
    if (message.rejected !== undefined) {
      obj.rejected = Rejected.toJSON(message.rejected);
    }
    if (message.close !== undefined) {
      obj.close = SuccessfulClose.toJSON(message.close);
    }
    return obj;
  },

  create(base?: DeepPartial<ChannelCloseResponse>): ChannelCloseResponse {
    return ChannelCloseResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChannelCloseResponse>): ChannelCloseResponse {
    const message = createBaseChannelCloseResponse();
    message.rejected = (object.rejected !== undefined && object.rejected !== null)
      ? Rejected.fromPartial(object.rejected)
      : undefined;
    message.close = (object.close !== undefined && object.close !== null)
      ? SuccessfulClose.fromPartial(object.close)
      : undefined;
    return message;
  },
};

function createBaseChannelForceCloseRequest(): ChannelForceCloseRequest {
  return { channelId: new Uint8Array(0) };
}

export const ChannelForceCloseRequest = {
  encode(message: ChannelForceCloseRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId.length !== 0) {
      writer.uint32(10).bytes(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelForceCloseRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelForceCloseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelForceCloseRequest {
    return { channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0) };
  },

  toJSON(message: ChannelForceCloseRequest): unknown {
    const obj: any = {};
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    return obj;
  },

  create(base?: DeepPartial<ChannelForceCloseRequest>): ChannelForceCloseRequest {
    return ChannelForceCloseRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChannelForceCloseRequest>): ChannelForceCloseRequest {
    const message = createBaseChannelForceCloseRequest();
    message.channelId = object.channelId ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSuccessfulForceClose(): SuccessfulForceClose {
  return { channelId: new Uint8Array(0) };
}

export const SuccessfulForceClose = {
  encode(message: SuccessfulForceClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId.length !== 0) {
      writer.uint32(10).bytes(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SuccessfulForceClose {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSuccessfulForceClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SuccessfulForceClose {
    return { channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0) };
  },

  toJSON(message: SuccessfulForceClose): unknown {
    const obj: any = {};
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    return obj;
  },

  create(base?: DeepPartial<SuccessfulForceClose>): SuccessfulForceClose {
    return SuccessfulForceClose.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SuccessfulForceClose>): SuccessfulForceClose {
    const message = createBaseSuccessfulForceClose();
    message.channelId = object.channelId ?? new Uint8Array(0);
    return message;
  },
};

function createBaseChannelForceCloseResponse(): ChannelForceCloseResponse {
  return { rejected: undefined, close: undefined };
}

export const ChannelForceCloseResponse = {
  encode(message: ChannelForceCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejected !== undefined) {
      Rejected.encode(message.rejected, writer.uint32(10).fork()).ldelim();
    }
    if (message.close !== undefined) {
      SuccessfulClose.encode(message.close, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelForceCloseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelForceCloseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rejected = Rejected.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.close = SuccessfulClose.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelForceCloseResponse {
    return {
      rejected: isSet(object.rejected) ? Rejected.fromJSON(object.rejected) : undefined,
      close: isSet(object.close) ? SuccessfulClose.fromJSON(object.close) : undefined,
    };
  },

  toJSON(message: ChannelForceCloseResponse): unknown {
    const obj: any = {};
    if (message.rejected !== undefined) {
      obj.rejected = Rejected.toJSON(message.rejected);
    }
    if (message.close !== undefined) {
      obj.close = SuccessfulClose.toJSON(message.close);
    }
    return obj;
  },

  create(base?: DeepPartial<ChannelForceCloseResponse>): ChannelForceCloseResponse {
    return ChannelForceCloseResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChannelForceCloseResponse>): ChannelForceCloseResponse {
    const message = createBaseChannelForceCloseResponse();
    message.rejected = (object.rejected !== undefined && object.rejected !== null)
      ? Rejected.fromPartial(object.rejected)
      : undefined;
    message.close = (object.close !== undefined && object.close !== null)
      ? SuccessfulClose.fromPartial(object.close)
      : undefined;
    return message;
  },
};

function createBaseChallengeChannelRequest(): ChallengeChannelRequest {
  return { channelId: new Uint8Array(0), state: undefined };
}

export const ChallengeChannelRequest = {
  encode(message: ChallengeChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId.length !== 0) {
      writer.uint32(10).bytes(message.channelId);
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeChannelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.state = State.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChallengeChannelRequest {
    return {
      channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0),
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined,
    };
  },

  toJSON(message: ChallengeChannelRequest): unknown {
    const obj: any = {};
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<ChallengeChannelRequest>): ChallengeChannelRequest {
    return ChallengeChannelRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChallengeChannelRequest>): ChallengeChannelRequest {
    const message = createBaseChallengeChannelRequest();
    message.channelId = object.channelId ?? new Uint8Array(0);
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    return message;
  },
};

function createBaseChallengeChannelResponse(): ChallengeChannelResponse {
  return { rejected: undefined, update: undefined };
}

export const ChallengeChannelResponse = {
  encode(message: ChallengeChannelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejected !== undefined) {
      Rejected.encode(message.rejected, writer.uint32(10).fork()).ldelim();
    }
    if (message.update !== undefined) {
      SuccessfulUpdate.encode(message.update, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeChannelResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeChannelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rejected = Rejected.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.update = SuccessfulUpdate.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChallengeChannelResponse {
    return {
      rejected: isSet(object.rejected) ? Rejected.fromJSON(object.rejected) : undefined,
      update: isSet(object.update) ? SuccessfulUpdate.fromJSON(object.update) : undefined,
    };
  },

  toJSON(message: ChallengeChannelResponse): unknown {
    const obj: any = {};
    if (message.rejected !== undefined) {
      obj.rejected = Rejected.toJSON(message.rejected);
    }
    if (message.update !== undefined) {
      obj.update = SuccessfulUpdate.toJSON(message.update);
    }
    return obj;
  },

  create(base?: DeepPartial<ChallengeChannelResponse>): ChallengeChannelResponse {
    return ChallengeChannelResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChallengeChannelResponse>): ChallengeChannelResponse {
    const message = createBaseChallengeChannelResponse();
    message.rejected = (object.rejected !== undefined && object.rejected !== null)
      ? Rejected.fromPartial(object.rejected)
      : undefined;
    message.update = (object.update !== undefined && object.update !== null)
      ? SuccessfulUpdate.fromPartial(object.update)
      : undefined;
    return message;
  },
};

function createBaseOpenChannelRequest(): OpenChannelRequest {
  return { state: undefined, channelId: new Uint8Array(0) };
}

export const OpenChannelRequest = {
  encode(message: OpenChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    if (message.channelId.length !== 0) {
      writer.uint32(18).bytes(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenChannelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.state = State.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenChannelRequest {
    return {
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined,
      channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0),
    };
  },

  toJSON(message: OpenChannelRequest): unknown {
    const obj: any = {};
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenChannelRequest>): OpenChannelRequest {
    return OpenChannelRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenChannelRequest>): OpenChannelRequest {
    const message = createBaseOpenChannelRequest();
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    message.channelId = object.channelId ?? new Uint8Array(0);
    return message;
  },
};

function createBaseCloseChannelRequest(): CloseChannelRequest {
  return { channelId: new Uint8Array(0), state: undefined };
}

export const CloseChannelRequest = {
  encode(message: CloseChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId.length !== 0) {
      writer.uint32(18).bytes(message.channelId);
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloseChannelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.state = State.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CloseChannelRequest {
    return {
      channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0),
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined,
    };
  },

  toJSON(message: CloseChannelRequest): unknown {
    const obj: any = {};
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<CloseChannelRequest>): CloseChannelRequest {
    return CloseChannelRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CloseChannelRequest>): CloseChannelRequest {
    const message = createBaseCloseChannelRequest();
    message.channelId = object.channelId ?? new Uint8Array(0);
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    return message;
  },
};

function createBaseForceCloseChannelRequest(): ForceCloseChannelRequest {
  return { channelId: new Uint8Array(0), state: undefined };
}

export const ForceCloseChannelRequest = {
  encode(message: ForceCloseChannelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId.length !== 0) {
      writer.uint32(18).bytes(message.channelId);
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ForceCloseChannelRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForceCloseChannelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.state = State.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ForceCloseChannelRequest {
    return {
      channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0),
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined,
    };
  },

  toJSON(message: ForceCloseChannelRequest): unknown {
    const obj: any = {};
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<ForceCloseChannelRequest>): ForceCloseChannelRequest {
    return ForceCloseChannelRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ForceCloseChannelRequest>): ForceCloseChannelRequest {
    const message = createBaseForceCloseChannelRequest();
    message.channelId = object.channelId ?? new Uint8Array(0);
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    return message;
  },
};

function createBaseChallengeEventRequest(): ChallengeEventRequest {
  return { channelId: new Uint8Array(0), state: undefined };
}

export const ChallengeEventRequest = {
  encode(message: ChallengeEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId.length !== 0) {
      writer.uint32(10).bytes(message.channelId);
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengeEventRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.state = State.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChallengeEventRequest {
    return {
      channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0),
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined,
    };
  },

  toJSON(message: ChallengeEventRequest): unknown {
    const obj: any = {};
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<ChallengeEventRequest>): ChallengeEventRequest {
    return ChallengeEventRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ChallengeEventRequest>): ChallengeEventRequest {
    const message = createBaseChallengeEventRequest();
    message.channelId = object.channelId ?? new Uint8Array(0);
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    return message;
  },
};

function createBaseUpdateNotificationRequest(): UpdateNotificationRequest {
  return { state: undefined, channelId: new Uint8Array(0) };
}

export const UpdateNotificationRequest = {
  encode(message: UpdateNotificationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    if (message.channelId.length !== 0) {
      writer.uint32(18).bytes(message.channelId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNotificationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNotificationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.state = State.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.channelId = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateNotificationRequest {
    return {
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined,
      channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0),
    };
  },

  toJSON(message: UpdateNotificationRequest): unknown {
    const obj: any = {};
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateNotificationRequest>): UpdateNotificationRequest {
    return UpdateNotificationRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateNotificationRequest>): UpdateNotificationRequest {
    const message = createBaseUpdateNotificationRequest();
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    message.channelId = object.channelId ?? new Uint8Array(0);
    return message;
  },
};

function createBaseUpdateNotificationResponse(): UpdateNotificationResponse {
  return { accepted: false };
}

export const UpdateNotificationResponse = {
  encode(message: UpdateNotificationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accepted === true) {
      writer.uint32(8).bool(message.accepted);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateNotificationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateNotificationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.accepted = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateNotificationResponse {
    return { accepted: isSet(object.accepted) ? globalThis.Boolean(object.accepted) : false };
  },

  toJSON(message: UpdateNotificationResponse): unknown {
    const obj: any = {};
    if (message.accepted === true) {
      obj.accepted = message.accepted;
    }
    return obj;
  },

  create(base?: DeepPartial<UpdateNotificationResponse>): UpdateNotificationResponse {
    return UpdateNotificationResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdateNotificationResponse>): UpdateNotificationResponse {
    const message = createBaseUpdateNotificationResponse();
    message.accepted = object.accepted ?? false;
    return message;
  },
};

function createBaseSignMessageRequest(): SignMessageRequest {
  return { data: new Uint8Array(0) };
}

export const SignMessageRequest = {
  encode(message: SignMessageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignMessageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignMessageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignMessageRequest {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },

  toJSON(message: SignMessageRequest): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create(base?: DeepPartial<SignMessageRequest>): SignMessageRequest {
    return SignMessageRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignMessageRequest>): SignMessageRequest {
    const message = createBaseSignMessageRequest();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSignMessageResponse(): SignMessageResponse {
  return { rejected: undefined, signature: undefined };
}

export const SignMessageResponse = {
  encode(message: SignMessageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejected !== undefined) {
      Rejected.encode(message.rejected, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== undefined) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignMessageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignMessageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rejected = Rejected.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignMessageResponse {
    return {
      rejected: isSet(object.rejected) ? Rejected.fromJSON(object.rejected) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
    };
  },

  toJSON(message: SignMessageResponse): unknown {
    const obj: any = {};
    if (message.rejected !== undefined) {
      obj.rejected = Rejected.toJSON(message.rejected);
    }
    if (message.signature !== undefined) {
      obj.signature = base64FromBytes(message.signature);
    }
    return obj;
  },

  create(base?: DeepPartial<SignMessageResponse>): SignMessageResponse {
    return SignMessageResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignMessageResponse>): SignMessageResponse {
    const message = createBaseSignMessageResponse();
    message.rejected = (object.rejected !== undefined && object.rejected !== null)
      ? Rejected.fromPartial(object.rejected)
      : undefined;
    message.signature = object.signature ?? undefined;
    return message;
  },
};

function createBaseGetAssetsRequest(): GetAssetsRequest {
  return { assets: undefined };
}

export const GetAssetsRequest = {
  encode(message: GetAssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assets !== undefined) {
      Balances.encode(message.assets, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assets = Balances.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAssetsRequest {
    return { assets: isSet(object.assets) ? Balances.fromJSON(object.assets) : undefined };
  },

  toJSON(message: GetAssetsRequest): unknown {
    const obj: any = {};
    if (message.assets !== undefined) {
      obj.assets = Balances.toJSON(message.assets);
    }
    return obj;
  },

  create(base?: DeepPartial<GetAssetsRequest>): GetAssetsRequest {
    return GetAssetsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAssetsRequest>): GetAssetsRequest {
    const message = createBaseGetAssetsRequest();
    message.assets = (object.assets !== undefined && object.assets !== null)
      ? Balances.fromPartial(object.assets)
      : undefined;
    return message;
  },
};

function createBaseAsset(): Asset {
  return { assetId: new Uint8Array(0), outpoints: [] };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetId.length !== 0) {
      writer.uint32(10).bytes(message.assetId);
    }
    for (const v of message.outpoints) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assetId = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.outpoints.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      assetId: isSet(object.assetId) ? bytesFromBase64(object.assetId) : new Uint8Array(0),
      outpoints: globalThis.Array.isArray(object?.outpoints)
        ? object.outpoints.map((e: any) => bytesFromBase64(e))
        : [],
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    if (message.assetId.length !== 0) {
      obj.assetId = base64FromBytes(message.assetId);
    }
    if (message.outpoints?.length) {
      obj.outpoints = message.outpoints.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Asset>): Asset {
    return Asset.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Asset>): Asset {
    const message = createBaseAsset();
    message.assetId = object.assetId ?? new Uint8Array(0);
    message.outpoints = object.outpoints?.map((e) => e) || [];
    return message;
  },
};

function createBaseAssets(): Assets {
  return { assets: [] };
}

export const Assets = {
  encode(message: Assets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Assets {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssets();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assets.push(Asset.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Assets {
    return { assets: globalThis.Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [] };
  },

  toJSON(message: Assets): unknown {
    const obj: any = {};
    if (message.assets?.length) {
      obj.assets = message.assets.map((e) => Asset.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Assets>): Assets {
    return Assets.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Assets>): Assets {
    const message = createBaseAssets();
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUnmatchableAssetsResponse(): UnmatchableAssetsResponse {
  return { assetIdx: 0, reason: "" };
}

export const UnmatchableAssetsResponse = {
  encode(message: UnmatchableAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetIdx !== 0) {
      writer.uint32(8).uint32(message.assetIdx);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnmatchableAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnmatchableAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.assetIdx = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.reason = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnmatchableAssetsResponse {
    return {
      assetIdx: isSet(object.assetIdx) ? globalThis.Number(object.assetIdx) : 0,
      reason: isSet(object.reason) ? globalThis.String(object.reason) : "",
    };
  },

  toJSON(message: UnmatchableAssetsResponse): unknown {
    const obj: any = {};
    if (message.assetIdx !== 0) {
      obj.assetIdx = Math.round(message.assetIdx);
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create(base?: DeepPartial<UnmatchableAssetsResponse>): UnmatchableAssetsResponse {
    return UnmatchableAssetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UnmatchableAssetsResponse>): UnmatchableAssetsResponse {
    const message = createBaseUnmatchableAssetsResponse();
    message.assetIdx = object.assetIdx ?? 0;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseGetAssetsResponse(): GetAssetsResponse {
  return { rejected: undefined, assets: undefined };
}

export const GetAssetsResponse = {
  encode(message: GetAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejected !== undefined) {
      UnmatchableAssetsResponse.encode(message.rejected, writer.uint32(18).fork()).ldelim();
    }
    if (message.assets !== undefined) {
      Assets.encode(message.assets, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rejected = UnmatchableAssetsResponse.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assets = Assets.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAssetsResponse {
    return {
      rejected: isSet(object.rejected) ? UnmatchableAssetsResponse.fromJSON(object.rejected) : undefined,
      assets: isSet(object.assets) ? Assets.fromJSON(object.assets) : undefined,
    };
  },

  toJSON(message: GetAssetsResponse): unknown {
    const obj: any = {};
    if (message.rejected !== undefined) {
      obj.rejected = UnmatchableAssetsResponse.toJSON(message.rejected);
    }
    if (message.assets !== undefined) {
      obj.assets = Assets.toJSON(message.assets);
    }
    return obj;
  },

  create(base?: DeepPartial<GetAssetsResponse>): GetAssetsResponse {
    return GetAssetsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetAssetsResponse>): GetAssetsResponse {
    const message = createBaseGetAssetsResponse();
    message.rejected = (object.rejected !== undefined && object.rejected !== null)
      ? UnmatchableAssetsResponse.fromPartial(object.rejected)
      : undefined;
    message.assets = (object.assets !== undefined && object.assets !== null)
      ? Assets.fromPartial(object.assets)
      : undefined;
    return message;
  },
};

function createBaseSignTransactionRequest(): SignTransactionRequest {
  return { transaction: new Uint8Array(0) };
}

export const SignTransactionRequest = {
  encode(message: SignTransactionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transaction.length !== 0) {
      writer.uint32(10).bytes(message.transaction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignTransactionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignTransactionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.transaction = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignTransactionRequest {
    return { transaction: isSet(object.transaction) ? bytesFromBase64(object.transaction) : new Uint8Array(0) };
  },

  toJSON(message: SignTransactionRequest): unknown {
    const obj: any = {};
    if (message.transaction.length !== 0) {
      obj.transaction = base64FromBytes(message.transaction);
    }
    return obj;
  },

  create(base?: DeepPartial<SignTransactionRequest>): SignTransactionRequest {
    return SignTransactionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignTransactionRequest>): SignTransactionRequest {
    const message = createBaseSignTransactionRequest();
    message.transaction = object.transaction ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSignTransactionResponse(): SignTransactionResponse {
  return { rejected: undefined, signature: undefined };
}

export const SignTransactionResponse = {
  encode(message: SignTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rejected !== undefined) {
      Rejected.encode(message.rejected, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== undefined) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.rejected = Rejected.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignTransactionResponse {
    return {
      rejected: isSet(object.rejected) ? Rejected.fromJSON(object.rejected) : undefined,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
    };
  },

  toJSON(message: SignTransactionResponse): unknown {
    const obj: any = {};
    if (message.rejected !== undefined) {
      obj.rejected = Rejected.toJSON(message.rejected);
    }
    if (message.signature !== undefined) {
      obj.signature = base64FromBytes(message.signature);
    }
    return obj;
  },

  create(base?: DeepPartial<SignTransactionResponse>): SignTransactionResponse {
    return SignTransactionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SignTransactionResponse>): SignTransactionResponse {
    const message = createBaseSignTransactionResponse();
    message.rejected = (object.rejected !== undefined && object.rejected !== null)
      ? Rejected.fromPartial(object.rejected)
      : undefined;
    message.signature = object.signature ?? undefined;
    return message;
  },
};

/**
 * ChannelService running as a background worker providing core functionality
 * to interact with Perun channels.
 */
export type ChannelServiceDefinition = typeof ChannelServiceDefinition;
export const ChannelServiceDefinition = {
  name: "ChannelService",
  fullName: "perunservice.ChannelService",
  methods: {
    /** Initiate channel opening. */
    openChannel: {
      name: "OpenChannel",
      requestType: ChannelOpenRequest,
      requestStream: false,
      responseType: ChannelOpenResponse,
      responseStream: false,
      options: {},
    },
    /** Initiate some channel update. */
    updateChannel: {
      name: "UpdateChannel",
      requestType: ChannelUpdateRequest,
      requestStream: false,
      responseType: ChannelUpdateResponse,
      responseStream: false,
      options: {},
    },
    /** Initiate channel closing. */
    closeChannel: {
      name: "CloseChannel",
      requestType: ChannelCloseRequest,
      requestStream: false,
      responseType: ChannelCloseResponse,
      responseStream: false,
      options: {},
    },
    /** Initiate force closing a channel. */
    forceCloseChannel: {
      name: "ForceCloseChannel",
      requestType: ChannelForceCloseRequest,
      requestStream: false,
      responseType: ChannelForceCloseResponse,
      responseStream: false,
      options: {},
    },
    /** Initiate challenging some channel. */
    challengeChannel: {
      name: "ChallengeChannel",
      requestType: ChallengeChannelRequest,
      requestStream: false,
      responseType: ChallengeChannelResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ChannelServiceImplementation<CallContextExt = {}> {
  /** Initiate channel opening. */
  openChannel(
    request: ChannelOpenRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ChannelOpenResponse>>;
  /** Initiate some channel update. */
  updateChannel(
    request: ChannelUpdateRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ChannelUpdateResponse>>;
  /** Initiate channel closing. */
  closeChannel(
    request: ChannelCloseRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ChannelCloseResponse>>;
  /** Initiate force closing a channel. */
  forceCloseChannel(
    request: ChannelForceCloseRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ChannelForceCloseResponse>>;
  /** Initiate challenging some channel. */
  challengeChannel(
    request: ChallengeChannelRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ChallengeChannelResponse>>;
}

export interface ChannelServiceClient<CallOptionsExt = {}> {
  /** Initiate channel opening. */
  openChannel(
    request: DeepPartial<ChannelOpenRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ChannelOpenResponse>;
  /** Initiate some channel update. */
  updateChannel(
    request: DeepPartial<ChannelUpdateRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ChannelUpdateResponse>;
  /** Initiate channel closing. */
  closeChannel(
    request: DeepPartial<ChannelCloseRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ChannelCloseResponse>;
  /** Initiate force closing a channel. */
  forceCloseChannel(
    request: DeepPartial<ChannelForceCloseRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ChannelForceCloseResponse>;
  /** Initiate challenging some channel. */
  challengeChannel(
    request: DeepPartial<ChallengeChannelRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ChallengeChannelResponse>;
}

/**
 * WalletService is the wallet which integrates PerunChannels. It has to
 * provide an interface which can be called by the `ChannelService` if channel
 * updates happen and require user interaction.
 */
export type WalletServiceDefinition = typeof WalletServiceDefinition;
export const WalletServiceDefinition = {
  name: "WalletService",
  fullName: "perunservice.WalletService",
  methods: {
    /**
     * Requesting a channel opening from the wallet. This happens if the Perun
     * channel service received a channel opening request from another peer.
     * This method lets the wallet know that it should ask the user whether or
     * not to accept the channel opening request.
     */
    openChannel: {
      name: "OpenChannel",
      requestType: OpenChannelRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    /**
     * Requesting channel closing form the wallet. This happesn if the Perun
     * channel service received a channel closing request from another peer.
     * This method lets the wallet know that it should ask the user whether or
     * not to accept the channel closing request.
     */
    closeChannel: {
      name: "CloseChannel",
      requestType: CloseChannelRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    /**
     * Requesting force closing a channel from the wallet. This happens if some
     * Perun channel can be force closed by this user and might be called by the
     * Perun channel service if it deems it to be an appropriate action.
     */
    forceCloseChannel: {
      name: "ForceCloseChannel",
      requestType: ForceCloseChannelRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    /**
     * Notifying the wallet about a challenge event regarding some channel. This
     * is called by the Perun channel service if it receives challenge events
     * from the ledger. The wallet might use this event to query the user whether
     * or not to act on the challenge event.
     */
    challengeEvent: {
      name: "ChallengeEvent",
      requestType: ChallengeEventRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {},
    },
    /**
     * The Perun channel service calls this method if it received a channel
     * update request from another peer. The wallet might use this channel update
     * request containing the proposed/new channel state to shown it in the
     * front-end. The wallet might use this update event to query the user
     * whether or not to accept the channel update.
     */
    updateNotification: {
      name: "UpdateNotification",
      requestType: UpdateNotificationRequest,
      requestStream: false,
      responseType: UpdateNotificationResponse,
      responseStream: false,
      options: {},
    },
    /** Request a signature on the given message by some wallet. */
    signMessage: {
      name: "SignMessage",
      requestType: SignMessageRequest,
      requestStream: false,
      responseType: SignMessageResponse,
      responseStream: false,
      options: {},
    },
    /** Request a signature on the given transaction by some wallet. */
    signTransaction: {
      name: "SignTransaction",
      requestType: SignTransactionRequest,
      requestStream: false,
      responseType: SignTransactionResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Request a list outpoints from a wallet at least matching the requested
     * amount of possibly different assets. This can be called by the Perun
     * channel backend if it builds transactions.
     */
    getAssets: {
      name: "GetAssets",
      requestType: GetAssetsRequest,
      requestStream: false,
      responseType: GetAssetsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface WalletServiceImplementation<CallContextExt = {}> {
  /**
   * Requesting a channel opening from the wallet. This happens if the Perun
   * channel service received a channel opening request from another peer.
   * This method lets the wallet know that it should ask the user whether or
   * not to accept the channel opening request.
   */
  openChannel(request: OpenChannelRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  /**
   * Requesting channel closing form the wallet. This happesn if the Perun
   * channel service received a channel closing request from another peer.
   * This method lets the wallet know that it should ask the user whether or
   * not to accept the channel closing request.
   */
  closeChannel(request: CloseChannelRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  /**
   * Requesting force closing a channel from the wallet. This happens if some
   * Perun channel can be force closed by this user and might be called by the
   * Perun channel service if it deems it to be an appropriate action.
   */
  forceCloseChannel(
    request: ForceCloseChannelRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  /**
   * Notifying the wallet about a challenge event regarding some channel. This
   * is called by the Perun channel service if it receives challenge events
   * from the ledger. The wallet might use this event to query the user whether
   * or not to act on the challenge event.
   */
  challengeEvent(request: ChallengeEventRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  /**
   * The Perun channel service calls this method if it received a channel
   * update request from another peer. The wallet might use this channel update
   * request containing the proposed/new channel state to shown it in the
   * front-end. The wallet might use this update event to query the user
   * whether or not to accept the channel update.
   */
  updateNotification(
    request: UpdateNotificationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UpdateNotificationResponse>>;
  /** Request a signature on the given message by some wallet. */
  signMessage(
    request: SignMessageRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SignMessageResponse>>;
  /** Request a signature on the given transaction by some wallet. */
  signTransaction(
    request: SignTransactionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SignTransactionResponse>>;
  /**
   * Request a list outpoints from a wallet at least matching the requested
   * amount of possibly different assets. This can be called by the Perun
   * channel backend if it builds transactions.
   */
  getAssets(request: GetAssetsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAssetsResponse>>;
}

export interface WalletServiceClient<CallOptionsExt = {}> {
  /**
   * Requesting a channel opening from the wallet. This happens if the Perun
   * channel service received a channel opening request from another peer.
   * This method lets the wallet know that it should ask the user whether or
   * not to accept the channel opening request.
   */
  openChannel(request: DeepPartial<OpenChannelRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  /**
   * Requesting channel closing form the wallet. This happesn if the Perun
   * channel service received a channel closing request from another peer.
   * This method lets the wallet know that it should ask the user whether or
   * not to accept the channel closing request.
   */
  closeChannel(request: DeepPartial<CloseChannelRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  /**
   * Requesting force closing a channel from the wallet. This happens if some
   * Perun channel can be force closed by this user and might be called by the
   * Perun channel service if it deems it to be an appropriate action.
   */
  forceCloseChannel(
    request: DeepPartial<ForceCloseChannelRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  /**
   * Notifying the wallet about a challenge event regarding some channel. This
   * is called by the Perun channel service if it receives challenge events
   * from the ledger. The wallet might use this event to query the user whether
   * or not to act on the challenge event.
   */
  challengeEvent(request: DeepPartial<ChallengeEventRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  /**
   * The Perun channel service calls this method if it received a channel
   * update request from another peer. The wallet might use this channel update
   * request containing the proposed/new channel state to shown it in the
   * front-end. The wallet might use this update event to query the user
   * whether or not to accept the channel update.
   */
  updateNotification(
    request: DeepPartial<UpdateNotificationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UpdateNotificationResponse>;
  /** Request a signature on the given message by some wallet. */
  signMessage(
    request: DeepPartial<SignMessageRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SignMessageResponse>;
  /** Request a signature on the given transaction by some wallet. */
  signTransaction(
    request: DeepPartial<SignTransactionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SignTransactionResponse>;
  /**
   * Request a list outpoints from a wallet at least matching the requested
   * amount of possibly different assets. This can be called by the Perun
   * channel backend if it builds transactions.
   */
  getAssets(request: DeepPartial<GetAssetsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAssetsResponse>;
}

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
