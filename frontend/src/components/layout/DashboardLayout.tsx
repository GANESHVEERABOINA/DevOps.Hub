import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardHeader from './DashboardHeader'; 
import { MinimalistDock } from '../ui/minimal-dock'; // 1. కొత్త డాక్ ని ఇంపోర్ట్ చేసాం

export default function DashboardLayout() {
  
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
      ease: "easeInOut" as const,
    }
  };

  return (
    <div className="relative bg-[#050505] text-white h-screen overflow-hidden">
      
      {/* నీ మ్యాజికల్ గ్లో ఎఫెక్ట్ (ఇది అలాగే ఉంచాను, చాలా బాగుంది!) */}
      <motion.div
        {...continuousGlowProps}
        className="fixed top-1/2 left-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 blur-[120px] rounded-full pointer-events-none z-0"
      ></motion.div>

      <div className="relative z-10 flex flex-col h-screen">
        
        <DashboardHeader /> 
        
        <div className="flex flex-1 overflow-hidden relative">
          
          {/* 2. పాత <Sidebar /> తీసేసి, మన కొత్త Mac స్టైల్ డాక్ పెట్టాను */}
          <MinimalistDock />
          
          {/* 3. ml-28 (margin-left) యాడ్ చేశాను. దీనివల్ల కంటెంట్ డాక్ కి తగలకుండా పక్కనుండి స్టార్ట్ అవుతుంది */}
          <main className="flex-1 overflow-auto p-6 md:p-8 ml-24 md:ml-28 relative z-10">
            <Outlet />
          </main>
          
        </div>
      </div>
      
    </div>
  );
}