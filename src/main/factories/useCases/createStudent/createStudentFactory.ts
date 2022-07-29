import { BcryptAdapter } from "../../../../adapters/criptography/bcryptAdapter";
import { PrismaStudentsRepository } from "../../../../adapters/repositories/prisma/PrismaStudentsRepository";
import { CreateStudent } from "../../../../domain/useCases/protocols/createStudent";
import { CreateStudentUseCase } from "../../../../useCases/createStudent/createStudentUseCase";

export const makeCreateStudentFactory = (): CreateStudent => {
  const salt = 8;
  const bcryptAdapter = new BcryptAdapter(salt);
  const prismaStudentsRepository = new PrismaStudentsRepository();
  return new CreateStudentUseCase(
    bcryptAdapter, 
    prismaStudentsRepository, 
    prismaStudentsRepository,
    prismaStudentsRepository,
    prismaStudentsRepository
  );
}