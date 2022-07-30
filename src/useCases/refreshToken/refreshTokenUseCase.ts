import { 
  RefreshToken, 
  Encrypter,
  Decrypter, 
  CheckByIdAndRefreshTokenRepository, 
  DeleteByIdRepository,
  CreateRefreshTokenRepository,
  DateProvider,
  PayloadData
} from "./refreshTokenUseCaseProtocols";

export class RefreshTokenUseCase implements RefreshToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly checkByIdAndRefreshTokenRepository: CheckByIdAndRefreshTokenRepository, 
    private readonly deleteByIdRepository: DeleteByIdRepository,
    private readonly refreshTokenEncrypter: Encrypter,
    private readonly dateProvider: DateProvider,
    private readonly createRefreshTokenRepository: CreateRefreshTokenRepository
  ) {}
  async refresh(token: string) {
    const { email, sub: studentId } = await this.decrypter.decrypt(token) as PayloadData

    const studentToken = await this.checkByIdAndRefreshTokenRepository
    .checkByIdAndRefreshToken(studentId as string, token)

    if(!studentToken) {
      throw new Error('REFRESH_TOKEN_NOT_EXISTING')
    }

    await this.deleteByIdRepository.deleteById(studentToken.id)

    const refreshToken = await this.refreshTokenEncrypter.encrypt({ email }, studentId)

    const expiresIn = this.dateProvider.addDays()

    await this.createRefreshTokenRepository.create({
      studentId,
      refreshToken,
      expiresIn
    })

    return refreshToken
  } 
}