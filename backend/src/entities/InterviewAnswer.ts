// backend/src/entities/InterviewAnswer.ts
/**
 * InterviewAnswer entity - user answers within a mock interview.
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MockInterview } from './MockInterview';
import { Question } from './Question';

@Entity('interview_answers')
export class InterviewAnswer {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => MockInterview, (m) => m.answers)
  @JoinColumn({ name: 'interview_id' })
  interview!: MockInterview;

  @ManyToOne(() => Question, { nullable: true })
  @JoinColumn({ name: 'question_id' })
  question?: Question;

  @Column({ nullable: true })
  user_answer?: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  score?: number;

  @Column({ nullable: true })
  feedback?: string;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  answered_at!: Date;
}