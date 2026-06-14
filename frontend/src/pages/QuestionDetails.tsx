import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate యాడ్ చేశాను
import api from '../services/api';

export default function QuestionDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // నావిగేషన్ కోసం
  
  const [question, setQuestion] = useState<any>(null);
  const [isBookmarked, setIsBookmarked] = useState(false); // బుక్‌మార్క్ స్టేట్

  useEffect(() => {
    api.get(`/questions/${id}`)
      .then((res) => {
        setQuestion(res.data);
        // నోట్: బ్యాకెండ్ నుండి యూజర్ బుక్‌మార్క్ డేటా వస్తే ఇక్కడ సెట్ చేయొచ్చు.
        // ఉదాహరణకు: setIsBookmarked(res.data.isBookmarked);
      })
      .catch(console.error);
  }, [id]);

  // బుక్‌మార్క్ బటన్ క్లిక్ చేసినప్పుడు జరిగే యాక్షన్
  const toggleBookmark = async () => {
    try {
      // ఇక్కడ నీ బుక్‌మార్క్ API ని కాల్ చేయాలి
      // await api.post('/bookmarks', { questionId: id });
      
      // సేవ్ అవ్వగానే బటన్ కలర్ మారడానికి
      setIsBookmarked(!isBookmarked);
    } catch (error) {
      console.error("Failed to bookmark", error);
    }
  };

  if (!question) {
    return <div className="text-white p-10 text-center min-h-[50vh] flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 text-white">
      
      {/* 1. Back Button (వెనక్కి వెళ్లడానికి) */}
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 font-medium"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span>Back</span>
      </button>

      {/* 2. Main Glassmorphism Box */}
      <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
        
        {/* 3. Bookmark Button (పైన కుడి వైపున) */}
        <button 
          onClick={toggleBookmark}
          className={`absolute top-6 right-6 md:top-8 md:right-8 p-3 rounded-full transition-all duration-300 z-10 ${
            isBookmarked 
              ? "bg-purple-500/20 text-purple-400 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.4)]" 
              : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
          }`}
          title="Save to Bookmarks"
        >
          <svg className="w-6 h-6" fill={isBookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>

        {/* క్వశ్చన్ టైటిల్ */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 pr-12 leading-tight">
          {question.question_text}
        </h1>

        {/* కంటెంట్ సెక్షన్స్ */}
        <div className="space-y-8">
          
          {question.simple_explanation && (
            <div className="group">
              <h2 className="text-xl font-bold text-purple-400 mb-3 flex items-center gap-2">
                <span className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">💡</span> 
                Simple Explanation
              </h2>
              {/* లోపల చదవడానికి వీలుగా చిన్న గ్లాస్ కార్డ్ */}
              <p className="text-white/85 text-lg leading-relaxed bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                {question.simple_explanation}
              </p>
            </div>
          )}

          {question.interview_answer && (
            <div className="group">
              <h2 className="text-xl font-bold text-blue-400 mb-3 flex items-center gap-2">
                <span className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">🎤</span> 
                Interview Answer
              </h2>
              <p className="text-white/85 text-lg leading-relaxed bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                {question.interview_answer}
              </p>
            </div>
          )}

          {question.real_world_example && (
            <div className="group">
              <h2 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
                <span className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">🌍</span> 
                Real World Example
              </h2>
              <p className="text-white/85 text-lg leading-relaxed bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                {question.real_world_example}
              </p>
            </div>
          )}

          {question.common_mistakes && (
            <div className="group">
              <h2 className="text-xl font-bold text-red-400 mb-3 flex items-center gap-2">
                <span className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">⚠️</span> 
                Common Mistakes
              </h2>
              <p className="text-white/85 text-lg leading-relaxed bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                {question.common_mistakes}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}