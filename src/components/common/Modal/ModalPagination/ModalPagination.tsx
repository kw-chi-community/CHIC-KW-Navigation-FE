import { useState } from "react";
import ModalBase from "../ModalBase/ModalBase";

export default function ModalPagination({
  isOpen,
  closeModal,
  items,
}: {
  isOpen: boolean;
  closeModal: () => void;
  items: string[]; // 표시할 아이템 배열
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 페이지네이션 점(dot) 클릭 시 이동
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <ModalBase isOpen={isOpen} closeModal={closeModal} title="Frequently Visited">
      {/* 슬라이더 컨테이너 */}
      <div className="w-full h-[16vh] overflow-x-auto overflow-y-hidden scrollbar-hide">
        <div
          className="flex space-x-4 px-4 h-full transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-[15vh] bg-white rounded-lg shadow-md flex items-center justify-center text-lg font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* 페이지네이션 점 */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>

      {/* 하단 버튼 */}
      <div className="flex justify-between mt-4">
        <button
          onClick={closeModal}
          className="px-4 py-2 text-sm font-bold bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        >
          닫기
        </button>
        <button className="px-4 py-2 text-sm font-bold bg-red-500 text-white rounded-lg hover:bg-red-600">
          확인
        </button>
      </div>
    </ModalBase>
  );
}