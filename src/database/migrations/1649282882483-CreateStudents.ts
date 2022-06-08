import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateStudents1649282882483 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'students',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'fullName',
            type: 'text'
          },
          {
            name: 'nickName',
            type: 'text',
            isNullable: true
          },
          {
            name: 'cpf',
            type: 'text',
            isUnique: true
          },
          {
            name: 'birthday',
            type: 'date'
          },
          {
            name: 'zip',
            type: 'text'
          },
          {
            name: 'state',
            type: 'text'
          },
          {
            name: 'city',
            type: 'text'
          },
          {
            name: 'fullAddress',
            type: 'text'
          },
          {
            name: 'neighborhood',
            type: 'text'
          },
          {
            name: 'addressDetails',
            type: 'text',
            isNullable: true
          },
          {
            name: 'foneMobile',
            type: 'text',
            isUnique: true
          },
          {
            name: 'foneHome',
            type: 'text',
            isNullable: true
          },
          {
            name: 'foneCompany',
            type: 'text',
            isNullable: true
          },
          {
            name: 'email',
            type: 'text'
          },
          {
            name: 'password',
            type: 'text'
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('students')
  }
}
