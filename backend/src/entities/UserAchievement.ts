// backend/src/entities/UserAchievement.ts
/**
 * UserAchievement entity - links users to unlocked achievements.
 */
import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { User } from './User';
import { Achievement } from './Achievement';

@Entity('user_achievements')
export class UserAchievement {
  @PrimaryColumn('uuid')
  user_id!: string;

  @PrimaryColumn('int')
  achievement_id!: number;

  @ManyToOne(() => User, (u) => u.userAchievements)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @ManyToOne(() => Achievement)
  @JoinColumn({ name: 'achievement_id' })
  achievement!: Achievement;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  unlocked_at!: Date;
}