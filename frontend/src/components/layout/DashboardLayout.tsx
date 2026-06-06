import { Outlet } from 'react-router-dom';
// 1. framer-motion ఇంపోర్ట్ చేసాం
import { motion } from 'framer-motion';
import Header from './Header';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  
  // 2. గ్లో యానిమేషన్ సెట్టింగ్స్ 
  // (డాష్‌బోర్డ్ లో కంటెంట్ చదవడానికి ఇబ్బంది లేకుండా బ్రైట్‌నెస్ కొద్దిగా తగ్గించాం)
  const continuousGlowProps = {
    animate: {
      scale: [1, 1.1, 0.95, 1], 
      x: ["-50%", "-48%", "-51%", "-50%"],
      y: ["-50%", "-51%", "-49%", "-50%"],
      opacity: [0.15, 0.3, 0.15, 0.15] 
    },
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    }
  };

  return (
    // 3. మెయిన్ కంటైనర్ కి bg-black మరియు relative ఇచ్చాం
    <div className="relative bg-black text-black h-screen overflow-hidden">
      
      {/* 4. >>> గ్లో ఎఫెక్ట్ (fixed ఇవ్వడం వల్ల స్క్రోల్ చేసినా కదలదు) <<< */}
      <motion.div
        {...continuousGlowProps}
        className="fixed top-1/2 left-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 blur-[120px] rounded-full pointer-events-none z-0"
      ></motion.div>

      {/* 5. మీ ఒరిజినల్ లేఅవుట్ ఇక్కడ మొదలవుతుంది (relative z-10 వల్ల గ్లో కి పైన వస్తుంది) */}
      <div className="relative z-10 flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          
          {/* 6. ఇక్కడ bg-black తీసేసాం, కాబట్టి వెనక ఉన్న మ్యాజికల్ గ్లో కనిపిస్తుంది */}
          <main className="flex-1 overflow-auto p-6">
            <Outlet />
          </main>
        </div>
      </div>
      
    </div>
  );
}