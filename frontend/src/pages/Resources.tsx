import { useState } from 'react';
import { PixelCategoryCard } from '../components/ui/pixel-canvas';
import { X, Lock } from 'lucide-react'; // Lock ఐకాన్ యాడ్ చేశాను
import { useAuthStore } from '../store/authStore'; 
import { SignInCard } from '../components/ui/sign-in-card';

const resourceSections = [
  {
    title: "🔥 Top YouTube Channels",
    description: "Best channels to learn DevOps practically.",
    items: [
      { name: "TechWorld with Nana", url: "https://www.youtube.com/c/TechWorldwithNana", icon: "📺", desc: "Best for Docker & K8s", date: "WATCH NOW ↗", colors: ["#FF0000", "#DC2626", "#991B1B"] },
      { name: "Kunal Kushwaha", url: "https://www.youtube.com/c/KunalKushwaha", icon: "🚀", desc: "Complete DevOps Bootcamp", date: "WATCH NOW ↗", colors: ["#F59E0B", "#D97706", "#B45309"] },
      { name: "NetworkChuck", url: "https://www.youtube.com/c/NetworkChuck", icon: "☕", desc: "Linux & Networking", date: "WATCH NOW ↗", colors: ["#38BDF8", "#0284C7", "#0369A1"] },
      { name: "Abhishek Veeramalla", url: "https://www.youtube.com/@AbhishekVeeramalla", icon: "👨‍💻", desc: "Telugu/English DevOps", date: "WATCH NOW ↗", colors: ["#10B981", "#059669", "#047857"] },
    ]
  },
  {
    title: "💻 Hands-on Practice Platforms",
    description: "Don't just watch. Practice in real environments.",
    items: [
      { name: "KodeKloud", url: "https://kodekloud.com/", icon: "☁️", desc: "Interactive DevOps Labs", date: "PRACTICE ↗", colors: ["#8B5CF6", "#6D28D9", "#4C1D95"] },
      { name: "Killercoda", url: "https://killercoda.com/", icon: "🐺", desc: "Free Kubernetes Playgrounds", date: "PRACTICE ↗", colors: ["#F43F5E", "#E11D48", "#BE123C"] },
      { name: "Play with Docker", url: "https://labs.play-with-docker.com/", icon: "🐳", desc: "Free Docker Instance", date: "PRACTICE ↗", colors: ["#3B82F6", "#2563EB", "#1D4ED8"] },
    ]
  },
  {
    title: "📚 Important Websites & Docs",
    description: "Bookmark these for your daily workflow.",
    items: [
      { name: "Roadmap.sh", url: "https://roadmap.sh/devops", icon: "🗺️", desc: "Step-by-step guides", date: "VISIT SITE ↗", colors: ["#EAB308", "#CA8A04", "#854D0E"] },
      { name: "AWS Free Tier", url: "https://aws.amazon.com/free/", icon: "☁️", desc: "Practice Cloud for free", date: "VISIT SITE ↗", colors: ["#F97316", "#EA580C", "#C2410C"] },
    ]
  }
];

export default function Resources() {
  const { token } = useAuthStore(); 
  const isLoggedIn = !!token; 
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="text-white min-h-screen bg-transparent max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6 md:pt-8 pb-32 relative z-10 w-full overflow-hidden flex flex-col items-center md:items-start">
      
      <div className="mb-10 md:mb-12 border-b border-white/10 pb-6 md:pb-8 bg-transparent w-full text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 md:mb-3 tracking-tight">Resources & Demos</h1>
        <p className="text-gray-400 text-sm md:text-lg">Curated tutorials, practical labs, and platforms to accelerate your journey.</p>
      </div>
      
      {/* 🚀 ఇక్కడ లాజిక్ మార్చాను: లాగిన్ లేకపోతే కంటెంట్ బదులు Lock బాక్స్ కనిపిస్తుంది */}
      {!isLoggedIn ? (
        <div className="w-full flex flex-col items-center justify-center py-20 bg-[#0a0a0a]/50 rounded-3xl border border-white/10 backdrop-blur-sm">
            <Lock size={64} className="text-gray-600 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Resources Locked</h2>
            <p className="text-gray-400 mb-8 max-w-md text-center">Please login to access exclusive tutorials, practice labs, and roadmap documentation.</p>
            <button 
                onClick={() => setShowLoginModal(true)}
                className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-300"
            >
                Login to Access
            </button>
        </div>
      ) : (
        <div className="flex flex-col gap-12 md:gap-16 bg-transparent w-full">
            {resourceSections.map((section, idx) => (
            <div key={idx} className="w-full bg-transparent flex flex-col items-center md:items-start">
                
                <div className="mb-6 md:mb-8 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-wide">{section.title}</h2>
                <p className="text-sm text-gray-400">{section.description}</p>
                </div>
                
                <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 justify-items-center bg-transparent">
                    {section.items.map((item, index) => (
                        <div key={index} className="w-full flex justify-center h-full">
                            <PixelCategoryCard
                                name={item.name}
                                icon={item.icon}
                                path={item.url}
                                description={item.desc}
                                date={item.date}
                                colors={item.colors}
                                onClick={() => window.open(item.url, "_blank")}
                            />
                        </div>
                    ))}
                </div>
            </div>
            ))}
        </div>
      )}

      {/* లాగిన్ పాపప్ */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity cursor-pointer"
            onClick={() => setShowLoginModal(false)}
          ></div>
          
          <div className="relative z-10 w-full max-w-md">
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute -top-12 right-0 z-20 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <SignInCard onSuccess={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}

    </div>
  );
}