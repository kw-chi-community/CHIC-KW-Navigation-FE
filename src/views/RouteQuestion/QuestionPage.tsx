import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackProps {
  onBack: () => void;
}

interface DropdownProps {
  selectedFloor: string | null;
  onFloorSelect: (floor: string) => void;
}

interface FloorOption {
  id: string;
  label: string;
}

const FLOOR_OPTIONS: FloorOption[] = [
  { id: '1f', label: '1층' },
  { id: '2f', label: '2층' },
  { id: '3f', label: '3층' },
  { id: '4f', label: '4층' },
  { id: '5f', label: '5층' },
  { id: '6f', label: '6층' },
  { id: '7f', label: '7층' },
  { id: '8f', label: '8층' },
  { id: '9f', label: '9층' },
];

export function BackProps() {
  return (
    <div className="w-full px-4 py-3 flex flex-col items-center">
      <button
        onClick={() => window.history.back()}
        className="text-gray-800 hover:text-gray-600 mb-2 self-start"
      >
        <ArrowLeft size={24} />
      </button>
      <h1 className="text-2xl font-bold text-gray-800">
        도착 강의실이 어디인가요?
      </h1>
    </div>
  );
}

export function DropdownProps({ selectedFloor, onFloorSelect }: DropdownProps) { 
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedFloor) {
      const timer = setTimeout(() => {
        navigate(`/class-select/${selectedFloor}`);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [selectedFloor, navigate]);


  const filteredFloors = FLOOR_OPTIONS.filter(option =>
    option.label.includes(searchTerm)
  );

  return (
    <div className="px-4 w-full">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-left flex justify-between items-center ${
            isOpen ? 'text-gray-800' : 'text-gray-500'
          }`}
        >
          <span>{selectedFloor || '방문할 층을 선택해주세요'}</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-md z-10">
            <input
              type="text"
              placeholder="층 검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-b border-gray-300 p-2"
            />
            <ul>
              {filteredFloors.map(({ id, label }) => (
                <li
                  key={id}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200 last:border-b-0 text-gray-800"
                  onClick={() => {
                    onFloorSelect(label);
                    setIsOpen(false);
                    setSearchTerm(''); 
                  }}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p>*2초 후에 자동으로 페이지가 이동합니다.</p>
      </div>
    </div>
  );
}


export default function QuestionPage() {
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

  return (
    <div className="container h-[100vh] bg-white text-black flex flex-col">
    <BackProps />
    <div className="mt-4 flex-grow overflow-auto">
      <DropdownProps
        selectedFloor={selectedFloor}
        onFloorSelect={setSelectedFloor}
      />
    </div>
  </div>
  );
};


