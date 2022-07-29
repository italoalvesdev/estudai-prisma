import { prisma } from './helpers/prisma'

import { CreateRefreshTokenRepository } from '../../../useCases/protocols/repositories/studentsTokensRepository';
import { CreateRefreshTokenData } from '../../../domain/useCases/protocols/studentsToken';
import { RefreshTokenModel } from '../../../domain/models/refreshTokenModel';

export class PrismaStudentsTokensRepository implements CreateRefreshTokenRepository {
  async create({ studentId, refreshToken, expiresIn }: CreateRefreshTokenData): Promise<RefreshTokenModel> {
    const studentToken = await prisma.refreshToken.create({
      data: {
        studentId,
        refresh_token: refreshToken,
        expiresIn
      }
    })
    return studentToken
  }
}