export interface Encrypter {
  encrypt(email: string, payload: object): Promise<string>
}