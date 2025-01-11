import React from "react";

export default function ModalBase({
  isOpen,
  closeModal,
  title,
  children,
}: ModalBaseProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white w-[85%] max-w-sm rounded-lg shadow-lg overflow-hidden">
        {/* 헤더 */}
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h3 className="text-lg font-bold">{title}</h3>
          <button
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        {/* 본문 */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

interface ModalBaseProps {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  children: React.ReactNode;
  confirmButtonText?: string; // 우측 하단 버튼 텍스트
  onConfirm?: () => void; // 버튼 클릭 핸들러
}