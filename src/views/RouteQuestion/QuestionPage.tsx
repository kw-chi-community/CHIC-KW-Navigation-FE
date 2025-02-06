import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import DropDown from "@/features/components/RouteQuestion/Dropdown/DropDown";
import { FLOOR_OPTIONS, type FloorOption } from "@/features/components/RouteQuestion/Dropdown/floorOptions";
import RouteQuestionHeader from "@/components/layout/Header/RouteQuestionHeader";
import RouteNext from "@/components/common/Button/RouteNextButton";


export default function QuestionPage() {
  const navigate = useNavigate();
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [options, setOptions] = useState<FloorOption[]>([]);

  useEffect(() => {
    console.log("FLOOR_OPTIONS:", FLOOR_OPTIONS);
    setOptions(FLOOR_OPTIONS);
  }, []);

  const handleNext = () => {
    if (selectedFloor) {
      navigate(`/route/class-select/${selectedFloor}`); 
    }
  };

  return (
    <div className="container h-[100vh] bg-white text-black flex flex-col">
      <RouteQuestionHeader title="도착 강의실이 어디인가요?" /> 

      <div className="flex-1 px-4 mt-4 overflow-auto">
        <DropDown
          options={options}
          selectedOption={selectedFloor}
          onOptionSelect={setSelectedFloor}
          placeholder="방문할 층을 선택해주세요"
          searchPlaceholder="층 검색"
        />
      </div>
      
      <RouteNext onClick={handleNext} disabled={!selectedFloor} label="다음으로 넘어가기" />
    </div>
  );
}
