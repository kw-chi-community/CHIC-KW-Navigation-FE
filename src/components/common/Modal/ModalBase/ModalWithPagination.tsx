import React, { useState } from "react";
import ModalBase from "./ModalBase"; // ModalBase import
import { useModalContext } from "./ModalContext"; // ModalContext 사용

interface ModalWithPaginationProps {
  title: string;
  images: string[];
  description: string;
}

const ModalWithPagination: React.FC<ModalWithPaginationProps> = ({
  title,
  images,
  description,
}) => {
  const { isModalOpen, closeModal } = useModalContext();
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태
  const totalPages = images.length; // 전체 페이지 수

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1); // 이전 페이지
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1); // 다음 페이지
  };

  return (
    <ModalBase isOpen={isModalOpen} closeModal={closeModal} title={title}>
      {/* 이미지와 페이지네이션 */}
      <div className="relative flex justify-center items-center">
        {/* 이전 버튼 */}
        <button
          className="absolute left-0 px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          ❮
        </button>

        {/* 현재 이미지 */}
        <img
          src={images[currentPage]}
          alt={`Slide ${currentPage + 1}`}
          className="w-full h-auto max-h-[300px] object-cover rounded-lg"
        />

        {/* 다음 버튼 */}
        <button
          className="absolute right-0 px-2 py-1 text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          ❯
        </button>
      </div>

      {/* 페이지 인디케이터 */}
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentPage ? "bg-red-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* 설명 */}
      <div className="mt-4 text-gray-700 text-sm">{description}</div>

      {/* 하단 버튼 */}
      <div className="mt-4 flex justify-between">
        <button
          className="px-4 py-2 bg-gray-200 rounded-md text-gray-700 font-medium hover:bg-gray-300"
          onClick={closeModal}
        >
          취소
        </button>
        <button
          className="px-4 py-2 bg-red-600 rounded-md text-white font-medium hover:bg-red-700"
          onClick={() => {
            alert("선택되었습니다!");
            closeModal();
          }}
        >
          선택
        </button>
      </div>
    </ModalBase>
  );
};

export default ModalWithPagination;