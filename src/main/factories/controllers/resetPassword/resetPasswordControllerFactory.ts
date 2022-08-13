import { ResetPasswordController } from "../../../../presentation/controllers/resetPassword/resetPasswordController"
import { Controller } from "../../../../presentation/protocols/controller"
import { makeResetPasswordFactory } from "../../useCases/resetPassword/resetPasswordFactory"
import { makeResetPasswordValidation } from "./resetPasswordValidationFactory"

export const makeResetPasswordController = (): Controller => {
  return new ResetPasswordController(makeResetPasswordFactory(), makeResetPasswordValidation())
}