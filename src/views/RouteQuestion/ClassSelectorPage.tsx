import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DropDown from "@/components/common/Dropdown/DropDown";
import { CLASSROOMS, type ClassRoom } from "@/components/common/Dropdown/classOptions";
import RouteQuestionHeader from "@/components/layout/Header/RouteQuestionHeader";
import RouteNext from "@/components/common/Button/RouteNext";

export default function ClassSelector() {
  const { floor } = useParams<{ floor: string }>();
  const navigate = useNavigate();
  const classrooms: ClassRoom[] = CLASSROOMS[floor || ""] || [];
  const [selectedClassroom, setSelectedClassroom] = useState<string | null>(null);

  useEffect(() => {
    if (!floor || !CLASSROOMS[floor]) {
      alert("층 정보를 찾을 수 없습니다. 다시 선택해주세요.");
      window.location.href = "/route/question"; 
    }
  }, [floor]);

  const handleNext = () => {
    if (selectedClassroom) {
      navigate("/RouteStart", { state: { classroom: selectedClassroom } }); 
    } else {
      alert("강의실을 선택해주세요.");
    }
  };

  return (
    <div className="container h-[100vh] bg-white text-black flex flex-col">
      <RouteQuestionHeader title="도착 강의실이 어디인가요?" />

      <div className="flex-1 px-4 mt-4 overflow-auto">
        <DropDown
          options={classrooms.map((room) => ({ id: room.id, label: room.name }))}
          selectedOption={selectedClassroom}
          onOptionSelect={(option) => setSelectedClassroom(option)}
          placeholder="강의실을 선택해주세요"
          searchPlaceholder="강의실 검색"
        />
      </div>

      <RouteNext onClick={handleNext} disabled={!selectedClassroom}
      label="길 안내 시작하기" />
    </div>
  );
}
