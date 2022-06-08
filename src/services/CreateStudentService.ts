import { getRepository } from 'typeorm'
import { Student } from '../entities/Student'

type StudentRequest = {
  fullName: string
  nickName?: string
  cpf: string
  birthday: string
  zip: string
  state: string
  city: string
  fullAddress: string
  neighborhood: string
  addressDetails?: string
  foneMobile: string
  foneHome?: string
  foneCompany?: string
  email: string
  password: string
}

export class CreateStudentService {
  async execute({
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
    password
  }: StudentRequest): Promise<Student | Error> {
    const repo = getRepository(Student)

    if (
      await repo.findOne({
        where: [{ email }, { cpf }, { foneMobile }]
      })
    ) {
      return new Error('Student already exists')
    }

    const user = repo.create({
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
      password
    })

    await repo.save(user)

    return user
  }
}
