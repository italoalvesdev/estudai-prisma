export interface StudentCreateData {
  fullName: string;
  nickName?: string;
  cpf: string;
  birthday: Date;
  zip: string;
  state: string
  city: string;
  fullAddress: string;
  neighborhood: string;
  addressDetails?: string
  foneMobile: string;
  foneHome?: string;
  foneCompany?: string
  email: string;
  password: string;
}

export interface IStudentsRepository {
  create: (data: StudentCreateData) => Promise<void>;
}