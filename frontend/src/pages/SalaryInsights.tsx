const salaryData = [
  { company: "Google", role: "DevOps Engineer", location: "Bangalore", fresher: "8 LPA", mid: "18 LPA", senior: "35 LPA" },
  { company: "Amazon", role: "Cloud SRE", location: "Hyderabad", fresher: "9 LPA", mid: "20 LPA", senior: "40 LPA" },
  { company: "Microsoft", role: "Site Reliability Eng", location: "Remote", fresher: "9 LPA", mid: "21 LPA", senior: "42 LPA" },
  { company: "TCS", role: "Junior DevOps", location: "Chennai", fresher: "4 LPA", mid: "8 LPA", senior: "16 LPA" },
  { company: "Infosys", role: "DevOps Associate", location: "Pune", fresher: "4.5 LPA", mid: "9 LPA", senior: "18 LPA" },
  { company: "Oracle", role: "Cloud Infrastructure", location: "Bangalore", fresher: "7 LPA", mid: "15 LPA", senior: "28 LPA" },
  { company: "IBM", role: "Systems Engineer", location: "Bangalore", fresher: "6 LPA", mid: "12 LPA", senior: "22 LPA" },
  { company: "Wipro", role: "DevOps Consultant", location: "Hyderabad", fresher: "5 LPA", mid: "10 LPA", senior: "19 LPA" },
  { company: "HCL", role: "Infrastructure Eng", location: "Noida", fresher: "4.5 LPA", mid: "9 LPA", senior: "17 LPA" },
  { company: "Tech Mahindra", role: "DevOps Analyst", location: "Pune", fresher: "5 LPA", mid: "9 LPA", senior: "18 LPA" },
  { company: "Adobe", role: "Cloud Engineer", location: "Bangalore", fresher: "10 LPA", mid: "22 LPA", senior: "40 LPA" },
  { company: "PhonePe", role: "DevOps Engineer", location: "Bangalore", fresher: "12 LPA", mid: "25 LPA", senior: "45 LPA" },
  { company: "Flipkart", role: "SRE", location: "Bangalore", fresher: "11 LPA", mid: "23 LPA", senior: "42 LPA" },
  { company: "Goldman Sachs", role: "Cloud Platform Eng", location: "Bangalore", fresher: "15 LPA", mid: "28 LPA", senior: "50 LPA" },
  { company: "Cisco", role: "DevOps Engineer", location: "Bangalore", fresher: "7 LPA", mid: "14 LPA", senior: "26 LPA" },
  { company: "Intel", role: "Cloud Developer", location: "Bangalore", fresher: "8 LPA", mid: "16 LPA", senior: "30 LPA" },
  { company: "Dell", role: "SRE", location: "Hyderabad", fresher: "6 LPA", mid: "12 LPA", senior: "22 LPA" },
  { company: "Accenture", role: "DevOps Specialist", location: "Chennai", fresher: "5 LPA", mid: "10 LPA", senior: "20 LPA" },
  { company: "Capgemini", role: "Cloud Consultant", location: "Mumbai", fresher: "5 LPA", mid: "9 LPA", senior: "18 LPA" },
  { company: "Cognizant", role: "DevOps Engineer", location: "Chennai", fresher: "5 LPA", mid: "9 LPA", senior: "19 LPA" }
];

export default function SalaryInsights() {
  return (
    <div className="text-white min-h-screen max-w-6xl mx-auto px-6 py-10 relative z-10">
      <h1 className="text-4xl font-extrabold mb-2">DevOps Salary Insights</h1>
      <p className="text-gray-400 mb-8">Detailed salary breakdown based on experience & location.</p>

      <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
        {/* టేబుల్ హెడర్ */}
        <div className="grid grid-cols-6 gap-2 px-6 py-4 bg-white/5 font-bold text-gray-300 border-b border-white/10 text-sm">
          <div className="col-span-1">Company</div>
          <div className="col-span-1">Role</div>
          <div className="col-span-1">Location</div>
          <div className="col-span-1 text-center">Fresher</div>
          <div className="col-span-1 text-center">Mid-Level</div>
          <div className="col-span-1 text-right">Senior</div>
        </div>
        
        {/* డేటా రోస్ */}
        <div className="divide-y divide-white/10">
          {salaryData.map((item, index) => (
            <div key={index} className="grid grid-cols-6 gap-2 px-6 py-4 hover:bg-white/5 transition-colors items-center text-sm">
              <div className="font-bold text-blue-400">{item.company}</div>
              <div className="text-gray-400">{item.role}</div>
              <div className="text-gray-500">{item.location}</div>
              <div className="text-center font-mono text-green-400">{item.fresher}</div>
              <div className="text-center font-mono text-yellow-400">{item.mid}</div>
              <div className="text-right font-mono text-purple-400">{item.senior}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}