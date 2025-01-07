import MainPageHeader from "@/components/layout/Header/MainPageHeader";

import BuildingInfo from "@/features/components/Home/BuildingInfo";
import HomeMap from "@/features/components/Home/HomeMap";
import TodayNews from "@/features/components/Home/TodayNews";

const Home = () => {
  return (
    <div className="container h-[100vh] bg-white text-black">
      <MainPageHeader />

      <div className="flex flex-col items-center w-full pt-[4rem] pb-[8rem] space-y-8">
        <HomeMap />

        <div className="container">

        <h1 className="text-left w-full px-4 text-lg font-bold">
          오늘의 광운대 소식
        </h1>
        <TodayNews />
        </div>
          <div className="container">
        <h1 className="text-left w-full px-4 text-lg font-bold">
          건물 소개
        </h1>
        <BuildingInfo />
        </div>
        
      </div>

    </div>
  );
};

export default Home;