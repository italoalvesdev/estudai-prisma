import { Router } from "express"
import { adaptRoute } from "../adapters/expressRouteAdapter"
import { 
  makeSendForgotPasswordMailController 
} from "../factories/controllers/sendForgotPasswordMail/sendForgotPasswordMailControllerFactory"
import { 
  makeResetPasswordController 
} from "../factories/controllers/resetPassword/resetPasswordControllerFactory"

export default (router: Router): void => {
  router.post('/password/forgot', adaptRoute(makeSendForgotPasswordMailController()))
  router.post('/password/reset', adaptRoute(makeResetPasswordController()))
}
