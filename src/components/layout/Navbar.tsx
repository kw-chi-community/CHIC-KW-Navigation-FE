import { Building2, Star, House, Map, User } from "lucide-react";
import { Link } from "react-router-dom"; // 페이지 이동을 위한 Link 컴포넌트

const navItems = [
  {
    id: "building",
    icon: <Building2 size={20} />,
    label: "건물 소개",
    path: "/building", // 링크 경로
  },
  {
    id: "favorite",
    icon: <Star size={20} />,
    label: "즐겨찾기",
    path: "/favorite",
  },
  {
    id: "home",
    icon: <House size={20} />,
    label: "홈",
    path: "/home",
  },
  {
    id: "map",
    icon: <Map size={20} />,
    label: "길 찾기",
    path: "/map",
  },
  {
    id: "profile",
    icon: <User size={20} />,
    label: "마이페이지",
    path: "/profile",
  },
];

export default function Navbar() {
  return (
    <div className="container fixed bottom-0 h-[8vh] bg-white shadow-lg border-t">
      <nav className="flex justify-around items-center py-3 w-full max-w-lg mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="flex flex-col items-center text-gray-600 hover:text-black"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}