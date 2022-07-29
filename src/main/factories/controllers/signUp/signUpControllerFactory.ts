import { SignUpController } from "../../../../presentation/controllers/signUp/signUpController";
import { Controller } from "../../../../presentation/protocols/controller";
import { makeCreateStudentFactory } from "../../useCases/createStudent/createStudentFactory";
import { makeSignUpValidation } from "./signUpValidationFactory";

export const makeSignUpController = (): Controller => {
  return new SignUpController(
    makeCreateStudentFactory(), 
    makeSignUpValidation(), 
  );
}