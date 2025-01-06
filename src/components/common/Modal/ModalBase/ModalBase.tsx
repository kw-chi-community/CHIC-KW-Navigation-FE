import React from "react";

export default function ModalBase({
  isOpen,
  closeModal,
  title,
  children,
}: {
  isOpen: boolean; // 모달 열림 여부
  closeModal: () => void; // 모달 닫기 함수
  title?: string; // 모달 제목 (선택 사항)
  children: React.ReactNode; // 모달 내용
}) {
  if (!isOpen) return null; // 모달이 닫힌 상태라면 렌더링하지 않음

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* 모달 배경 */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>

      {/* 모달 컨테이너 */}
      <div className="relative z-10 w-11/12 max-w-lg bg-white rounded-lg shadow-lg">
        {/* 모달 헤더 */}
        {title && (
          <div className="px-6 py-4 border-b border-gray-300">
            <h2 className="text-lg font-bold text-center">{title}</h2>
          </div>
        )}

        {/* 모달 본문 */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}