import { Validation } from "../../presentation/protocols/validation";
import { InvalidEmailError } from "../errors/invalidEmailError";
import { EmailValidator } from "../protocols/emailValidator";

export class EmailValidation implements Validation {
  constructor(
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator
  ) {}

  validate(input: any): Error {
    const isValid = this.emailValidator.isValid(input[this.fieldName]);
    if(!isValid) {
      return new InvalidEmailError(input[this.fieldName]);
    }
  }
}