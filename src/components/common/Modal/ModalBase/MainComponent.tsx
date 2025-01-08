import React from "react";
import { ModalProvider, useModalContext } from "./ModalContext";
import ModalWithPagination from "./ModalWithPagination";

const MainComponent: React.FC = () => {
  const { openModal } = useModalContext();

  const images = [
    "https://via.placeholder.com/400x300?text=Image+1",
    "https://via.placeholder.com/400x300?text=Image+2",
    "https://via.placeholder.com/400x300?text=Image+3",
  ];

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={openModal}
      >
        모달 열기
      </button>
      <ModalWithPagination
        title="새빛관 소개"
        images={images}
        description="새빛관 소개 글~~~~~~~~~~~~~~~~~~~~~~~~~~ 소개~~~~~~~"
      />
    </div>
  );
};

const App: React.FC = () => (
  <ModalProvider>
    <MainComponent />
  </ModalProvider>
);

export default App;