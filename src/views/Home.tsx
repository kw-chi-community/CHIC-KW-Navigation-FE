import MainPageHeader from "@/components/layout/Header/MainPageHeader";
import Navbar from "@/components/layout/Navbar";
import FrequentlyVisited from "@/features/components/Home/FrequentlyVisited";
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
          자주 방문하는 장소
        </h1>
        <FrequentlyVisited />
        </div>
        
      </div>

      <Navbar />
    </div>
  );
};

export default Home;