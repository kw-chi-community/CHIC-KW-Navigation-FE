import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import kwIcon from '../assets/kwIcon.svg';

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/home'), 3000); // 3초 후 홈 페이지로 이동
  }, [navigate]);

  return (
    <div className="h-full w-full flex items-center justify-center text-white" style={{ backgroundColor: '#7D170A' }}>
      <img src={kwIcon} alt="KwLogo" className="w-32 h-32" />
    </div>
  );
}

export default SplashScreen;
