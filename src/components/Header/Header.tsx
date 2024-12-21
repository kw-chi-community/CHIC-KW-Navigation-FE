import { ChevronLeft } from "lucide-react";

function Header() {
  return (
    <div className="container fixed top-0 left-0 right-0 h-[7vh] bg-[#7D170A] flex items-center justify-between px-4 text-white shadow-md z-20">

      <button
        onClick={() => window.history.back()}
        className="flex items-center space-x-2 mr-2"
      >
        <ChevronLeft color="#ffffff" />
      </button>

      <h1 className="text-lg font-semibold">현재 페이지</h1>
      <div className="w-8"></div>
    </div>
  );
}

export default Header;
