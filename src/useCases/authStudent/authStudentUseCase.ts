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

  async auth(authentication: AuthenticationData): Promise<string> {
    const student = await this.checkStudentByEmailRepository.checkByEmail(
      authentication.email
    )

    if (student) {
      const isValid = await this.hashComparer.compare(
        authentication.password,
        student.password
      )

      if (isValid) {
        const accessToken = await this.encrypter.encrypt(student.email, { id: student.id })
        return accessToken
      }
    }
    return null
  }
}
