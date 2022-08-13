import { BcryptAdapter } from '../../../../adapters/criptography/bcryptAdapter'
import { JwtAdapter } from '../../../../adapters/criptography/jwtAdapter'
import { DayJSAdapter } from '../../../../adapters/DateProvider/dayjsAdapter'
import { PrismaStudentsRepository } from '../../../../adapters/repositories/prisma/PrismaStudentsRepository'
import { PrismaStudentsTokensRepository } from '../../../../adapters/repositories/prisma/PrismaStudentsTokensRepository'
import { Authentication } from '../../../../domain/useCases/protocols'
import { AuthStudentUseCase } from '../../../../useCases/authStudent/authStudentUseCase'

import env from '../../../config/env'

export const makeAuthStudentFactory = (): Authentication => {
  const { accessTokenSecret, expiresInAccessToken, refreshTokenSecret, expiresInRefreshToken, expiresInRefreshTokenDays } = env
  const salt = 8
  const bcryptAdapter = new BcryptAdapter(salt)
  const prismaStudentsRepository = new PrismaStudentsRepository()
  const jwtAccessTokenAdapter = new JwtAdapter(accessTokenSecret, expiresInAccessToken)
  const jwtRefreshTokenAdapter = new JwtAdapter(refreshTokenSecret, expiresInRefreshToken)
  const dayjsAdapter = new DayJSAdapter()
  const prismaStudentsTokensRepository = new PrismaStudentsTokensRepository()
  return new AuthStudentUseCase(
    prismaStudentsRepository,
    bcryptAdapter,
    jwtAccessTokenAdapter,
    jwtRefreshTokenAdapter,
    dayjsAdapter,
    prismaStudentsTokensRepository
  )
}
