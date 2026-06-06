import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black text-white border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wider">
          DEVOPS<span className="text-purple-500">.HUB</span>
        </Link>

        {/* టెక్స్ట్ అంతా స్వచ్ఛమైన తెలుపు రంగులో (text-white) ఉంటుంది */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-white">
          <Link
            to="/questions"
            className="hover:text-purple-400 transition-colors"
          >
            Interview Q&A
          </Link>
          <Link
            to="/roadmaps"
            className="hover:text-purple-400 transition-colors"
          >
            Roadmaps
          </Link>
          <Link
            to="/projects"
            className="hover:text-purple-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/mock-interview"
            className="hover:text-purple-400 transition-colors"
          >
            Mock Interview
          </Link>
          <Link
            to="/salary"
            className="hover:text-purple-400 transition-colors"
          >
            Salary
          </Link>
        </nav>

        {/* లాగిన్ బటన్ */}
        <button className="bg-transparent border border-gray-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition-all">
          Login
        </button>
      </div>
    </header>
  );
}
