export default {
  port: process.env.PORT || 3333,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || '829f0400c0b07711411bb78ff65bba1b',
  expiresInAccessToken: '60s',
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'f770b3eee79bf1a0b0fd31310277f21c',
  expiresInRefreshToken: '30d',
  expiresInRefreshTokenDays: 30
}