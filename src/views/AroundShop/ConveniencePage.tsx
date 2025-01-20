import AroundShopHeader from "@/components/layout/Header/AroundShopHeader";
import PlaceCard from "@/features/components/AroundShop/PlaceCard";

export default function ConveniencePage() {
  const placeData = [
    {
      id: 1,
      image: "https://via.placeholder.com/64x64.png?text=CU",
      name: "(광운대기숙사 A동)CU 광운대기숙사점",
      location: "서울 노원구 광운로 21 (월계동), 1층",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/64x64.png?text=GS25",
      name: "(동해문화예술관 안)GS25 광운문화관점",
      location: "서울 노원구 광운로 21 광운대학교 동해문화예술관, 1층",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/64x64.png?text=7ELEVEN",
      name: "(80주년 기념관)세븐일레븐 광운스퀘어점",
      location: "서울 노원구 광운로 20, 1층",
    },
  ];

  return (
    <div className="container">
      <AroundShopHeader />
      <div className="container pt-[150px] pb-4 h-[100vh] bg-gray-50 text-black">
        {placeData.map((place) => (
          <PlaceCard
            key={place.id}
            image={place.image}
            name={place.name}
            location={place.location}
          />
        ))}
      </div>
    </div>
  );
}