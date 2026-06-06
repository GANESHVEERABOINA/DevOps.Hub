import { useEffect, useState } from 'react';
import api from '../../services/api';
import QuestionCard from './QuestionCard';
export default function QuestionList({ categorySlug, title }: { categorySlug: string; title: string }) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    api.get(`/questions?category=${categorySlug}`).then(res => setQuestions(res.data));
  }, [categorySlug]);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="grid gap-4">{questions.map((q:any) => <QuestionCard key={q.id} question={q} />)}</div>
    </div>
  );
}