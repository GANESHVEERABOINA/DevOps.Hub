// frontend/src/components/mockinterview/Timer.tsx
/*
 * Timer component
 * Why: Tracks remaining time during a mock interview session.
 * What it does: Displays a countdown timer with start, pause, resume, and reset controls.
 *               Provides visual feedback as time decreases (color changes, progress bar).
 * How it works: Uses setInterval to decrement remaining seconds. When time reaches zero,
 *               calls onTimeUp callback. Pause/resume toggle using useState.
 * Dependencies: React hooks (useState, useEffect, useRef), Tailwind CSS.
 * How to modify later: Adjust the initial duration, add sound alerts, or change the UI layout.
 * Common Mistakes: Forgetting to clear interval on unmount; not handling the case where
 *                  timer is paused while expired.
 */
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface TimerProps {
  minutes?: number;        // Initial minutes (default 15)
  onTimeUp?: () => void;   // Callback when time expires
}

const Timer: React.FC<TimerProps> = ({ minutes = 15, onTimeUp }) => {
  const totalSeconds = minutes * 60;
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(true);
  const [isExpired, setIsExpired] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Format seconds to MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate progress percentage
  const progressPercent = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;

  // Color based on remaining time
  const getTimerColor = () => {
    const fraction = remainingSeconds / totalSeconds;
    if (fraction > 0.5) return 'text-green-600';
    if (fraction > 0.25) return 'text-yellow-600';
    return 'text-red-600';
  };

  // Progress bar color
  const getProgressBarColor = () => {
    const fraction = remainingSeconds / totalSeconds;
    if (fraction > 0.5) return 'bg-green-500';
    if (fraction > 0.25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  // Clear interval helper
  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Tick
  const tick = useCallback(() => {
    setRemainingSeconds((prev) => {
      if (prev <= 1) {
        clearTimer();
        setIsRunning(false);
        setIsExpired(true);
        if (onTimeUp) onTimeUp();
        return 0;
      }
      return prev - 1;
    });
  }, [clearTimer, onTimeUp]);

  // Start interval when running
  useEffect(() => {
    if (isRunning && remainingSeconds > 0) {
      intervalRef.current = setInterval(tick, 1000);
    } else {
      clearTimer();
    }
    return () => clearTimer();
  }, [isRunning, tick, clearTimer, remainingSeconds]);

  const handlePauseResume = () => {
    if (isExpired) return; // can't resume after time up
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearTimer();
    setIsRunning(true);
    setIsExpired(false);
    setRemainingSeconds(totalSeconds);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      {/* Timer Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-600">Time Remaining</h3>
        {isExpired && (
          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">
            Time's Up
          </span>
        )}
      </div>

      {/* Timer Display */}
      <div className={`text-5xl font-bold text-center my-4 ${getTimerColor()} font-mono`}>
        {formatTime(remainingSeconds)}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-linear ${getProgressBarColor()}`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-3">
        {!isExpired && (
          <button
            onClick={handlePauseResume}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              isRunning
                ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
          >
            {isRunning ? 'Pause' : 'Resume'}
          </button>
        )}
        <button
          onClick={handleReset}
          className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;