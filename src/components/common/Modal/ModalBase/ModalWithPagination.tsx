import React, { useState } from "react";

export default function ModalWithPagination({
  isOpen,
  closeModal,
  title,
  images,
  description,
}: ModalWithPaginationProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [startX, setStartX] = useState(0); // 터치 또는 마우스 시작 위치
  const [endX, setEndX] = useState(0); // 터치 또는 마우스 종료 위치

  if (!isOpen) return null;

  // 터치 또는 마우스 시작 이벤트 핸들러
  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = (e as React.TouchEvent).targetTouches
      ? (e as React.TouchEvent).targetTouches[0].clientX
      : (e as React.MouseEvent).clientX;
    setStartX(clientX);
  };

  // 터치 또는 마우스 이동 이벤트 핸들러
  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = (e as React.TouchEvent).targetTouches
      ? (e as React.TouchEvent).targetTouches[0].clientX
      : (e as React.MouseEvent).clientX;
    setEndX(clientX);
  };

  // 터치 또는 마우스 종료 이벤트 핸들러
  const handleEnd = () => {
    const swipeDistance = startX - endX;

    // 스와이프 방향 및 거리 판별
    if (swipeDistance > 50) {
      // 왼쪽 스와이프 (다음 페이지)
      setCurrentPage((prev) => Math.min(prev + 1, images.length - 1));
    } else if (swipeDistance < -50) {
      // 오른쪽 스와이프 (이전 페이지)
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }

    // 초기화
    setStartX(0);
    setEndX(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="relative bg-white w-[85%] max-w-[350px] h-auto rounded-lg shadow-lg overflow-hidden mx-4"
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
      >
        {/* 헤더 */}
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            X
          </button>
          <h3 className="text-lg font-bold text-center flex-1">{title}</h3>
        </div>

        {/* 이미지 */}
        <div className="p-4 flex flex-col items-center justify-center">
          <img
            src={images[currentPage]}
            alt={`Slide ${currentPage + 1}`}
            className="w-full max-w-[300px] h-auto max-h-[200px] object-cover rounded-md"
          />
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center items-center space-x-1 py-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentPage ? "bg-red-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

        {/* 텍스트 설명 */}
        <div className="px-4">
          <p className="text-base text-gray-600 text-left">{description}</p>
        </div>

        {/* 우측 하단 버튼 */}
        <div className="flex justify-end px-4 mt-4 pb-6">
          <button
            className="px-3 py-1 text-sm text-white rounded-md shadow"
            style={{ backgroundColor: "#7D170A" }}
            onClick={closeModal}
          >
            완료
          </button>
        </div>
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