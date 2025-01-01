import { ChevronLeft, Search } from "lucide-react";

function Header() {
  const buttonClass = "flex items-center space-x-2 mr-2";

  return (
    <div className="container fixed top-0 left-0 right-0 h-[7vh] bg-[#7D170A] flex items-center justify-between px-4 text-white shadow-md z-20">

      <button
        onClick={() => window.history.back()}
        className={buttonClass}
      >
        <ChevronLeft color="#ffffff" />
      </button>

      <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[40px] rounded-full bg-white text-black text-center px-4 shadow-md focus:outline-none"
          />
      </div>

      <button className={buttonClass}>
        <Search color="#ffffff" />
      </button>
      
    </div>
  );
}

export default Header;
