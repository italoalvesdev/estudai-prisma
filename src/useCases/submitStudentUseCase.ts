import { hash } from 'bcryptjs';

import { IStudentsRepository } from "../repositories/IStudentsRepository";
import { studentAlreadyExists } from '../repositories/prisma/PrismaStudentsRepository';

interface SubmitStudentUseCaseRequest {
  fullName: string;
  nickName?: string;
  cpf: string;
  birthday: Date;
  zip: string;
  state: string
  city: string;
  fullAddress: string;
  neighborhood: string;
  addressDetails?: string
  foneMobile: string;
  foneHome?: string;
  foneCompany?: string
  email: string;
  password: string;
}

export class SubmitStudentUseCase {
  constructor(
    private studentsRepository: IStudentsRepository,
  ) {}

  async execute(request: SubmitStudentUseCaseRequest) {
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
      password  
    } = request;

    const student = await studentAlreadyExists({
      cpf,
      email,
      foneMobile,
    });

    if(student) {
      throw new Error('Student already exists!');
    }

    const passwordHash = await hash(password, 8);

    await this.studentsRepository.create({
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
      password: passwordHash,
    });
  }
}