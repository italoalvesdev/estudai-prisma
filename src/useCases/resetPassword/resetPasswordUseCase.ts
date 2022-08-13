import { 
  CheckByRefreshTokenRepository, 
  CheckStudentByIdRepository, 
  DateProvider, 
  DeleteByIdRepository, 
  Hasher, 
  ResetPassword, 
  UpdateStudentRepository
} from "./resetPasswordUseCaseProtocols";

export class ResetPassowordUseCase implements ResetPassword {
  constructor(
    private readonly checkByRefreshTokenRepository: CheckByRefreshTokenRepository,
    private readonly dateProvider: DateProvider,
    private readonly checkStudentById: CheckStudentByIdRepository,
    private readonly encrypter: Hasher,
    private readonly updateStudentRepository: UpdateStudentRepository,
    private readonly deleteTokenByIdRepository: DeleteByIdRepository
  ) {}

  async reset(token: string, password: string): Promise<void> {
    if (!token) {      
      throw new Error('TOKEN_IS_MISSING')
    }
    const studentToken = await this.checkByRefreshTokenRepository
      .checkByRefreshToken(token)

    if (!studentToken) {
      throw new Error('TOKEN_NOT_EXISTING');
    }

    if (this.dateProvider.compareIfBefore(studentToken.expiresIn, this.dateProvider.dateNow())) {
      throw new Error('TOKEN_EXPIRED')
    }

    const student = await this.checkStudentById.checkById(studentToken.studentId)

    const newPassword = await this.encrypter.hash(password)

    await this.updateStudentRepository.updatePassword(student.id, newPassword)

    await this.deleteTokenByIdRepository.deleteById(studentToken.id)
  }
}