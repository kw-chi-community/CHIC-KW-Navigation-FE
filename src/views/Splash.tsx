import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("./Home");
    }, 3500);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <img src="/KWnavi.svg" alt="KW Navi Logo" className="w-32 h-32 mb-4" />

      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#7D170A]">KwangWoon</h1>
        <h2 className="text-xl text-[#7D170A] mt-2">Navigation</h2>
      </div>
    </div>
  );
}

export default Splash;
