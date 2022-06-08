import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'estudai',
  entities: ['src/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts']
})
