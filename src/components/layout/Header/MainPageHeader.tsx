import { Search } from "lucide-react";

export default function MainPageHeader() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-3 bg-white z-50 container">
      <div className="flex items-center space-x-4">
        <img
          src="/assets/kwayLogo.svg"
          alt="KwangWoon University Logo"
          className="w-[100%] h-auto"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 border border-[#800000] rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="목적지를 입력하세요"
            className="w-full bg-transparent text-sm text-gray-800 focus:outline-none"
          />
          <Search className="w-5 h-5 text-[#800000] cursor-pointer" />
        </div>
      </div>
    </header>
  );
}