import { StudentModel } from "../../../domain/models/studentModel";

export interface CheckByFoneMobile {
  checkByFoneMobile: (foneMobile: string) => Promise<StudentModel>
}