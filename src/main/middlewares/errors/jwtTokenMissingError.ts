export class JwtTokenMissingError extends Error {
  constructor() {
    super(`JWT token is missing`);
    this.name = 'JwtTokenMissingError'
  }
}