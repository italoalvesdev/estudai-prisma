import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

import { JwtInvalidTokenError } from "./errors/jwtInvalidTokenError";
import { JwtTokenMissingError } from "./errors/jwtTokenMissingError";

import env from "../config/env";
import { PrismaStudentsRepository } from "../../adapters/repositories/prisma/PrismaStudentsRepository";

interface PayloadData {
  sub: string
}

export async function ensureAuthenticated(
  req: Request, 
  res: Response, 
  next: NextFunction
  ) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new JwtTokenMissingError();
    }

    const [, token] = authHeader.split(" ");

    try {
      const { sub: email } = verify(token, env.jwtSecret) as PayloadData;

      const prismaStudentsRepository = new PrismaStudentsRepository();

      const student = await prismaStudentsRepository.checkByEmail(email)

      if(!student) {
        throw new Error('STUDENT_NOT_EXISTING')
      }

      return next();
    } catch (err) {
      throw new JwtInvalidTokenError()
    }
}