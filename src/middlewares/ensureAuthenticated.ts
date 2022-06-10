import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

export function ensureAuthenticated(
  req: Request, 
  res: Response, 
  next: NextFunction
  ) {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        message: "Token is missing",
      });
    }

    const [, token] = authorization.split(" ");

    try {
      verify(token, process.env.SECRET_KEY);

      return next();
    } catch (err) {
      return res.status(401).json({
        message: "Token invalid",
      })
    }
}