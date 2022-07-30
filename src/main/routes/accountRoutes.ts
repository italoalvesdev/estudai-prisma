import { Router } from 'express'
import { adaptRoute } from '../adapters/expressRouteAdapter'
import { makeLoginController } from '../factories/controllers/login/loginControllerFactory'
import { makeSignUpController } from '../factories/controllers/signUp/signUpControllerFactory'
import { makeRefreshTokenController } from '../factories/controllers/refreshToken/refreshTokenControllerFactory'

export default (router: Router): void => {
  router.post('/students', adaptRoute(makeSignUpController()))
  router.post('/auth', adaptRoute(makeLoginController()))
  router.post('/refresh-token', adaptRoute(makeRefreshTokenController()))
}
