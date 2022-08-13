export interface SendForgotPasswordMail {
  execute(email: string): Promise<void>
}