import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Header({ onLoginClick }: { onLoginClick?: () => void }) {
  const { user, token, logout } = useAuthStore();
  const isLoggedIn = !!token;

  // ప్రొఫైల్ పిక్చర్ URL ని చెక్ చేస్తున్నాం (avatar లేకపోతే picture ట్రై చేస్తుంది)
  const avatarUrl = user?.avatar || user?.picture || "";

  // యూజర్ పేరు మొదటి అక్షరం
  const userInitial = user?.full_name ? user.full_name.charAt(0).toUpperCase() : 'U';

  return (
    <header className="sticky top-0 z-50 bg-white/[0.02] backdrop-blur-2xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold tracking-wider text-white">
          DEVOPS<span className="text-purple-400">.HUB</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium text-white/80">
          <Link to="/questions" className="hover:text-white transition-all duration-300">Interview Q&A</Link>
          <Link to="/roadmaps" className="hover:text-white transition-all duration-300">Roadmaps</Link>
          <Link to="/projects" className="hover:text-white transition-all duration-300">Projects</Link>
          <Link to="/mock-interview" className="hover:text-white transition-all duration-300">Mock Interview</Link>
        </nav>

        <div>
          {isLoggedIn ? (
            <button 
              onClick={logout}
              className="group relative h-10 w-10 rounded-full border-2 border-purple-500/50 hover:scale-105 transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={user?.full_name || 'User avatar'}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white font-bold flex items-center justify-center">
                  {userInitial}
                </div>
              )}
            </button>
          ) : (
            <button 
              onClick={onLoginClick}
              className="px-6 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 transition-all duration-300 backdrop-blur-md text-sm font-medium text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}