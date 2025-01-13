import { useState, useEffect } from "react";
import ModalHeader from "./ModalHeader";
import ModalSlider from "./ModalSlider";
import ModalDescription from "./ModalDescription";
import ModalFooter from "./ModalFooter";

export default function ModalWithPagination({
  isOpen,
  closeModal,
  title,
  images,
  description,
}: ModalWithPaginationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // currentPage 상태 추가
  const [startX, setStartX] = useState(0); // 터치 시작 위치
  const [endX, setEndX] = useState(0); // 터치 종료 위치

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true); // 모달 열릴 때 애니메이션 시작
    } else {
      setIsVisible(false); // 모달 닫힐 때 애니메이션 초기화
    }
  }, [isOpen]);

  if (!isOpen) return null;

  if (!images || images.length === 0) {
    console.error("Images array is empty.");
    return null;
  }

  // 슬라이드 변경 로직
  const handlePageChange = (action: "start" | "move" | "end", clientX?: number) => {
    if (action === "start" && clientX !== undefined) {
      setStartX(clientX);
    } else if (action === "move" && clientX !== undefined) {
      setEndX(clientX);
    } else if (action === "end") {
      const swipeDistance = startX - endX;

      if (swipeDistance > 50) {
        setCurrentPage((prev) => Math.min(prev + 1, images.length - 1));
      } else if (swipeDistance < -50) {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
      }

      setStartX(0);
      setEndX(0);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`relative bg-white w-[85%] max-w-[350px] h-auto rounded-lg shadow-lg overflow-hidden mx-4 transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* 헤더 */}
        <ModalHeader
          title={title}
          closeModal={() => {
            setIsVisible(false);
            setTimeout(closeModal, 500);
          }}
        />

        {/* 이미지 슬라이더 */}
        <ModalSlider
          images={images}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        {/* 페이지네이션 불렛 */}
        <div className="flex justify-center items-center space-x-1 py-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)} // 불렛 클릭 시 페이지 변경
              className={`w-3 h-3 rounded-full ${
                index === currentPage ? "bg-red-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

        {/* 텍스트 설명 */}
        <ModalDescription description={description} />

        {/* 완료 버튼 */}
        <ModalFooter
          closeModal={() => {
            setIsVisible(false);
            setTimeout(closeModal, 500);
          }}
        />
      </div>
    </div>
  );
}

interface ModalWithPaginationProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  images: string[];
  description: string;
}