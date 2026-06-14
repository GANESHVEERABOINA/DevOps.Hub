import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
// 1. ఇక్కడ పాత Header తీసేసి కొత్త DashboardHeader ఇంపోర్ట్ చేశాను
import DashboardHeader from './DashboardHeader'; 
import Sidebar from './Sidebar';

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
      
      {/* నీ మ్యాజికల్ గ్లో ఎఫెక్ట్ */}
      <motion.div
        {...continuousGlowProps}
        className="fixed top-1/2 left-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 blur-[120px] rounded-full pointer-events-none z-0"
      ></motion.div>

      <div className="relative z-10 flex flex-col h-screen">
        
        {/* 2. ఇక్కడ పాత <Header /> బదులు కొత్త <DashboardHeader /> పెట్టాను */}
        <DashboardHeader /> 
        
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          
          <main className="flex-1 overflow-auto p-6 md:p-8">
            <Outlet />
          </main>
        </div>
      </div>
      
    </div>
  );
}