"use client" 

import * as React from "react"
import { motion } from "motion/react";
 
// మనం ఇక్కడ className ని props ద్వారా పంపేలా చిన్న మార్పు చేశాను
export function ShiningText({text, className}: {text: string, className?: string}) {
  return (
    <motion.h1
      className={`bg-[linear-gradient(110deg,#404040,35%,#fff,50%,#404040,75%,#404040)] bg-[length:200%_100%] bg-clip-text text-transparent ${className}`}
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        repeat: Infinity,
        duration: 4, // ఇది కాస్త స్లోగా షైన్ అవ్వడానికి 4 సెకన్లు పెట్టాను
        ease: "linear",
      }}
    >
      {text}
    </motion.h1>
  );
}