import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Bookmarks() {
  // మార్కెట్ యూజర్ కోసం ఇక్కడ ఎంప్టీ లిస్ట్ ఉంటుంది
  const [bookmarks] = useState([]); 
  const navigate = useNavigate();

  return (
    <div className="p-8 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">My Bookmarks</h1>
      
      {bookmarks.length === 0 ? (
        <div className="text-center bg-gray-900 border border-gray-800 p-16 rounded-3xl flex flex-col items-center justify-center">
          <div className="text-6xl mb-6">🔖</div>
          <h3 className="text-2xl font-bold mb-3">No bookmarks yet</h3>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            You haven't bookmarked any interview questions. Start exploring and save the ones you want to revise later!
          </p>
          <button 
            onClick={() => navigate('/questions')}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-bold transition duration-300"
          >
            Explore Questions
          </button>
        </div>
      ) : (
        <div className="grid gap-4">
          {/* ఫ్యూచర్ లో బుక్‌మార్క్స్ యాడ్ అయినప్పుడు ఇక్కడ కనిపిస్తాయి */}
          {bookmarks.map((item: any, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
              <h3 className="font-bold">{item.question}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}