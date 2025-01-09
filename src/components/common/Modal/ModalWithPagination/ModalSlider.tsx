import React, { useState } from "react";

export default function ModalSlider({ images }: ModalSliderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

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
    <div
      className="relative w-full overflow-hidden"
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >
      {/* 이미지 슬라이더 */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full max-h-[200px] object-cover rounded-md"
            />
          </div>
        ))}
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
    </div>
  );
}

interface ModalSliderProps {
  images: string[];
}