import { BcryptAdapter } from '../../../../adapters/criptography/bcryptAdapter'
import { JwtAdapter } from '../../../../adapters/criptography/jwtAdapter'
import { PrismaStudentsRepository } from '../../../../adapters/repositories/prisma/PrismaStudentsRepository'
import { Authentication } from '../../../../domain/useCases/protocols'
import { AuthStudentUseCase } from '../../../../useCases/authStudent/authStudentUseCase'
import env from '../../../config/env'

export const makeAuthStudentFactory = (): Authentication => {
  const salt = 8
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const prismaStudentsRepository = new PrismaStudentsRepository()
  return new AuthStudentUseCase(
    bcryptAdapter,
    prismaStudentsRepository,
    jwtAdapter
  )
}
