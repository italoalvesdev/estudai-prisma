export interface RefreshTokenModel {
  id: string,
  refresh_token: string
  studentId: string
  expiresIn: Date
}