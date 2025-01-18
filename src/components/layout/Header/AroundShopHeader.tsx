import { useState } from "react";
import { X, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Tab } from "@/components/types/AroundShopHeader";

export default function AroundShopHeader() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("restaurant");

  const tabs: Tab[] = [
    { id: "convenience-store", label: "편의점", path: "/around-shop/convenience-store" },
    { id: "cafe", label: "카페", path: "/around-shop/cafe" },
    { id: "restaurant", label: "식당", path: "/around-shop/restaurant" },
    { id: "amenity", label: "편의시설", path: "/around-shop/amenity" },
  ];

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab.id);
    navigate(tab.path);
  };

  const handleClose = () => {
    navigate("/main-page");
  };

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-md container">
      <div className="flex justify-between items-center px-4 py-3">
        <X className="w-6 h-6 cursor-pointer text-gray-800" onClick={handleClose} />
        <h1 className="text-lg font-bold">주변 매장 선택</h1>
        <Search className="w-6 h-6 text-gray-700 hover:text-[#800000] cursor-pointer" />
      </div>
      <div className="flex justify-between items-center border-t border-gray-200">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="flex-1 text-center cursor-pointer py-2"
            onClick={() => handleTabClick(tab)}
          >
            <span
              className={`text-sm font-medium ${
                activeTab === tab.id ? "text-black" : "text-gray-500"
              }`}
            >
              {tab.label}
            </span>
            <div
              className={`mt-1 h-[2px] ${
                activeTab === tab.id ? "bg-black" : "bg-transparent"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </header>
  );
}