// backend/src/entities/Resume.ts
/**
 * Resume entity - stored resume data.
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('resume_data')
export class Resume {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (u) => u.resumes)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ nullable: true })
  resume_name?: string;

  @Column('jsonb')
  personal_info!: any;

  @Column('jsonb', { nullable: true })
  skills?: any;

  @Column('jsonb', { nullable: true })
  projects?: any;

  @Column('jsonb', { nullable: true })
  experience?: any;

  @Column('jsonb', { nullable: true })
  education?: any;

  @Column('jsonb', { nullable: true })
  certifications?: any;

  @Column('jsonb', { nullable: true })
  achievements?: any;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  ats_score?: number;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  updated_at!: Date;
}