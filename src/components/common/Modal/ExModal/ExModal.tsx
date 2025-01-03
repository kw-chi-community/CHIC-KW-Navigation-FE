import {
  BottomModal,
  BottomModalHeader,
  BottomModalContent,
  BottomModalFooter,
} from "../BottomModal";
import { Store, CreditCard, Utensils, Sofa, Bell, Settings } from "lucide-react";

export default function ExModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const items = [
    { icon: <Store color="#ffffff" />, label: "편의점" },
    { icon: <CreditCard color="#ffffff" />, label: "은행 · ATM" },
    { icon: <Utensils color="#ffffff" />, label: "식당" },
    { icon: <Sofa color="#ffffff" />, label: "기타시설" },
  ];

  return (
    <BottomModal isOpen={isOpen} onClose={onClose}>
      <BottomModalHeader title="비회원">
        <div className="flex space-x-4">
          <Bell
            color="#7D170A"
            className="w-6 h-6 cursor-pointer"
            onClick={() => alert("알림 아이콘 클릭!")}
            aria-label="알림 아이콘"
            role="button"
          />
          <Settings
            color="#7D170A"
            className="w-6 h-6 cursor-pointer"
            onClick={() => alert("설정 아이콘 클릭!")}
            aria-label="설정 아이콘"
            role="button"
          />
        </div>
      </BottomModalHeader>

      <BottomModalContent>
        <div className="flex flex-col items-center gap-4 mt-6">
          <img
            src="/assets/user-image.jpg"
            alt="사용자 이미지"
            className="w-20 h-20 rounded-full border-2 border-gray-300"
          />
          <p className="text-center text-gray-600">광운대학교 방문을 환영합니다 ~ :)</p>
        </div>
        <div className="text-center bg-gray-100 py-2 text-sm text-gray-600 mt-4">
          10월 31일 목
        </div>
      </BottomModalContent>

      <BottomModalFooter>
        <div className="flex justify-between px-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <button
                className="w-16 h-16 bg-[#7D170A] text-white rounded-full flex items-center justify-center"
                aria-label={item.label}
              >
                {item.icon}
              </button>
              <p className="text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </BottomModalFooter>
    </BottomModal>
  );
}