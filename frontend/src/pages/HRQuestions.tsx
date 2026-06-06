import { useEffect, useState } from 'react';
import api from '../services/api';
export default function HRQuestions() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => { api.get('/questions?category=hr').then(r => setQuestions(r.data)); }, []);
  return (
    <div>
      <h1 className="text-white font-bold mb-4">HR Interview Questions</h1>
      {questions.map((q: any) => (
        <div key={q.id} className="bg-white p-4 rounded shadow mb-3">
          <p className="font-medium">{q.question_text}</p>
          <p className="text-gray-600 mt-1">{q.interview_answer}</p>
        </div>
      ))}
    </div>
  );
}