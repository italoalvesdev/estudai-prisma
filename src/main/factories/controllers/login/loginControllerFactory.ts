import { LoginController } from "../../../../presentation/controllers/login/loginController";
import { Controller } from "../../../../presentation/protocols";
import { makeAuthStudentFactory } from "../../useCases/authStudent/authStudentFactory";
import { makeLoginValidation } from "./loginValidationFactory";

export const makeLoginController = (): Controller => {
  return new LoginController(makeAuthStudentFactory(), makeLoginValidation());
}