import {
  Authentication,
  AuthenticationData,
  CheckStudentByEmailRepository,
  Encrypter,
  HashComparer
} from './authStudentUseCaseProtocols'

export class AuthStudentUseCase implements Authentication {
  constructor(
    private readonly hashComparer: HashComparer,
    private readonly checkStudentByEmailRepository: CheckStudentByEmailRepository,
    private readonly encrypter: Encrypter
  ) {}

  async auth({ email, password }: AuthenticationData): Promise<string> {
    const student = await this.checkStudentByEmailRepository.checkByEmail(
      email
    )

    if (student) {
      const passwordMatch = await this.hashComparer.compare(
        password,
        student.password
      )

      if (passwordMatch) {
        const accessToken = await this.encrypter.encrypt(student.email, { id: student.id })
        return accessToken
      }
    }
    throw new Error('E-MAIL_OR_PASSWORD_INCORRECT')
  }
}
