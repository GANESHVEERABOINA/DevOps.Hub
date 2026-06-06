// frontend/src/components/mockinterview/FeedbackPanel.tsx
/*
 * FeedbackPanel component
 * Why: Displays detailed performance analysis after a mock interview.
 * What it does: Shows overall score, strengths, weaknesses, and personalized feedback.
 * How it works: Fetches feedback from the backend API using the interview ID, then renders
 *               the data in a structured card layout with visual indicators.
 * Dependencies: axios (via api service), React state/effect hooks.
 * How to modify later: Change the feedback sections or add charts. Modify the API endpoint
 *                      in the fetch call if needed.
 * Common Mistakes: Not handling the loading/error states; not providing an empty state
 *                  when no feedback is available yet.
 */
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface FeedbackPanelProps {
  interviewId: string;
}

interface InterviewFeedback {
  score: number;
  strengths: string[];
  weaknesses: string[];
  feedback: string;
}

const FeedbackPanel: React.FC<FeedbackPanelProps> = ({ interviewId }) => {
  const [feedback, setFeedback] = useState<InterviewFeedback | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetch interview results from the backend
        const response = await api.get(`/mock-interviews/${interviewId}/feedback`);
        setFeedback(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load feedback');
        console.error('Error fetching interview feedback:', err);
      } finally {
        setLoading(false);
      }
    };

    if (interviewId) {
      fetchFeedback();
    }
  }, [interviewId]);

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-700">
        <p>⚠️ {error}</p>
        <button
          className="mt-2 text-sm underline hover:text-red-800"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!feedback) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
        <p>Complete the interview to see your feedback.</p>
      </div>
    );
  }

  // Score color logic
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      {/* Header with Score */}
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Interview Feedback</h2>
        <div className="mt-4 flex items-center gap-4">
          <div className={`text-5xl font-bold ${getScoreColor(feedback.score)}`}>
            {feedback.score}%
          </div>
          <div>
            <p className="text-gray-600">Overall Performance</p>
            <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
              {feedback.score >= 80 ? 'Excellent' : feedback.score >= 60 ? 'Good' : 'Needs Improvement'}
            </span>
          </div>
        </div>
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
        {/* Strengths */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Strengths
          </h3>
          {feedback.strengths.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {feedback.strengths.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-500 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-gray-500 italic">No specific strengths identified.</p>
          )}
        </div>

        {/* Weaknesses */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-red-700 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Areas to Improve
          </h3>
          {feedback.weaknesses.length > 0 ? (
            <ul className="mt-3 space-y-2">
              {feedback.weaknesses.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">✧</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-gray-500 italic">No specific weaknesses identified.</p>
          )}
        </div>
      </div>

      {/* Detailed Feedback */}
      <div className="p-6 border-t bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Detailed Feedback</h3>
        <p className="text-gray-700 whitespace-pre-line">{feedback.feedback}</p>
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-t flex justify-end gap-3">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          Print Report
        </button>
        <button
          onClick={() => window.location.href = '/mock-interview'}
          className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark"
        >
          Start New Interview
        </button>
      </div>
    </div>
  );
};

export default FeedbackPanel;