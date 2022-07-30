import { 
  Controller, 
  Validation, 
  RefreshToken, 
  HttpRequest, 
  HttpResponse, 
  ok, 
  serverError, 
  badRequest 
} from "./refreshTokenProtocols";

export class RefreshTokenController implements Controller {
  constructor(
    private readonly refreshToken: RefreshToken,
    private readonly validation: Validation
  ) {}
  
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if(error) {
        return badRequest(error)
      }

      const token =
        httpRequest.body.token ||
        httpRequest.headers['x-access-token'] ||
        httpRequest.query.token

      const newRefreshToken = await this.refreshToken.refresh(token)

      return ok(newRefreshToken);
    } catch (error) {
      switch (error.message) {
        case 'REFRESH_TOKEN_NOT_EXISTING':
          return badRequest(error)
      }
      return serverError()
    }
  }
}