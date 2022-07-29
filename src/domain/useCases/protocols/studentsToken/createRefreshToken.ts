import { RefreshTokenModel } from "../../../models/refreshTokenModel"

export interface CreateRefreshTokenData {
  studentId: string
  refreshToken: string
  expiresIn: Date,
}

export interface CreateRefreshToken {
  create(data: CreateRefreshTokenData): Promise<RefreshTokenModel>
}