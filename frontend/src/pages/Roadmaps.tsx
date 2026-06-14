export default function Roadmaps() {
  const allRoadmaps = [
    { name: 'DevOps', link: 'https://roadmap.sh/devops', icon: '🚀' },
    { name: 'Cybersecurity', link: 'https://roadmap.sh/cyber-security', icon: '🛡️' },
    { name: 'Linux', link: 'https://roadmap.sh/linux', icon: '🐧' },
    { name: 'Docker', link: 'https://roadmap.sh/docker', icon: '🐳' },
    { name: 'Kubernetes', link: 'https://roadmap.sh/kubernetes', icon: '☸️' },
    { name: 'Terraform', link: 'https://roadmap.sh/terraform', icon: '🏗️' },
    { name: 'AWS', link: 'https://roadmap.sh/aws', icon: '☁️' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 text-white min-h-screen">
      
      {/* టైటిల్ సెక్షన్ */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">Mastery Roadmaps</h1>
        <p className="text-gray-400 text-lg">Select a roadmap to start learning from roadmap.sh</p>
      </div>
      
      {/* గ్లాస్ కార్డ్స్ గ్రిడ్ */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {allRoadmaps.map((rm) => (
          <a 
            key={rm.name} 
            href={rm.link} 
            target="_blank" 
            rel="noreferrer"
            // పాత bg-gray-900 తీసేసి గ్లాస్ ఎఫెక్ట్ యాడ్ చేశాను
            className="relative group bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col items-center justify-center gap-4 text-center overflow-hidden"
          >
            {/* ఆపిల్ స్టైల్ ఇన్నర్ లైట్ గ్లో (హోవర్ చేసినప్పుడు వస్తుంది) */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* ఐకాన్ (జూమ్ ఎఫెక్ట్) */}
            <div className="text-5xl group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              {rm.icon}
            </div>
            
            {/* టెక్స్ట్ */}
            <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
              {rm.name}
            </h3>
          </a>
        ))}
      </div>
      
    </div>
  );
}