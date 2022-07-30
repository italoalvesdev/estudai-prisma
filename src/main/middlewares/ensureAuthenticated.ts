import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { PayloadData } from "../../useCases/protocols/criptography";

import { JwtTokenMissingError } from "./errors/jwtTokenMissingError";
import { JwtInvalidTokenError } from "./errors/jwtInvalidTokenError";
import env from "../config/env";


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
      verify(token, env.accessTokenSecret) as PayloadData;

      next();
    } catch (err) {
      throw new JwtInvalidTokenError()
    }
}