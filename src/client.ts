import { createChannel, createClient } from "nice-grpc";
import {
  ChannelServiceClient,
  ChannelServiceDefinition,
  ChannelServiceImplementation,
} from "./perun-wallet";
import { ServiceResponse, SimpleChannelServiceClient } from "./services";
import { AddressEncoder, channelIdToString } from "./translator";
import { Allocation, State } from "./wire";
import { bigintFromLEBytes } from "./verifier";
import { ChannelState } from "./ckb/serialization";

// The ServiceClient is purely actionable and only knows about the actions it
// can perform. If channel updates are received from another peer, this client
// has to be informed about them via the `updateChannelState` method.
export class ServiceClient implements SimpleChannelServiceClient {
  private addrEncoder: AddressEncoder;
  private channelServiceClient: ChannelServiceClient;
  private channels: Map<string, ClientChannel>;
  private indexMap: Map<string, number>;

  constructor(
    addrEncoder: AddressEncoder,
    channelServiceClient: ChannelServiceClient,
  ) {
    this.addrEncoder = addrEncoder;
    this.channelServiceClient = channelServiceClient;
    this.channels = new Map();
    this.indexMap = new Map();
  }

  getCachedChannelState(id: Uint8Array | string): State | undefined {
    let channelId;
    if (id instanceof Uint8Array) {
      channelId = this.idToString(id);
    } else {
      channelId = id;
    }

    const channel = this.channels.get(channelId);
    if (!channel) {
      return undefined;
    }

    return channel.state;
  }
  
  addOrUpdateChannels(id: Uint8Array | string, state: State): void {
    let channelId;
    if (id instanceof Uint8Array) {
      channelId = this.idToString(id);
    } else {
      channelId = id;
    }
    const channel = this.channels.get(channelId);
    this.channels.set(channelId, {state: state });
  }

  updateChannelState(id: Uint8Array | string, state: State): void {
    let channelId;
    if (id instanceof Uint8Array) {
      channelId = this.idToString(id);
    } else {
      channelId = id;
    }
    const channel = this.channels.get(channelId);
    if (!channel) {
      throw new ClientError("channel not found");
    }

    if (channel.state.version >= state.version) {
      throw new ClientError("state version must be increasing");
    }

    this.channels.set(channelId, { ...channel, state: state });
  }

  async openChannel(
    me: Uint8Array,
    peerToConnectTo: Uint8Array,
    allocation: Allocation,
    challengeDuration: number,
  ): ServiceResponse<ChannelServiceImplementation["openChannel"]> {
    const req = {
      requester: this.addrEncoder(me),
      peer: this.addrEncoder(peerToConnectTo),
      allocation: allocation,
      challengeDuration: challengeDuration,
    };

    const res = await this.channelServiceClient.openChannel(req);

    if (res.rejected) {
      return res;
    }

    const channelId = this.idToString(res.channelId!);
    this.indexMap.set(channelId, 0);
    console.log("Wrapper channelId res: ", res.channelId)
    console.log("Wrapper channelId: ", channelId)
    for (let [key, value] of this.channels) {
      console.log("Channels after open: ", key, value);
    }

    return res;
  }

  async getChannels(
    me: Uint8Array,
  ): ServiceResponse<ChannelServiceImplementation["getChannels"]> {
    const req = {
      requester: this.addrEncoder(me),
    };

    const res = await this.channelServiceClient.getChannels(req);

    if (res.rejected) {
      return res;
    }
    if (!res.state) {
      return res;
    }
    const cid = this.idToString(res.state!.id);
    this.addOrUpdateChannels(cid, res.state!);
    console.log("getChannels poll result: ", JSON.stringify(res));
    return res;
  }


  async updateChannel(
    channelId: Uint8Array,
    assetIdx: number,
    amount: bigint,
  ): ServiceResponse<ChannelServiceImplementation["updateChannel"]> {
    const cID = this.idToString(channelId)
    console.log("updateChannel cID: ", cID)
        // loop over this.channels map
    for (let [key, value] of this.channels) {
      console.log("Channels during updateChannel: ", key, value);
    }
    const channel = this.channels.get(cID);
    console.log("updateChannel: ", channel)
    if (!channel) {
      throw new ClientError("channel not found");
    }
    let idx = this.indexMap.get(cID);
    if (idx == undefined) {
      idx = 1;
    }

    const proposedState = updateStatePayment(
      channel.state,
      idx,
      idx == 0 ? 1 : 0,
      assetIdx,
      amount,
    );
    const req = {
      state: proposedState,
    };
    console.log("updateChannel calling Channel Service: ", req)
    const res = await this.channelServiceClient.updateChannel(req);
    console.log("updateChannel called channel servicec res: ", res)

    if (res.rejected) {
      return res;
    }

    // Make sure to update cached channel state.
    this.channels.set(this.idToString(channelId), {
      ...channel,
      state: proposedState,
    });

    return res;
  }

  async closeChannel(
    channelId: Uint8Array,
  ): ServiceResponse<ChannelServiceImplementation["closeChannel"]> {
    const res = await this.channelServiceClient.closeChannel({
      channelId: channelId,
    });

    if (res.rejected) {
      return res;
    }

    this.channels.delete(this.idToString(channelId));

    return res;
  }

  idToString(id: Uint8Array): string {
    return channelIdToString(id);
  }
}

export interface ClientChannel {
  state: State;
}

// Given an AddressEncoder and endpoint, like `localhost:8000`, creates a
// SimpleChannelServiceClient.
export function mkSimpleChannelServiceClient(
  addrEncoder: AddressEncoder,
  endpointAddress: string,
): SimpleChannelServiceClient {
  const commChannel = createChannel(endpointAddress);
  const channelServiceClient = createClient(
    ChannelServiceDefinition,
    commChannel,
  );
  return new ServiceClient(addrEncoder, channelServiceClient);
}

export class ClientError extends Error {
  constructor(message: string) {
    super(message);
  }
}

// Updates the given channel state with a payment using the `from` index as the
// source and the `to` index as the destination with the given `amount`.
function updateStatePayment(
  oldState: State,
  from: number,
  to: number,
  assetIdx: number,
  amount: bigint,
) {
  const newState = { ...oldState };
  const oldFrom =
    newState.allocation!.balances!.balances[assetIdx].balance[from];
  const oldTo = newState.allocation!.balances!.balances[assetIdx].balance[to];
  const oldFromBigInt = bigintFromLEBytes(oldFrom);

  if (oldFromBigInt < amount) {
    throw new Error("insufficient funds");
  }

  const oldToBigInt = bigintFromLEBytes(oldTo);
  const newFrom = oldFromBigInt - amount;
  const newTo = oldToBigInt + amount;

  // Update allocation struct for participants.
  newState.allocation!.balances!.balances[assetIdx].balance[from] =
    bigintToLEBytes(newFrom);
  newState.allocation!.balances!.balances[assetIdx].balance[to] =
    bigintToLEBytes(newTo);
  // Make sure version count is incremented.
  newState.version = oldState.version + 1;

  return newState;
}

function bigintToLEBytes(n: bigint): Uint8Array {
  const bytes = [];
  // 0x1234:
  // [0x34, 0x12]
  while (n > 0) {
    bytes.push(Number(n & BigInt(0xff)));
    n = n >> BigInt(8);
  }
  return Uint8Array.from(bytes);
}
