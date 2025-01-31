import React from 'react';

interface RouteNextProps {
  onClick: () => void;
  disabled: boolean;
  label: string;
}

export default function RouteNext({ onClick, disabled, label }: RouteNextProps) {
  return (
    <div className="w-full p-10 space-y-10">
      <div className="w-full flex flex-col items-center">
        <button
          onClick={onClick}
          disabled={disabled}
          className={`
            w-full py-3 rounded-lg text-white text-base font-medium
            ${!disabled ? "bg-[#8B1D1D] hover:bg-[#7A1919] transition-colors" : "bg-gray-300 cursor-not-allowed"}
          `}
        >
          {label}
        </button>
      </div>
    </div>
  );
}
