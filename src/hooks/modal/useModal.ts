import { useContext } from "react";
import { ModalContext } from "@/components/common/Modal/ModalBase/ModalContext";

export default function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return {
    isModalBaseOpen: context.isModalBaseOpen,
    isModalWithPaginationOpen: context.isModalWithPaginationOpen,
    openModalBase: context.openModalBase,
    closeModalBase: context.closeModalBase,
    openModalWithPagination: context.openModalWithPagination,
    closeModalWithPagination: context.closeModalWithPagination,
  };
}