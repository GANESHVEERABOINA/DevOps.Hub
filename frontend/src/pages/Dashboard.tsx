import { useNavigate } from 'react-router-dom'; // ఇది పేజీలను మారుస్తుంది

export default function Dashboard() {
  const navigate = useNavigate(); // నావిగేషన్ కోసం

  return (
    <div className="max-w-6xl mx-auto p-8 text-white">
      <h1 className="text-3xl font-bold mb-8">Welcome!</h1>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-gray-400 text-sm">Questions Answered</h3>
          <p className="text-4xl font-bold mt-2">0</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-gray-400 text-sm">Roadmap Progress</h3>
          <div className="w-full bg-gray-700 h-2 mt-4 rounded-full">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '0%' }}></div>
          </div>
          <p className="text-sm mt-2">0% Completed</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
          <h3 className="text-gray-400 text-sm">Mock Interviews</h3>
          <p className="text-4xl font-bold mt-2">0</p>
        </div>
      </div>

      {/* Quick Actions - ఇక్కడ బటన్స్ పని చేస్తాయి */}
      <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <button 
          onClick={() => navigate('/mock-interview')} 
          className="bg-purple-600 hover:bg-purple-700 p-4 rounded-xl font-semibold transition"
        >
          Start Interview
        </button>
        <button 
          onClick={() => navigate('/roadmaps')} 
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl font-semibold transition"
        >
          View Roadmap
        </button>
        <button 
          onClick={() => navigate('/resume-builder')} 
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl font-semibold transition"
        >
          Build Resume
        </button>
        <button 
          onClick={() => navigate('/interview-qa')} 
          className="bg-gray-800 hover:bg-gray-700 p-4 rounded-xl font-semibold transition"
        >
          Daily Quiz
        </button>
      </div>
    </div>
  );
}