import { prisma } from "../../prisma";
import { 
  IStudentsRepository, 
  StudentCreateData 
} from "../IStudentsRepository";

interface IStudentAlreadyExists {
  cpf: string,
  foneMobile: string,
  email: string,
}

export const studentAlreadyExists = async ({ cpf, foneMobile, email }: IStudentAlreadyExists) => {
  return await prisma.student.findFirst({
    where: {
      OR: [
        { cpf },
        { foneMobile },
        { email },
      ]
    }
  });
} 

export class PrismaStudentsRepository implements IStudentsRepository {
  async create({ 
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
  }: StudentCreateData) {
  
    await prisma.student.create({
      data: {
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
      }
    })
  }
}