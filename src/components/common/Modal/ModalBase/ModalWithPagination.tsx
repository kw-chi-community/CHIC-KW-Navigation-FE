import React, { useState } from "react";

export default function ModalWithPagination({
  isOpen,
  closeModal,
  title,
  images,
  description,
}: ModalWithPaginationProps) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white w-[90%] max-w-md rounded-lg shadow-lg">
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <div className="p-4">
          <img src={images[currentPage]} alt={`Slide ${currentPage + 1}`} />
          <p>{description}</p>
        </div>
        <div className="flex justify-between p-4">
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}>
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, images.length - 1))
            }
          >
            Next
          </button>
        </div>
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