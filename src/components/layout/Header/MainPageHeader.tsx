import { Search, Bell } from "lucide-react";

export default function MainPageHeader() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 py-3 bg-white z-50 container">
      <div className="flex items-center space-x-4">
        <img
          src="/assets/KW-slog.svg"
          alt="KwangWoon University Logo"
          className="w-[100%] h-auto"
        />
      </div>

      <div className="flex items-center space-x-6 ">
        <Search className="w-6 h-6 text-gray-700 hover:text-[#800000] cursor-pointer" />
        <Bell className="w-6 h-6 text-gray-700 hover:text-[#800000] cursor-pointer" />
        
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border border-gray-300">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="Profile"
            className="w-auto h-8 object-cover"
          />
        </div>
      </div>
    </header>
  );
}