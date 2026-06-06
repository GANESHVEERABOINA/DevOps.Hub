export default function ResumeBuilder() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Resume Builder & Analyzer</h1>
      
      <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
        <h2 className="text-xl mb-4">ATS Score Checker</h2>
        <p className="text-gray-400 mb-6">Upload your resume to see how well it matches DevOps job descriptions.</p>
        
        <input type="file" className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700" />
        
        <button className="mt-6 w-full bg-purple-600 p-3 rounded-xl font-bold hover:bg-purple-700 transition">
          Analyze Resume
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h3 className="font-bold text-purple-400">DevOps Keywords</h3>
          <ul className="text-sm text-gray-400 mt-2 space-y-1">
            <li>✅ Docker/Kubernetes</li>
            <li>✅ CI/CD Pipelines</li>
            <li>✅ AWS/Azure Cloud</li>
            <li>✅ Bash/Python Scripting</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-center flex flex-col justify-center">
          <p className="text-gray-300">Need a professional template?</p>
          <button className="text-purple-400 underline mt-2">Download Template</button>
        </div>
      </div>
    </div>
  );
}