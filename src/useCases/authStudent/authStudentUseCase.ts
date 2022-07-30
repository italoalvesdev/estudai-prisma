import {
  Authentication,
  AuthenticationData,
  AuthenticationResponse,
  CheckStudentByEmailRepository,
  CreateRefreshTokenRepository,
  DateProvider,
  Encrypter,
  HashComparer
} from './authStudentUseCaseProtocols'

export class AuthStudentUseCase implements Authentication {
  constructor(
    private readonly checkStudentByEmailRepository: CheckStudentByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly accessTokenEncrypter: Encrypter,
    private readonly refreshTokenEncrypter: Encrypter,
    private readonly dateProvider: DateProvider,
    private readonly createRefreshTokenRepository: CreateRefreshTokenRepository,
  ) {}

  async auth({ email, password }: AuthenticationData): Promise<AuthenticationResponse> {
    const student = await this.checkStudentByEmailRepository.checkByEmail(
      email
    )

    if (student) {
      const passwordMatch = await this.hashComparer.compare(
        password,
        student.password
      )

      if (passwordMatch) {
        const accessToken = await this.accessTokenEncrypter.encrypt({}, student.id)
        const refreshToken = await this.refreshTokenEncrypter.encrypt({ email },  student.id)
        
        const expiresIn = this.dateProvider.addDays()

        await this.createRefreshTokenRepository.create({
          studentId: student.id,
          refreshToken,
          expiresIn 
        })

        const tokenReturn: AuthenticationResponse = {
          accessToken,
          refreshToken
        }
        return tokenReturn
      }
    }
    throw new Error('E-MAIL_OR_PASSWORD_INCORRECT')
  }
}
