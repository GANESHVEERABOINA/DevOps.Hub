import { useState } from 'react';

// మార్కెట్ యూజర్ కోసం ఇక్కడ ఎంప్టీ లిస్ట్ ఉంటుంది (యూజర్ అచీవ్ చేస్తే వస్తుంది)
export default function Achievements() {
  const [achievements] = useState([]); // యూజర్ ఇంకా ఏమీ చేయకపోతే ఎంప్టీగా ఉంటుంది

  return (
    <div className="max-w-4xl mx-auto p-8 text-white min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Achievements</h1>
        <button className="bg-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition">
          + Add Achievement
        </button>
      </div>
      
      {achievements.length === 0 ? (
        <div className="text-center bg-gray-900 border border-gray-800 p-16 rounded-3xl">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold mb-2">No achievements yet</h3>
          <p className="text-gray-400 max-w-sm mx-auto">
            Complete your roadmaps and mock interviews to unlock your first badge!
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item: any, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex items-center gap-4">
              <div className="text-4xl">🏅</div>
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}