import React from "react";

export default function ModalFooter({
  closeModal,
}: ModalFooterProps) {
  return (
    <div className="flex justify-end px-4 mt-4 pb-6">
      <button
        className="px-3 py-1 text-sm text-white rounded-md shadow"
        style={{ backgroundColor: "#7D170A" }}
        onClick={closeModal}
      >
        완료
      </button>
    </div>
  );
}

interface ModalFooterProps {
  closeModal: () => void;
}