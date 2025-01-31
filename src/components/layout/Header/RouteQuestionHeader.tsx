import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RouteQuestionHeaderProps {
  title: string;
}

export default function RouteQuestionHeader({ title }: RouteQuestionHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="w-full px-6 py-10 flex flex-col items-center"> 
      <button 
        onClick={() => navigate(-1)} 
        className="text-gray-800 hover:text-gray-600 mb-4 self-start" 
      >
        <ArrowLeft size={24} className="mr-2" /> 
      </button>
      <h1 className="text-2xl font-extrabold text-gray-800">{title}</h1> 
    </div>
  );
}
