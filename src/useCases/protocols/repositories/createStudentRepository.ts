import { CreateStudentData } from '../../../domain/useCases/protocols/createStudent'

export interface CreateStudentRepository {
  create: (data: CreateStudentData) => Promise<void>
}