import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { PayloadData } from "../../useCases/protocols/criptography";
import { JwtTokenMissingError } from "./errors/jwtTokenMissingError";
import { JwtInvalidTokenError } from "./errors/jwtInvalidTokenError";
import env from "../config/env";
import dayjs from "dayjs";

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  try {
    if (!authHeader) {
      return res.status(401).json({ error: new JwtTokenMissingError().message });
    }

    const [, token] = authHeader.split(" ");
    verify(token, env.accessTokenSecret) as PayloadData;
    
    
    next();
  } catch (err) {
    switch (err.message) {
      case 'jwt expired':
        return res.status(401).json({ error: 'JWT token expired', expiredAt: err?.expiredAt  })
    }
    console.log(err)
    return res.status(401).json({ error: new JwtInvalidTokenError().message })
  }
}