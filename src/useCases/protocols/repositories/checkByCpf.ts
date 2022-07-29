import { StudentModel } from "../../../domain/models/studentModel";

export interface CheckByCpf {
  checkByCpf: (cpf: string) => Promise<StudentModel>
}