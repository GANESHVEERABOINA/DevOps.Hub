import { useState } from 'react';

// ఇక్కడ నీ ప్రాజెక్ట్స్ లిస్ట్ ఉంది
const projects = [
  { id: 1, title: 'Static Website Hosting on AWS', category: 'Beginner', tech: ['AWS', 'S3', 'CloudFront'], desc: 'Deploy a static website using S3 and secure it with CloudFront.' },
  { id: 2, title: 'Dockerized Python App', category: 'Beginner', tech: ['Docker', 'Python'], desc: 'Containerize a simple Flask application using Docker.' },
  { id: 3, title: 'CI/CD Pipeline with Jenkins', category: 'Intermediate', tech: ['Jenkins', 'Git', 'Docker'], desc: 'Automate build and deployment using Jenkins pipelines.' },
  { id: 4, title: 'Kubernetes Cluster Setup', category: 'Intermediate', tech: ['K8s', 'Minikube'], desc: 'Deploy a multi-tier application on a K8s cluster.' },
  { id: 5, title: 'Infrastructure as Code (Terraform)', category: 'Advanced', tech: ['Terraform', 'AWS'], desc: 'Provision AWS infrastructure using Terraform modules.' },
  { id: 6, title: 'Monitoring & Alerting Stack', category: 'Advanced', tech: ['Prometheus', 'Grafana'], desc: 'Setup monitoring for a Kubernetes cluster.' },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-6xl mx-auto p-8 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-2">Hands-on Projects</h1>
      <p className="text-gray-400 mb-8">Build real-world DevOps skills with these curated projects.</p>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8">
        {['All', 'Beginner', 'Intermediate', 'Advanced'].map((cat) => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition ${filter === cat ? 'bg-purple-600 border-purple-600' : 'border-gray-700 hover:border-gray-500'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid - ఇక్కడ బటన్లు అన్నీ సమానంగా వస్తాయి */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((p) => (
          <div key={p.id} className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition flex flex-col h-full">
            
            {/* Content Area */}
            <div className="flex-grow">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">{p.category}</span>
              <h3 className="text-xl font-bold mt-2 mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map(t => <span key={t} className="bg-black px-2 py-1 rounded text-xs text-gray-300">{t}</span>)}
              </div>
            </div>

            {/* Button Area - mt-auto దీనిని కిందికి లాగుతుంది */}
            <div className="mt-auto">
              <button className="w-full bg-gray-800 hover:bg-gray-700 py-2 rounded-lg transition text-sm font-semibold">
                View Project Guide →
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}