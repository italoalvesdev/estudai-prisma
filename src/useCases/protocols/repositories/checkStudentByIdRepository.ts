import { StudentModel } from "../../../domain/models/studentModel";

export interface CheckStudentByIdRepository {
  checkById: (id: string) => Promise<StudentModel>
}