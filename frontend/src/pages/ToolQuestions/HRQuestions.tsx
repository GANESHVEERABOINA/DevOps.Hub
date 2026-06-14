export default function HRQuestions() {
  const questions = [
    { q: "Tell me about yourself?", a: "Focus on your background, passion for DevOps, and recent projects." },
    { q: "Why DevOps?", a: "Explain how you enjoy bridging the gap between development and operations." },
    { q: "How do you handle conflict in a team?", a: "Focus on communication and finding technical solutions together." }
  ];

  return (
    <div className="p-8 text-white max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">HR Interview Questions</h1>
      <div className="space-y-6">
        {questions.map((item, idx) => (
          <div key={idx} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl">
            <h3 className="font-bold text-lg text-purple-400 mb-2">{item.q}</h3>
            <p className="text-gray-300">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}