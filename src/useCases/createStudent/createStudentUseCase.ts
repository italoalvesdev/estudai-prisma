import { 
  CheckByCpfRepository,
  CheckByFoneMobileRepository,
  CheckStudentByEmailRepository,  
  CreateStudent, 
  CreateStudentData, 
  CreateStudentRepository, 
  Hasher
} from "./createStudentProtocols";

export class CreateStudentUseCase implements CreateStudent {
  constructor(
    private readonly encrypter: Hasher,
    private readonly createStudentRepository: CreateStudentRepository,
    private readonly checkStudentByEmailRepository: CheckStudentByEmailRepository,
    private readonly checkByCpfRepository: CheckByCpfRepository,
    private readonly checkByFoneMobileRepository: CheckByFoneMobileRepository
  ) {}

  async create(studentData: CreateStudentData): Promise<void> {
    const studentEmail = await this.checkStudentByEmailRepository
    .checkByEmail(studentData.email);

    const studentCpf = await this.checkByCpfRepository
    .checkByCpf(studentData.cpf);

    const studentFoneMobile = await this.checkByFoneMobileRepository
    .checkByFoneMobile(studentData.foneMobile);

    if(studentEmail) {
      throw new Error('STUDENT_EMAIL_EXISTING');
    }

    if(studentCpf) {
      throw new Error('STUDENT_CPF_EXISTING');
    }

    if(studentFoneMobile) {
      throw new Error('STUDENT_FONE_MOBILE_EXISTING');
    }

    const hashedPassword = await this.encrypter
    .hash(studentData.password);

    await this.createStudentRepository
    .create(Object.assign({}, studentData, { password: hashedPassword }));
  } 
}