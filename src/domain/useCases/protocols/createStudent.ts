export interface CreateStudentData {
  fullName: string
  nickName?: string
  cpf: string
  birthday: Date
  postalCode: string
  state: string
  city: string
  street: string
  neighborhood: string
  addressNumber: string
  details?: string
  foneMobile: string
  foneHome?: string
  email: string
  password: string
}

export interface CreateStudent {
  create: (student: CreateStudentData) => Promise<void>
}
