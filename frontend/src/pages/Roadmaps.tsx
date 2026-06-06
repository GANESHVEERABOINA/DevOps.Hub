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
    <div className="max-w-6xl mx-auto p-6 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Mastery Roadmaps</h1>
      <p className="text-gray-400 mb-10">Select a roadmap to start learning from roadmap.sh</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {allRoadmaps.map((rm) => (
          <a 
            key={rm.name} 
            href={rm.link} 
            target="_blank" 
            rel="noreferrer"
            className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-purple-500 transition-all text-center group"
          >
            <div className="text-4xl mb-3">{rm.icon}</div>
            <h3 className="text-sm font-semibold group-hover:text-purple-300">{rm.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}