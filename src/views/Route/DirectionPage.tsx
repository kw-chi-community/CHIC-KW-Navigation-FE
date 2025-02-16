import { useState } from "react";
import DirectionHeader from '@/components/layout/Header/DirectionHeader';
import RouteCard from '@/features/components/Route/RouteCard';
import DirectionSidebar from '@/features/components/Route/DirectionSidebar';

interface Route {
  type: 'fast' | 'normal' | 'comfortable';
  duration: string;
  distance: string;
}

export default function DirectionPage() {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);

  return (
    <div className="container h-screen bg-white text-black relative">
      <DirectionHeader />
      {!selectedRoute ? (
        <div className="flex flex-col justify-end items-center h-full">
          <div className="flex gap-4 p-4 bg-white shadow-md w-full justify-center absolute bottom-0">
            {["fast", "normal", "comfortable"].map((type) => (
              <RouteCard
                key={type}
                type={type as "fast" | "normal" | "comfortable"}
                duration={type === "fast" ? "15분" : type === "normal" ? "20분" : "30분"}
                distance={type === "fast" ? "956m" : type === "normal" ? "1km" : "1.5km"}
                description={type === "fast" ? "시간이 촉박할 때 추천 ⭐" : type === "normal" ? "재학생이 자주 사용하는 길" : "계단이 없는 길"}
                onClick={() => setSelectedRoute({
                  type: type as "fast" | "normal" | "comfortable",
                  duration: type === "fast" ? "15분" : type === "normal" ? "20분" : "30분",
                  distance: type === "fast" ? "956m" : type === "normal" ? "1km" : "1.5km"
                })}
              />
            ))}
          </div>
        </div>
      ) : (
        <DirectionSidebar selectedRoute={selectedRoute} />
      )}
    </div>
  );
}
