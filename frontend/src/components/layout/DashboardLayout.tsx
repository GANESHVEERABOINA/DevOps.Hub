import { Outlet } from 'react-router-dom';
import DashboardHeader from './DashboardHeader'; 
import { MinimalistDock } from '../ui/minimal-dock'; 

export default function DashboardLayout() {
  return (
    // ఇక్కడ bg-[#050505] తీసేసి bg-transparent పెట్టాను. పాత గ్లో ఎఫెక్ట్ కూడా డిలీట్ చేశాను.
    <div className="relative bg-transparent text-white h-screen overflow-hidden">
      
      <div className="relative z-10 flex flex-col h-screen">
        
        <DashboardHeader /> 
        
        <div className="flex flex-1 overflow-hidden relative">
          
          <MinimalistDock />
          
          <main className="flex-1 overflow-auto p-6 md:p-8 ml-24 md:ml-28 relative z-10">
            <Outlet />
          </main>
          
        </div>
      </div>
      
    </div>
  );
}