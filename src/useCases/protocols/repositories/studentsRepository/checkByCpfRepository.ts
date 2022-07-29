import { StudentModel } from "../../../../domain/models/studentModel";

export interface CheckByCpfRepository {
  checkByCpf: (cpf: string) => Promise<StudentModel>
}