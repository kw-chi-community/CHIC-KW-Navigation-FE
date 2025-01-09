import React from "react";

export default function ModalSlider({
  images,
  currentPage,
  onPageChange,
}: ModalSliderProps) {
  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = (e as React.TouchEvent).targetTouches
      ? (e as React.TouchEvent).targetTouches[0].clientX
      : (e as React.MouseEvent).clientX;
    onPageChange("start", clientX);
  };

  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = (e as React.TouchEvent).targetTouches
      ? (e as React.TouchEvent).targetTouches[0].clientX
      : (e as React.MouseEvent).clientX;
    onPageChange("move", clientX);
  };

  const handleEnd = () => {
    onPageChange("end");
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
    </div>
  );
}

interface ModalSliderProps {
  images: string[];
  currentPage: number;
  onPageChange: (action: "start" | "move" | "end", clientX?: number) => void;
}