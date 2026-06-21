import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';
import VaporizeTextCycle, { Tag } from '../components/ui/vapour-text-effect';

import { useAuthStore } from '../store/authStore';
import { X } from 'lucide-react';

// ఇక్కడే మార్పు: పాత AuthUI ని తీసేసి, మన కొత్త 3D SignInCard ని ఇంపోర్ట్ చేసాను
import { SignInCard } from '../components/ui/sign-in-card';

export default function Home() {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { token } = useAuthStore();
  const isLoggedIn = !!token;

  const handleStartLearning = () => {
    if (isLoggedIn) {
      navigate('/dashboard'); 
    } else {
      setShowLoginModal(true); 
    }
  };

  return (
    <div className="relative flex flex-col bg-transparent text-white min-h-screen overflow-x-hidden">
      
      <Header onLoginClick={() => setShowLoginModal(true)} />
      
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        
        <p className="text-xs md:text-sm text-gray-400 tracking-widest uppercase mb-8 text-center max-w-3xl z-20">
            1200+ Interview Questions | 50+ Roadmaps | 100+ HR Questions | Projects | Mock Interviews | Salary Insights
        </p>

        <div className="w-full h-[120px] md:h-[200px] flex justify-center items-center mb-6 z-20">
            <VaporizeTextCycle
                texts={[
                    "MASTER DEVOPS.", 
                    "GET HIRED FASTER.", 
                    "BUILD YOUR FUTURE."
                ]}
                font={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "80px", 
                    fontWeight: 900
                }}
                color="rgb(255, 255, 255)"
                spread={4}
                density={6}
                animation={{
                    vaporizeDuration: 2.5, 
                    fadeInDuration: 1.5,   
                    waitDuration: 2        
                }}
                direction="left-to-right"
                alignment="center"
                tag={Tag.H1}
            />
        </div>

        <div className="flex justify-center gap-4 flex-wrap mt-4 z-20">
            <Button 
                onClick={handleStartLearning} 
                className="rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 bg-white text-black hover:bg-gray-100"
            >
                Start Learning
            </Button>
            
            <Button asChild variant="outline" className="rounded-full px-10 py-7 text-lg font-bold backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-white">
                <Link to="/roadmaps">Explore Roadmaps</Link>
            </Button>

            <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-bold backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-white">
                Watch Demo
            </Button>
        </div>
            
      </main>

      <Footer />

      {/* LOGIN POPUP MODAL */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md transition-opacity cursor-pointer"
            onClick={() => setShowLoginModal(false)}
          ></div>
          
          <div className="relative z-10 w-full max-w-md">
            {/* క్లోజ్ బటన్ ని కొంచెం పైకి జరిపాను, కార్డ్ కి తగలకుండా */}
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute -top-12 right-0 z-20 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* పాత AuthUI తీసేసి మన కొత్త 3D కార్డ్ ని ఇక్కడ పెట్టాను */}
            <SignInCard onSuccess={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}

    </div>
  );
}