import { StudentModel } from "../../../domain/models/studentModel";

export interface CheckStudentByEmailRepository {
  checkByEmail: (email: string) => Promise<StudentModel>
}