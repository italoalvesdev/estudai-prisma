import { RefreshTokenController } from "../../../../presentation/controllers/refreshToken/refreshTokenController";
import { Controller } from "../../../../presentation/protocols";
import { makeRefreshTokenFactory } from "../../useCases/refreshToken/refreshTokenFactory";
import { makeRefreshTokenValidation } from "./refreshTokenValidationFactory";

export const makeRefreshTokenController = (): Controller => {
  return new RefreshTokenController(makeRefreshTokenFactory(), makeRefreshTokenValidation());
}