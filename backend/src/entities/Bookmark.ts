// backend/src/entities/Bookmark.ts
/**
 * Bookmark entity - user bookmarks.
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { User } from './User';

@Entity('bookmarks')
@Unique(['user', 'item_type', 'item_id'])
export class Bookmark {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (u) => u.bookmarks)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ type: 'varchar', length: 50 })
  item_type!: string; // question, project, roadmap

  @Column()
  item_id!: string;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;
}