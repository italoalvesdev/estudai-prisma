import { EmailValidator } from "../../validation/protocols/emailValidator";
import isEmail from 'validator/lib/isEmail';

export class EmailValidatorAdapter implements EmailValidator {
  isValid(email: string): boolean {
    return isEmail(email)
  }
}