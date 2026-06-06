import { Link } from 'react-router-dom';
import BookmarkButton from './BookmarkButton';
import ShareButton from './ShareButton';

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
    <div className="bg-black p-5 rounded-xl shadow hover:shadow-md transition">
      <Link to={`/questions/${question.id}`}>
        <h3 className="font-semibold text-lg">{question.question_text}</h3>
      </Link>
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm text-gray-500">{question.category.name} · {question.difficulty}</span>
        <div className="flex gap-2">
        <BookmarkButton />
          <ShareButton />
        </div>
      </div>
    </div>
  );
}