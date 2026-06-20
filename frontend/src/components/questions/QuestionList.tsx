import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import QuestionCard from './QuestionCard';
import { Pagination } from '../ui/pagination'; 

export default function QuestionList({ categorySlug, title }: { categorySlug: string; title: string }) {
  const [questions, setQuestions] = useState<any[]>([]);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  useEffect(() => {
    api.get(`/questions?category=${categorySlug}`)
      .then(res => {
        setQuestions(Array.isArray(res.data) ? res.data : []);
        setCurrentPage(1); 
      })
      .catch(err => {
        setQuestions([]);
      });
  }, [categorySlug]);

  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const startIndex = (currentPage - 1) * questionsPerPage;
  
  // ఇక్కడ ఎలాంటి లాక్ లేదు, డైరెక్ట్ గా ఆ పేజీలోని 10 క్వశ్చన్స్ చూపిస్తాం
  const currentQuestions = questions.slice(startIndex, startIndex + questionsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <div className="p-4 max-w-4xl mx-auto pb-20 text-white">
      
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate('/questions')} 
          className="p-2 rounded-full hover:bg-white/10 transition text-gray-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-3xl font-bold text-white border-b border-white/10 pb-4 flex-grow">
          {title}
        </h1>
      </div>
      
      <div className="grid gap-4">
        {currentQuestions.length > 0 ? (
          currentQuestions.map((q: any) => <QuestionCard key={q.id} question={q} />)
        ) : (
          <p className="text-gray-400 text-center py-10">Loading questions...</p>
        )}
      </div>

      {/* ఫుల్ యాక్సెస్ ఉన్న క్వశ్చన్స్ కి Pagination బార్ వస్తుంది */}
      {questions.length > questionsPerPage && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      )}

    </div>
  );
}