/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import Long = require("long");

export const protobufPackage = "perunwire";

/**
 * Envelope encapsulates a message with the routing information. That is the
 * the sender and the intended receiver.
 */
export interface Envelope {
  /** sender of the message. */
  sender: Uint8Array;
  /** intended recipient of the message. */
  recipient: Uint8Array;
  pingMsg?: PingMsg | undefined;
  pongMsg?: PongMsg | undefined;
  shutdownMsg?: ShutdownMsg | undefined;
  authResponseMsg?: AuthResponseMsg | undefined;
  ledgerChannelProposalMsg?: LedgerChannelProposalMsg | undefined;
  ledgerChannelProposalAccMsg?: LedgerChannelProposalAccMsg | undefined;
  subChannelProposalMsg?: SubChannelProposalMsg | undefined;
  subChannelProposalAccMsg?: SubChannelProposalAccMsg | undefined;
  virtualChannelProposalMsg?: VirtualChannelProposalMsg | undefined;
  virtualChannelProposalAccMsg?: VirtualChannelProposalAccMsg | undefined;
  channelProposalRejMsg?: ChannelProposalRejMsg | undefined;
  channelUpdateMsg?: ChannelUpdateMsg | undefined;
  virtualChannelFundingProposalMsg?: VirtualChannelFundingProposalMsg | undefined;
  virtualChannelSettlementProposalMsg?: VirtualChannelSettlementProposalMsg | undefined;
  channelUpdateAccMsg?: ChannelUpdateAccMsg | undefined;
  channelUpdateRejMsg?: ChannelUpdateRejMsg | undefined;
  channelSyncMsg?: ChannelSyncMsg | undefined;
}

/**
 * Balance represents the balance of a single asset, for all the channel
 * participants.
 */
export interface Balance {
  balance: Uint8Array[];
}

/**
 * Balances represents the balance of all the assets, for all the channel
 * participants.
 */
export interface Balances {
  balances: Balance[];
}

/**
 * IndexMap represents the mapping of a participant indices in a sub allocation
 * or a virtual channel funding proposal to the corresponding indices in the
 * parent channel.
 */
export interface IndexMap {
  indexMap: number[];
}

/** SubAlloc represts a sub allocation. */
export interface SubAlloc {
  id: Uint8Array;
  bals: Balance | undefined;
  indexMap: IndexMap | undefined;
}

/** Allocation represents channel.Allocation. */
export interface Allocation {
  assets: Uint8Array[];
  balances: Balances | undefined;
  locked: SubAlloc[];
}

/** BaseChannelProposal represents client.BaseChannelProposal. */
export interface BaseChannelProposal {
  proposalId: Uint8Array;
  challengeDuration: number;
  nonceShare: Uint8Array;
  app: Uint8Array;
  initData: Uint8Array;
  initBals: Allocation | undefined;
  fundingAgreement: Balances | undefined;
}

/** BaseChannelProposalAcc represents client.BaseChannelProposalAcc. */
export interface BaseChannelProposalAcc {
  proposalId: Uint8Array;
  nonceShare: Uint8Array;
}

/** Params represents channel.Params. */
export interface Params {
  id: Uint8Array;
  challengeDuration: number;
  parts: Uint8Array[];
  app: Uint8Array;
  nonce: Uint8Array;
  ledgerChannel: boolean;
  virtualChannel: boolean;
}

/** State represents channel.State. */
export interface State {
  id: Uint8Array;
  version: number;
  app: Uint8Array;
  allocation: Allocation | undefined;
  data: Uint8Array;
  isFinal: boolean;
}

/** Transaction represents channel.Transaction. */
export interface Transaction {
  state: State | undefined;
  sigs: Uint8Array[];
}

/** SignedState represents channel.SignedState. */
export interface SignedState {
  params: Params | undefined;
  state: State | undefined;
  sigs: Uint8Array[];
}

/** ChannelUpdate represents channel.ChannelUpdate. */
export interface ChannelUpdate {
  state: State | undefined;
  actorIdx: number;
}

/** PingMsg represents wire.PingMsg. */
export interface PingMsg {
  created: number;
}

/** PongMsg represents wire.PongMsg. */
export interface PongMsg {
  created: number;
}

/** ShutdownMsg represents wire.ShutdownMsg. */
export interface ShutdownMsg {
  reason: string;
}

/** AuthResponseMsg represents wire.AuthResponseMsg. */
export interface AuthResponseMsg {
}

/** LedgerChannelProposalMsg represents client.LedgerChannelProposalMsg. */
export interface LedgerChannelProposalMsg {
  baseChannelProposal: BaseChannelProposal | undefined;
  participant: Uint8Array;
  peers: Uint8Array[];
}

/** LedgerChannelProposalAccMsg represents client.LedgerChannelProposalAccMsg. */
export interface LedgerChannelProposalAccMsg {
  baseChannelProposalAcc: BaseChannelProposalAcc | undefined;
  participant: Uint8Array;
}

/** SubChannelProposalMsg represents client.SubChannelProposalMsg. */
export interface SubChannelProposalMsg {
  baseChannelProposal: BaseChannelProposal | undefined;
  parent: Uint8Array;
}

/** SubChannelProposalAccMsg represents client.SubChannelProposalAccMsg. */
export interface SubChannelProposalAccMsg {
  baseChannelProposalAcc: BaseChannelProposalAcc | undefined;
}

/** VirtualChannelProposalMsg represents client.VirtualChannelProposalMsg. */
export interface VirtualChannelProposalMsg {
  baseChannelProposal: BaseChannelProposal | undefined;
  proposer: Uint8Array;
  peers: Uint8Array[];
  parents: Uint8Array[];
  indexMaps: IndexMap[];
}

/** VirtualChannelProposalAccMsg represents client.VirtualChannelProposalAccMsg. */
export interface VirtualChannelProposalAccMsg {
  baseChannelProposalAcc: BaseChannelProposalAcc | undefined;
  responder: Uint8Array;
}

/** ChannelProposalRejMsg represents client.ChannelProposalRejMsg. */
export interface ChannelProposalRejMsg {
  proposalId: Uint8Array;
  reason: string;
}

/** ChannelUpdateMsg represents client.ChannelUpdateMsg. */
export interface ChannelUpdateMsg {
  channelUpdate: ChannelUpdate | undefined;
  sig: Uint8Array;
}

/**
 * VirtualChannelFundingProposalMsg represents
 * client.VirtualChannelFundingProposalMsg.
 */
export interface VirtualChannelFundingProposalMsg {
  channelUpdateMsg: ChannelUpdateMsg | undefined;
  initial: SignedState | undefined;
  indexMap: IndexMap | undefined;
}

/**
 * VirtualChannelSettlementProposalMsg represents
 * client.VirtualChannelSettlementProposalMsg.
 */
export interface VirtualChannelSettlementProposalMsg {
  channelUpdateMsg: ChannelUpdateMsg | undefined;
  final: SignedState | undefined;
}

/** ChannelUpdateAccMsg represents client.ChannelUpdateAccMsg. */
export interface ChannelUpdateAccMsg {
  channelId: Uint8Array;
  version: number;
  sig: Uint8Array;
}

/** ChannelUpdateRejMsg represents client.ChannelUpdateRejMsg. */
export interface ChannelUpdateRejMsg {
  channelId: Uint8Array;
  version: number;
  reason: string;
}

/** ChannelSyncMsg represents client.ChannelSyncMsg. */
export interface ChannelSyncMsg {
  phase: number;
  currentTx: Transaction | undefined;
}

function createBaseEnvelope(): Envelope {
  return {
    sender: new Uint8Array(0),
    recipient: new Uint8Array(0),
    pingMsg: undefined,
    pongMsg: undefined,
    shutdownMsg: undefined,
    authResponseMsg: undefined,
    ledgerChannelProposalMsg: undefined,
    ledgerChannelProposalAccMsg: undefined,
    subChannelProposalMsg: undefined,
    subChannelProposalAccMsg: undefined,
    virtualChannelProposalMsg: undefined,
    virtualChannelProposalAccMsg: undefined,
    channelProposalRejMsg: undefined,
    channelUpdateMsg: undefined,
    virtualChannelFundingProposalMsg: undefined,
    virtualChannelSettlementProposalMsg: undefined,
    channelUpdateAccMsg: undefined,
    channelUpdateRejMsg: undefined,
    channelSyncMsg: undefined,
  };
}

