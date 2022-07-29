export class JwtInvalidTokenError extends Error {
  constructor() {
    super(`JWT invalid token`);
    this.name = 'JwtInvalidTokenError'
  }
}