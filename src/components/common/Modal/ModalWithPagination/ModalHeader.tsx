import React from "react";

export default function ModalHeader({
  title,
  closeModal,
}: ModalHeaderProps) {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b">
      <h3 className="text-lg font-bold text-center flex-1">{title}</h3>
      <button
        onClick={closeModal}
        className="text-gray-500 hover:text-gray-700 text-xl font-bold"
      >
        X
      </button>
    </div>
  );
}

interface ModalHeaderProps {
  title: string;
  closeModal: () => void;
}