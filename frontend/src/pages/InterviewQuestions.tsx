import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PixelCategoryCard } from '../components/ui/pixel-canvas';
import { X } from 'lucide-react'; 
import { useAuthStore } from '../store/authStore'; 

// ఇక్కడ మన కొత్త 3D లాగిన్ కార్డ్ ని ఇంపోర్ట్ చేస్తున్నాం 
import { SignInCard } from '../components/ui/sign-in-card';

const categorizedTools = {
  "Fundamentals & OS": [
    { name: "Linux", path: "linux", icon: "🐧", colors: ["#F6E05E", "#FFFFFF", "#000000"] },
    { name: "Shell Scripting", path: "shell-scripting", icon: "🐚", colors: ["#4ADE80", "#22C55E", "#16A34A"] },
    { name: "Networking", path: "networking", icon: "🔗", colors: ["#60A5FA", "#3B82F6", "#2563EB"] },
    { name: "Cloud Fundamentals", path: "cloud-fundamentals", icon: "🌐", colors: ["#A78BFA", "#60A5FA", "#818CF8"] },
  ],
  "Containers & Orchestration": [
    { name: "Docker", path: "docker", icon: "🐳", colors: ["#38BDF8", "#2563EB", "#1D4ED8"] },
    { name: "Kubernetes", path: "kubernetes", icon: "☸️", colors: ["#326CE5", "#3B82F6", "#1E3A8A"] },
  ],
  "CI/CD & Version Control": [
    { name: "Git", path: "git", icon: "🌿", colors: ["#F05032", "#EA580C", "#C2410C"] },
    { name: "GitHub", path: "github", icon: "🐙", colors: ["#FFFFFF", "#9CA3AF", "#4B5563"] },
    { name: "Jenkins", path: "jenkins", icon: "🤖", colors: ["#D24939", "#EF4444", "#DC2626"] },
    { name: "CI/CD", path: "cicd", icon: "🔄", colors: ["#8B5CF6", "#6366F1", "#4F46E5"] },
    { name: "GitOps", path: "gitops", icon: "♾️", colors: ["#EC4899", "#D946EF", "#C026D3"] },
  ],
  "Infrastructure & Configuration": [
    { name: "Terraform", path: "terraform", icon: "🏗️", colors: ["#7B42BC", "#8B5CF6", "#6D28D9"] },
    { name: "Ansible", path: "ansible", icon: "⚙️", colors: ["#EE0000", "#DC2626", "#991B1B"] },
  ],
  "Cloud & Web Servers": [
    { name: "AWS", path: "aws", icon: "☁️", colors: ["#FF9900", "#F59E0B", "#EA580C"] },
    { name: "Apache", path: "apache", icon: "🏹", colors: ["#D22128", "#EF4444", "#B91C1C"] },
    { name: "Nginx", path: "nginx", icon: "🖥️", colors: ["#009639", "#16A34A", "#15803D"] },
  ],
  "Monitoring & Observability": [
    { name: "Prometheus", path: "prometheus", icon: "🔥", colors: ["#E6522C", "#F97316", "#EA580C"] },
    { name: "Grafana", path: "grafana", icon: "📊", colors: ["#F46800", "#F59E0B", "#D97706"] },
  ],
  "Security & Scripting": [
    { name: "Python for DevOps", path: "python-devops", icon: "🐍", colors: ["#3776AB", "#FFD43B", "#2563EB"] },
    { name: "SonarQube", path: "sonarqube", icon: "🎯", colors: ["#4E9BCD", "#3B82F6", "#1D4ED8"] },
  ],
  "Non-Technical": [
    { name: "HR Questions", path: "hr-questions", icon: "👥", colors: ["#A78BFA", "#8B5CF6", "#7C3AED"] },
    { name: "Salary Negotiation", path: "salary-negotiation", icon: "💰", colors: ["#34D399", "#22C55E", "#15803D"] },
  ],
  "Next Steps": [
    { name: "DevSecOps", path: "devsecops", icon: "🛡️", colors: ["#14B8A6", "#10B981", "#047857"] },
    { name: "Cybersecurity", path: "cybersecurity", icon: "🔒", colors: ["#F43F5E", "#E11D48", "#BE123C"] },
  ]
};

export default function InterviewQuestions() {
  const navigate = useNavigate();
  const { token } = useAuthStore(); 
  const isLoggedIn = !!token; 
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const freeTopics = ["linux", "shell-scripting"];

  const handleCardClick = (path: string) => {
    if (freeTopics.includes(path) || isLoggedIn) {
      navigate(`/questions/${path}`); 
    } else {
      setShowLoginModal(true); 
    }
  };

  return (
    <div className="text-white min-h-screen bg-transparent max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-32 relative z-10">
      
      <div className="mb-16 border-b border-white/10 pb-8 bg-transparent">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">Interview Q&A</h1>
        <p className="text-gray-400 text-lg">Select a topic to start practicing interview questions.</p>
      </div>
      
      <div className="flex flex-col gap-16 bg-transparent">
        {Object.entries(categorizedTools).map(([category, tools]) => (
          <div key={category} className="w-full bg-transparent">
            
            <h2 className="text-xl font-bold text-white mb-8 tracking-wide uppercase">
              {category}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-transparent">
                {tools.map((item, index) => {
                    const isFree = freeTopics.includes(item.path);

                    return (
                        <PixelCategoryCard
                            key={index}
                            name={item.name}
                            icon={item.icon}
                            path={item.path}
                            description={`Top ${item.name} Questions`}
                            date={(isFree || isLoggedIn) ? "Start Q&A →" : "🔒 Unlock Now"}
                            colors={item.colors}
                            onClick={() => handleCardClick(item.path)}
                        />
                    );
                })}
            </div>

          </div>
        ))}
      </div>

      {/* =========================================
          కొత్త 3D LOGIN POPUP MODAL
          ========================================= */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* బ్యాక్‌గ్రౌండ్ బ్లర్ - దీనివల్ల వెనక ఉన్న వెబ్‌సైట్ డాట్స్ అలాగే మసకగా కనిపిస్తాయి */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity cursor-pointer"
            onClick={() => setShowLoginModal(false)}
          ></div>
          
          <div className="relative z-10 w-full max-w-md">
            {/* క్లోజ్ బటన్ */}
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute -top-12 right-0 z-20 p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* మన కొత్త 3D లాగిన్ కార్డ్ */}
            <SignInCard onSuccess={() => setShowLoginModal(false)} />
          </div>
        </div>
      )}

    </div>
  );
}