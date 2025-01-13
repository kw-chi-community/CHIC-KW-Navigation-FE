import { AiOutlineClose } from "react-icons/ai"; // react-icons 라이브러리에서 아이콘 가져오기

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
        <AiOutlineClose /> {/* 아이콘 사용 */}
      </button>
    </div>
  );
}

interface ModalHeaderProps {
  title: string;
  closeModal: () => void;
}