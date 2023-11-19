export interface AddressEncoder {
  (address: Uint8Array | string): Uint8Array;
}

export function channelIdToString(id: Uint8Array): string {
  const decoder = new TextDecoder("utf-8");
  return decoder.decode(id);
}

export function channelIdFromString(id: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(id);
}
