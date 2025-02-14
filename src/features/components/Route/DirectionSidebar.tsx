import { useState } from "react";
import cn from "clsx";
import { Move, MapPin, Flag, ChevronLeft, ChevronRight, ArrowUp, ArrowRight, ArrowLeft, Landmark, Footprints, CarFront } from 'lucide-react';

const mockSteps = [
  { id: 1, icon: <Move size={20} />, text: "현재 위치에서 출발" },
  { id: 2, icon: <MapPin size={20} />, text: "실외에서 출발" },
  { id: 3, icon: <Landmark size={20} />, text: "실내에서 출발" },
  { id: 4, icon: <Footprints size={20} />, text: "~m 이동" },
  { id: 5, icon: <CarFront size={20} />, text: "횡단보도 이용" },
  { id: 6, icon: <ArrowUp size={20} />, text: "계단으로 ~층 오르기" },
  { id: 7, icon: <ArrowRight size={20} />, text: "우회전" },
  { id: 8, icon: <ArrowLeft size={20} />, text: "좌회전" },
  { id: 9, icon: <Landmark size={20} />, text: "실내로 진입" },
  { id: 10, icon: <MapPin size={20} />, text: "실외로 진입" },
  { id: 11, icon: <Flag size={20} />, text: "목적지 도착" },
];

interface Route {
  type: 'fast' | 'normal' | 'comfortable';
  duration: string;
  distance: string;
}

interface SidebarProps {
  selectedRoute: Route;
}

export default function DirectionSidebar({ selectedRoute }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div 
      className={`bg-white h-screen shadow-md p-4 flex flex-col transition-all duration-300 ${
        isExpanded ? "w-64" : "w-16"
      }`}
    >
      <h2 className={cn(
  "mt-14 text-lg font-semibold h-7 transition-opacity duration-300",
  { "opacity-100": isExpanded, "opacity-0": !isExpanded }
)}>
  {selectedRoute.type === "fast" ? "빠른길" : selectedRoute.type === "normal" ? "일반길" : "편한길"}
</h2>
      <p className={cn(
  "text-sm text-gray-600 transition-opacity duration-300",
  { "opacity-100": isExpanded, "hidden": !isExpanded }
)}>
  {selectedRoute.duration} / {selectedRoute.distance}
</p>

      <div className="space-y-4 overflow-y-auto flex-grow mt-4">
        {mockSteps.map((step) => (
          <div key={step.id} className="flex items-center space-x-3 py-2 bg-white rounded-md shadow-sm">
            <div className="w-8 flex-shrink-0 flex items-center justify-center">
              {step.icon}
            </div>
            <span className={`text-sm font-medium truncate transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 w-0"
            }`}>
              {step.text}
            </span>
          </div>
        ))}
      </div>
      
      <button
        className="bg-gray-300 p-2 rounded-full shadow-md self-start"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
    </div>
  );
}