// backend/src/entities/User.ts
/**
 * User entity - core user account data.
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Bookmark } from './Bookmark';
import { MockInterview } from './MockInterview';
import { Resume } from './Resume';

import { Role } from './Role';
import { UserAchievement } from './UserAchievement';
import { UserProgress } from './UserProgress';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password_hash!: string;

  @Column({ nullable: true })
  full_name?: string;

  @Column({ nullable: true })
  avatar_url?: string;

  @ManyToOne(() => Role, { eager: true })
  @JoinColumn({ name: 'role_id' })
  role!: Role;

  @Column({ default: true })
  is_active!: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  last_login?: Date;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  updated_at!: Date;

  @OneToMany(() => Bookmark, (b) => b.user)
  bookmarks!: Bookmark[];

  @OneToMany(() => MockInterview, (m) => m.user)
  mockInterviews!: MockInterview[];

  @OneToMany(() => UserAchievement, (ua) => ua.user)
  userAchievements!: UserAchievement[];

  @OneToMany(() => UserProgress, (p) => p.user)
  progress!: UserProgress[];

  @OneToMany(() => Resume, (r) => r.user)
  resumes!: Resume[];
}