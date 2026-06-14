import { Link } from "react-router-dom";
import BookmarkButton from "./BookmarkButton";
import ShareButton from "./ShareButton";

interface QuestionCardProps {
  question: {
    id: string;
    question_text: string;
    difficulty: string;
    category: { name: string; slug: string };
  };
}

export default function QuestionCard({ question }: QuestionCardProps) {
  return (
    /* 1. పాత bg-gray-900 తీసేసి Glassmorphism (bg-white/[0.03], backdrop-blur) యాడ్ చేశాను */
    <div className="group relative bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/10 hover:border-white/20 transition-all duration-500 ease-out hover:-translate-y-1 overflow-hidden">
      
      {/* పైన ఒక చిన్న లైట్ గ్లో ఎఫెక్ట్ (హోవర్ చేసినప్పుడు మాత్రమే వస్తుంది) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>

      {/* 2. క్వశ్చన్ టెక్స్ట్ - స్మూత్ గా చదవడానికి వీలుగా */}
      <Link to={`/questions/${question.id}`} className="relative z-10 block mb-6">
        <h3 className="font-medium text-lg md:text-xl text-white/90 group-hover:text-white transition-colors duration-300 leading-relaxed tracking-wide">
          {question.question_text}
        </h3>
      </Link>
      
      <div className="flex justify-between items-center relative z-10">
        
        {/* 3. Apple Style Badge (Pill Shape) */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 shadow-sm backdrop-blur-md uppercase tracking-wider">
          <span className="text-purple-300">{question.category?.name || "Linux"}</span> 
          <span className="text-white/30">•</span> 
          <span>{question.difficulty}</span>
        </div>
        
        {/* 4. నీ బుక్‌మార్క్ & షేర్ బటన్స్ (నార్మల్ గా లైట్ గా ఉండి, హోవర్ చేయగానే బ్రైట్ అవుతాయి) */}
        <div className="flex gap-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300 items-center">
          <BookmarkButton />
          <ShareButton />
        </div>
        
      </div>
    </div>
  );
}