export default function ResumeBuilder() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 text-white min-h-screen">
      
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Resume Builder & Analyzer</h1>
        <p className="text-gray-400 text-lg">Upload your resume to check ATS compatibility.</p>
      </div>
      
      {/* 1. Main ATS Checker Glass Box */}
      <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] mb-8">
        <h2 className="text-2xl font-bold mb-3">ATS Score Checker</h2>
        <p className="text-gray-400 mb-8">Upload your resume to see how well it matches DevOps job descriptions.</p>
        
        {/* Custom File Upload Styling */}
        <div className="relative border-2 border-dashed border-white/10 hover:border-purple-500/50 rounded-2xl p-8 text-center transition-colors bg-white/5">
           <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
           <p className="text-gray-400">Drag & drop or <span className="text-purple-400 font-semibold">browse</span> your file</p>
        </div>
        
        <button className="mt-8 w-full bg-purple-600 hover:bg-purple-500 p-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]">
          Analyze Resume
        </button>
      </div>

      {/* 2. Keywords & Template Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Keywords Card */}
        <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:bg-white/5 transition-all">
          <h3 className="font-bold text-lg text-purple-400 mb-6">DevOps Keywords</h3>
          <ul className="space-y-4">
            {['Docker/Kubernetes', 'CI/CD Pipelines', 'AWS/Azure Cloud', 'Bash/Python Scripting'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                <span className="text-green-500">✅</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Template Card */}
        <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:bg-white/5 transition-all text-center flex flex-col justify-center items-center">
          <p className="text-gray-300 mb-4">Need a professional template?</p>
          <button className="text-purple-400 font-bold hover:text-purple-300 transition-colors underline decoration-purple-400/30 underline-offset-4">
            Download Template
          </button>
        </div>

      </div>
    </div>
  );
}