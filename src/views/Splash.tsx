import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("./main-page");
    }, 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden container bg-black">
      <img
        src="/assets/SplashRed.svg"
        alt="Splash Screen"
        className="h-full w-full object-contain"
      />
    </div>
  );
}