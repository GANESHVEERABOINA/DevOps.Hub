'use client'
import React, { useState } from 'react';
import { Home, Compass, FolderKanban, Banknote, FileText, Bookmark, Award } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
}

const dockItems: DockItem[] = [
  { id: 'dashboard', icon: <Home size={22} />, label: 'Dashboard', path: '/dashboard' },
  { id: 'questions', icon: <Compass size={22} />, label: 'Interview Q&A', path: '/questions' },
  { id: 'roadmaps', icon: <FolderKanban size={22} />, label: 'Roadmaps', path: '/roadmaps' },
  { id: 'projects', icon: <Banknote size={22} />, label: 'Projects', path: '/projects' },
  { id: 'salary', icon: <FileText size={22} />, label: 'Salary Insights', path: '/salary' },
  { id: 'resume', icon: <Bookmark size={22} />, label: 'Resume Builder', path: '/resume-builder' },
  { id: 'achievements', icon: <Award size={22} />, label: 'Achievements', path: '/achievements' },
];

export const MinimalistDock: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-[calc(100vh-80px)] w-24 flex flex-col items-center justify-center fixed left-0 top-20 z-40 bg-transparent pointer-events-none">
      <div className="relative pointer-events-auto">
        
        {/* Dock Container */}
        <div className={`
          flex flex-col items-center gap-4 px-4 py-6
          rounded-3xl
          bg-[#0a0a0a]/60 backdrop-blur-2xl
          border border-white/10
          shadow-[0_0_30px_rgba(0,0,0,0.5)]
          transition-all duration-500 ease-out
          ${hoveredItem ? 'scale-[1.02]' : ''}
        `}>
          {dockItems.map((item) => {
            const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
            const isHovered = hoveredItem === item.id;

            return (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => navigate(item.path)}
              >
                <div
                  className={`
                    relative flex items-center justify-center
                    w-12 h-12 rounded-xl
                    transition-all duration-300 ease-out
                    cursor-pointer
                    /* ఇక్కడే మార్పు చేశాను: పర్పుల్ గ్రేడియంట్ తీసేసి వైట్ గ్లాస్ బాక్స్ (bg-white/20) పెట్టాను */
                    ${isActive ? 'bg-white/20 border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'bg-white/5 border border-white/10'}
                    ${isHovered && !isActive ? 'scale-110 bg-white/10 border-white/20 -translate-x-1 shadow-lg shadow-white/5' : ''}
                    ${!isHovered && !isActive ? 'hover:scale-105 hover:bg-white/10' : ''}
                  `}
                >
                  <div className={`
                    text-white transition-all duration-300
                    ${isHovered ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'opacity-70'}
                    /* యాక్టివ్ గా ఉన్నప్పుడు ఐకాన్ 100% వైట్ గా మెరిసేలా మార్చాను */
                    ${isActive ? 'opacity-100 scale-105 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]' : ''}
                  `}>
                    {item.icon}
                  </div>
                </div>
                
                {/* Tooltip */}
                <div className={`
                  absolute top-1/2 -translate-y-1/2 left-full ml-4
                  px-3 py-1.5 rounded-lg
                  bg-white text-black font-bold text-sm
                  transition-all duration-200
                  pointer-events-none
                  whitespace-nowrap
                  shadow-[0_0_15px_rgba(255,255,255,0.3)]
                  ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                `}>
                  {item.label}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-1">
                    <div className="w-2 h-2 bg-white rotate-45"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};