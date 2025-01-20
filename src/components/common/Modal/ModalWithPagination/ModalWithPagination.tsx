import { useState } from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalDescription from "./ModalDescription";
import ModalSlider from "./ModalSlider";

export default function ModalWithPagination({
  isOpen,
  closeModal,
  title,
  image, // 단일 이미지
  description, // 페이지별 텍스트
}: ModalWithPaginationProps) {
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 상태 (0 = page1, 1 = page2)

  if (!isOpen) return null;

  const handlePageChange = (index: number) => {
    if (index >= 0 && index < 2) {
      setCurrentPage(index); // 페이지 상태 업데이트
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white w-[350px] h-[500px] rounded-lg shadow-lg overflow-hidden mx-4">
        {/* 헤더 */}
        <ModalHeader title={title} closeModal={closeModal} />

        {/* 이미지 슬라이더 */}
          <div className="h-[250px] flex items-center justify-center px-4">
            <ModalSlider
              currentPage={currentPage}
              onPageChange={handlePageChange}
              pages={[
                {
                  image,
                  text: description.page1,
                },
                {
                  image,
                  text: description.page2,
                },
              ]}
            />
        </div>

        {/* 페이지네이션 불릿 */}
        <div className="flex justify-center items-center py-2">
          {[0, 1].map((index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentPage === index ? "bg-red-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* 텍스트 설명 */}
        <div className="px-4 pb-4 text-center">
          <ModalDescription
            description={description}
            currentPage={currentPage} // 현재 페이지 상태 전달
          />
        </div>

        

        {/* 완료 버튼 */}
        <ModalFooter closeModal={closeModal} />
      </div>
    </div>
  );
}

interface ModalWithPaginationProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  image: string; // 단일 이미지
  description: {
    page1: string;
    page2: string;
  };
}