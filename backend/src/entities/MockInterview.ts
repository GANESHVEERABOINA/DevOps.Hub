// backend/src/entities/MockInterview.ts
/**
 * MockInterview entity - interview session.
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from './User';
import { InterviewAnswer } from './InterviewAnswer';

@Entity('mock_interviews')
export class MockInterview {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (u) => u.mockInterviews)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  started_at!: Date;

  @Column({ type: 'timestamptz', nullable: true })
  finished_at?: Date;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  score?: number;

  @Column('jsonb', { default: '[]' })
  strengths!: string[];

  @Column('jsonb', { default: '[]' })
  weaknesses!: string[];

  @Column({ nullable: true })
  feedback?: string;

  @Column({ type: 'varchar', length: 50, default: 'general' })
  interview_type!: string;

  @OneToMany(() => InterviewAnswer, (ans) => ans.interview)
  answers!: InterviewAnswer[];
}