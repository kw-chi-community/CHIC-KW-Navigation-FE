import useModal from "../../../hooks/modal/useModal";

export default function IntroBuilding() {
  const { openModalBase, openModalWithPagination } = useModal();
  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="w-full h-[16vh] overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="flex space-x-4 px-4 h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[10vw] h-[15vh] bg-white rounded-lg shadow-md flex items-center justify-center text-lg font-semibold cursor-pointer"
            onClick={() => {
              if (index === 8) openModalWithPagination();
              if (index === 9) openModalBase();
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}