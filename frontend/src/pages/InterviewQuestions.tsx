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
    { name: "DevSecOps", path: "devsecops", icon: "🛡️" },
    { name: "SonarQube", path: "sonarqube", icon: "🎯" },
  ],
  "Non-Technical": [
    { name: "HR Questions", path: "hr-questions", icon: "👥" },
    { name: "Salary Negotiation", path: "salary-negotiation", icon: "💰" }
  ],
  "Next": [
    { name: "Cybersecurity", path: "cybersecurity", icon: "🔒" },
  ]
};

export default function InterviewQuestions() {
  const navigate = useNavigate();

  return (
    <div className="p-8 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Interview Q&A</h1>
      <p className="text-gray-400 mb-8">Select a topic to start practicing interview questions</p>
      
      <div className="space-y-10">
        {Object.entries(categorizedTools).map(([category, tools]) => (
          <div key={category}>
            {/* Category Heading */}
            <h2 className="text-xl font-semibold mb-4 text-purple-400 border-b border-gray-800 pb-2">
              {category}
            </h2>
            
            {/* Category Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {tools.map((item, index) => (
                <div 
                  key={index} 
                  onClick={() => navigate(`/questions/${item.path}`)}
                  className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex flex-col items-center hover:border-purple-500 transition cursor-pointer hover:bg-gray-800"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-center">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}