import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 text-white min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 tracking-tight">Welcome!</h1>
      
      {/* Stats Section - Glassmorphism Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:bg-white/5 transition-all">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest mb-2">Questions Answered</h3>
          <p className="text-4xl font-bold text-white">0</p>
        </div>
        
        <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:bg-white/5 transition-all">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest mb-2">Roadmap Progress</h3>
          <div className="w-full bg-black/40 h-2 mt-4 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <p className="text-xs text-gray-400 mt-3 font-medium">0% Completed</p>
        </div>
        
        <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:bg-white/5 transition-all">
          <h3 className="text-gray-400 text-xs uppercase tracking-widest mb-2">Mock Interviews</h3>
          <p className="text-4xl font-bold text-white">0</p>
        </div>
      </div>

      {/* Quick Actions - Glassy Buttons */}
      <h2 className="text-xl font-bold mb-6 text-white/90">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button 
          onClick={() => navigate('/mock-interview')} 
          className="bg-purple-600 hover:bg-purple-500 p-5 rounded-2xl font-bold text-sm transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        >
          Start Interview
        </button>
        <button 
          onClick={() => navigate('/roadmaps')} 
          className="bg-white/[0.05] border border-white/10 hover:bg-white/10 p-5 rounded-2xl font-bold text-sm transition-all"
        >
          View Roadmap
        </button>
        <button 
          onClick={() => navigate('/resume-builder')} 
          className="bg-white/[0.05] border border-white/10 hover:bg-white/10 p-5 rounded-2xl font-bold text-sm transition-all"
        >
          Build Resume
        </button>
        <button 
          onClick={() => navigate('/questions')} 
          className="bg-white/[0.05] border border-white/10 hover:bg-white/10 p-5 rounded-2xl font-bold text-sm transition-all"
        >
          Daily Quiz
        </button>
      </div>
    </div>
  );
}