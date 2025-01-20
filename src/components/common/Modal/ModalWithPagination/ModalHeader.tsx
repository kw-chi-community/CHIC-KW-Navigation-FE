import { AiOutlineClose } from "react-icons/ai";

export default function ModalHeader({
  title,
  closeModal,
}: ModalHeaderProps) {
  return (
    <div className="relative flex items-center px-4 py-2"> 
      {/* Title */}
      <h3 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold text-center">
        {title}
      </h3>

      {/* Close Button */}
      <button
        onClick={closeModal}
        className="ml-auto text-gray-500 hover:text-gray-700 text-xl font-bold"
      >
        <AiOutlineClose />
      </button>
    </div>
  );
}

interface ModalHeaderProps {
  title: string;
  closeModal: () => void;
}