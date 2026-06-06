// backend/src/entities/Role.ts
/**
 * Role entity - defines user roles (admin, user, moderator).
 * Used for role-based access control.
 */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from './User';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  updated_at!: Date;

  @OneToMany(() => User, (user) => user.role)
  users!: User[];
}