import { useState } from 'react';

const companies = [
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'NVIDIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
  { name: 'Jio', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Jio_logo.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Intel_logo.svg' },
  { name: 'VMware', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/VMware_logo.svg' },
  { name: 'Red Hat', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg' },
  { name: 'NetApp', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/NetApp_logo.svg' },
];

export default function CompanyWise() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-8">Company Wise Questions</h1>
      
      {!selectedCompany ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {companies.map((comp) => (
            <button 
              key={comp.name}
              onClick={() => setSelectedCompany(comp.name)}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 transition-all flex flex-col items-center"
            >
              <img src={comp.logo} alt={comp.name} className="h-12 w-12 object-contain mb-4 filter brightness-200" />
              <span className="font-semibold">{comp.name}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-gray-900 p-8 rounded-2xl">
          <button onClick={() => setSelectedCompany(null)} className="text-purple-400 mb-6">← Back to Companies</button>
          <h2 className="text-2xl font-bold mb-6">{selectedCompany} DevOps Interview Questions</h2>
          <ul className="space-y-4">
            <li className="p-4 bg-black/30 rounded-lg">Describe the CI/CD pipeline you implemented in your last project.</li>
            <li className="p-4 bg-black/30 rounded-lg">How do you handle Kubernetes cluster scaling during peak traffic?</li>
            <li className="p-4 bg-black/30 rounded-lg">Explain the difference between Terraform and Ansible.</li>
          </ul>
        </div>
      )}
    </div>
  );
}