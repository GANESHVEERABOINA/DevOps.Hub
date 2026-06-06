// backend/src/entities/AuditLog.ts
/**
 * AuditLog entity - records important user actions.
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('audit_logs')
export class AuditLog {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @Column()
  action!: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  resource_type?: string;

  @Column({ nullable: true })
  resource_id?: string;

  @Column('jsonb', { nullable: true })
  changes?: any;

  @Column({ type: 'inet', nullable: true })
  ip_address?: string;

  @Column({ nullable: true })
  user_agent?: string;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;
}