import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { PayloadData } from "../../useCases/protocols/criptography";
import { 
  PrismaStudentsTokensRepository 
} from "../../adapters/repositories/prisma/PrismaStudentsTokensRepository";

import { JwtTokenMissingError } from "./errors/jwtTokenMissingError";
import { JwtInvalidTokenError } from "./errors/jwtInvalidTokenError";
import env from "../config/env";


export async function ensureAuthenticated(
  req: Request, 
  res: Response, 
  next: NextFunction
  ) {
    const authHeader = req.headers.authorization;

    const prismaStudentsTokensRepository = new PrismaStudentsTokensRepository()

    if (!authHeader) {
      throw new JwtTokenMissingError();
    }

    const [, token] = authHeader.split(" ");

    try {
      const { sub: id } = verify(token, env.refreshTokenSecret) as PayloadData;

      const student = await prismaStudentsTokensRepository
      .checkByIdAndRefreshToken(id, token)

      if(!student) {
        throw new Error('STUDENT_NOT_EXISTING')
      }

      return next();
    } catch (err) {
      throw new JwtInvalidTokenError()
    }
}