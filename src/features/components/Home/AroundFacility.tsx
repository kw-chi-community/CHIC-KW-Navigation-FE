import { useNavigate } from "react-router-dom";

export default function Facilities() {
  const navigate = useNavigate();

const facilities = [
  { id: 1, label: "편의점", icon: "/assets/icons/convenience-store.svg", path: "/around-shop/convenience-store" },
  { id: 2, label: "카페", icon: "/assets/icons/cafe.svg", path: "/around-shop/cafe" },
  { id: 3, label: "식당", icon: "/assets/icons/restaurant.svg", path: "/around-shop/restaurant" },
  { id: 4, label: "편의시설", icon: "/assets/icons/amenities.svg", path: "/around-shop/amenity" },
];

  return (
    <div className="flex justify-between items-center space-x-4 mx-auto max-w-[400px] px-4 overflow-y-hidden scrollbar-hide">
      {facilities.map((facility) => (
        <div
          key={facility.id}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate(facility.path)}
        >
          <div className="flex items-center justify-center w-[80px] h-[80px] bg-gray-100 rounded-xl shadow-sm p-2 border border-[#EEEEEE]">
            {facility.icon ? (
              <img
                src={facility.icon}
                alt={facility.label}
                className="h-10 w-10 object-contain"
              />
            ) : (
              <div className="h-10 w-10" />
            )}
          </div>
          <span className="mt-2 text-sm text-gray-800 font-medium">
            {facility.label}
          </span>
        </div>
      ))}
    </div>
  );
}