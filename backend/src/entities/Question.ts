// backend/src/entities/Question.ts
/**
 * Question entity - interview question with all metadata.
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from './Category';
import { Company } from './Company';
import { CompanyQuestion } from './CompanyQuestion';

@Entity('questions')
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  question_text!: string;

  @Column({ nullable: true })
  simple_explanation?: string;

  @Column({ nullable: true })
  interview_answer?: string;

  @Column({ nullable: true })
  real_world_example?: string;

  @Column({ nullable: true })
  common_mistakes?: string;

  @Column({ type: 'varchar', length: 20 })
  difficulty!: string;

  @Column('uuid', { array: true, default: '{}' })
  related_question_ids!: string[];

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category!: Category;

  @ManyToOne(() => Company, { nullable: true })
  @JoinColumn({ name: 'company_id' })
  company?: Company;

  @Column({ default: false })
  is_verified!: boolean;

  @Column({ default: 0 })
  view_count!: number;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  updated_at!: Date;

  @OneToMany(() => CompanyQuestion, (cq) => cq.question)
  companyQuestions!: CompanyQuestion[];
}