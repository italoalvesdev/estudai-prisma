import { 
  badRequest,
  Controller, 
  HttpRequest, 
  HttpResponse, 
  ok, 
  SendForgotPasswordMail, 
  serverError,
  Validation,
} from "./sendForgotPasswordMailControllerProtocols";

export class SendForgotPasswordMailController implements Controller {
  constructor(
    private readonly sendForgotPasswordMail: SendForgotPasswordMail,
    private readonly validation: Validation
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if(error) {
        return badRequest(error)
      }

      const { email } = httpRequest.body

      const mail = await this.sendForgotPasswordMail.execute(email)
      
      return ok(mail)
    } catch (error) {
      switch (error.message) {
        case 'STUDENT_NOT_EXISTING':
          return badRequest(error)
      }
      return serverError()
    }
  }
}