interface ModalSliderProps {
  currentPage: number;
  onPageChange: (index: number) => void;
  pages: {
    image: string;
    text: string;
  }[];
}

export default function ModalSlider({
  currentPage,
  onPageChange,
  pages,
}: ModalSliderProps) {
  let startX: number | null = null;

  const handleStart = (e: React.TouchEvent | React.MouseEvent) => {
    startX =
      (e as React.TouchEvent).targetTouches?.[0]?.clientX ||
      (e as React.MouseEvent).clientX;
  };

  const handleMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (startX === null) return;

    const currentX =
      (e as React.TouchEvent).targetTouches?.[0]?.clientX ||
      (e as React.MouseEvent).clientX;
    const deltaX = startX - currentX;

    if (deltaX > 50 && currentPage < pages.length - 1) {
      onPageChange(currentPage + 1);
      startX = null;
    } else if (deltaX < -50 && currentPage > 0) {
      onPageChange(currentPage - 1);
      startX = null;
    }
  };

  const handleEnd = () => {
    startX = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden" // overflow-hidden으로 슬라이더 바깥 이미지 숨김
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
        style={{
          transform: `translateX(-${currentPage * 100}%)`, // 페이지 이동에 따라 슬라이더 이동
          width: `${pages.length * 100}%`, // 전체 슬라이더의 너비
        }}
      >
        {pages.map((page, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col items-center"
            style={{
              width: "100%", // 슬라이더 컨테이너의 너비와 동일하게 설정
            }}
          >
            <img
              src={page.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[200px] object-cover rounded-md select-none"
              draggable="false" // 드래그 방지
            />
          </div>
        ))}
      </div>
    </div>
  );
}