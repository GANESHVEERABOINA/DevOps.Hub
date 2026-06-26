import { PixelCategoryCard } from '../components/ui/pixel-canvas';

// రోడ్‌మ్యాప్స్ డేటా, ఐకాన్స్, మరియు వాటి సొంత రంగులు
const roadmapsData = [
  { name: "DevOps", url: "https://roadmap.sh/devops", icon: "🚀", colors: ["#8B5CF6", "#6366F1", "#4F46E5"] },
  { name: "Cybersecurity", url: "https://roadmap.sh/cyber-security", icon: "🛡️", colors: ["#F43F5E", "#E11D48", "#BE123C"] },
  { name: "Linux", url: "https://roadmap.sh/linux", icon: "🐧", colors: ["#F6E05E", "#FFFFFF", "#000000"] },
  { name: "Docker", url: "https://roadmap.sh/docker", icon: "🐳", colors: ["#38BDF8", "#2563EB", "#1D4ED8"] },
  { name: "Kubernetes", url: "https://roadmap.sh/kubernetes", icon: "☸️", colors: ["#326CE5", "#3B82F6", "#1E3A8A"] },
  { name: "Terraform", url: "https://roadmap.sh/terraform", icon: "🏗️", colors: ["#7B42BC", "#8B5CF6", "#6D28D9"] },
  { name: "AWS", url: "https://roadmap.sh/aws", icon: "☁️", colors: ["#FF9900", "#F59E0B", "#EA580C"] },
];

export default function Roadmaps() {
  
  // కార్డ్ మీద క్లిక్ చేస్తే కొత్త ట్యాబ్ లో రోడ్‌మ్యాప్ వెబ్‌సైట్ ఓపెన్ అవుతుంది
  const handleCardClick = (url: string) => {
    window.open(url, "_blank"); 
  };

  return (
    <div className="text-white min-h-screen bg-transparent max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-6 md:pt-8 pb-32 relative z-10 w-full overflow-hidden flex flex-col items-center md:items-start">
      
      {/* పేజీ హెడ్డింగ్ */}
      <div className="mb-10 md:mb-16 border-b border-white/10 pb-6 md:pb-8 bg-transparent w-full text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2 md:mb-3 tracking-tight">Mastery Roadmaps</h1>
        <p className="text-gray-400 text-sm md:text-lg">Select a roadmap to start learning from roadmap.sh</p>
      </div>
      
      {/* కార్డ్స్ గ్రిడ్ (Interview Q&A పేజీలో ఉన్నట్టే సేమ్ అలైన్‌మెంట్) */}
      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 justify-items-center bg-transparent">
        {roadmapsData.map((item, index) => (
          <div key={index} className="w-full flex justify-center h-full">
            <PixelCategoryCard
              name={item.name}
              icon={item.icon}
              path={item.url}
              description={`Complete ${item.name} Path`}
              date="VIEW ROADMAP ↗"
              colors={item.colors}
              onClick={() => handleCardClick(item.url)}
            />
          </div>
        ))}
      </div>

    </div>
  );
}