import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RouteQuestionHeader from "@/components/layout/Header/RouteQuestionHeader";
import { RouteLoading, ClassroomAnimation, ClassroomDisplay } from "@/features/components/Animation/animation"; 

interface LocationState {
  classroom: string;
}

export default function RouteStartPage() {
  const location = useLocation();
  const state = location.state as LocationState | null;
  const classroom = state?.classroom || "강의실 미선택";

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className="container h-[100vh] bg-white text-black flex flex-col">
      <RouteQuestionHeader title="길 안내를 시작하겠습니다🚶" />
  
      <div className="flex-1 relative overflow-hidden flex items-center justify-center">
        <RouteLoading isLoading={isLoading} />
      </div>
  
      <div className="w-full p-4 space-y-4">
        <div className="w-full flex flex-col items-center">
          <button
            className="w-full py-3 bg-gray-300 rounded-full text-gray-700 text-lg font-bold shadow-md text-center mb-2"
            disabled
          >
            현재 위치
          </button>

          <div className="w-full flex justify-center items-center mb-4">
            <ClassroomAnimation isLoading={isLoading} />
          </div>
  
          <div className="relative w-full">
            <ClassroomDisplay classroom={classroom} />
          </div>
        </div>
      </div>
    </div>
  );
}

