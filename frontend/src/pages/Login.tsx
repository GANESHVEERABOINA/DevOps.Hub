import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // ఇక్కడ నీ Auth లాజిక్ (Firebase/Supabase) వస్తుంది
    navigate('/dashboard'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-3xl border border-gray-800 w-full max-w-sm shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Login to DevOps.Hub</h2>
        
        <input 
          type="email" 
          placeholder="Email address" 
          required
          className="w-full bg-black p-3 rounded-lg mb-4 border border-gray-700 text-white focus:border-purple-500 outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          required
          className="w-full bg-black p-3 rounded-lg mb-6 border border-gray-700 text-white focus:border-purple-500 outline-none"
        />
        
        <button type="submit" className="w-full bg-white text-black py-3 rounded-lg font-bold hover:bg-gray-200 transition mb-4">
          Sign In
        </button>
        
        <p className="text-gray-400 text-center text-sm">
          Don't have an account? <span className="text-purple-400 cursor-pointer">Sign up</span>
        </p>
      </form>
    </div>
  );
}