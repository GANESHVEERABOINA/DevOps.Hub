// frontend/src/components/mockinterview/ScoreBoard.tsx
/*
 * ScoreBoard component
 * Why: Displays a live-updating score summary during a mock interview.
 * What it does: Shows total questions answered, current score, and per-question status.
 * How it works: Receives the list of questions and a record of user answers.
 *               Calculates progress and displays a color-coded bar for each question.
 * Dependencies: React, props interface.
 * How to modify later: Add a timer sync, export score as PDF, or integrate with the backend scoring.
 * Common Mistakes: Not handling empty arrays; assuming answers map exactly to questions.
 */

import React from 'react';

interface Question {
  id: string;
  question_text: string;
}

interface ScoreBoardProps {
  questions: Question[];
  answers: Record<string, string>; // questionId -> answer
  currentIndex: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ questions, answers, currentIndex }) => {
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = totalQuestions === 0 ? 0 : Math.round((answeredCount / totalQuestions) * 100);

  // Determine status per question: answered, current, unanswered
  const getQuestionStatus = (questionId: string, index: number) => {
    if (index === currentIndex) return 'current';
    if (answers[questionId]) return 'answered';
    return 'unanswered';
  };

  const statusColors: Record<string, string> = {
    answered: 'bg-green-500',
    current: 'bg-yellow-500',
    unanswered: 'bg-gray-300',
  };

  if (totalQuestions === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
        <p>No questions yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Progress</h2>
        <span className="text-sm font-medium text-gray-600">
          {answeredCount} / {totalQuestions} answered
        </span>
      </div>

      {/* Overall Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div
          className="bg-primary h-3 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Individual Question Indicators */}
      <div className="space-y-2">
        {questions.map((q, idx) => {
          const status = getQuestionStatus(q.id, idx);
          return (
            <div key={q.id} className="flex items-center gap-3">
              <div
                className={`w-4 h-4 rounded-full flex-shrink-0 ${statusColors[status]} transition-colors`}
                title={status.charAt(0).toUpperCase() + status.slice(1)}
              />
              <span
                className={`text-sm truncate ${
                  status === 'current' ? 'font-semibold text-gray-800' : 'text-gray-500'
                }`}
              >
                {q.question_text}
              </span>
              {status === 'current' && (
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full ml-auto flex-shrink-0">
                  Current
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScoreBoard;