import { useState } from "react";
import ExModal from "../components/common/Modal/ExModal/ExModal";
import MainPageHeader from "@/components/layout/Header/MainPageHeader";
import Navbar from "@/components/layout/Navbar";


const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container h-[100vh] flex flex-col items-center justify-center bg-white text-white">
      <MainPageHeader />
      <h1 className="text-3xl font-bold mb-6 animate-bounce text-black">광운 내비게이션</h1>

      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-red-800 text-white px-6 py-2 rounded-lg shadow-lg  hover:rotate-3 hover:scale-105 transition-all duration-300"
      >
        모달 열기
      </button>
      <ExModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <Navbar />
    </div>
  );
};

export default Home;
