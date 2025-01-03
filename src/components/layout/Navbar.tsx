import { Star, Home, Search } from "lucide-react";

const navItems = [
  {
    id: "favorite",
    icon: <Star size={20} />,
    label: "Favorite",
  },
  {
    id: "home",
    icon: <Home size={20} />,
    label: "Home",
  },
  {
    id: "search",
    icon: <Search size={20} />,
    label: "Search",
  },
];

export default function Navbar() {
  return (
    <div className="container fixed bottom-0 left-0 right-0 h-[8vh] bg-white shadow-lg border-t">
      <nav className="flex justify-around items-center py-3 w-full max-w-lg mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="flex flex-col items-center text-gray-600 hover:text-black"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}