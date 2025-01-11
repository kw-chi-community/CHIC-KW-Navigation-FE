import React from "react";
import ModalBase from "./ModalBase";
import ModalWithPagination from "../ModalWithPagination/ModalWithPagination";
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
        title="새빛관 소개"
        images={[
          "https://www.kw.ac.kr/ko/img/tour01_27.jpg",
          "https://aicon.kw.ac.kr/img/engineering_certify/classroom01.gif",
        ]}
        description="This is my house."
      />
    </>
  );
}