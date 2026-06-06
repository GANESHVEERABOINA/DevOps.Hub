// frontend/src/components/roadmap/ProgressBar.tsx
/*
 * ProgressBar component
 * Why: Visualizes completion percentage for roadmaps and topics.
 * How to modify: Adjust the color, size, or add animation via Tailwind classes.
 * Common Mistakes: Forgetting to clamp percent between 0 and 100.
 */
import React from 'react';

interface ProgressBarProps {
  percent: number; // 0-100
  label?: string;
  height?: string; // Tailwind height classes, e.g., 'h-2', 'h-4'
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent, label, height = 'h-2' }) => {
  // Ensure percent stays within 0-100
  const safePercent = Math.min(100, Math.max(0, percent));

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-medium text-gray-500">{safePercent}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${height}`}>
        <div
          className={`bg-primary rounded-full ${height} transition-all duration-300 ease-in-out`}
          style={{ width: `${safePercent}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;