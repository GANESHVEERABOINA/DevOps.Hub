// frontend/src/components/mockinterview/QuestionGenerator.tsx
/*
 * QuestionGenerator component
 * Why: Displays a single interview question and collects the user's answer.
 * What it does: Shows question text, difficulty badge, and a text input area.
 *               On submission, calls the onAnswer callback with the answer.
 * How it works: Maintains local answer state, validates non-empty input, and provides
 *               clear/reset functionality. Supports keyboard shortcut (Ctrl+Enter) to submit.
 * Dependencies: React useState, TypeScript interfaces.
 * How to modify later: Add a character counter, speech-to-text, or a hint system.
 * Common Mistakes: Forgetting to handle the edge case when question is null/undefined;
 *                  not disabling the submit button while processing.
 */
import React, { useState, useRef, useEffect } from 'react';

interface Question {
  id: string;
  question_text: string;
  difficulty?: string;
  category?: { name: string };
  interview_answer?: string; // Not shown to user during mock
}

interface QuestionGeneratorProps {
  question: Question | null;
  onAnswer: (questionId: string, answer: string) => void;
  isLoading?: boolean; // When the next question is being fetched
}

const QuestionGenerator: React.FC<QuestionGeneratorProps> = ({ question, onAnswer, isLoading = false }) => {
  const [answer, setAnswer] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Reset answer and error when question changes
  useEffect(() => {
    setAnswer('');
    setError(null);
    // Focus the textarea when a new question appears
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [question?.id]);

  const handleSubmit = () => {
    const trimmedAnswer = answer.trim();
    if (!trimmedAnswer) {
      setError('Please provide an answer before submitting.');
      return;
    }
    if (!question) return;
    setError(null);
    onAnswer(question.id, trimmedAnswer);
  };

  const handleClear = () => {
    setAnswer('');
    setError(null);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  // Keyboard shortcut: Ctrl+Enter to submit
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  // If no question is available (shouldn't happen)
  if (!question) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
        <p>No question available. Please start a new interview.</p>
      </div>
    );
  }

  const difficultyColors: Record<string, string> = {
    basic: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
    scenario: 'bg-purple-100 text-purple-800',
    production: 'bg-blue-100 text-blue-800',
    troubleshooting: 'bg-orange-100 text-orange-800',
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      {/* Question Header */}
      <div className="p-6 border-b bg-gray-50">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {question.category && (
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-gray-200 text-gray-700">
              {question.category.name}
            </span>
          )}
          {question.difficulty && (
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${difficultyColors[question.difficulty] || 'bg-gray-200 text-gray-700'}`}>
              {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
            </span>
          )}
        </div>
        <h2 className="text-xl font-bold text-gray-800 leading-relaxed">
          {question.question_text}
        </h2>
      </div>

      {/* Answer Input Area */}
      <div className="p-6">
        <label htmlFor="answer-input" className="block text-sm font-medium text-gray-700 mb-1">
          Your Answer
        </label>
        <textarea
          ref={textareaRef}
          id="answer-input"
          rows={8}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-y transition text-gray-700 placeholder-gray-400"
          placeholder="Type your answer here... (Ctrl+Enter to submit)"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            if (error) setError(null);
          }}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
        <div className="flex justify-between mt-3">
          <button
            onClick={handleClear}
            disabled={isLoading || answer.length === 0}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear
          </button>
          <div className="flex gap-2 items-center">
            {isLoading && (
              <span className="text-sm text-gray-500">Submitting...</span>
            )}
            <button
              onClick={handleSubmit}
              disabled={isLoading || answer.trim().length === 0}
              className="px-6 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionGenerator;