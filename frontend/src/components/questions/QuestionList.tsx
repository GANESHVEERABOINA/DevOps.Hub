import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. useNavigate ని ఇంపోర్ట్ చెయ్
import api from '../../services/api';
import QuestionCard from './QuestionCard';

export default function QuestionList({ categorySlug, title }: { categorySlug: string; title: string }) {
  const [questions, setQuestions] = useState<any[]>([]);
  const navigate = useNavigate(); // 2. నావిగేషన్ సెటప్

  useEffect(() => {
    api.get(`/questions?category=${categorySlug}`)
      .then(res => {
        console.log(categorySlug, res.data);
        setQuestions(Array.isArray(res.data) ? res.data : []);
      })
      .catch(err => {
        console.error(categorySlug, err);
        setQuestions([]);
      });
  }, [categorySlug]);

  return (
    <div className="p-4">
      {/* 3. బ్యాక్ బటన్ + టైటిల్ సెక్షన్ */}
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate('/questions')} 
          className="p-2 rounded-full hover:bg-gray-800 transition text-white"
          aria-label="Back to topics"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-3xl font-bold text-white border-b border-gray-800 pb-4 flex-grow">
          {title}
        </h1>
      </div>
      
      <div className="grid gap-4">
        {questions.length > 0 ? (
          questions.map((q: any) => <QuestionCard key={q.id} question={q} />)
        ) : (
          <p className="text-gray-400">No questions available for this category yet.</p>
        )}
      </div>
    </div>
  );
}