export const Envelope = {
  encode(message: Envelope, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.recipient.length !== 0) {
      writer.uint32(18).bytes(message.recipient);
    }
    if (message.pingMsg !== undefined) {
      PingMsg.encode(message.pingMsg, writer.uint32(26).fork()).ldelim();
    }
    if (message.pongMsg !== undefined) {
      PongMsg.encode(message.pongMsg, writer.uint32(34).fork()).ldelim();
    }
    if (message.shutdownMsg !== undefined) {
      ShutdownMsg.encode(message.shutdownMsg, writer.uint32(42).fork()).ldelim();
    }
    if (message.authResponseMsg !== undefined) {
      AuthResponseMsg.encode(message.authResponseMsg, writer.uint32(50).fork()).ldelim();
    }
    if (message.ledgerChannelProposalMsg !== undefined) {
      LedgerChannelProposalMsg.encode(message.ledgerChannelProposalMsg, writer.uint32(58).fork()).ldelim();
    }
    if (message.ledgerChannelProposalAccMsg !== undefined) {
      LedgerChannelProposalAccMsg.encode(message.ledgerChannelProposalAccMsg, writer.uint32(66).fork()).ldelim();
    }
    if (message.subChannelProposalMsg !== undefined) {
      SubChannelProposalMsg.encode(message.subChannelProposalMsg, writer.uint32(74).fork()).ldelim();
    }
    if (message.subChannelProposalAccMsg !== undefined) {
      SubChannelProposalAccMsg.encode(message.subChannelProposalAccMsg, writer.uint32(82).fork()).ldelim();
    }
    if (message.virtualChannelProposalMsg !== undefined) {
      VirtualChannelProposalMsg.encode(message.virtualChannelProposalMsg, writer.uint32(90).fork()).ldelim();
    }
    if (message.virtualChannelProposalAccMsg !== undefined) {
      VirtualChannelProposalAccMsg.encode(message.virtualChannelProposalAccMsg, writer.uint32(98).fork()).ldelim();
    }
    if (message.channelProposalRejMsg !== undefined) {
      ChannelProposalRejMsg.encode(message.channelProposalRejMsg, writer.uint32(106).fork()).ldelim();
    }
    if (message.channelUpdateMsg !== undefined) {
      ChannelUpdateMsg.encode(message.channelUpdateMsg, writer.uint32(114).fork()).ldelim();
    }
    if (message.virtualChannelFundingProposalMsg !== undefined) {
      VirtualChannelFundingProposalMsg.encode(message.virtualChannelFundingProposalMsg, writer.uint32(122).fork())
        .ldelim();
    }
    if (message.virtualChannelSettlementProposalMsg !== undefined) {
      VirtualChannelSettlementProposalMsg.encode(message.virtualChannelSettlementProposalMsg, writer.uint32(130).fork())
        .ldelim();
    }
    if (message.channelUpdateAccMsg !== undefined) {
      ChannelUpdateAccMsg.encode(message.channelUpdateAccMsg, writer.uint32(138).fork()).ldelim();
    }
    if (message.channelUpdateRejMsg !== undefined) {
      ChannelUpdateRejMsg.encode(message.channelUpdateRejMsg, writer.uint32(146).fork()).ldelim();
    }
    if (message.channelSyncMsg !== undefined) {
      ChannelSyncMsg.encode(message.channelSyncMsg, writer.uint32(154).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Envelope {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvelope();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sender = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.recipient = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.pingMsg = PingMsg.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pongMsg = PongMsg.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.shutdownMsg = ShutdownMsg.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.authResponseMsg = AuthResponseMsg.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ledgerChannelProposalMsg = LedgerChannelProposalMsg.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.ledgerChannelProposalAccMsg = LedgerChannelProposalAccMsg.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.subChannelProposalMsg = SubChannelProposalMsg.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.subChannelProposalAccMsg = SubChannelProposalAccMsg.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.virtualChannelProposalMsg = VirtualChannelProposalMsg.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.virtualChannelProposalAccMsg = VirtualChannelProposalAccMsg.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.channelProposalRejMsg = ChannelProposalRejMsg.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.channelUpdateMsg = ChannelUpdateMsg.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.virtualChannelFundingProposalMsg = VirtualChannelFundingProposalMsg.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.virtualChannelSettlementProposalMsg = VirtualChannelSettlementProposalMsg.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.channelUpdateAccMsg = ChannelUpdateAccMsg.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.channelUpdateRejMsg = ChannelUpdateRejMsg.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.channelSyncMsg = ChannelSyncMsg.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Envelope {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(0),
      recipient: isSet(object.recipient) ? bytesFromBase64(object.recipient) : new Uint8Array(0),
      pingMsg: isSet(object.pingMsg) ? PingMsg.fromJSON(object.pingMsg) : undefined,
      pongMsg: isSet(object.pongMsg) ? PongMsg.fromJSON(object.pongMsg) : undefined,
      shutdownMsg: isSet(object.shutdownMsg) ? ShutdownMsg.fromJSON(object.shutdownMsg) : undefined,
      authResponseMsg: isSet(object.authResponseMsg) ? AuthResponseMsg.fromJSON(object.authResponseMsg) : undefined,
      ledgerChannelProposalMsg: isSet(object.ledgerChannelProposalMsg)
        ? LedgerChannelProposalMsg.fromJSON(object.ledgerChannelProposalMsg)
        : undefined,
      ledgerChannelProposalAccMsg: isSet(object.ledgerChannelProposalAccMsg)
        ? LedgerChannelProposalAccMsg.fromJSON(object.ledgerChannelProposalAccMsg)
        : undefined,
      subChannelProposalMsg: isSet(object.subChannelProposalMsg)
        ? SubChannelProposalMsg.fromJSON(object.subChannelProposalMsg)
        : undefined,
      subChannelProposalAccMsg: isSet(object.subChannelProposalAccMsg)
        ? SubChannelProposalAccMsg.fromJSON(object.subChannelProposalAccMsg)
        : undefined,
      virtualChannelProposalMsg: isSet(object.virtualChannelProposalMsg)
        ? VirtualChannelProposalMsg.fromJSON(object.virtualChannelProposalMsg)
        : undefined,
      virtualChannelProposalAccMsg: isSet(object.virtualChannelProposalAccMsg)
        ? VirtualChannelProposalAccMsg.fromJSON(object.virtualChannelProposalAccMsg)
        : undefined,
      channelProposalRejMsg: isSet(object.channelProposalRejMsg)
        ? ChannelProposalRejMsg.fromJSON(object.channelProposalRejMsg)
        : undefined,
      channelUpdateMsg: isSet(object.channelUpdateMsg) ? ChannelUpdateMsg.fromJSON(object.channelUpdateMsg) : undefined,
      virtualChannelFundingProposalMsg: isSet(object.virtualChannelFundingProposalMsg)
        ? VirtualChannelFundingProposalMsg.fromJSON(object.virtualChannelFundingProposalMsg)
        : undefined,
      virtualChannelSettlementProposalMsg: isSet(object.virtualChannelSettlementProposalMsg)
        ? VirtualChannelSettlementProposalMsg.fromJSON(object.virtualChannelSettlementProposalMsg)
        : undefined,
      channelUpdateAccMsg: isSet(object.channelUpdateAccMsg)
        ? ChannelUpdateAccMsg.fromJSON(object.channelUpdateAccMsg)
        : undefined,
      channelUpdateRejMsg: isSet(object.channelUpdateRejMsg)
        ? ChannelUpdateRejMsg.fromJSON(object.channelUpdateRejMsg)
        : undefined,
      channelSyncMsg: isSet(object.channelSyncMsg) ? ChannelSyncMsg.fromJSON(object.channelSyncMsg) : undefined,
    };
  },

  toJSON(message: Envelope): unknown {
    const obj: any = {};
    if (message.sender.length !== 0) {
      obj.sender = base64FromBytes(message.sender);
    }
    if (message.recipient.length !== 0) {
      obj.recipient = base64FromBytes(message.recipient);
    }
    if (message.pingMsg !== undefined) {
      obj.pingMsg = PingMsg.toJSON(message.pingMsg);
    }
    if (message.pongMsg !== undefined) {
      obj.pongMsg = PongMsg.toJSON(message.pongMsg);
    }
    if (message.shutdownMsg !== undefined) {
      obj.shutdownMsg = ShutdownMsg.toJSON(message.shutdownMsg);
    }
    if (message.authResponseMsg !== undefined) {
      obj.authResponseMsg = AuthResponseMsg.toJSON(message.authResponseMsg);
    }
    if (message.ledgerChannelProposalMsg !== undefined) {
      obj.ledgerChannelProposalMsg = LedgerChannelProposalMsg.toJSON(message.ledgerChannelProposalMsg);
    }
    if (message.ledgerChannelProposalAccMsg !== undefined) {
      obj.ledgerChannelProposalAccMsg = LedgerChannelProposalAccMsg.toJSON(message.ledgerChannelProposalAccMsg);
    }
    if (message.subChannelProposalMsg !== undefined) {
      obj.subChannelProposalMsg = SubChannelProposalMsg.toJSON(message.subChannelProposalMsg);
    }
    if (message.subChannelProposalAccMsg !== undefined) {
      obj.subChannelProposalAccMsg = SubChannelProposalAccMsg.toJSON(message.subChannelProposalAccMsg);
    }
    if (message.virtualChannelProposalMsg !== undefined) {
      obj.virtualChannelProposalMsg = VirtualChannelProposalMsg.toJSON(message.virtualChannelProposalMsg);
    }
    if (message.virtualChannelProposalAccMsg !== undefined) {
      obj.virtualChannelProposalAccMsg = VirtualChannelProposalAccMsg.toJSON(message.virtualChannelProposalAccMsg);
    }
    if (message.channelProposalRejMsg !== undefined) {
      obj.channelProposalRejMsg = ChannelProposalRejMsg.toJSON(message.channelProposalRejMsg);
    }
    if (message.channelUpdateMsg !== undefined) {
      obj.channelUpdateMsg = ChannelUpdateMsg.toJSON(message.channelUpdateMsg);
    }
    if (message.virtualChannelFundingProposalMsg !== undefined) {
      obj.virtualChannelFundingProposalMsg = VirtualChannelFundingProposalMsg.toJSON(
        message.virtualChannelFundingProposalMsg,
      );
    }
    if (message.virtualChannelSettlementProposalMsg !== undefined) {
      obj.virtualChannelSettlementProposalMsg = VirtualChannelSettlementProposalMsg.toJSON(
        message.virtualChannelSettlementProposalMsg,
      );
    }
    if (message.channelUpdateAccMsg !== undefined) {
      obj.channelUpdateAccMsg = ChannelUpdateAccMsg.toJSON(message.channelUpdateAccMsg);
    }
    if (message.channelUpdateRejMsg !== undefined) {
      obj.channelUpdateRejMsg = ChannelUpdateRejMsg.toJSON(message.channelUpdateRejMsg);
    }
    if (message.channelSyncMsg !== undefined) {
      obj.channelSyncMsg = ChannelSyncMsg.toJSON(message.channelSyncMsg);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Envelope>, I>>(base?: I): Envelope {
    return Envelope.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Envelope>, I>>(object: I): Envelope {
    const message = createBaseEnvelope();
    message.sender = object.sender ?? new Uint8Array(0);
    message.recipient = object.recipient ?? new Uint8Array(0);
    message.pingMsg = (object.pingMsg !== undefined && object.pingMsg !== null)
      ? PingMsg.fromPartial(object.pingMsg)
      : undefined;
    message.pongMsg = (object.pongMsg !== undefined && object.pongMsg !== null)
      ? PongMsg.fromPartial(object.pongMsg)
      : undefined;
    message.shutdownMsg = (object.shutdownMsg !== undefined && object.shutdownMsg !== null)
      ? ShutdownMsg.fromPartial(object.shutdownMsg)
      : undefined;
    message.authResponseMsg = (object.authResponseMsg !== undefined && object.authResponseMsg !== null)
      ? AuthResponseMsg.fromPartial(object.authResponseMsg)
      : undefined;
    message.ledgerChannelProposalMsg =
      (object.ledgerChannelProposalMsg !== undefined && object.ledgerChannelProposalMsg !== null)
        ? LedgerChannelProposalMsg.fromPartial(object.ledgerChannelProposalMsg)
        : undefined;
    message.ledgerChannelProposalAccMsg =
      (object.ledgerChannelProposalAccMsg !== undefined && object.ledgerChannelProposalAccMsg !== null)
        ? LedgerChannelProposalAccMsg.fromPartial(object.ledgerChannelProposalAccMsg)
        : undefined;
    message.subChannelProposalMsg =
      (object.subChannelProposalMsg !== undefined && object.subChannelProposalMsg !== null)
        ? SubChannelProposalMsg.fromPartial(object.subChannelProposalMsg)
        : undefined;
    message.subChannelProposalAccMsg =
      (object.subChannelProposalAccMsg !== undefined && object.subChannelProposalAccMsg !== null)
        ? SubChannelProposalAccMsg.fromPartial(object.subChannelProposalAccMsg)
        : undefined;
    message.virtualChannelProposalMsg =
      (object.virtualChannelProposalMsg !== undefined && object.virtualChannelProposalMsg !== null)
        ? VirtualChannelProposalMsg.fromPartial(object.virtualChannelProposalMsg)
        : undefined;
    message.virtualChannelProposalAccMsg =
      (object.virtualChannelProposalAccMsg !== undefined && object.virtualChannelProposalAccMsg !== null)
        ? VirtualChannelProposalAccMsg.fromPartial(object.virtualChannelProposalAccMsg)
        : undefined;
    message.channelProposalRejMsg =
      (object.channelProposalRejMsg !== undefined && object.channelProposalRejMsg !== null)
        ? ChannelProposalRejMsg.fromPartial(object.channelProposalRejMsg)
        : undefined;
    message.channelUpdateMsg = (object.channelUpdateMsg !== undefined && object.channelUpdateMsg !== null)
      ? ChannelUpdateMsg.fromPartial(object.channelUpdateMsg)
      : undefined;
    message.virtualChannelFundingProposalMsg =
      (object.virtualChannelFundingProposalMsg !== undefined && object.virtualChannelFundingProposalMsg !== null)
        ? VirtualChannelFundingProposalMsg.fromPartial(object.virtualChannelFundingProposalMsg)
        : undefined;
    message.virtualChannelSettlementProposalMsg =
      (object.virtualChannelSettlementProposalMsg !== undefined && object.virtualChannelSettlementProposalMsg !== null)
        ? VirtualChannelSettlementProposalMsg.fromPartial(object.virtualChannelSettlementProposalMsg)
        : undefined;
    message.channelUpdateAccMsg = (object.channelUpdateAccMsg !== undefined && object.channelUpdateAccMsg !== null)
      ? ChannelUpdateAccMsg.fromPartial(object.channelUpdateAccMsg)
      : undefined;
    message.channelUpdateRejMsg = (object.channelUpdateRejMsg !== undefined && object.channelUpdateRejMsg !== null)
      ? ChannelUpdateRejMsg.fromPartial(object.channelUpdateRejMsg)
      : undefined;
    message.channelSyncMsg = (object.channelSyncMsg !== undefined && object.channelSyncMsg !== null)
      ? ChannelSyncMsg.fromPartial(object.channelSyncMsg)
      : undefined;
    return message;
  },
};

function createBaseBalance(): Balance {
  return { balance: [] };
}

export const Balance = {
  encode(message: Balance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balance) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balance {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.balance.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Balance {
    return { balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => bytesFromBase64(e)) : [] };
  },

  toJSON(message: Balance): unknown {
    const obj: any = {};
    if (message.balance?.length) {
      obj.balance = message.balance.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Balance>, I>>(base?: I): Balance {
    return Balance.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Balance>, I>>(object: I): Balance {
    const message = createBaseBalance();
    message.balance = object.balance?.map((e) => e) || [];
    return message;
  },
};

function createBaseBalances(): Balances {
  return { balances: [] };
}

export const Balances = {
  encode(message: Balances, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Balances {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalances();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.balances.push(Balance.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Balances {
    return { balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromJSON(e)) : [] };
  },

  toJSON(message: Balances): unknown {
    const obj: any = {};
    if (message.balances?.length) {
      obj.balances = message.balances.map((e) => Balance.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Balances>, I>>(base?: I): Balances {
    return Balances.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Balances>, I>>(object: I): Balances {
    const message = createBaseBalances();
    message.balances = object.balances?.map((e) => Balance.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIndexMap(): IndexMap {
  return { indexMap: [] };
}

export const IndexMap = {
  encode(message: IndexMap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.indexMap) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IndexMap {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIndexMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag === 8) {
            message.indexMap.push(reader.uint32());

            continue;
          }

          if (tag === 10) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.indexMap.push(reader.uint32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IndexMap {
    return { indexMap: Array.isArray(object?.indexMap) ? object.indexMap.map((e: any) => Number(e)) : [] };
  },

  toJSON(message: IndexMap): unknown {
    const obj: any = {};
    if (message.indexMap?.length) {
      obj.indexMap = message.indexMap.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<IndexMap>, I>>(base?: I): IndexMap {
    return IndexMap.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<IndexMap>, I>>(object: I): IndexMap {
    const message = createBaseIndexMap();
    message.indexMap = object.indexMap?.map((e) => e) || [];
    return message;
  },
};

function createBaseSubAlloc(): SubAlloc {
  return { id: new Uint8Array(0), bals: undefined, indexMap: undefined };
}

export const SubAlloc = {
  encode(message: SubAlloc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.bals !== undefined) {
      Balance.encode(message.bals, writer.uint32(18).fork()).ldelim();
    }
    if (message.indexMap !== undefined) {
      IndexMap.encode(message.indexMap, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubAlloc {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubAlloc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.bals = Balance.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.indexMap = IndexMap.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubAlloc {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(0),
      bals: isSet(object.bals) ? Balance.fromJSON(object.bals) : undefined,
      indexMap: isSet(object.indexMap) ? IndexMap.fromJSON(object.indexMap) : undefined,
    };
  },

  toJSON(message: SubAlloc): unknown {
    const obj: any = {};
    if (message.id.length !== 0) {
      obj.id = base64FromBytes(message.id);
    }
    if (message.bals !== undefined) {
      obj.bals = Balance.toJSON(message.bals);
    }
    if (message.indexMap !== undefined) {
      obj.indexMap = IndexMap.toJSON(message.indexMap);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubAlloc>, I>>(base?: I): SubAlloc {
    return SubAlloc.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubAlloc>, I>>(object: I): SubAlloc {
    const message = createBaseSubAlloc();
    message.id = object.id ?? new Uint8Array(0);
    message.bals = (object.bals !== undefined && object.bals !== null) ? Balance.fromPartial(object.bals) : undefined;
    message.indexMap = (object.indexMap !== undefined && object.indexMap !== null)
      ? IndexMap.fromPartial(object.indexMap)
      : undefined;
    return message;
  },
};

function createBaseAllocation(): Allocation {
  return { assets: [], balances: undefined, locked: [] };
}

export const Allocation = {
  encode(message: Allocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      writer.uint32(10).bytes(v!);
    }
    if (message.balances !== undefined) {
      Balances.encode(message.balances, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.locked) {
      SubAlloc.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Allocation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.assets.push(reader.bytes());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.balances = Balances.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.locked.push(SubAlloc.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Allocation {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => bytesFromBase64(e)) : [],
      balances: isSet(object.balances) ? Balances.fromJSON(object.balances) : undefined,
      locked: Array.isArray(object?.locked) ? object.locked.map((e: any) => SubAlloc.fromJSON(e)) : [],
    };
  },

  toJSON(message: Allocation): unknown {
    const obj: any = {};
    if (message.assets?.length) {
      obj.assets = message.assets.map((e) => base64FromBytes(e));
    }
    if (message.balances !== undefined) {
      obj.balances = Balances.toJSON(message.balances);
    }
    if (message.locked?.length) {
      obj.locked = message.locked.map((e) => SubAlloc.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Allocation>, I>>(base?: I): Allocation {
    return Allocation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Allocation>, I>>(object: I): Allocation {
    const message = createBaseAllocation();
    message.assets = object.assets?.map((e) => e) || [];
    message.balances = (object.balances !== undefined && object.balances !== null)
      ? Balances.fromPartial(object.balances)
      : undefined;
    message.locked = object.locked?.map((e) => SubAlloc.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBaseChannelProposal(): BaseChannelProposal {
  return {
    proposalId: new Uint8Array(0),
    challengeDuration: 0,
    nonceShare: new Uint8Array(0),
    app: new Uint8Array(0),
    initData: new Uint8Array(0),
    initBals: undefined,
    fundingAgreement: undefined,
  };
}

export const BaseChannelProposal = {
  encode(message: BaseChannelProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId.length !== 0) {
      writer.uint32(10).bytes(message.proposalId);
    }
    if (message.challengeDuration !== 0) {
      writer.uint32(16).uint64(message.challengeDuration);
    }
    if (message.nonceShare.length !== 0) {
      writer.uint32(26).bytes(message.nonceShare);
    }
    if (message.app.length !== 0) {
      writer.uint32(34).bytes(message.app);
    }
    if (message.initData.length !== 0) {
      writer.uint32(42).bytes(message.initData);
    }
    if (message.initBals !== undefined) {
      Allocation.encode(message.initBals, writer.uint32(50).fork()).ldelim();
    }
    if (message.fundingAgreement !== undefined) {
      Balances.encode(message.fundingAgreement, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseChannelProposal {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseChannelProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proposalId = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.challengeDuration = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nonceShare = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.app = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initData = reader.bytes();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.initBals = Allocation.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fundingAgreement = Balances.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BaseChannelProposal {
    return {
      proposalId: isSet(object.proposalId) ? bytesFromBase64(object.proposalId) : new Uint8Array(0),
      challengeDuration: isSet(object.challengeDuration) ? Number(object.challengeDuration) : 0,
      nonceShare: isSet(object.nonceShare) ? bytesFromBase64(object.nonceShare) : new Uint8Array(0),
      app: isSet(object.app) ? bytesFromBase64(object.app) : new Uint8Array(0),
      initData: isSet(object.initData) ? bytesFromBase64(object.initData) : new Uint8Array(0),
      initBals: isSet(object.initBals) ? Allocation.fromJSON(object.initBals) : undefined,
      fundingAgreement: isSet(object.fundingAgreement) ? Balances.fromJSON(object.fundingAgreement) : undefined,
    };
  },

  toJSON(message: BaseChannelProposal): unknown {
    const obj: any = {};
    if (message.proposalId.length !== 0) {
      obj.proposalId = base64FromBytes(message.proposalId);
    }
    if (message.challengeDuration !== 0) {
      obj.challengeDuration = Math.round(message.challengeDuration);
    }
    if (message.nonceShare.length !== 0) {
      obj.nonceShare = base64FromBytes(message.nonceShare);
    }
    if (message.app.length !== 0) {
      obj.app = base64FromBytes(message.app);
    }
    if (message.initData.length !== 0) {
      obj.initData = base64FromBytes(message.initData);
    }
    if (message.initBals !== undefined) {
      obj.initBals = Allocation.toJSON(message.initBals);
    }
    if (message.fundingAgreement !== undefined) {
      obj.fundingAgreement = Balances.toJSON(message.fundingAgreement);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BaseChannelProposal>, I>>(base?: I): BaseChannelProposal {
    return BaseChannelProposal.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BaseChannelProposal>, I>>(object: I): BaseChannelProposal {
    const message = createBaseBaseChannelProposal();
    message.proposalId = object.proposalId ?? new Uint8Array(0);
    message.challengeDuration = object.challengeDuration ?? 0;
    message.nonceShare = object.nonceShare ?? new Uint8Array(0);
    message.app = object.app ?? new Uint8Array(0);
    message.initData = object.initData ?? new Uint8Array(0);
    message.initBals = (object.initBals !== undefined && object.initBals !== null)
      ? Allocation.fromPartial(object.initBals)
      : undefined;
    message.fundingAgreement = (object.fundingAgreement !== undefined && object.fundingAgreement !== null)
      ? Balances.fromPartial(object.fundingAgreement)
      : undefined;
    return message;
  },
};

function createBaseBaseChannelProposalAcc(): BaseChannelProposalAcc {
  return { proposalId: new Uint8Array(0), nonceShare: new Uint8Array(0) };
}

export const BaseChannelProposalAcc = {
  encode(message: BaseChannelProposalAcc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId.length !== 0) {
      writer.uint32(10).bytes(message.proposalId);
    }
    if (message.nonceShare.length !== 0) {
      writer.uint32(18).bytes(message.nonceShare);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseChannelProposalAcc {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseChannelProposalAcc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proposalId = reader.bytes();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nonceShare = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BaseChannelProposalAcc {
    return {
      proposalId: isSet(object.proposalId) ? bytesFromBase64(object.proposalId) : new Uint8Array(0),
      nonceShare: isSet(object.nonceShare) ? bytesFromBase64(object.nonceShare) : new Uint8Array(0),
    };
  },

  toJSON(message: BaseChannelProposalAcc): unknown {
    const obj: any = {};
    if (message.proposalId.length !== 0) {
      obj.proposalId = base64FromBytes(message.proposalId);
    }
    if (message.nonceShare.length !== 0) {
      obj.nonceShare = base64FromBytes(message.nonceShare);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BaseChannelProposalAcc>, I>>(base?: I): BaseChannelProposalAcc {
    return BaseChannelProposalAcc.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BaseChannelProposalAcc>, I>>(object: I): BaseChannelProposalAcc {
    const message = createBaseBaseChannelProposalAcc();
    message.proposalId = object.proposalId ?? new Uint8Array(0);
    message.nonceShare = object.nonceShare ?? new Uint8Array(0);
    return message;
  },
};

function createBaseParams(): Params {
  return {
    id: new Uint8Array(0),
    challengeDuration: 0,
    parts: [],
    app: new Uint8Array(0),
    nonce: new Uint8Array(0),
    ledgerChannel: false,
    virtualChannel: false,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.challengeDuration !== 0) {
      writer.uint32(16).uint64(message.challengeDuration);
    }
    for (const v of message.parts) {
      writer.uint32(26).bytes(v!);
    }
    if (message.app.length !== 0) {
      writer.uint32(34).bytes(message.app);
    }
    if (message.nonce.length !== 0) {
      writer.uint32(42).bytes(message.nonce);
    }
    if (message.ledgerChannel === true) {
      writer.uint32(48).bool(message.ledgerChannel);
    }
    if (message.virtualChannel === true) {
      writer.uint32(56).bool(message.virtualChannel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.challengeDuration = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.parts.push(reader.bytes());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.app = reader.bytes();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.nonce = reader.bytes();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.ledgerChannel = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.virtualChannel = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(0),
      challengeDuration: isSet(object.challengeDuration) ? Number(object.challengeDuration) : 0,
      parts: Array.isArray(object?.parts) ? object.parts.map((e: any) => bytesFromBase64(e)) : [],
      app: isSet(object.app) ? bytesFromBase64(object.app) : new Uint8Array(0),
      nonce: isSet(object.nonce) ? bytesFromBase64(object.nonce) : new Uint8Array(0),
      ledgerChannel: isSet(object.ledgerChannel) ? Boolean(object.ledgerChannel) : false,
      virtualChannel: isSet(object.virtualChannel) ? Boolean(object.virtualChannel) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.id.length !== 0) {
      obj.id = base64FromBytes(message.id);
    }
    if (message.challengeDuration !== 0) {
      obj.challengeDuration = Math.round(message.challengeDuration);
    }
    if (message.parts?.length) {
      obj.parts = message.parts.map((e) => base64FromBytes(e));
    }
    if (message.app.length !== 0) {
      obj.app = base64FromBytes(message.app);
    }
    if (message.nonce.length !== 0) {
      obj.nonce = base64FromBytes(message.nonce);
    }
    if (message.ledgerChannel === true) {
      obj.ledgerChannel = message.ledgerChannel;
    }
    if (message.virtualChannel === true) {
      obj.virtualChannel = message.virtualChannel;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.id = object.id ?? new Uint8Array(0);
    message.challengeDuration = object.challengeDuration ?? 0;
    message.parts = object.parts?.map((e) => e) || [];
    message.app = object.app ?? new Uint8Array(0);
    message.nonce = object.nonce ?? new Uint8Array(0);
    message.ledgerChannel = object.ledgerChannel ?? false;
    message.virtualChannel = object.virtualChannel ?? false;
    return message;
  },
};

function createBaseState(): State {
  return {
    id: new Uint8Array(0),
    version: 0,
    app: new Uint8Array(0),
    allocation: undefined,
    data: new Uint8Array(0),
    isFinal: false,
  };
}

export const State = {
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id.length !== 0) {
      writer.uint32(10).bytes(message.id);
    }
    if (message.version !== 0) {
      writer.uint32(16).uint64(message.version);
    }
    if (message.app.length !== 0) {
      writer.uint32(26).bytes(message.app);
    }
    if (message.allocation !== undefined) {
      Allocation.encode(message.allocation, writer.uint32(34).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    if (message.isFinal === true) {
      writer.uint32(48).bool(message.isFinal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.version = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.app = reader.bytes();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.allocation = Allocation.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.data = reader.bytes();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.isFinal = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): State {
    return {
      id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(0),
      version: isSet(object.version) ? Number(object.version) : 0,
      app: isSet(object.app) ? bytesFromBase64(object.app) : new Uint8Array(0),
      allocation: isSet(object.allocation) ? Allocation.fromJSON(object.allocation) : undefined,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      isFinal: isSet(object.isFinal) ? Boolean(object.isFinal) : false,
    };
  },

  toJSON(message: State): unknown {
    const obj: any = {};
    if (message.id.length !== 0) {
      obj.id = base64FromBytes(message.id);
    }
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    if (message.app.length !== 0) {
      obj.app = base64FromBytes(message.app);
    }
    if (message.allocation !== undefined) {
      obj.allocation = Allocation.toJSON(message.allocation);
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.isFinal === true) {
      obj.isFinal = message.isFinal;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<State>, I>>(base?: I): State {
    return State.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<State>, I>>(object: I): State {
    const message = createBaseState();
    message.id = object.id ?? new Uint8Array(0);
    message.version = object.version ?? 0;
    message.app = object.app ?? new Uint8Array(0);
    message.allocation = (object.allocation !== undefined && object.allocation !== null)
      ? Allocation.fromPartial(object.allocation)
      : undefined;
    message.data = object.data ?? new Uint8Array(0);
    message.isFinal = object.isFinal ?? false;
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return { state: undefined, sigs: [] };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.sigs) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
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

          message.sigs.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined,
      sigs: Array.isArray(object?.sigs) ? object.sigs.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    if (message.sigs?.length) {
      obj.sigs = message.sigs.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transaction>, I>>(base?: I): Transaction {
    return Transaction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    message.sigs = object.sigs?.map((e) => e) || [];
    return message;
  },
};

function createBaseSignedState(): SignedState {
  return { params: undefined, state: undefined, sigs: [] };
}

export const SignedState = {
  encode(message: SignedState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.sigs) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignedState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.state = State.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sigs.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignedState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined,
      sigs: Array.isArray(object?.sigs) ? object.sigs.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: SignedState): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    if (message.sigs?.length) {
      obj.sigs = message.sigs.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignedState>, I>>(base?: I): SignedState {
    return SignedState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignedState>, I>>(object: I): SignedState {
    const message = createBaseSignedState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    message.sigs = object.sigs?.map((e) => e) || [];
    return message;
  },
};

function createBaseChannelUpdate(): ChannelUpdate {
  return { state: undefined, actorIdx: 0 };
}

export const ChannelUpdate = {
  encode(message: ChannelUpdate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    if (message.actorIdx !== 0) {
      writer.uint32(16).uint32(message.actorIdx);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelUpdate {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelUpdate();
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
          if (tag !== 16) {
            break;
          }

          message.actorIdx = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelUpdate {
    return {
      state: isSet(object.state) ? State.fromJSON(object.state) : undefined,
      actorIdx: isSet(object.actorIdx) ? Number(object.actorIdx) : 0,
    };
  },

  toJSON(message: ChannelUpdate): unknown {
    const obj: any = {};
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    if (message.actorIdx !== 0) {
      obj.actorIdx = Math.round(message.actorIdx);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChannelUpdate>, I>>(base?: I): ChannelUpdate {
    return ChannelUpdate.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChannelUpdate>, I>>(object: I): ChannelUpdate {
    const message = createBaseChannelUpdate();
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    message.actorIdx = object.actorIdx ?? 0;
    return message;
  },
};

function createBasePingMsg(): PingMsg {
  return { created: 0 };
}

export const PingMsg = {
  encode(message: PingMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.created !== 0) {
      writer.uint32(8).int64(message.created);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.created = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PingMsg {
    return { created: isSet(object.created) ? Number(object.created) : 0 };
  },

  toJSON(message: PingMsg): unknown {
    const obj: any = {};
    if (message.created !== 0) {
      obj.created = Math.round(message.created);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PingMsg>, I>>(base?: I): PingMsg {
    return PingMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PingMsg>, I>>(object: I): PingMsg {
    const message = createBasePingMsg();
    message.created = object.created ?? 0;
    return message;
  },
};

function createBasePongMsg(): PongMsg {
  return { created: 0 };
}

export const PongMsg = {
  encode(message: PongMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.created !== 0) {
      writer.uint32(8).int64(message.created);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PongMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePongMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.created = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PongMsg {
    return { created: isSet(object.created) ? Number(object.created) : 0 };
  },

  toJSON(message: PongMsg): unknown {
    const obj: any = {};
    if (message.created !== 0) {
      obj.created = Math.round(message.created);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PongMsg>, I>>(base?: I): PongMsg {
    return PongMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PongMsg>, I>>(object: I): PongMsg {
    const message = createBasePongMsg();
    message.created = object.created ?? 0;
    return message;
  },
};

function createBaseShutdownMsg(): ShutdownMsg {
  return { reason: "" };
}

export const ShutdownMsg = {
  encode(message: ShutdownMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.reason !== "") {
      writer.uint32(10).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShutdownMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShutdownMsg();
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

  fromJSON(object: any): ShutdownMsg {
    return { reason: isSet(object.reason) ? String(object.reason) : "" };
  },

  toJSON(message: ShutdownMsg): unknown {
    const obj: any = {};
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ShutdownMsg>, I>>(base?: I): ShutdownMsg {
    return ShutdownMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ShutdownMsg>, I>>(object: I): ShutdownMsg {
    const message = createBaseShutdownMsg();
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseAuthResponseMsg(): AuthResponseMsg {
  return {};
}

export const AuthResponseMsg = {
  encode(_: AuthResponseMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AuthResponseMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthResponseMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): AuthResponseMsg {
    return {};
  },

  toJSON(_: AuthResponseMsg): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AuthResponseMsg>, I>>(base?: I): AuthResponseMsg {
    return AuthResponseMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AuthResponseMsg>, I>>(_: I): AuthResponseMsg {
    const message = createBaseAuthResponseMsg();
    return message;
  },
};

function createBaseLedgerChannelProposalMsg(): LedgerChannelProposalMsg {
  return { baseChannelProposal: undefined, participant: new Uint8Array(0), peers: [] };
}

export const LedgerChannelProposalMsg = {
  encode(message: LedgerChannelProposalMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseChannelProposal !== undefined) {
      BaseChannelProposal.encode(message.baseChannelProposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.participant.length !== 0) {
      writer.uint32(18).bytes(message.participant);
    }
    for (const v of message.peers) {
      writer.uint32(26).bytes(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LedgerChannelProposalMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerChannelProposalMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseChannelProposal = BaseChannelProposal.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.participant = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.peers.push(reader.bytes());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LedgerChannelProposalMsg {
    return {
      baseChannelProposal: isSet(object.baseChannelProposal)
        ? BaseChannelProposal.fromJSON(object.baseChannelProposal)
        : undefined,
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(0),
      peers: Array.isArray(object?.peers) ? object.peers.map((e: any) => bytesFromBase64(e)) : [],
    };
  },

  toJSON(message: LedgerChannelProposalMsg): unknown {
    const obj: any = {};
    if (message.baseChannelProposal !== undefined) {
      obj.baseChannelProposal = BaseChannelProposal.toJSON(message.baseChannelProposal);
    }
    if (message.participant.length !== 0) {
      obj.participant = base64FromBytes(message.participant);
    }
    if (message.peers?.length) {
      obj.peers = message.peers.map((e) => base64FromBytes(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LedgerChannelProposalMsg>, I>>(base?: I): LedgerChannelProposalMsg {
    return LedgerChannelProposalMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LedgerChannelProposalMsg>, I>>(object: I): LedgerChannelProposalMsg {
    const message = createBaseLedgerChannelProposalMsg();
    message.baseChannelProposal = (object.baseChannelProposal !== undefined && object.baseChannelProposal !== null)
      ? BaseChannelProposal.fromPartial(object.baseChannelProposal)
      : undefined;
    message.participant = object.participant ?? new Uint8Array(0);
    message.peers = object.peers?.map((e) => e) || [];
    return message;
  },
};

function createBaseLedgerChannelProposalAccMsg(): LedgerChannelProposalAccMsg {
  return { baseChannelProposalAcc: undefined, participant: new Uint8Array(0) };
}

export const LedgerChannelProposalAccMsg = {
  encode(message: LedgerChannelProposalAccMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseChannelProposalAcc !== undefined) {
      BaseChannelProposalAcc.encode(message.baseChannelProposalAcc, writer.uint32(10).fork()).ldelim();
    }
    if (message.participant.length !== 0) {
      writer.uint32(18).bytes(message.participant);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LedgerChannelProposalAccMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLedgerChannelProposalAccMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseChannelProposalAcc = BaseChannelProposalAcc.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.participant = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LedgerChannelProposalAccMsg {
    return {
      baseChannelProposalAcc: isSet(object.baseChannelProposalAcc)
        ? BaseChannelProposalAcc.fromJSON(object.baseChannelProposalAcc)
        : undefined,
      participant: isSet(object.participant) ? bytesFromBase64(object.participant) : new Uint8Array(0),
    };
  },

  toJSON(message: LedgerChannelProposalAccMsg): unknown {
    const obj: any = {};
    if (message.baseChannelProposalAcc !== undefined) {
      obj.baseChannelProposalAcc = BaseChannelProposalAcc.toJSON(message.baseChannelProposalAcc);
    }
    if (message.participant.length !== 0) {
      obj.participant = base64FromBytes(message.participant);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LedgerChannelProposalAccMsg>, I>>(base?: I): LedgerChannelProposalAccMsg {
    return LedgerChannelProposalAccMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LedgerChannelProposalAccMsg>, I>>(object: I): LedgerChannelProposalAccMsg {
    const message = createBaseLedgerChannelProposalAccMsg();
    message.baseChannelProposalAcc =
      (object.baseChannelProposalAcc !== undefined && object.baseChannelProposalAcc !== null)
        ? BaseChannelProposalAcc.fromPartial(object.baseChannelProposalAcc)
        : undefined;
    message.participant = object.participant ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSubChannelProposalMsg(): SubChannelProposalMsg {
  return { baseChannelProposal: undefined, parent: new Uint8Array(0) };
}

export const SubChannelProposalMsg = {
  encode(message: SubChannelProposalMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseChannelProposal !== undefined) {
      BaseChannelProposal.encode(message.baseChannelProposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.parent.length !== 0) {
      writer.uint32(18).bytes(message.parent);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubChannelProposalMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubChannelProposalMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseChannelProposal = BaseChannelProposal.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parent = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubChannelProposalMsg {
    return {
      baseChannelProposal: isSet(object.baseChannelProposal)
        ? BaseChannelProposal.fromJSON(object.baseChannelProposal)
        : undefined,
      parent: isSet(object.parent) ? bytesFromBase64(object.parent) : new Uint8Array(0),
    };
  },

  toJSON(message: SubChannelProposalMsg): unknown {
    const obj: any = {};
    if (message.baseChannelProposal !== undefined) {
      obj.baseChannelProposal = BaseChannelProposal.toJSON(message.baseChannelProposal);
    }
    if (message.parent.length !== 0) {
      obj.parent = base64FromBytes(message.parent);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubChannelProposalMsg>, I>>(base?: I): SubChannelProposalMsg {
    return SubChannelProposalMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubChannelProposalMsg>, I>>(object: I): SubChannelProposalMsg {
    const message = createBaseSubChannelProposalMsg();
    message.baseChannelProposal = (object.baseChannelProposal !== undefined && object.baseChannelProposal !== null)
      ? BaseChannelProposal.fromPartial(object.baseChannelProposal)
      : undefined;
    message.parent = object.parent ?? new Uint8Array(0);
    return message;
  },
};

function createBaseSubChannelProposalAccMsg(): SubChannelProposalAccMsg {
  return { baseChannelProposalAcc: undefined };
}

export const SubChannelProposalAccMsg = {
  encode(message: SubChannelProposalAccMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseChannelProposalAcc !== undefined) {
      BaseChannelProposalAcc.encode(message.baseChannelProposalAcc, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubChannelProposalAccMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubChannelProposalAccMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseChannelProposalAcc = BaseChannelProposalAcc.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubChannelProposalAccMsg {
    return {
      baseChannelProposalAcc: isSet(object.baseChannelProposalAcc)
        ? BaseChannelProposalAcc.fromJSON(object.baseChannelProposalAcc)
        : undefined,
    };
  },

  toJSON(message: SubChannelProposalAccMsg): unknown {
    const obj: any = {};
    if (message.baseChannelProposalAcc !== undefined) {
      obj.baseChannelProposalAcc = BaseChannelProposalAcc.toJSON(message.baseChannelProposalAcc);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SubChannelProposalAccMsg>, I>>(base?: I): SubChannelProposalAccMsg {
    return SubChannelProposalAccMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SubChannelProposalAccMsg>, I>>(object: I): SubChannelProposalAccMsg {
    const message = createBaseSubChannelProposalAccMsg();
    message.baseChannelProposalAcc =
      (object.baseChannelProposalAcc !== undefined && object.baseChannelProposalAcc !== null)
        ? BaseChannelProposalAcc.fromPartial(object.baseChannelProposalAcc)
        : undefined;
    return message;
  },
};

function createBaseVirtualChannelProposalMsg(): VirtualChannelProposalMsg {
  return { baseChannelProposal: undefined, proposer: new Uint8Array(0), peers: [], parents: [], indexMaps: [] };
}

export const VirtualChannelProposalMsg = {
  encode(message: VirtualChannelProposalMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseChannelProposal !== undefined) {
      BaseChannelProposal.encode(message.baseChannelProposal, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer.length !== 0) {
      writer.uint32(18).bytes(message.proposer);
    }
    for (const v of message.peers) {
      writer.uint32(26).bytes(v!);
    }
    for (const v of message.parents) {
      writer.uint32(34).bytes(v!);
    }
    for (const v of message.indexMaps) {
      IndexMap.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualChannelProposalMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualChannelProposalMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseChannelProposal = BaseChannelProposal.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.proposer = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.peers.push(reader.bytes());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.parents.push(reader.bytes());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.indexMaps.push(IndexMap.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VirtualChannelProposalMsg {
    return {
      baseChannelProposal: isSet(object.baseChannelProposal)
        ? BaseChannelProposal.fromJSON(object.baseChannelProposal)
        : undefined,
      proposer: isSet(object.proposer) ? bytesFromBase64(object.proposer) : new Uint8Array(0),
      peers: Array.isArray(object?.peers) ? object.peers.map((e: any) => bytesFromBase64(e)) : [],
      parents: Array.isArray(object?.parents) ? object.parents.map((e: any) => bytesFromBase64(e)) : [],
      indexMaps: Array.isArray(object?.indexMaps) ? object.indexMaps.map((e: any) => IndexMap.fromJSON(e)) : [],
    };
  },

  toJSON(message: VirtualChannelProposalMsg): unknown {
    const obj: any = {};
    if (message.baseChannelProposal !== undefined) {
      obj.baseChannelProposal = BaseChannelProposal.toJSON(message.baseChannelProposal);
    }
    if (message.proposer.length !== 0) {
      obj.proposer = base64FromBytes(message.proposer);
    }
    if (message.peers?.length) {
      obj.peers = message.peers.map((e) => base64FromBytes(e));
    }
    if (message.parents?.length) {
      obj.parents = message.parents.map((e) => base64FromBytes(e));
    }
    if (message.indexMaps?.length) {
      obj.indexMaps = message.indexMaps.map((e) => IndexMap.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VirtualChannelProposalMsg>, I>>(base?: I): VirtualChannelProposalMsg {
    return VirtualChannelProposalMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VirtualChannelProposalMsg>, I>>(object: I): VirtualChannelProposalMsg {
    const message = createBaseVirtualChannelProposalMsg();
    message.baseChannelProposal = (object.baseChannelProposal !== undefined && object.baseChannelProposal !== null)
      ? BaseChannelProposal.fromPartial(object.baseChannelProposal)
      : undefined;
    message.proposer = object.proposer ?? new Uint8Array(0);
    message.peers = object.peers?.map((e) => e) || [];
    message.parents = object.parents?.map((e) => e) || [];
    message.indexMaps = object.indexMaps?.map((e) => IndexMap.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVirtualChannelProposalAccMsg(): VirtualChannelProposalAccMsg {
  return { baseChannelProposalAcc: undefined, responder: new Uint8Array(0) };
}

export const VirtualChannelProposalAccMsg = {
  encode(message: VirtualChannelProposalAccMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseChannelProposalAcc !== undefined) {
      BaseChannelProposalAcc.encode(message.baseChannelProposalAcc, writer.uint32(10).fork()).ldelim();
    }
    if (message.responder.length !== 0) {
      writer.uint32(18).bytes(message.responder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualChannelProposalAccMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualChannelProposalAccMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.baseChannelProposalAcc = BaseChannelProposalAcc.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.responder = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VirtualChannelProposalAccMsg {
    return {
      baseChannelProposalAcc: isSet(object.baseChannelProposalAcc)
        ? BaseChannelProposalAcc.fromJSON(object.baseChannelProposalAcc)
        : undefined,
      responder: isSet(object.responder) ? bytesFromBase64(object.responder) : new Uint8Array(0),
    };
  },

  toJSON(message: VirtualChannelProposalAccMsg): unknown {
    const obj: any = {};
    if (message.baseChannelProposalAcc !== undefined) {
      obj.baseChannelProposalAcc = BaseChannelProposalAcc.toJSON(message.baseChannelProposalAcc);
    }
    if (message.responder.length !== 0) {
      obj.responder = base64FromBytes(message.responder);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VirtualChannelProposalAccMsg>, I>>(base?: I): VirtualChannelProposalAccMsg {
    return VirtualChannelProposalAccMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VirtualChannelProposalAccMsg>, I>>(object: I): VirtualChannelProposalAccMsg {
    const message = createBaseVirtualChannelProposalAccMsg();
    message.baseChannelProposalAcc =
      (object.baseChannelProposalAcc !== undefined && object.baseChannelProposalAcc !== null)
        ? BaseChannelProposalAcc.fromPartial(object.baseChannelProposalAcc)
        : undefined;
    message.responder = object.responder ?? new Uint8Array(0);
    return message;
  },
};

function createBaseChannelProposalRejMsg(): ChannelProposalRejMsg {
  return { proposalId: new Uint8Array(0), reason: "" };
}

export const ChannelProposalRejMsg = {
  encode(message: ChannelProposalRejMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId.length !== 0) {
      writer.uint32(10).bytes(message.proposalId);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelProposalRejMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelProposalRejMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.proposalId = reader.bytes();
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

  fromJSON(object: any): ChannelProposalRejMsg {
    return {
      proposalId: isSet(object.proposalId) ? bytesFromBase64(object.proposalId) : new Uint8Array(0),
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: ChannelProposalRejMsg): unknown {
    const obj: any = {};
    if (message.proposalId.length !== 0) {
      obj.proposalId = base64FromBytes(message.proposalId);
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChannelProposalRejMsg>, I>>(base?: I): ChannelProposalRejMsg {
    return ChannelProposalRejMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChannelProposalRejMsg>, I>>(object: I): ChannelProposalRejMsg {
    const message = createBaseChannelProposalRejMsg();
    message.proposalId = object.proposalId ?? new Uint8Array(0);
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseChannelUpdateMsg(): ChannelUpdateMsg {
  return { channelUpdate: undefined, sig: new Uint8Array(0) };
}

export const ChannelUpdateMsg = {
  encode(message: ChannelUpdateMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelUpdate !== undefined) {
      ChannelUpdate.encode(message.channelUpdate, writer.uint32(10).fork()).ldelim();
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelUpdateMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelUpdateMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelUpdate = ChannelUpdate.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sig = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelUpdateMsg {
    return {
      channelUpdate: isSet(object.channelUpdate) ? ChannelUpdate.fromJSON(object.channelUpdate) : undefined,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(0),
    };
  },

  toJSON(message: ChannelUpdateMsg): unknown {
    const obj: any = {};
    if (message.channelUpdate !== undefined) {
      obj.channelUpdate = ChannelUpdate.toJSON(message.channelUpdate);
    }
    if (message.sig.length !== 0) {
      obj.sig = base64FromBytes(message.sig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChannelUpdateMsg>, I>>(base?: I): ChannelUpdateMsg {
    return ChannelUpdateMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChannelUpdateMsg>, I>>(object: I): ChannelUpdateMsg {
    const message = createBaseChannelUpdateMsg();
    message.channelUpdate = (object.channelUpdate !== undefined && object.channelUpdate !== null)
      ? ChannelUpdate.fromPartial(object.channelUpdate)
      : undefined;
    message.sig = object.sig ?? new Uint8Array(0);
    return message;
  },
};

function createBaseVirtualChannelFundingProposalMsg(): VirtualChannelFundingProposalMsg {
  return { channelUpdateMsg: undefined, initial: undefined, indexMap: undefined };
}

export const VirtualChannelFundingProposalMsg = {
  encode(message: VirtualChannelFundingProposalMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelUpdateMsg !== undefined) {
      ChannelUpdateMsg.encode(message.channelUpdateMsg, writer.uint32(10).fork()).ldelim();
    }
    if (message.initial !== undefined) {
      SignedState.encode(message.initial, writer.uint32(18).fork()).ldelim();
    }
    if (message.indexMap !== undefined) {
      IndexMap.encode(message.indexMap, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualChannelFundingProposalMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualChannelFundingProposalMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelUpdateMsg = ChannelUpdateMsg.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.initial = SignedState.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.indexMap = IndexMap.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VirtualChannelFundingProposalMsg {
    return {
      channelUpdateMsg: isSet(object.channelUpdateMsg) ? ChannelUpdateMsg.fromJSON(object.channelUpdateMsg) : undefined,
      initial: isSet(object.initial) ? SignedState.fromJSON(object.initial) : undefined,
      indexMap: isSet(object.indexMap) ? IndexMap.fromJSON(object.indexMap) : undefined,
    };
  },

  toJSON(message: VirtualChannelFundingProposalMsg): unknown {
    const obj: any = {};
    if (message.channelUpdateMsg !== undefined) {
      obj.channelUpdateMsg = ChannelUpdateMsg.toJSON(message.channelUpdateMsg);
    }
    if (message.initial !== undefined) {
      obj.initial = SignedState.toJSON(message.initial);
    }
    if (message.indexMap !== undefined) {
      obj.indexMap = IndexMap.toJSON(message.indexMap);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VirtualChannelFundingProposalMsg>, I>>(
    base?: I,
  ): VirtualChannelFundingProposalMsg {
    return VirtualChannelFundingProposalMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VirtualChannelFundingProposalMsg>, I>>(
    object: I,
  ): VirtualChannelFundingProposalMsg {
    const message = createBaseVirtualChannelFundingProposalMsg();
    message.channelUpdateMsg = (object.channelUpdateMsg !== undefined && object.channelUpdateMsg !== null)
      ? ChannelUpdateMsg.fromPartial(object.channelUpdateMsg)
      : undefined;
    message.initial = (object.initial !== undefined && object.initial !== null)
      ? SignedState.fromPartial(object.initial)
      : undefined;
    message.indexMap = (object.indexMap !== undefined && object.indexMap !== null)
      ? IndexMap.fromPartial(object.indexMap)
      : undefined;
    return message;
  },
};

function createBaseVirtualChannelSettlementProposalMsg(): VirtualChannelSettlementProposalMsg {
  return { channelUpdateMsg: undefined, final: undefined };
}

export const VirtualChannelSettlementProposalMsg = {
  encode(message: VirtualChannelSettlementProposalMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelUpdateMsg !== undefined) {
      ChannelUpdateMsg.encode(message.channelUpdateMsg, writer.uint32(10).fork()).ldelim();
    }
    if (message.final !== undefined) {
      SignedState.encode(message.final, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualChannelSettlementProposalMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualChannelSettlementProposalMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.channelUpdateMsg = ChannelUpdateMsg.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.final = SignedState.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VirtualChannelSettlementProposalMsg {
    return {
      channelUpdateMsg: isSet(object.channelUpdateMsg) ? ChannelUpdateMsg.fromJSON(object.channelUpdateMsg) : undefined,
      final: isSet(object.final) ? SignedState.fromJSON(object.final) : undefined,
    };
  },

  toJSON(message: VirtualChannelSettlementProposalMsg): unknown {
    const obj: any = {};
    if (message.channelUpdateMsg !== undefined) {
      obj.channelUpdateMsg = ChannelUpdateMsg.toJSON(message.channelUpdateMsg);
    }
    if (message.final !== undefined) {
      obj.final = SignedState.toJSON(message.final);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VirtualChannelSettlementProposalMsg>, I>>(
    base?: I,
  ): VirtualChannelSettlementProposalMsg {
    return VirtualChannelSettlementProposalMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VirtualChannelSettlementProposalMsg>, I>>(
    object: I,
  ): VirtualChannelSettlementProposalMsg {
    const message = createBaseVirtualChannelSettlementProposalMsg();
    message.channelUpdateMsg = (object.channelUpdateMsg !== undefined && object.channelUpdateMsg !== null)
      ? ChannelUpdateMsg.fromPartial(object.channelUpdateMsg)
      : undefined;
    message.final = (object.final !== undefined && object.final !== null)
      ? SignedState.fromPartial(object.final)
      : undefined;
    return message;
  },
};

function createBaseChannelUpdateAccMsg(): ChannelUpdateAccMsg {
  return { channelId: new Uint8Array(0), version: 0, sig: new Uint8Array(0) };
}

export const ChannelUpdateAccMsg = {
  encode(message: ChannelUpdateAccMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId.length !== 0) {
      writer.uint32(10).bytes(message.channelId);
    }
    if (message.version !== 0) {
      writer.uint32(16).uint64(message.version);
    }
    if (message.sig.length !== 0) {
      writer.uint32(26).bytes(message.sig);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelUpdateAccMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelUpdateAccMsg();
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
          if (tag !== 16) {
            break;
          }

          message.version = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.sig = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelUpdateAccMsg {
    return {
      channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0),
      version: isSet(object.version) ? Number(object.version) : 0,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(0),
    };
  },

  toJSON(message: ChannelUpdateAccMsg): unknown {
    const obj: any = {};
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    if (message.sig.length !== 0) {
      obj.sig = base64FromBytes(message.sig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChannelUpdateAccMsg>, I>>(base?: I): ChannelUpdateAccMsg {
    return ChannelUpdateAccMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChannelUpdateAccMsg>, I>>(object: I): ChannelUpdateAccMsg {
    const message = createBaseChannelUpdateAccMsg();
    message.channelId = object.channelId ?? new Uint8Array(0);
    message.version = object.version ?? 0;
    message.sig = object.sig ?? new Uint8Array(0);
    return message;
  },
};

function createBaseChannelUpdateRejMsg(): ChannelUpdateRejMsg {
  return { channelId: new Uint8Array(0), version: 0, reason: "" };
}

export const ChannelUpdateRejMsg = {
  encode(message: ChannelUpdateRejMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId.length !== 0) {
      writer.uint32(10).bytes(message.channelId);
    }
    if (message.version !== 0) {
      writer.uint32(16).uint64(message.version);
    }
    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelUpdateRejMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelUpdateRejMsg();
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
          if (tag !== 16) {
            break;
          }

          message.version = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): ChannelUpdateRejMsg {
    return {
      channelId: isSet(object.channelId) ? bytesFromBase64(object.channelId) : new Uint8Array(0),
      version: isSet(object.version) ? Number(object.version) : 0,
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: ChannelUpdateRejMsg): unknown {
    const obj: any = {};
    if (message.channelId.length !== 0) {
      obj.channelId = base64FromBytes(message.channelId);
    }
    if (message.version !== 0) {
      obj.version = Math.round(message.version);
    }
    if (message.reason !== "") {
      obj.reason = message.reason;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChannelUpdateRejMsg>, I>>(base?: I): ChannelUpdateRejMsg {
    return ChannelUpdateRejMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChannelUpdateRejMsg>, I>>(object: I): ChannelUpdateRejMsg {
    const message = createBaseChannelUpdateRejMsg();
    message.channelId = object.channelId ?? new Uint8Array(0);
    message.version = object.version ?? 0;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseChannelSyncMsg(): ChannelSyncMsg {
  return { phase: 0, currentTx: undefined };
}

export const ChannelSyncMsg = {
  encode(message: ChannelSyncMsg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.phase !== 0) {
      writer.uint32(8).uint32(message.phase);
    }
    if (message.currentTx !== undefined) {
      Transaction.encode(message.currentTx, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelSyncMsg {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelSyncMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.phase = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.currentTx = Transaction.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChannelSyncMsg {
    return {
      phase: isSet(object.phase) ? Number(object.phase) : 0,
      currentTx: isSet(object.currentTx) ? Transaction.fromJSON(object.currentTx) : undefined,
    };
  },

  toJSON(message: ChannelSyncMsg): unknown {
    const obj: any = {};
    if (message.phase !== 0) {
      obj.phase = Math.round(message.phase);
    }
    if (message.currentTx !== undefined) {
      obj.currentTx = Transaction.toJSON(message.currentTx);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ChannelSyncMsg>, I>>(base?: I): ChannelSyncMsg {
    return ChannelSyncMsg.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ChannelSyncMsg>, I>>(object: I): ChannelSyncMsg {
    const message = createBaseChannelSyncMsg();
    message.phase = object.phase ?? 0;
    message.currentTx = (object.currentTx !== undefined && object.currentTx !== null)
      ? Transaction.fromPartial(object.currentTx)
      : undefined;
    return message;
  },
};

declare const self: any | undefined;
declare const window: any | undefined;
declare const global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
