import { buildingList } from "@/features/components/mocks/BuildingList"

export default function BuildingInfo() {
  return (
    <div className="w-full h-[15vh] overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="flex space-x-4 px-4 h-full">
        {buildingList.map((building, index) => (
          <button
            key={index}
            className="flex-shrink-0 w-[150px] h-[13vh] bg-white rounded-lg shadow-md flex items-center justify-center text-lg font-semibold hover:bg-gray-100 active:bg-gray-200"
            onClick={() => console.log(`${building} 클릭 !!`)}
          >
            {building}
          </button>
        ))}
      </div>
    </div>
  );
}