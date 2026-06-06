import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function Home() {
  const entranceAnimationProps = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const continuousGlowProps = {
    animate: {
      scale: [1, 1.1, 0.95, 1], 
      x: ["-50%", "-48%", "-51%", "-50%"],
      y: ["-50%", "-51%", "-49%", "-50%"],
      // 1. గ్లో బ్రైట్‌నెస్ తగ్గించాం (0.3 to 0.5)
      opacity: [0.3, 0.5, 0.3, 0.3] 
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }
  };

  return (
    // 2. 'overflow-hidden' బదులు 'overflow-x-hidden' వాడాం, దీనివల్ల స్క్రోల్ ఫ్రీగా అవుతుంది
    <div className="relative flex flex-col bg-black text-white min-h-screen overflow-x-hidden">
      
      {/* 3. గ్లో సైజ్ తగ్గించాం (w-450px, h-450px) */}
      <motion.div
        {...continuousGlowProps}
        className="absolute top-1/2 left-1/2 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0"
      ></motion.div>

      <Header />
      
      {/* 4. సెక్షన్ హైట్ ని కరెక్ట్ గా సెట్ చేశాం. దీనివల్ల ఫుటర్ కంప్లీట్ గా కిందకి వెళ్తుంది, స్పేస్ వేస్ట్ అవ్వదు */}
      <main className="relative z-10 flex-grow flex flex-col">
        <section className="flex-grow flex flex-col justify-center min-h-[calc(100vh-80px)] py-10">
          <div className="max-w-6xl mx-auto px-4 text-center">
            
            <motion.h1 
              {...entranceAnimationProps}
              transition={{ ...entranceAnimationProps.transition, delay: 0.2 }}
              className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white"
            >
              MASTER DEVOPS.<br/>GET HIRED FASTER.
            </motion.h1>

            <motion.p 
              {...entranceAnimationProps}
              transition={{ ...entranceAnimationProps.transition, delay: 0.4 }}
              className="text-base md:text-lg mb-10 text-gray-300 font-light"
            >
              1200+ Interview Questions | 50+ Roadmaps | 100+ HR Questions | Projects | Mock Interviews | Salary Insights
            </motion.p>

            <motion.div 
              {...entranceAnimationProps}
              transition={{ ...entranceAnimationProps.transition, delay: 0.6 }}
              className="flex justify-center gap-4 flex-wrap"
            >
              <Link 
                to="/dashboard" 
                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-transform hover:scale-105 shadow-lg shadow-white/10"
              >
                Start Learning
              </Link>
              <Link 
                to="/roadmaps" 
                className="border border-gray-500 text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors"
              >
                Explore Roadmaps
              </Link>
              <button 
                className="border border-gray-500 text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors"
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