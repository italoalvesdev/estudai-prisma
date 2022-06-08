import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { Student } from '../../entities/Student'

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(Student)
    const { cpf, foneMobile, email, password } = req.body

    const student = await repository.findOne({
      where: [{ email }, { cpf }, { foneMobile }],
    })

    if (!student) {
      return res.sendStatus(401)
    }

    const isValidPassword = await bcrypt.compare(password, student.password)

    if (!isValidPassword) {
      return res.sendStatus(401)
    }

    const token = jwt.sign({ id: student.id }, String(process.env.SECRET_KEY), {
      expiresIn: '1d',
    })

    // delete student.password

    return res.json({
      student,
      token,
    })
  }
}

export default new AuthController()
