import { ReactNode, useState, useRef, TouchEvent } from "react";

type BottomModalPT = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const BottomModal = ({ isOpen, onClose, children }: BottomModalPT) => {
  const [translateY, setTranslateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startDragY = useRef(0);

  const handleDragStart = (e: TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    startDragY.current = e.touches[0].clientY;
  };

  const handleDragMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaY = e.touches[0].clientY - startDragY.current;
    if (deltaY > 0) {
      setTranslateY(deltaY);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (translateY > 100) {
      onClose();
    } else {
      setTranslateY(0);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      <div
        className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-lg max-w-[400px] mx-auto"
        style={{
          transform: `translateY(${translateY}px)`,
        }}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto mt-2"></div>
        {children}
      </div>
    </>
  );
};

type BottomModalHeaderPT = {
  title: string;
  children?: ReactNode;
};

export const BottomModalHeader = ({ title, children }: BottomModalHeaderPT) => {
  return (
    <div className="p-6 relative">
      <h2 className="text-lg font-bold text-center">{title}</h2>
      {children && <div className="absolute top-0 right-6">{children}</div>}
    </div>
  );
};

type BottomModalContentPT = {
  children: ReactNode;
};

export const BottomModalContent = ({ children }: BottomModalContentPT) => {
  return <div className="p-6">{children}</div>;
};

type BottomModalFooterPT = {
  children: ReactNode;
};

export const BottomModalFooter = ({ children }: BottomModalFooterPT) => {
  return <div className="flex justify-around mt-6">{children}</div>;
};
