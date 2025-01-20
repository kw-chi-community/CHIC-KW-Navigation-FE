import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

interface ClassRoom {
  id: string;
  name: string;
}

const CLASSROOMS: { [key: string]: ClassRoom[] } = {
  '1층': [
    { id: '101', name: '새빛 101호' },
    { id: '102', name: '새빛 102호' },
    { id: '103', name: '새빛 103호' },
    { id: '104', name: '새빛 104호' },
  ],
  // 다른 층의 강의실도 추후에 추가
};

export default function ClassSelector() {
  const { floor } = useParams<{ floor: string }>();
  const navigate = useNavigate();
  const classrooms = CLASSROOMS[floor || ""] || [];
  const [selectedClassroom, setSelectedClassroom] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!floor || !CLASSROOMS[floor]) {
      alert('층 정보를 찾을 수 없습니다. 다시 선택해주세요.');
      navigate('/route/question'); 
    }
  }, [floor, navigate]);

  const handleClassSelect = (classId: string) => {
    setSelectedClassroom(classId);
  };

  const handleStartNavigation = () => {
    if (selectedClassroom) {
      const selectedRoom = classrooms.find((room) => room.id === selectedClassroom);
      if (selectedRoom) {
        navigate('/RouteStart', { state: { classroom: selectedRoom.name } });
      }
    } else {
      alert('강의실을 선택해주세요.');
    }
  };

  const filteredClassrooms = classrooms.filter(room =>
    room.name.includes(searchTerm)
  );

  return (
    <div className="container h-[100vh] bg-white text-black flex flex-col">
      <div className="w-full px-4 py-3 flex flex-col items-center">
        <button onClick={() => window.history.back()} className="text-gray-800 hover:text-gray-600 self-start mb-2">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-800">
          도착 강의실이 어디인가요?
        </h1>
      </div>

      <div className="flex-1 px-4 mt-4 overflow-auto">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-left flex justify-between items-center text-gray-400"
          >
            <span>
              {selectedClassroom ? classrooms.find(room => room.id === selectedClassroom)?.name : '강의실을 선택해주세요'}
            </span>
            <span>
              {isOpen ? '▲' : '▼'}
            </span>
          </button>

          {isOpen && (
            <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-md z-10">
              <input
                type="text"
                placeholder="강의실 검색"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-b border-gray-300 p-2"
              />
              <ul>
                {filteredClassrooms.map((room) => (
                  <li
                    key={room.id}
                    onClick={() => handleClassSelect(room.id)}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0 text-gray-800"
                  >
                    {room.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleStartNavigation}
        className="mx-4 mb-4 py-3 bg-red-800 text-white rounded-md hover:bg-red-900"
      >
        길 안내 시작하기
      </button>
    </div>
  );
}