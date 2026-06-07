import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

export default function QuestionDetails() {
  const { id } = useParams();
  const [question, setQuestion] = useState<any>(null);

  useEffect(() => {
    api.get(`/questions/${id}`)
      .then((res) => setQuestion(res.data))
      .catch(console.error);
  }, [id]);

  if (!question) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-8 text-white">
      <h1 className="text-4xl font-bold mb-8">
        {question.question_text}
      </h1>

      <div className="space-y-8">

        <div>
          <h2 className="text-2xl font-bold text-purple-400">
            Simple Explanation
          </h2>
          <p>{question.simple_explanation}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            Interview Answer
          </h2>
          <p>{question.interview_answer}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-400">
            Real World Example
          </h2>
          <p>{question.real_world_example}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-red-400">
            Common Mistakes
          </h2>
          <p>{question.common_mistakes}</p>
        </div>

      </div>
    </div>
  );
}