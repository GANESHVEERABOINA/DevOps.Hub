import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cybersecurity: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      {/* బ్యాక్ బటన్ మరియు టైటిల్ సెక్షన్ */}
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
          Cybersecurity
        </h1>
      </div>

      {/* Coming Soon మెసేజ్ సెక్షన్ */}
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <div className="text-6xl mb-6">🚀</div> 
        <h2 className="text-2xl font-bold text-white mb-2">Coming Soon</h2>
        <p className="text-gray-400 max-w-sm mx-auto">
          We are working hard to add content for this topic. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Cybersecurity;