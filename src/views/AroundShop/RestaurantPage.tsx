import AroundShopHeader from '@/components/layout/Header/AroundShopHeader'
import PlaceCard from '@/features/components/\bAroundShop/PlaceCard';

export default function RestaurantPage() {
  const placeData = [
      {
        id: 1,
        image: "https://via.placeholder.com/64x64.png?text=ZIZIGO", 
        name: "(메머드커피 옆)지지고 광운대점",
        location: "서울 노원구 광운로 27, 1층",
      },
      {
        id: 2,
        image: "https://via.placeholder.com/64x64.png?text=2ndFloor",
        name: "(연구관 뒤)이층집",
        location: "서울 노원구 월계동 496-14번지, 2층",
      },
      {
        id: 3,
        image: "https://via.placeholder.com/64x64.png?text=NamDo",
        name: "(석계역 가는 길)남도식당",
        location: "서울 노원구 광운로2길 26, 1층",
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