import { StudentModel } from "../../../../domain/models/studentModel";

export interface CheckByFoneMobileRepository {
  checkByFoneMobile: (foneMobile: string) => Promise<StudentModel>
}