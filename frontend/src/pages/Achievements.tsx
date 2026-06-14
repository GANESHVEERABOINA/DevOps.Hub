import { useState } from 'react';

export default function Achievements() {
  // డెమో కోసం ఒక అచీవ్‌మెంట్ యాడ్ చేశాను, నీ దగ్గర డేటా వస్తే ఇది అప్‌డేట్ అవుతుంది
  const [achievements] = useState([
  ]);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 text-white min-h-screen">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Achievements</h1>
          <p className="text-gray-400 text-lg">Your milestones and unlocked badges.</p>
        </div>
        <button className="bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-full font-bold transition-all backdrop-blur-md shadow-lg">
          + Add Achievement
        </button>
      </div>
      
      {/* 1. Empty State (Glass Style) */}
      {achievements.length === 0 ? (
        <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-12 md:p-20 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] flex flex-col items-center justify-center text-center max-w-4xl mx-auto overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="text-7xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold mb-4">No achievements yet</h3>
            <p className="text-gray-400 max-w-sm mx-auto text-lg leading-relaxed">
              Complete your roadmaps and mock interviews to unlock your first badge!
            </p>
          </div>
        </div>
      ) : (
        /* 2. Achievements Grid (Glass Cards) */
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {achievements.map((item: any, index) => (
            <div key={index} className="group bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-6">
              <div className="text-5xl p-4 bg-white/5 rounded-2xl border border-white/10">🏅</div>
              <div>
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}