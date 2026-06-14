export default function SalaryNegotiation() {
  return (
    <div className="p-8 text-white max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Salary Negotiation Strategy</h1>
      
      <div className="bg-purple-900/20 border border-purple-800 p-6 rounded-2xl mb-8">
        <h2 className="text-xl font-bold mb-2">Golden Rule</h2>
        <p className="text-gray-300">Never give the first number. Let the company state their range first.</p>
      </div>

      <div className="space-y-4">
        <h3 className="font-bold text-lg">Tips for Fresher:</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Research market standards on Glassdoor/LinkedIn.</li>
          <li>Focus on "Total Compensation" (Benefits, Insurance, Bonus).</li>
          <li>Be honest but confident about your expectations.</li>
          <li>Always be ready to learn; company culture matters as much as salary.</li>
        </ul>
      </div>
    </div>
  );
}