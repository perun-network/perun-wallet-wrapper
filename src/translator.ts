export interface AddressEncoder {
  (address: Uint8Array | string): Uint8Array;
}
