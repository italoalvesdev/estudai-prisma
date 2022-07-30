export interface PayloadData {
  sub?: string
  email?: string
}

export interface Decrypter {
  decrypt(ciphertext: string): PayloadData | string
}
