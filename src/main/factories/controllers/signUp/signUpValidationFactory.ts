import { EmailValidatorAdapter } from '../../../../adapters/validators/emailValidatorAdapter'
import { Validation } from '../../../../presentation/protocols/validation'
import { EmailValidation } from '../../../../validation/validators/emailValidation'
import { RequiredFieldValidation } from '../../../../validation/validators/requiredFieldValidation'
import { ValidationComposite } from '../../../../validation/validators/validationComposite'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of [
    'fullName',
    'cpf',
    'birthday',
    'postalCode',
    'state',
    'city',
    'street',
    'neighborhood',
    'addressNumber',
    'foneMobile',
    'email',
    'password'
  ]) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
