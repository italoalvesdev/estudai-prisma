import { DayJSAdapter } from '../../../../adapters/DateProvider/dayjsAdapter'
import { EtherealMailAdapter } from '../../../../adapters/mailer/etherealMailAdapter'
import { PrismaStudentsRepository } from '../../../../adapters/repositories/prisma/PrismaStudentsRepository'
import { PrismaStudentsTokensRepository } from '../../../../adapters/repositories/prisma/PrismaStudentsTokensRepository'
import { SendForgotPasswordMail } from '../../../../domain/useCases/protocols/sendForgotPasswordMail'
import { SendForgotPasswordMailUseCase } from '../../../../useCases/sendForgotPasswordMail/sendForgotPasswordMailUseCase'

export const makeSendForgotPasswordMailFactory = (): SendForgotPasswordMail  => {
  const prismaStudentsRepository = new PrismaStudentsRepository()
  const prismaStudentsTokensRepository = new PrismaStudentsTokensRepository()
  const dayjsAdapter = new DayJSAdapter()
  const mailAdapter = new EtherealMailAdapter()
  
  return new SendForgotPasswordMailUseCase(
    prismaStudentsRepository,
    prismaStudentsTokensRepository,
    dayjsAdapter,
    mailAdapter
  )
}