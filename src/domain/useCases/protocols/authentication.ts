export interface AuthenticationData {
  email: string
  password: string
}

export interface AuthenticationResponse {
  accessToken: string,
  refreshToken: string
}

export interface Authentication {
  auth(authentication: AuthenticationData): Promise<AuthenticationResponse>
}