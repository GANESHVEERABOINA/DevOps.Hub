export default function SalaryInsights() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 text-white min-h-screen">
      
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">DevOps Salary Insights</h1>
        <p className="text-gray-400 text-lg">Real-time salary trends based on industry standards.</p>
      </div>

      {/* Main Glassmorphism Card */}
      <div className="relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
        
        <h2 className="text-2xl mb-8 text-purple-400 font-bold tracking-tight">
          Live Market Data (India)
        </h2>

        {/* Salary Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { tier: 'Fresher', amount: '₹6L - ₹8L', label: 'Entry Level', color: 'text-green-400' },
            { tier: 'Mid-Level', amount: '₹12L - ₹20L', label: '2-5 Years Exp', color: 'text-blue-400' },
            { tier: 'Senior', amount: '₹25L - ₹45L+', label: '5+ Years Exp', color: 'text-purple-400' },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xs uppercase text-gray-400 tracking-widest mb-3">{item.tier}</h3>
              <p className="text-2xl md:text-3xl font-extrabold text-white mb-2">{item.amount}</p>
              <p className={`text-xs font-semibold ${item.color}`}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="https://www.glassdoor.co.in/Salaries/devops-engineer-salary-SRCH_KO0,16.htm"
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-white/5 border border-white/10 hover:bg-white/15 p-4 rounded-xl transition-all font-medium"
          >
            Check Glassdoor Insights →
          </a>
          <a
            href="https://wellfound.com/jobs"
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-purple-600 hover:bg-purple-500 p-4 rounded-xl transition-all font-bold shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            Find DevOps Jobs →
          </a>
        </div>
      </div>

      {/* Salary Negotiation Tip (Glass Box) */}
      <div className="mt-8 bg-purple-900/10 border border-purple-500/20 p-8 rounded-3xl backdrop-blur-md">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
           💡 Salary Negotiation Tip
        </h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          "In DevOps roles, don't just focus on coding. Highlight how your automation skills and infrastructure management contribute to cost optimization and system reliability. Proving that you save the company money gives you significant leverage during salary negotiations."
        </p>
      </div>
    </div>
  );
}