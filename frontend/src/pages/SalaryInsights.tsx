export default function SalaryInsights() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white">
        DevOps Salary Insights
      </h1>

      {/* Main Insights Card */}
      <div className="bg-gray-900 border border-gray-800 p-8 rounded-3xl shadow-2xl">
        <h2 className="text-2xl mb-6 text-purple-400 font-semibold">
          Live Market Data (India)
        </h2>
        <p className="text-gray-400 mb-8">
          Real-time salary trends based on industry standards for DevOps
          Engineers.
        </p>

        {/* Salary Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-black/40 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-sm uppercase text-gray-500 tracking-widest mb-2">
              Fresher
            </h3>
            <p className="text-3xl font-bold text-white">₹6L - ₹8L</p>
            <p className="text-xs text-green-500 mt-2">Entry Level</p>
          </div>
          <div className="bg-black/40 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-sm uppercase text-gray-500 tracking-widest mb-2">
              Mid-Level
            </h3>
            <p className="text-3xl font-bold text-white">₹12L - ₹20L</p>
            <p className="text-xs text-blue-500 mt-2">2-5 Years Exp</p>
          </div>
          <div className="bg-black/40 p-6 rounded-2xl border border-gray-800">
            <h3 className="text-sm uppercase text-gray-500 tracking-widest mb-2">
              Senior
            </h3>
            <p className="text-3xl font-bold text-white">₹25L - ₹45L+</p>
            <p className="text-xs text-purple-500 mt-2">5+ Years Exp</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="https://www.glassdoor.co.in/Salaries/devops-engineer-salary-SRCH_KO0,16.htm"
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-gray-800 hover:bg-gray-700 p-4 rounded-xl transition-all"
          >
            Check Glassdoor Insights →
          </a>
          <a
            href="https://wellfound.com/jobs"
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center bg-purple-600 hover:bg-purple-700 p-4 rounded-xl transition-all font-bold"
          >
            Find DevOps Jobs on Wellfound →
          </a>
        </div>
      </div>

      {/* Salary Negotiation Tip - English Version */}
      <div className="mt-8 bg-purple-900/10 border border-purple-500/20 p-6 rounded-2xl">
        <h3 className="text-lg font-bold text-white mb-2">
          💡 Salary Negotiation Tip
        </h3>
        <p className="text-gray-300 text-sm">
          "In DevOps roles, don't just focus on coding. Highlight how your
          automation skills and infrastructure management contribute to cost
          optimization and system reliability. Proving that you save the company
          money gives you significant leverage during salary negotiations."
        </p>
      </div>
    </div>
  );
}
