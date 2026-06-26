'use client'
import React, { useState } from 'react';
import { Home, Compass, FolderKanban, Banknote, FileText, Bookmark, Award, Library } from 'lucide-react'; // 🚀 ఇక్కడ Library ఇంపోర్ట్ చేశాను
import { useNavigate, useLocation } from 'react-router-dom';

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  path: string;
}

const dockItems: DockItem[] = [
  { id: 'home', icon: <Home size={22} />, label: 'Home', path: '/' }, // హోమ్ బటన్ కావాలంటే
  { id: 'resources', icon: <Library size={22} />, label: 'Resources', path: '/resources' }, // 🚀 Dashboard బదులు Resources
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
    <div className="fixed z-40 bg-transparent pointer-events-none bottom-4 left-0 w-full flex justify-center md:bottom-auto md:left-0 md:top-20 md:h-[calc(100vh-80px)] md:w-24 md:flex-col md:items-center">
      <div className="relative pointer-events-auto max-w-[95vw] md:max-w-none overflow-x-auto md:overflow-visible scrollbar-hide">
        
        <div className={`
          flex flex-row md:flex-col items-center gap-2 md:gap-4 px-3 py-3 md:px-4 md:py-6
          rounded-2xl md:rounded-3xl
          bg-[#0a0a0a]/80 md:bg-[#0a0a0a]/60 backdrop-blur-2xl
          border border-white/10
          shadow-[0_0_30px_rgba(0,0,0,0.5)]
          transition-all duration-500 ease-out
          ${hoveredItem ? 'md:scale-[1.02]' : ''}
        `}>
          {dockItems.map((item) => {
            const isActive = location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
            const isHovered = hoveredItem === item.id;

            return (
              <div
                key={item.id}
                className="relative group shrink-0"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => navigate(item.path)}
              >
                <div
                  className={`
                    relative flex items-center justify-center
                    w-10 h-10 md:w-12 md:h-12 rounded-xl
                    transition-all duration-300 ease-out
                    cursor-pointer
                    ${isActive ? 'bg-white/20 border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'bg-white/5 border border-white/10'}
                    ${isHovered && !isActive ? 'scale-110 bg-white/10 border-white/20 md:-translate-x-1 shadow-lg shadow-white/5' : ''}
                    ${!isHovered && !isActive ? 'hover:scale-105 hover:bg-white/10' : ''}
                  `}
                >
                  <div className={`
                    text-white transition-all duration-300
                    ${isHovered ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'opacity-70'}
                    ${isActive ? 'opacity-100 scale-105 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]' : ''}
                  `}>
                    {item.icon}
                  </div>
                </div>
                
                <div className={`
                  absolute bottom-full left-1/2 -translate-x-1/2 mb-3 md:mb-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:left-full md:ml-4
                  px-3 py-1.5 rounded-lg
                  bg-white text-black font-bold text-sm
                  transition-all duration-200
                  pointer-events-none
                  whitespace-nowrap
                  shadow-[0_0_15px_rgba(255,255,255,0.3)]
                  ${isHovered ? 'opacity-100 translate-y-0 md:translate-x-0' : 'opacity-0 translate-y-2 md:translate-y-0 md:-translate-x-2'}
                `}>
                  {item.label}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 md:mt-0 md:top-1/2 md:-translate-y-1/2 md:-left-1 md:translate-x-0">
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