import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// బుక్‌మార్క్ ఐటమ్ స్ట్రక్చర్ కోసం ఒక టైప్ డెఫినిషన్ (TypeScript కోసం)
interface BookmarkItem {
  id: string | number;
  question: string;
  category?: string;
}

export default function Bookmarks() {
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]); 

  // పేజీ లోడ్ అవ్వగానే LocalStorage నుండి బుక్‌మార్క్స్ రీడ్ చేస్తుంది
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('devops_bookmarks');
    if (savedBookmarks) {
      try {
        setBookmarks(JSON.parse(savedBookmarks));
      } catch (error) {
        console.error("Error parsing bookmarks from localStorage", error);
      }
    }
  }, []);

  // బుక్‌మార్క్ రిమూవ్ చేయాలనుకుంటే ఉపయోగపడే ఫంక్షన్
  const removeBookmark = (id: string | number) => {
    const updated = bookmarks.filter(item => item.id !== id);
    setBookmarks(updated);
    localStorage.setItem('devops_bookmarks', JSON.stringify(updated));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 text-white min-h-screen">
      
      {/* టైటిల్ సెక్షన్ */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">My Bookmarks</h1>
        <p className="text-gray-400 text-lg">Your saved interview questions for quick revision.</p>
      </div>
      
      {bookmarks.length === 0 ? (
        /* ================= 1. PREMIUM GLASS EMPTY STATE ================= */
        <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] flex flex-col items-center justify-center text-center max-w-4xl mx-auto mt-10 overflow-hidden">
          
          {/* గ్లాస్ లుక్ పెంచడానికి బ్యాక్‌గ్రౌండ్‌లో ఒక చిన్న పర్పుల్ గ్లో */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-6xl md:text-7xl mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] animate-pulse">🔖</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">No bookmarks yet</h3>
            <p className="text-gray-400 max-w-md mx-auto mb-10 leading-relaxed text-base md:text-lg">
              You haven't bookmarked any interview questions. Start exploring and save the ones you want to revise later!
            </p>
            <button 
              onClick={() => navigate('/questions')}
              className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Questions
            </button>
          </div>
        </div>
      ) : (
        /* ================= 2. GLASS BOOKMARKS LIST ================= */
        <div className="grid gap-6 max-w-4xl mx-auto">
          {bookmarks.map((item, index) => (
            <div 
              key={item.id || index} 
              className="group relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex justify-between items-center gap-4"
            >
              <div className="flex-1">
                {item.category && (
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block mb-2">
                    {item.category}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
                  {item.question}
                </h3>
              </div>
              
              {/* బుక్‌మార్క్ రిమూవ్ బటన్ */}
              <button 
                onClick={() => removeBookmark(item.id)}
                className="p-2.5 bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/30 rounded-xl text-purple-400 hover:text-red-400 transition-all shadow-md"
                title="Remove Bookmark"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}