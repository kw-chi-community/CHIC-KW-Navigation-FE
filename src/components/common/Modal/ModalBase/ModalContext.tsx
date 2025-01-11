import React, { createContext, useContext, useState } from "react";

interface ModalContextProps {
  isModalBaseOpen: boolean;
  isModalWithPaginationOpen: boolean;
  openModalBase: () => void;
  closeModalBase: () => void;
  openModalWithPagination: () => void;
  closeModalWithPagination: () => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export default function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isModalBaseOpen, setIsModalBaseOpen] = useState(false);
  const [isModalWithPaginationOpen, setIsModalWithPaginationOpen] = useState(false);

  const openModalBase = () => setIsModalBaseOpen(true);
  const closeModalBase = () => setIsModalBaseOpen(false);

  const openModalWithPagination = () => setIsModalWithPaginationOpen(true);
  const closeModalWithPagination = () => setIsModalWithPaginationOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isModalBaseOpen,
        isModalWithPaginationOpen,
        openModalBase,
        closeModalBase,
        openModalWithPagination,
        closeModalWithPagination,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};