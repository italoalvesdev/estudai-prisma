import { Request, Response } from 'express'
import { CreateStudentService } from '../../services/CreateStudentService'

export class CreateStudentController {
  index(req: Request, res: Response) {
    return res.send({ studentId: req.studentId })
  }

  async handle(req: Request, res: Response) {
    const {
      fullName,
      nickName,
      cpf,
      birthday,
      zip,
      state,
      city,
      fullAddress,
      neighborhood,
      addressDetails,
      foneMobile,
      foneHome,
      foneCompany,
      email,
      password,
    } = req.body

    const service = new CreateStudentService()

    const result = await service.execute({
      fullName,
      nickName,
      cpf,
      birthday,
      zip,
      state,
      city,
      fullAddress,
      neighborhood,
      addressDetails,
      foneMobile,
      foneHome,
      foneCompany,
      email,
      password,
    })

    if (result instanceof Error) {
      return res.status(409).json(result.message)
    }

    return res.json(result)
  }
}
