import { BcryptAdapter } from '../../../../adapters/criptography/bcryptAdapter'
import { DayJSAdapter } from '../../../../adapters/DateProvider/dayjsAdapter'
import { PrismaStudentsRepository } from '../../../../adapters/repositories/prisma/PrismaStudentsRepository'
import { PrismaStudentsTokensRepository } from '../../../../adapters/repositories/prisma/PrismaStudentsTokensRepository'
import { ResetPassword } from '../../../../domain/useCases/protocols/resetPassword'
import { ResetPassowordUseCase } from '../../../../useCases/resetPassword/resetPasswordUseCase'


export const makeResetPasswordFactory = (): ResetPassword => {
  const salt = 8

  const prismaStudentsRepository = new PrismaStudentsRepository()
  const prismaStudentsTokensRepository = new PrismaStudentsTokensRepository()
  const dayjsAdapter = new DayJSAdapter()
  const bcryptAdapter = new BcryptAdapter(salt);

  return new ResetPassowordUseCase(
    prismaStudentsTokensRepository,
    dayjsAdapter,
    prismaStudentsRepository,
    bcryptAdapter,
    prismaStudentsRepository,
    prismaStudentsTokensRepository
  )
}