import { NavLink } from 'react-router-dom';

const links = [
  { to: '/questions', label: 'Interview Q&A' },
  { to: '/roadmaps', label: 'Roadmaps' },
  { to: '/projects', label: 'Projects' },
  { to: '/salary-insights', label: 'Salary Insights' },
  { to: '/resume-builder', label: 'Resume Builder' },
  { to: '/bookmarks', label: 'Bookmarks' },
  { to: '/achievements', label: 'Achievements' },
];

export default function Sidebar() {
  return (
    // 1. bg-black తీసేసి, గ్లాస్ ఎఫెక్ట్ (backdrop-blur, border) యాడ్ చేశాను
    <aside className="w-64 h-full bg-white/[0.02] backdrop-blur-2xl border-r border-white/10 shadow-[4px_0_24px_rgba(0,0,0,0.2)] overflow-y-auto z-40 relative">
      
      <nav className="p-4 space-y-3 mt-2">
        {links.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => 
              // 2. రౌండెడ్ కార్నర్స్ (rounded-xl) మరియు స్మూత్ యానిమేషన్ యాడ్ చేశాను
              `block px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                isActive 
                  ? 'bg-white/10 border border-white/10 text-white shadow-[0_4px_15px_rgba(255,255,255,0.05)] backdrop-blur-md' // Active లింక్ కి గ్లాస్ బాక్స్
                  : 'text-white/60 hover:text-white hover:bg-white/5' // Inactive లింక్ కి స్మూత్ హోవర్
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      
    </aside>
  );
}