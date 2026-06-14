import { Link } from "react-router-dom";

export default function Header() {
  return (
    // 1. bg-black తీసేసి గ్లాస్ ఎఫెక్ట్ క్లాసెస్ యాడ్ చేశాను
    <header className="sticky top-0 z-50 bg-white/[0.02] backdrop-blur-2xl border-b border-white/10 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* బ్రాండ్ లోగో */}
        <Link to="/" className="text-2xl font-bold tracking-wider text-white">
          DEVOPS<span className="text-purple-400">.HUB</span>
        </Link>

        {/* 2. నావిగేషన్ లింక్స్ (స్మూత్ హోవర్ ఎఫెక్ట్ తో) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-white/80">
          <Link
            to="/questions"
            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            Interview Q&A
          </Link>
          <Link
            to="/roadmaps"
            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            Roadmaps
          </Link>
          <Link
            to="/projects"
            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            Projects
          </Link>
          <Link
            to="/mock-interview"
            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            Mock Interview
          </Link>
          <Link
            to="/salary"
            className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            Salary
          </Link>
        </nav>

        {/* 3. యాపిల్ గ్లాస్ స్టైల్ లాగిన్ బటన్ */}
        <button className="px-6 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 transition-all duration-300 backdrop-blur-md text-sm font-medium text-white shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          Login
        </button>
        
      </div>
    </header>
  );
}