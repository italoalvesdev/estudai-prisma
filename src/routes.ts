import { Request, Response, Router } from 'express'

import { CreateStudentController } from './app/controllers/CreateStudentController'
import AuthController from './app/controllers/AuthController'
import authMiddleware from './app/middlewares/authMiddleware'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  return res.send('Estudai API')
})
routes.post('/students', new CreateStudentController().handle)
routes.post('/auth', AuthController.authenticate)
routes.get('/students', authMiddleware, new CreateStudentController().index)

export { routes }
