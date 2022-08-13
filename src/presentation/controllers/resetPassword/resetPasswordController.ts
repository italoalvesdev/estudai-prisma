import { Request } from "express";
import { 
  Controller, 
  HttpRequest, 
  HttpResponse, 
  ResetPassword,
  Validation, 
  badRequest,  
  ok,
  unauthorized,
  serverError
} from "./resetPasswordControllerProtocols";

export class ResetPasswordController implements Controller {
  constructor(
    private readonly resetPassword: ResetPassword,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if(error) {
        console.log(error)
        return badRequest(error)
      }

      const { token } = httpRequest.query;
      const { password } = httpRequest.body

      const newPassword = await this.resetPassword.reset(token, password)
      return ok(newPassword)
    } catch (error) {
      switch (error.message) {
        case 'TOKEN_NOT_EXISTING':
          return badRequest(error)
        case 'TOKEN_IS_MISSING':
          return badRequest(error)
        case 'TOKEN_EXPIRED':
          return unauthorized()
      }
      return serverError()
    }
  }
}