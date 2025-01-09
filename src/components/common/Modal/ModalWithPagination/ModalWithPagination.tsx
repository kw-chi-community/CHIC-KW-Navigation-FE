import React, { useState, useEffect } from "react";
import ModalHeader from "./ModalHeader";
import ModalSlider from "./ModalSlider";
import ModalPagination from "./ModalPagination";
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
        <ModalSlider images={images} />

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