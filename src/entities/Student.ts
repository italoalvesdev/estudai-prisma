import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'

import bcrypt from 'bcryptjs'
import { v4 as uuid } from 'uuid'

@Entity('students')
export class Student {
  @PrimaryColumn()
  id: string

  @Column()
  fullName: string

  @Column()
  nickName?: string

  @Column()
  cpf: string

  @Column()
  birthday: Date

  @Column()
  zip: string

  @Column()
  state: string

  @Column()
  city: string

  @Column()
  fullAddress: string

  @Column()
  neighborhood: string

  @Column()
  addressDetails?: string

  @Column()
  foneMobile: string

  @Column()
  foneHome?: string

  @Column()
  foneCompany?: string

  @Column()
  email: string

  @Column()
  password: string

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}
