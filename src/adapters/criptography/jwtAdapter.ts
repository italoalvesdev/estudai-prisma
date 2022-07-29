import { Encrypter, Decrypter } from '../../useCases/protocols/criptography'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(
    private readonly secret: string
  ) {}

  async encrypt(email: string, payload: object = {}): Promise<string> {
    return jwt.sign(payload, this.secret, {
      subject: email,
      expiresIn: 5,
    })
  }
  async decrypt(ciphertext: string): Promise<string> {
    return jwt.verify(ciphertext, this.secret) as any
  }
}
