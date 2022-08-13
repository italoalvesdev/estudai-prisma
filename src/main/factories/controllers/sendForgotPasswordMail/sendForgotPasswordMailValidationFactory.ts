import { Validation } from "../../../../presentation/protocols";
import { RequiredFieldValidation } from "../../../../validation/validators/requiredFieldValidation";
import { ValidationComposite } from "../../../../validation/validators/validationComposite";

export const makeSendForgotPasswordMailValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for(const field of ['email']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}