import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { BackgroundPaths } from '../components/ui/background-paths';
import { Button } from '../components/ui/button';
import VaporizeTextCycle, { Tag } from '../components/ui/vapour-text-effect';

export default function Home() {
  return (
    <div className="relative flex flex-col bg-[#050505] text-white min-h-screen overflow-x-hidden">
      
      {/* 1. పైన హెడర్ */}
      <Header />
      
      {/* 2. Main Animated Background Section */}
      <main className="relative z-10 flex-grow flex flex-col min-h-[calc(100vh-80px)]">
        {/* టైటిల్ ని ఎంప్టీ (" ") చేసి, చిల్డ్రన్ లో మన Vaporize ఎఫెక్ట్ పెట్టాను */}
        <BackgroundPaths 
            title=" "
            subtitle="1200+ Interview Questions | 50+ Roadmaps | 100+ HR Questions | Projects | Mock Interviews | Salary Insights"
        >
            
            {/* Vaporize Text Effect Container */}
            <div className="w-full h-[120px] md:h-[200px] flex justify-center items-center mb-6">
                <VaporizeTextCycle
                    texts={[
                        "MASTER DEVOPS.", 
                        "GET HIRED FASTER.", 
                        "BUILD YOUR FUTURE."
                    ]}
                    font={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "80px", // డెస్క్‌టాప్ కోసం కొంచెం పెద్ద సైజు
                        fontWeight: 900
                    }}
                    color="rgb(255, 255, 255)"
                    spread={4}
                    density={6}
                    animation={{
                        vaporizeDuration: 2.5, // ఎంత సేపు పొగలాగా ఎగరాలి
                        fadeInDuration: 1.5,   // కొత్త అక్షరాలు రావడానికి ఎంత సేపు పట్టాలి
                        waitDuration: 2        // చదవడానికి ఎంత సేపు ఆగాలి
                    }}
                    direction="left-to-right"
                    alignment="center"
                    tag={Tag.H1}
                />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 flex-wrap mt-4">
                <Button asChild className="rounded-full px-10 py-7 text-lg font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300 bg-white text-black hover:bg-gray-100">
                    <Link to="/dashboard">Start Learning</Link>
                </Button>
                
                <Button asChild variant="outline" className="rounded-full px-10 py-7 text-lg font-bold backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-white">
                    <Link to="/roadmaps">Explore Roadmaps</Link>
                </Button>

                <Button variant="outline" className="rounded-full px-10 py-7 text-lg font-bold backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-white">
                    Watch Demo
                </Button>
            </div>
            
        </BackgroundPaths>
      </main>

      {/* 3. కింద ఫూటర్ */}
      <Footer />
    </div>
  );
}