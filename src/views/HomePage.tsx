import ModalProvider from "@/components/common/Modal/ModalBase/ModalContext";
import MainPageHeader from "@/components/layout/Header/MainPageHeader";
import HomeMap from "@/features/components/Home/HomeMap";
import TodayNews from "@/features/components/Home/TodayNews";
import AroundFacility from "@/features/components/Home/AroundFacility";
import { Search } from "lucide-react";

import BuildingInfo from "@/features/components/Home/BuildingInfo";

export default function Home() {
  return (
    <div className="container w-full">
      <ModalProvider>
        <div className="container h-auto bg-white text-black">
          <MainPageHeader />
          <div className="container pb-5">
            <h1 className="text-left w-full px-4 text-lg font-bold pt-20">
              오늘의 광운대 소식 📣
            </h1>
            <TodayNews />
          </div>
          <HomeMap />
          <h6 className="text-xs font-normal mt-[5px] ml-2">
            * 방문을 원하시는 건물을 지도 혹은 우측 상단의{" "}
            <Search className="w-4 inline-block" /> 를 눌러 검색하세요😊
          </h6>
          <div className="flex flex-col items-center w-full pt-[2rem] space-y-8 text-left">
            <div className="container">
              <h1 className="text-left w-full px-4 text-lg font-bold">
                주변 매장 및 편의시설 ☕
              </h1>
              <AroundFacility />
            </div>
            <div className="container">
              <h1 className="text-left w-full px-4 text-lg font-bold">
                건물 소개 🏫
              </h1>
              <BuildingInfo />
            </div>
          </div>
        </div>
      </ModalProvider>
    </div>
  );
}