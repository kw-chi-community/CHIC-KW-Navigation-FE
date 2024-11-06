  import React from 'react';
  import { Link, useLocation } from 'react-router-dom';

  function Navbar() {
    const location = useLocation();
    const isVisible = ["/home"].includes(location.pathname); // 특정 페이지에서만 표시

    if (!isVisible) return null;

    return (
      <nav className="fixed bottom-0 w-full bg-[#7D170A] text-white flex justify-around py-2">
        <Link to="/home" className="text-center">Home</Link>
        <Link to="/search" className="text-center">Search</Link>
        <Link to="/favorites" className="text-center">Favorites</Link>
      </nav>
    );
  }

  export default Navbar;
