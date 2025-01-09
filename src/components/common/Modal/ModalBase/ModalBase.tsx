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
      <div className="relative bg-white w-[90%] max-w-md rounded-lg shadow-lg">
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={closeModal}>X</button>
        </div>
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
}