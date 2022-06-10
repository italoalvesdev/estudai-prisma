import express from 'express';
import { 
  PrismaStudentsRepository 
} from './repositories/prisma/PrismaStudentsRepository';
import { AuthStudentUseCase } from './useCases/authStudentUseCase';
import { SubmitStudentUseCase } from './useCases/submitStudentUseCase';

export const routes = express.Router();

routes.post('/students', async (req, res) => {
  const {
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
  } = req.body;

  const prismaStudentsRepository = new PrismaStudentsRepository();

  const submitStudentUseCase = new SubmitStudentUseCase(
    prismaStudentsRepository
  );

  await submitStudentUseCase.execute({
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
  }).catch(({ message }: Error) => {
    return res.status(409).json({
      message,
    })
  })

  return res.status(201).send();
}),

routes.post('/auth', async (req, res) => {
  const {
    email,
    password
  } = req.body;

  const authStudentUseCase = new AuthStudentUseCase();

  await authStudentUseCase.execute({
    email,
    password
  }).then((token) => {
    return res.json({
      token,
    });
  }).catch(({ message }: Error) => {
    res.status(401).json({
      message,
    });
  });
});

// routes.get('/students', authMiddleware, new CreateStudentController().index)