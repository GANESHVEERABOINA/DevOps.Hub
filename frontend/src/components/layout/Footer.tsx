export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-auto border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Brand & Quote */}
        <div>
          <h3 className="text-white text-xl font-bold mb-2 tracking-wider">DEVOPS<span className="text-purple-500">.HUB</span></h3>
          <p className="text-xs italic text-gray-400 mb-2">
            "If you're a beginner aiming for a DevOps career, this platform is a gold mine..."
          </p>
          {/* Ikkada mee peru add chesanu */}
          <p className="text-xs text-gray-400">Created with AI </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-1 text-xs text-gray-300">
            <li><a href="/roadmaps" className="hover:text-white transition-colors">DevOps Roadmaps</a></li>
            <li><a href="/questions" className="hover:text-white transition-colors">Interview Q&A</a></li>
            <li><a href="/projects" className="hover:text-white transition-colors">Real-time Projects</a></li>
            <li><a href="/mock-interview" className="hover:text-white transition-colors">Mock Interviews</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Connect</h4>
          <ul className="space-y-1 text-xs text-gray-300">
            {/* Ikkada Portfolio link add chesanu */}
            <li><a href="#" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="https://www.linkedin.com/in/ganesh-veeraboina/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="https://github.com/GANESHVEERABOINA" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-6 pt-3 text-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Ganesh Veeraboina. All rights reserved.</p>
      </div>
    </footer>
  );
}