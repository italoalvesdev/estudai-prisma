import { JwtAdapter } from '../../../../adapters/criptography/jwtAdapter'
import { DayJSAdapter } from '../../../../adapters/DateProvider/dayjsAdapter'
import { PrismaStudentsTokensRepository } from '../../../../adapters/repositories/prisma/PrismaStudentsTokensRepository'
import { RefreshToken } from '../../../../domain/useCases/protocols/studentsToken/refreshToken'
import { RefreshTokenUseCase } from '../../../../useCases/refreshToken/refreshTokenUseCase'

import env from '../../../config/env'

export const makeRefreshTokenFactory = (): RefreshToken => {
  const { 
    accessTokenSecret,
    refreshTokenSecret, 
    expiresInAccessToken,
    expiresInRefreshToken, 
  } = env

  const jwtDecrypterAdapter = new JwtAdapter(refreshTokenSecret)
  const prismaStudentsTokensRepository = new PrismaStudentsTokensRepository()
  const jwtRefreshTokenEncrypterAdapter = new JwtAdapter(refreshTokenSecret, expiresInRefreshToken)
  const dayjsAdapter = new DayJSAdapter()
  const jwtAccessTokenEncrypterAdapter = new JwtAdapter(accessTokenSecret, expiresInAccessToken)

  return new RefreshTokenUseCase(
    jwtDecrypterAdapter,
    prismaStudentsTokensRepository,
    prismaStudentsTokensRepository,
    jwtRefreshTokenEncrypterAdapter,
    dayjsAdapter,
    prismaStudentsTokensRepository,
    jwtAccessTokenEncrypterAdapter
  )
}