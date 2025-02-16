import { useState } from "react";
import ModalWithPagination from "@/components/common/Modal/ModalWithPagination/ModalWithPagination";
import buildingList from "@/features/components/mocks/buildings";
import { Building } from "@/components/types/Buildings";

export default function BuildingInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null)

  const handleBuildingClick = (building: Building) => {
    setSelectedBuilding(building)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedBuilding(null)
  }

  return (
    <div className="w-full h-[15vh] overflow-x-auto overflow-y-hidden scrollbar-hide items-center">
      <div className="flex space-x-4 px-4 h-full">
        {buildingList.map((building) => (
          <button
            key={building.id}
            className="flex-shrink-0 w-[150px] h-[13vh] bg-white rounded-lg shadow-md overflow-hidden hover:opacity-90 active:opacity-80 transition-opacity"
            onClick={() => handleBuildingClick(building)}
          >
            <div className="relative w-full h-full">
              <img
                src={building.image || "/placeholder.svg"}
                alt={building.name.ko}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                <p className="text-white text-sm font-medium text-center">{building.name.ko}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

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
  )
}

