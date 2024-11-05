import React from 'react';

function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className="bg-[#5C1308] text-white py-2 px-4 rounded-lg hover:bg-[#9B2910] transition-all duration-200"
    >
      {children}
    </button>
  );
}

export default Button;
