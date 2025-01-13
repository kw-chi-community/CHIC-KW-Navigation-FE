export default function ModalPagination({
  totalPages,
  currentPage,
  setCurrentPage,
}: ModalPaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-1 py-4">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index)}
          className={`w-3 h-3 rounded-full ${
            index === currentPage ? "bg-red-500" : "bg-gray-300"
          }`}
        ></button>
      ))}
    </div>
  );
}

interface ModalPaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}