import { RefreshTokenModel } from "../../../../domain/models/refreshTokenModel";
import { CreateRefreshTokenData } from "../../../../domain/useCases/protocols/studentsToken";

export interface CreateRefreshTokenRepository {
  create: (data: CreateRefreshTokenData) => Promise<RefreshTokenModel>
}