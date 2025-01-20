import { useState } from "react";
import ModalWithPagination from "@/components/common/Modal/ModalWithPagination/ModalWithPagination";
import buildingList from "@/features/components/mocks/buildings";
import { Building } from "@/components/types/Buildings";


export default function BuildingInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);

  const handleBuildingClick = (building: Building) => {
    setSelectedBuilding(building);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBuilding(null);
  };

  return (
    <div className="w-full h-[15vh] overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="flex space-x-4 px-4 h-full">
        {buildingList.map((building) => (
          <button
            key={building.id}
            className="flex-shrink-0 w-[150px] h-[13vh] bg-white rounded-lg shadow-md flex items-center justify-center text-lg font-semibold hover:bg-gray-100 active:bg-gray-200"
            onClick={() => handleBuildingClick(building)}
          >
            {building.name.ko}
          </button>
        ))}
      </div>

      {/* 모달 컴포넌트 */}
      {selectedBuilding && (
        <ModalWithPagination
          isOpen={isModalOpen}
          closeModal={closeModal}
          title={selectedBuilding.name.ko}
          image={selectedBuilding.image}
          description={{
            page1: selectedBuilding.description.ko.page1,
            page2: selectedBuilding.description.ko.page2,
          }}
        />
      )}
    </div>
  );
}
