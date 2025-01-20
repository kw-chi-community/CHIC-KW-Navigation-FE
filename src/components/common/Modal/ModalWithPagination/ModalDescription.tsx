interface ModalDescriptionProps {
  description: {
    page1: string;
    page2: string;
  };
  currentPage: number; // 현재 페이지 (0 = page1, 1 = page2)
}

export default function ModalDescription({
  description,
  currentPage,
}: ModalDescriptionProps) {
  const text = currentPage === 0 ? description.page1 : description.page2; // 페이지에 따라 텍스트 선택
  return <p className="text-base text-gray-600 text-left">{text}</p>;
}