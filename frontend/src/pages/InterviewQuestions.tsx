import { useNavigate } from 'react-router-dom';

// టూల్స్ ని కేటగిరీల వారీగా డివైడ్ చేశాను
const categorizedTools = {
  "Fundamentals & OS": [
    { name: "Linux", path: "linux", icon: "🐧" },
    { name: "Shell Scripting", path: "shell-scripting", icon: "🐚" },
    { name: "Networking", path: "networking", icon: "🔗" },
    { name: "Cloud Fundamentals", path: "cloud-fundamentals", icon: "🌐" },
  ],
  "Containers & Orchestration": [
    { name: "Docker", path: "docker", icon: "🐳" },
    { name: "Kubernetes", path: "kubernetes", icon: "☸️" },
  ],
  "CI/CD & Version Control": [
    { name: "Git", path: "git", icon: "🌿" },
    { name: "GitHub", path: "github", icon: "🐙" },
    { name: "Jenkins", path: "jenkins", icon: "🤖" },
    { name: "CI/CD", path: "cicd", icon: "🔄" },
    { name: "GitOps", path: "gitops", icon: "♾️" },
  ],
  "Infrastructure & Configuration": [
    { name: "Terraform", path: "terraform", icon: "🏗️" },
    { name: "Ansible", path: "ansible", icon: "⚙️" },
  ],
  "Cloud & Web Servers": [
    { name: "AWS", path: "aws", icon: "☁️" },
    { name: "Apache", path: "apache", icon: "🏹" },
    { name: "Nginx", path: "nginx", icon: "🖥️" },
  ],
  "Monitoring & Observability": [
    { name: "Prometheus", path: "prometheus", icon: "🔥" },
    { name: "Grafana", path: "grafana", icon: "📊" },
  ],
  "Security, Code Quality & Scripting": [
    { name: "Python for DevOps", path: "python-devops", icon: "🐍" },
    { name: "SonarQube", path: "sonarqube", icon: "🎯" },
  ],
  "Non-Technical": [
    { name: "HR Questions", path: "hr-questions", icon: "👥" },
    { name: "Salary Negotiation", path: "salary-negotiation", icon: "💰" }
  ],
  "Next": [
     { name: "DevSecOps", path: "devsecops", icon: "🛡️" },
    { name: "Cybersecurity", path: "cybersecurity", icon: "🔒" },
  ]
};

export default function InterviewQuestions() {
  const navigate = useNavigate();

  return (
    // పైన ప్యాడింగ్ తగ్గించాను (ఎందుకంటే పైన ఆల్రెడీ మన కొత్త Dashboard Header ఉంది కదా)
    <div className="text-white min-h-screen">
      
      {/* టైటిల్ సెక్షన్ కొంచెం క్లీన్ గా */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight">Interview Q&A</h1>
        <p className="text-gray-400 text-lg">Select a topic to start practicing interview questions</p>
      </div>
      
      <div className="space-y-16">
        {Object.entries(categorizedTools).map(([category, tools]) => (
          <div key={category}>
            {/* Category Heading (Premium Style) */}
            <h2 className="text-xl font-bold text-purple-400 mb-6 border-b border-white/10 pb-2 inline-block">
              {category}
            </h2>
            
            {/* Category Cards (Apple Glassmorphism Grid) */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {tools.map((item, index) => (
                <div 
                  key={index} 
                  onClick={() => navigate(`/questions/${item.path}`)}
                  className="relative group bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer overflow-hidden flex flex-col items-center text-center justify-center gap-4"
                >
                  {/* ఆపిల్ స్టైల్ సన్నని ఇన్నర్ గ్లో */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* ఐకాన్ హోవర్ యానిమేషన్ */}
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    {item.icon}
                  </div>
                  
                  {/* టెక్స్ట్ స్టైలింగ్ */}
                  <h3 className="font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}