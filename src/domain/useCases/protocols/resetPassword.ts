export interface ResetPassword {
  reset(token: string, password: string): Promise<void>
}