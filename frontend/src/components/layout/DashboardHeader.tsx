import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function DashboardHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');

  const searchData = [
    { id: 1, title: 'Linux Interview Questions', path: '/questions/linux', type: 'Topic' },
    { id: 2, title: 'What is Linux?', path: '/questions/what-is-linux', type: 'Question' },
    { id: 3, title: 'Docker Basics', path: '/questions/docker', type: 'Topic' },
    { id: 4, title: 'Kubernetes Cluster Setup', path: '/questions/kubernetes', type: 'Topic' },
    { id: 5, title: 'DevOps Mastery Roadmap', path: '/roadmaps', type: 'Roadmap' },
  ];

  const filteredResults = searchData.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="h-20 sticky top-0 z-50 bg-[#050505]/60 backdrop-blur-2xl border-b border-white/10 px-8 flex justify-between items-center transition-all">
      
      {/* ఇక్కడ 'to="/"' ఇచ్చాను, ఇది నీ Home.tsx ని ఓపెన్ చేస్తుంది */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 p-[1px] shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:scale-105 transition-transform duration-300">
          <div className="h-full w-full rounded-xl bg-[#050505] flex items-center justify-center text-lg font-bold text-white">
            🚀
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-black tracking-wider text-white uppercase group-hover:text-purple-400 transition-colors">
            DevOps <span className="text-purple-500">Hub</span>
          </span>
          <span className="text-[10px] text-gray-500 tracking-widest uppercase font-semibold">Mastery</span>
        </div>
      </Link>

      {/* సెర్చ్ బార్ - అలాగే ఉంటుంది */}
      <div className="flex-1 max-w-xl mx-4 md:mx-12 relative z-50">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-500 group-focus-within:text-purple-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-11 pr-16 text-sm text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
            placeholder="Search tools, questions, roadmaps..." 
          />
        </div>
      </div>

      {/* ప్రొఫైల్ */}
      <div className="flex items-center gap-5">
        <button className="flex items-center gap-3 pl-4 border-l border-white/10 hover:opacity-80 transition-opacity">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 p-[2px] shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <div className="h-full w-full rounded-full bg-black flex items-center justify-center text-sm font-bold text-white">
              G
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}