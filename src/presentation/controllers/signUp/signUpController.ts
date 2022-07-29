import {
  badRequest,
  conflict,
  ok,
  serverError
} from '../../helpers/http/httpHelper'
import {
  Authentication,
  Controller,
  CreateStudent,
  HttpRequest,
  HttpResponse,
  Validation
} from './signUpControllerProtocols'

export class SignUpController implements Controller {
  constructor(
    private readonly createStudent: CreateStudent,
    private readonly validation: Validation,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const {
        fullName,
        nickName,
        cpf,
        birthday,
        postalCode,
        state,
        city,
        street,
        neighborhood,
        addressNumber,
        details,
        foneMobile,
        foneHome,
        email,
        password
      } = httpRequest.body

      await this.createStudent.create({
        fullName,
        nickName,
        cpf,
        birthday,
        postalCode,
        state,
        city,
        street,
        neighborhood,
        addressNumber,
        details,
        foneMobile,
        foneHome,
        email,
        password
      })

      return ok()
    } catch (error) {
      switch (error.message) {
        case 'STUDENT_EMAIL_EXISTING':
          return conflict(error)
        case 'STUDENT_CPF_EXISTING':
          return conflict(error)
        case 'STUDENT_FONE_MOBILE_EXISTING':
          return conflict(error)
        default:
          return serverError()
      }
    }
  }
}
