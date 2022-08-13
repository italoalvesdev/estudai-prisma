import { SendForgotPasswordMailController } from "../../../../presentation/controllers/sendForgotPasswordMail/sendForgotPasswordMailController";
import { Controller } from "../../../../presentation/protocols";
import { makeSendForgotPasswordMailFactory } from "../../useCases/sendForgotPasswordMail/sendForgotPasswordMailFactory";
import { makeSendForgotPasswordMailValidation } from "./sendForgotPasswordMailValidationFactory";

export const makeSendForgotPasswordMailController = (): Controller => {
  return new SendForgotPasswordMailController(makeSendForgotPasswordMailFactory(), makeSendForgotPasswordMailValidation())
}