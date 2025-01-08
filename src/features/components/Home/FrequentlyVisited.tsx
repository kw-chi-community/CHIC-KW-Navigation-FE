// import React from "react";
import useModal from "../../../hooks/modal/useModal"; // useModal 훅 import
import ModalBase from "../../../components/common/Modal/ModalBase/ModalBase"; // ModalBase 컴포넌트 import

export default function FrequentlyVisited() {
  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

  // useModal 훅을 통해 모달 상태 관리
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="w-full h-[16vh] overflow-x-auto overflow-y-hidden scrollbar-hide">
      {/* 아이템 목록 */}
      <div className="flex space-x-4 px-4 h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[10vw] h-[15vh] bg-white rounded-lg shadow-md flex items-center justify-center text-lg font-semibold cursor-pointer"
            onClick={() => {
              if (index === 9) openModal(); // 10번째 아이템(인덱스 9) 클릭 시 모달 열기
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* ModalBase 컴포넌트 */}
      <ModalBase isOpen={isOpen} closeModal={closeModal} title="Item 10 Details">
        <p className="text-gray-700">This is the detailed information about Item 10.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={closeModal}
        >
          Close
        </button>
      </ModalBase>
    </div>
  );
}