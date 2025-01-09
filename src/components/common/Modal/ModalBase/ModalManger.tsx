import React from "react";
import ModalBase from "./ModalBase";
import ModalWithPagination from "./ModalWithPagination";
import { useModalContext } from "./ModalContext";

export default function ModalManager() {
  const {
    isModalBaseOpen,
    closeModalBase,
    isModalWithPaginationOpen,
    closeModalWithPagination,
  } = useModalContext();

  return (
    <>
      <ModalBase isOpen={isModalBaseOpen} closeModal={closeModalBase} title="Item 10 Details">
        <p>This is the detailed information about Item 10.</p>
      </ModalBase>
      <ModalWithPagination
        isOpen={isModalWithPaginationOpen}
        closeModal={closeModalWithPagination}
        title="Item 9 Pagination"
        images={[
          "https://via.placeholder.com/300x200?text=Image+1",
          "https://via.placeholder.com/300x200?text=Image+2",
        ]}
        description="This is a modal with pagination for Item 9."
      />
    </>
  );
}