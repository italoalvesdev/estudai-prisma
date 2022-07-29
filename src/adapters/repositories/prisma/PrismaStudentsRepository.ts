import { prisma } from "./helpers/prisma";
import { 
  CreateStudentRepository,
  CheckStudentByEmailRepository,
  CheckStudentByIdRepository,
  CheckByCpf,
  CheckByFoneMobile,
} from "../../../useCases/protocols/repositories";
import { CreateStudentData, StudentModel } from "../../../useCases/createStudent/createStudentProtocols";

export class PrismaStudentsRepository implements 
  CreateStudentRepository, 
  CheckStudentByEmailRepository,
  CheckByCpf,
  CheckByFoneMobile,
  CheckStudentByIdRepository {

  async create(data: CreateStudentData): Promise<void> {
    await prisma.student.create({
      data
    });
  }

  async checkByEmail(email: string): Promise<StudentModel> {
    const student = await prisma.student.findUnique({
      where: { email },
    });
    return student;
  }

  async checkByCpf(cpf: string): Promise<StudentModel> {
    const student = await prisma.student.findUnique({
      where: { cpf }
    });
    return student;
  }

  async checkByFoneMobile(foneMobile: string): Promise<StudentModel> {
    const student = await prisma.student.findFirst({
      where: { foneMobile },
    });
    return student;
  }

  async checkUniqueFields(cpf: string, foneMobile: string): Promise<Pick<StudentModel, 'cpf' | 'foneMobile'>> {
    const student = await prisma.student.findFirst({
      where: {
        OR: [
          { cpf },
          { foneMobile }
        ]
      },
      select: {
        cpf: true,
        foneMobile: true
      }
    });
    return student;
  }

  async checkById(id: string): Promise<StudentModel> {
    const student = await prisma.student.findUnique({
      where: { id },
    });
    return student;
  }
}