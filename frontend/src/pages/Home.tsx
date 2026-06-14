import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Home() {
  const entranceAnimationProps = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] as any }
  };

  const continuousGlowProps = {
    animate: {
      scale: [1, 1.1, 0.95, 1], 
      x: ["-50%", "-48%", "-51%", "-50%"],
      y: ["-50%", "-51%", "-49%", "-50%"],
      // 1. గ్లో మరీ ఎక్కువగా లేకుండా కొంచెం తగ్గించాను
      opacity: [0.15, 0.25, 0.15, 0.15] 
    },
    transition: {
      duration: 20,
      repeat: Infinity,
    }
  };

  return (
    // 2. ఇక్కడ bg-transparent తీసేసి bg-[#050505] (డార్క్ యాపిల్ థీమ్) పెట్టాను
    <div className="relative flex flex-col bg-[#050505] text-white min-h-screen overflow-x-hidden">
      
      <motion.div
        {...continuousGlowProps}
        className="absolute top-1/2 left-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0"
      ></motion.div>

      <Header />
      
      <main className="relative z-10 flex-grow flex flex-col">
        <section className="flex-grow flex flex-col justify-center min-h-[calc(100vh-80px)] py-10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            
            {/* Apple Style Glowing Heading */}
            <motion.h1 
              {...entranceAnimationProps}
              transition={{ ...entranceAnimationProps.transition, delay: 0.2 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              MASTER DEVOPS.<br/>GET HIRED FASTER.
            </motion.h1>

            <motion.p 
              {...entranceAnimationProps}
              transition={{ ...entranceAnimationProps.transition, delay: 0.4 }}
              className="text-base md:text-lg mb-10 text-white/70 font-medium max-w-3xl mx-auto"
            >
              1200+ Interview Questions | 50+ Roadmaps | 100+ HR Questions | Projects | Mock Interviews | Salary Insights
            </motion.p>

            {/* Glassmorphism Buttons Area */}
            <motion.div 
              {...entranceAnimationProps}
              transition={{ ...entranceAnimationProps.transition, delay: 0.6 }}
              className="flex justify-center gap-6 flex-wrap"
            >
              {/* Start Learning (Primary Glowing Button) */}
              <Link 
                to="/dashboard" 
                className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-300"
              >
                Start Learning
              </Link>
              
              {/* Explore Roadmaps (Glass Button) */}
              <Link 
                to="/roadmaps" 
                className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 hover:border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300"
              >
                Explore Roadmaps
              </Link>
              
              {/* Watch Demo (Glass Button) */}
              <button 
                className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 hover:border-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300"
              >
                Watch Demo
              </button>
            </motion.div>
            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}