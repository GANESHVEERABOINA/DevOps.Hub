// backend/src/entities/SearchHistory.ts
/**
 * SearchHistory entity - logs user search queries.
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('search_history')
export class SearchHistory {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user?: User;

  @Column()
  query!: string;

  @Column('jsonb', { nullable: true })
  filters?: any;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  searched_at!: Date;
}