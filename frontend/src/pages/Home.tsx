import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import AnimatedTextCycle from "../components/ui/animated-text-cycle";
import { X } from "lucide-react";
import { AuthUI } from "../components/ui/auth-fuse";
import { ShiningText } from "../components/ui/shining-text"; // 🚀 కొత్తగా యాడ్ చేశాను

export default function Home() {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleStartLearning = () => {
    navigate("/questions");
  };

  return (
    <div className="relative flex flex-col bg-transparent text-white min-h-screen w-full overflow-hidden no-flicker">
      <Header onLoginClick={() => setShowLoginModal(true)} />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-4 min-h-[calc(100vh-80px)] py-10 mt-6 md:mt-0">
        
        {/* 🚀 ఇక్కడ పాత ట్యాగ్స్ బదులు ShiningText వాడాను */}
        <ShiningText 
          text="1200+ INTERVIEW QUESTIONS | 50+ ROADMAPS | 100+ HR QUESTIONS | PROJECTS | MOCK INTERVIEWS | SALARY INSIGHTS" 
          className="text-[10px] sm:text-[12px] md:text-sm font-medium uppercase tracking-widest text-center mb-8 md:mb-12 max-w-4xl z-20 px-4"
        />

        {/* మాస్టర్ టెక్స్ట్ సెక్షన్ */}
        <div className="w-full flex justify-center items-center text-center mb-8 md:mb-12 z-20 h-[140px] sm:h-[180px] md:h-[220px]">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black text-white tracking-tight text-optimize leading-tight md:leading-snug flex flex-col items-center justify-center">
            <span>MASTER</span>
            <AnimatedTextCycle
              words={[
                "DEVOPS LOGIC.",
                "CLOUD INFRA.",
                "AUTOMATION.",
                "CI/CD PIPELINES.",
              ]}
              interval={3000}
              className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mt-2 md:mt-4"
            />
          </h1>
        </div>

        {/* బటన్స్ సెక్షన్ */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-2 z-20 w-full md:w-auto px-6 md:px-0 will-change-transform">
          <Button
            onClick={handleStartLearning}
            className="w-full md:w-auto rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 bg-white text-black hover:bg-gray-100 gpu-layer"
          >
            Start Learning
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full md:w-auto rounded-full px-10 py-7 text-lg font-bold backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-white gpu-layer"
          >
            <Link to="/roadmaps">Explore Roadmaps</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full md:w-auto rounded-full px-10 py-7 text-lg font-bold backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-white gpu-layer"
          >
            <Link to="/resources">Free Resources</Link>
          </Button>
        </div>
      </main>

      <Footer />

      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#050505]/80 backdrop-blur-md cursor-pointer"
            onClick={() => setShowLoginModal(false)}
          ></div>
          <div className="relative z-10 w-full max-w-md">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute -top-12 right-0 z-20 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <AuthUI onSuccess={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}
    </div>
  );
}