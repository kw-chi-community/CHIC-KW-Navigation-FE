import {
    BottomModal,
    BottomModalHeader,
    BottomModalContent,
    BottomModalFooter,
  } from "../BottomModal";
  import { Store, CreditCard, Utensils, Sofa, Bell, Settings } from "lucide-react";
  
  const ExModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const items = [
      { icon: <Store color="#ffffff" />, label: "편의점" },
      { icon: <CreditCard color="#ffffff" />, label: "은행 · ATM" },
      { icon: <Utensils color="#ffffff" />, label: "식당" },
      { icon: <Sofa color="#ffffff" />, label: "기타시설" },
    ];
  
    return (
      <BottomModal isOpen={isOpen} onClose={onClose}>
        {/* Header */}
        <BottomModalHeader title="비회원">
          <div className="flex space-x-4">
            <Bell
              color="#7D170A"
              className="w-6 h-6 cursor-pointer"
              onClick={() => alert("알림 아이콘 클릭!")}
            />
            <Settings
              color="#7D170A"
              className="w-6 h-6 cursor-pointer"
              onClick={() => alert("설정 아이콘 클릭!")}
            />
          </div>
        </BottomModalHeader>
  
        {/* Content */}
        <BottomModalContent>
          <div className="flex flex-col items-center gap-4 mt-6">
            <img
              src="/path-to-your-image.jpg"
              alt="사용자"
              className="w-20 h-20 rounded-full border-2 border-gray-300"
            />
            <p className="text-center text-gray-600">광운대학교 방문을 환영합니다 ~ :)</p>
          </div>
          <div className="text-center bg-gray-100 py-2 text-sm text-gray-600 mt-4">
            10월 31일 목
          </div>
        </BottomModalContent>
  
        {/* Footer */}
        <BottomModalFooter>
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <button className="w-16 h-16 bg-[#7D170A] text-white rounded-full flex items-center justify-center">
                {item.icon}
              </button>
              <p className="text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </BottomModalFooter>
      </BottomModal>
    );
  };
  
  export default ExModal;
  