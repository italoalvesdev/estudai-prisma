import { RefreshTokenModel } from "../../../../domain/models/refreshTokenModel";

export interface CheckByIdAndRefreshTokenRepository {
  checkByIdAndRefreshToken(studentId: string, refresh_token: string): Promise<RefreshTokenModel>
}