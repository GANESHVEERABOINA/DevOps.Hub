// backend/src/entities/Company.ts
/**
 * Company entity - company for company-specific questions.
 */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CompanyQuestion } from './CompanyQuestion';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  website?: string;

  @Column({ nullable: true })
  logo_url?: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => CompanyQuestion, (cq) => cq.company)
  companyQuestions!: CompanyQuestion[];
}