// backend/src/entities/CompanyQuestion.ts
/**
 * CompanyQuestion entity - many-to-many link between companies and questions.
 */
import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { Company } from './Company';
import { Question } from './Question';

@Entity('company_questions')
export class CompanyQuestion {
  @PrimaryColumn()
  company_id!: number;

  @PrimaryColumn('uuid')
  question_id!: string;

  @ManyToOne(() => Company, (c) => c.companyQuestions)
  @JoinColumn({ name: 'company_id' })
  company!: Company;

  @ManyToOne(() => Question, (q) => q.companyQuestions)
  @JoinColumn({ name: 'question_id' })
  question!: Question;

  @Column({ type: 'varchar', length: 50, nullable: true })
  frequency?: string; // common, rare, medium
}