// backend/src/entities/Category.ts
/**
 * Category entity - question categories (Linux, Docker, etc.).
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Question } from './Question';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ unique: true })
  slug!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  icon_url?: string;

  @ManyToOne(() => Category, { nullable: true })
  @JoinColumn({ name: 'parent_category_id' })
  parent?: Category;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;

  @OneToMany(() => Question, (q) => q.category)
  questions!: Question[];
}