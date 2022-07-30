export interface PayloadData {
  sub?: string
  email?: string
}

export interface Decrypter {
  decrypt(ciphertext: string): Promise<PayloadData | string>
}
