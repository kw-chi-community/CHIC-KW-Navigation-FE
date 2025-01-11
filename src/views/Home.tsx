import React from "react";
import ModalProvider from "../components/common/Modal/ModalBase/ModalContext";
import ModalManager from "../components/common/Modal/ModalBase/ModalManger"; 
import MainPageHeader from "../components/layout/Header/MainPageHeader";
import Navbar from "../components/layout/Navbar";
import FrequentlyVisited from "../features/components/Home/FrequentlyVisited";
import HomeMap from "../features/components/Home/HomeMap";
import TodayNews from "../features/components/Home/TodayNews";

export default function Home() {
  return (
    <ModalProvider>
      <div className="container h-[100vh] bg-white text-black">
        {/* 상단 헤더 */}
        <MainPageHeader />

        {/* 콘텐츠 영역 */}
        <div className="flex flex-col items-center w-full pt-[4rem] pb-[8rem] space-y-8">
          {/* 지도 */}
          <HomeMap />

          {/* 오늘의 소식 */}
          <div className="container">
            <h1 className="text-left w-full px-4 text-lg font-bold">
              오늘의 광운대 소식
            </h1>
            <TodayNews />
          </div>

          {/* 자주 방문하는 장소 */}
          <div className="container">
        <h1 className="text-left w-full px-4 text-lg font-bold">
          자주 방문하는 장소
        </h1>
        <FrequentlyVisited />
        </div>

        {/* 하단 네비게이션 */}
        <Navbar />
      </div>

      <Navbar />
      </div>
      <ModalManager />
    </ModalProvider>

  );
}