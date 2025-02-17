import { useState } from "react";
import { Search } from "lucide-react";
import searchPlaces from "@/features/components/mocks/SearchList";

export default function MainPageHeader() {
  const [searchTerm, setSearchTerm] = useState<string>(""); 
  const [filteredResults, setFilteredResults] = useState<{ name: string; location: string }[]>([]); 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    setSearchTerm(keyword);

    if (keyword.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = searchPlaces.filter((place) =>
        place.name.includes(keyword)
      );
      setFilteredResults(results);
    }
  };

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-3 bg-white z-50 container">
      <div className="flex items-center space-x-4">
        <img
          src="/assets/kwayLogo.svg"
          alt="KwangWoon University Logo"
          className="w-[100%] h-auto"
        />
      </div>
      <div className="relative">
        <div className="w-[270px] flex items-center space-x-2 border border-[#800000] rounded-full px-4 py-2 bg-whiteshadow-md">
          <input
            type="text"
            placeholder="목적지를 입력하세요"
            className="flex-1 bg-transparent text-sm text-gray-800 focus:outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search className="w-6 h-6 text-[#800000] cursor-pointer pr-2" />
        </div>

        {/* 검색 결과 드롭다운 */}
        {filteredResults.length > 0 && (
          <ul className="absolute top-full mt-1 w-full bg-white border border-[#800000] rounded-lg shadow-lg overflow-hidden">
            {filteredResults.map((place, index) => (
              <li
                key={index}
                className="flex justify-between items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer transition-all"
                onClick={() => setSearchTerm(place.name)}
              >
                <span>{place.name}</span>
                <span className="text-xs text-gray-500">{place.location}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
