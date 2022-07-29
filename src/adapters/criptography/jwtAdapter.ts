import { Encrypter, Decrypter } from '../../useCases/protocols/criptography'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(
    private readonly secret: string,
    private readonly expiresIn: string | number
  ) {}

  async encrypt(payload: object = {}, subject: string): Promise<string> {
    return jwt.sign(payload, this.secret, {
      subject,
      expiresIn: this.expiresIn,
    })
  }
  async decrypt(ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret) as any
  }
}
