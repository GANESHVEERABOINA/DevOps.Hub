import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { UserProfileMenu } from "../ui/user-profile-menu";

export default function Header({ onLoginClick }: { onLoginClick?: () => void }) {
  const { token, user } = useAuthStore();

  return (
    // w-full మరియు Responsive Padding (px-4 md:px-8) వాడాను
    <header className="w-full h-16 md:h-20 sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      
      {/* Logo: shrink-0 వాడాను, అంటే స్థలం లేకపోయినా ఇది ఇరుకుగా మారదు (squish అవ్వదు) */}
      <Link to="/" className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-white flex items-center shrink-0">
        DEVOPS<span className="text-white-500">.HUB</span>
      </Link>
      
      {/* Navigation: మొబైల్ లో హైడ్ అవుతుంది, లాప్‌టాప్ లో ఫ్రీగా కనిపిస్తుంది. whitespace-nowrap వల్ల టెక్స్ట్ విరిగిపోదు. */}
      <nav className="hidden md:flex flex-wrap justify-center gap-4 lg:gap-6 text-sm md:text-base font-medium text-white/80">
        <Link to="/questions" className="hover:text-white transition-all duration-300 whitespace-nowrap">Interview Q&A</Link>
        <Link to="/roadmaps" className="hover:text-white transition-all duration-300 whitespace-nowrap">Roadmaps</Link>
        <Link to="/projects" className="hover:text-white transition-all duration-300 whitespace-nowrap">Projects</Link>
      </nav>

      {/* User Avatar / Login Button: ఇది కూడా shrink-0 తో సురక్షితం */}
      <div className="shrink-0 flex items-center justify-end">
        {token && user ? (
          <UserProfileMenu />
        ) : (
          <button 
            onClick={onLoginClick} 
            className="px-4 py-1.5 md:px-5 md:py-2 bg-white/10 text-white text-xs md:text-sm font-semibold rounded-lg hover:bg-white/20 transition-all"
          >
            Login
          </button>
        )}
      </div>
      
    </header>
  );
}