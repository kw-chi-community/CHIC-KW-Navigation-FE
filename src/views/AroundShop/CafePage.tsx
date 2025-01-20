import AroundShopHeader from '@/components/layout/Header/AroundShopHeader'
import PlaceCard from '@/features/components/\bAroundShop/PlaceCard';

export default function CafePage() {
 const placeData = [
     {
       id: 1,
       image: "https://via.placeholder.com/64x64.png?text=COMPOSE",
       name: "컴포즈커피 광운대80주년기념관점",
       location: "서울 노원구 광운로 20, 기념관 L층 ",
     },
     {
       id: 2,
       image: "https://via.placeholder.com/64x64.png?text=GONGCHA",
       name: "(컴포즈커피 옆)공차 광운대점",
       location: "서울 노원구 광운로 20, 기념관 L층",
     },
     {
       id: 3,
       image: "https://via.placeholder.com/64x64.png?text=MEMOD",
       name: "(80주년 기년관 앞)매머드커피 광운대정문점",
       location: "서울 노원구 광운로 27, 1층",
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