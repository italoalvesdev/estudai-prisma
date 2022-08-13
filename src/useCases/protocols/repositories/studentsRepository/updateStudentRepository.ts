export interface UpdateStudentRepository {
  updatePassword(id: string, password: string): Promise<void>
}