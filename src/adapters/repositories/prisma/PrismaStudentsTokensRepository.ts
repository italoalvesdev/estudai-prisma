import { prisma } from './helpers/prisma'

import { CheckByIdAndRefreshTokenRepository, CreateRefreshTokenRepository, DeleteByIdRepository } from '../../../useCases/protocols/repositories/studentsTokensRepository';
import { CreateRefreshTokenData } from '../../../domain/useCases/protocols/studentsToken';
import { RefreshTokenModel } from '../../../domain/models/refreshTokenModel';
import { CheckByRefreshTokenRepository } from '../../../useCases/protocols/repositories/studentsTokensRepository/checkByRefreshTokenRepository';

export class PrismaStudentsTokensRepository implements 
  CreateRefreshTokenRepository, 
  CheckByIdAndRefreshTokenRepository, 
  DeleteByIdRepository,
  CheckByRefreshTokenRepository {

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

  async checkByIdAndRefreshToken(studentId: string, refreshToken: string): Promise<RefreshTokenModel> {
    const studentsTokens = await prisma.refreshToken.findFirst({
      where: { studentId, refresh_token: refreshToken }
    })

    return studentsTokens
  }

  async deleteById(id: string): Promise<void> {
    await prisma.refreshToken.delete({
      where: { id }
    })
  }

  async checkByRefreshToken(refreshToken: string): Promise<RefreshTokenModel> {
    const studentToken = await prisma.refreshToken.findFirst({
      where: { refresh_token: refreshToken }
    })

    return studentToken
  }
}