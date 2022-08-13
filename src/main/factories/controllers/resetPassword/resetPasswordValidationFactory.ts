import { Validation } from "../../../../presentation/protocols/validation"
import { RequiredFieldValidation } from "../../../../validation/validators/requiredFieldValidation"
import { ValidationComposite } from "../../../../validation/validators/validationComposite"

export const makeResetPasswordValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}