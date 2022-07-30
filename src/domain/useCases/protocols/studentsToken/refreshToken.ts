export interface RefreshToken {
  refresh(token: string): Promise<string>
}