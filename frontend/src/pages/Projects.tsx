import { useState } from 'react';

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
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-white min-h-screen">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Hands-on Projects</h1>
        <p className="text-gray-400 text-lg">Build real-world DevOps skills with these curated projects.</p>
      </div>

      {/* Glass Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        {['All', 'Beginner', 'Intermediate', 'Advanced'].map((cat) => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 backdrop-blur-md text-sm font-medium ${
              filter === cat 
                ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border-purple-500' 
                : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/15 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid - Apple Glass Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((p) => (
          <div 
            key={p.id} 
            className="group flex flex-col justify-between bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500 ease-out"
          >
            <div className="flex-grow">
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-3 block">{p.category}</span>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">{p.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tech.map(t => (
                  <span key={t} className="bg-black/40 border border-white/5 px-3 py-1 rounded-md text-[10px] text-gray-300 uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/15 transition-all flex justify-center items-center gap-2 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              View Project Guide <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}