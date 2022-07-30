import { Validation } from "../../../../presentation/protocols/validation";
import { RequiredFieldValidation } from "../../../../validation/validators/requiredFieldValidation";
import { ValidationComposite } from "../../../../validation/validators/validationComposite";

export const makeRefreshTokenValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['token']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}