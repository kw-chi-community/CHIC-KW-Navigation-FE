import { useState } from "react";
import { ChevronUp, ChevronDown, Search } from "lucide-react";

export default function DirectionHeader() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("현재 위치");
  const [destination, setDestination] = useState("");

  const handleSearchClick = () => {
    console.log(`${currentLocation}에서 ${destination}으로 이동합니다.`);
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-center items-center px-6 py-3 bg-[#7D170A] z-50 shadow-lg">
      <div className="flex items-center justify-center w-full space-x-4">
        <div className="pl-2 flex flex-col w-[60vw] space-y-3">
          {isExpanded && (
            <div className="flex items-center w-full border border-[#fff] rounded-lg px-4 py-2 bg-white">
              <input
                type="text"
                value={currentLocation}
                onChange={(e) => setCurrentLocation(e.target.value)}
                className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
                placeholder="현재 위치를 입력하세요"
              />
            </div>
          )}
          <div className="flex items-center w-full border border-[#fff] rounded-lg px-4 py-2 bg-white">
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-500 focus:outline-none"
              placeholder="목적지를 입력하세요"
            />
            <Search
              className="w-5 h-5 text-[#7D170A] cursor-pointer"
              onClick={handleSearchClick}
            />
          </div>
        </div>
        <button
          className="ml-2 text-sm text-[#fff] underline flex items-center"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
    </header>
  );
}