export interface RefreshTokenResponse {
  accessToken: string,
  refreshToken: string
}

export interface RefreshToken {
  refresh(token: string): Promise<RefreshTokenResponse>
}