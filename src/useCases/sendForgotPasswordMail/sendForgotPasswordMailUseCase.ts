import { v4 as uuidV4 } from 'uuid'
import { resolve } from 'path'
import { 
  CheckStudentByEmailRepository, 
  CreateRefreshTokenRepository, 
  DateProvider, 
  MailProvider, 
  SendForgotPasswordMail
} from "./sendForgotPasswordMailProtocols";

export class SendForgotPasswordMailUseCase implements SendForgotPasswordMail {
  constructor(
    private readonly checkStudentByEmailRepository: CheckStudentByEmailRepository,
    private readonly studentsTokensRepository: CreateRefreshTokenRepository,
    private readonly dateProvider: DateProvider,
    private readonly mailProvider: MailProvider
  ) {}
  async execute(email: string): Promise<void> {
    const student = await this.checkStudentByEmailRepository.checkByEmail(email)
    const templatePath = resolve(
      __dirname, 
      '..', 
      '..', 
      'views', 
      'emails', 
      'forgotPassword.hbs'
    )

    if (!student) {
      throw new Error('STUDENT_NOT_EXISTING')
    }

    const token = uuidV4()

    const expiresIn = this.dateProvider.addHours(3);

    await this.studentsTokensRepository.create({
      refreshToken: token,
      studentId: student.id,
      expiresIn
    })

    const variables = {
      name: student.fullName,
      link: `${process.env.FORGOT_MAIL_URL}${token}`
    }

    await this.mailProvider.sendMail(
      email, 
      "Recuperação de senha",
      variables,
      templatePath
    )
  }
}