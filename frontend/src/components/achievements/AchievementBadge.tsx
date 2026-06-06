// frontend/src/components/achievements/AchievementBadge.tsx
/*
 * AchievementBadge component
 * Why: Renders a single achievement card with unlock status.
 * What it does: Shows badge icon, name, description, points, and locked/unlocked state.
 * How to modify: Add glow effect or particle animation on hover for unlocked badges.
 */
import React from 'react';

interface AchievementBadgeProps {
  achievement: {
    id: number;
    name: string;
    description: string;
    badge_icon_url: string;
    points: number;
  };
  isUnlocked: boolean;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ achievement, isUnlocked }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow p-6 text-center transition-all duration-300 ${
        isUnlocked ? 'ring-2 ring-yellow-400' : 'opacity-60'
      }`}
    >
      <div className="relative w-20 h-20 mx-auto mb-4">
        {achievement.badge_icon_url ? (
          <img
            src={achievement.badge_icon_url}
            alt={achievement.name}
            className={`w-full h-full object-contain ${!isUnlocked && 'grayscale'}`}
          />
        ) : (
          <div
            className={`w-full h-full rounded-full flex items-center justify-center text-3xl ${
              isUnlocked ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-200 text-gray-400'
            }`}
          >
            🏆
          </div>
        )}
        {isUnlocked && (
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
            ✓
          </span>
        )}
      </div>
      <h3 className={`text-lg font-semibold ${isUnlocked ? 'text-gray-800' : 'text-gray-500'}`}>
        {achievement.name}
      </h3>
      <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
      <div className="mt-3 flex justify-center items-center gap-2">
        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
          {achievement.points} pts
        </span>
        {isUnlocked && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            Unlocked
          </span>
        )}
      </div>
    </div>
  );
};

export default AchievementBadge;