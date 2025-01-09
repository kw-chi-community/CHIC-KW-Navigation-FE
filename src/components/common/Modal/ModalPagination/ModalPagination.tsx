import React, { useState } from "react";
import ModalBase from "../ModalBase/ModalBase";

interface ModalPaginationProps {
  isOpen: boolean; // 모달의 열림/닫힘 상태
  closeModal: () => void; // 모달을 닫는 함수
  items: string[]; // 페이지네이션에 표시할 아이템들
  itemsPerPage?: number; // 한 페이지에 표시할 아이템 수
}

const ModalPagination: React.FC<ModalPaginationProps> = ({
  isOpen,
  closeModal,
  items,
  itemsPerPage = 5, // 기본값은 5개
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <ModalBase isOpen={isOpen} closeModal={closeModal} title="Pagination Modal">
      <div>
        {/* 현재 페이지의 아이템 표시 */}
        <ul className="space-y-2">
          {currentItems.map((item, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded-md">
              {item}
            </li>
          ))}
        </ul>

        {/* 페이지네이션 버튼 */}
        <div className="mt-4 flex justify-between">
          <button
            className={`px-4 py-2 bg-gray-200 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 bg-gray-200 rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalPagination;