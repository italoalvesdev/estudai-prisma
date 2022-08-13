import { RefreshTokenModel } from "../../../../domain/models/refreshTokenModel";

export interface CheckByRefreshTokenRepository {
  checkByRefreshToken(refreshToken: string): Promise<RefreshTokenModel>
}