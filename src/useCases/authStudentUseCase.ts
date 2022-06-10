import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken'

import { studentAlreadyExists } from "../repositories/prisma/PrismaStudentsRepository";

interface AuthStudentUseCaseRequest {
  cpf?: string;
  foneMobile?: string;
  email: string;
  password: string;
}

export class AuthStudentUseCase {
  async execute(request: AuthStudentUseCaseRequest) {
    const {
      cpf,
      foneMobile,
      email,
      password
    } = request

    const result = await studentAlreadyExists({
      cpf,
      foneMobile,
      email
    });

    if(!result) {
      throw new Error('Email or password incorrect');
    }

    const passwordMatch = await compare(password, result.password)

    if(!passwordMatch) {
      throw new Error('Email or password incorrect');
    }

    const token = jwt.sign({id: result.id}, process.env.SECRET_KEY, {
      subject: result.id,
      expiresIn: '900s'
    });

    return token;
  }
}