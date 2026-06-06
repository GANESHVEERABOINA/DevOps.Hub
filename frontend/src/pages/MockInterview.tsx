import { useState } from 'react';

// 50 ప్రశ్నలు - ఇక్కడ డేటా ఉంటుంది
const questions = [
  { id: 1, q: "What is Docker?", keywords: ["container", "platform", "package"] },
  { id: 2, q: "What is the role of Kubernetes?", keywords: ["orchestration", "scaling", "management"] },
  // ఇలా 50 ప్రశ్నలు ఇక్కడ యాడ్ చేయి...
];

export default function MockInterview() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = () => {
    const currentQ = questions[currentIdx];
    const isCorrect = currentQ.keywords.some(word => 
      input.toLowerCase().includes(word)
    );

    if (isCorrect) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback("❌ Wrong answer. The key concept was: " + currentQ.keywords.join(", "));
    }

    // 2 సెకన్ల తర్వాత తదుపరి ప్రశ్న
    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx(currentIdx + 1);
        setInput('');
        setFeedback('');
      } else {
        setFeedback("🎉 You completed all questions!");
      }
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold mb-8">DevOps Interview Prep ({currentIdx + 1}/50)</h1>
      
      <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
        <h2 className="text-2xl mb-6">{questions[currentIdx].q}</h2>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-black p-4 rounded-lg mb-4"
          placeholder="Your answer..."
        />
        <button onClick={checkAnswer} className="bg-purple-600 px-8 py-3 rounded-lg font-bold">Submit Answer</button>
        <p className="mt-4 text-xl">{feedback}</p>
      </div>
    </div>
  );
}