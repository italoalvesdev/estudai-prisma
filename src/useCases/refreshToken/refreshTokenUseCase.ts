import { 
  RefreshToken, 
  RefreshTokenResponse,
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
    private readonly createRefreshTokenRepository: CreateRefreshTokenRepository,
    private readonly accessTokenEncrypter: Encrypter
  ) {}
  async refresh(token: string):Promise<RefreshTokenResponse> {
    const { email, sub: studentId } = this.decrypter
    .decrypt(token) as PayloadData

    const studentToken = await this.checkByIdAndRefreshTokenRepository
    .checkByIdAndRefreshToken(studentId as string, token)

    if(!studentToken) {
      throw new Error('REFRESH_TOKEN_NOT_EXISTING')
    }

    await this.deleteByIdRepository.deleteById(studentToken.id)

    const refreshToken = await this.refreshTokenEncrypter
    .encrypt({ email }, studentId)

    const expiresIn = this.dateProvider.addDays()

    await this.createRefreshTokenRepository.create({
      studentId,
      refreshToken,
      expiresIn
    })

    const newAccessToken = await this.accessTokenEncrypter
    .encrypt({}, studentId)


    return {
      refreshToken,
      accessToken: newAccessToken
    }
  } 
}