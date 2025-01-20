import AroundShopHeader from '@/components/layout/Header/AroundShopHeader'
import PlaceCard from '@/features/components/\bAroundShop/PlaceCard';

export default function AmenityPage() {
  const placeData = [
      {
        id: 1,
        image: "https://via.placeholder.com/64x64.png?text=1",
        name: "편의시설1",
        location: "서울 노원구 광운로",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/64x64.png?text=2",
        name: "편의시설2",
        location: "서울 노원구 광운로 ",
      },
      {
        id: 3,
        image: "https://via.placeholder.com/64x64.png?text=3",
        name: "편의시설3",
        location: "서울 노원구 광운로 ",
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