import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeLoginController } from '../factories/controllers/login/loginControllerFactory'
import { makeSignUpController } from '../factories/controllers/signUp/signUpControllerFactory'

export default (router: Router): void => {
  router.post('/students', adaptRoute(makeSignUpController()))
  router.post('/auth', adaptRoute(makeLoginController()))
}
