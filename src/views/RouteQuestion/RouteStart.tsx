import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface LocationState {
  classroom: string;
}

export function RouteLoading() {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: window.innerWidth - 50 }}
      transition={{
        duration: 3.7,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
      className="absolute top-1/3"
    >
      <motion.img
        src="/assets/Routeloading.svg"
        alt="Mascot"
        className="w-40 h-40"
      />
    </motion.div>
  );
}

export function RouteStart() {
  const location = useLocation();
  const state = location.state as LocationState;


  return (
    <div className="container h-[100vh] bg-white text-black flex flex-col">
      <div className="w-full px-4 py-3 flex flex-col items-center">
        <button
          onClick={() => window.history.back()}
          className="text-gray-800 hover:text-gray-600 mb-2 self-start"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mt-2">
          길 안내를 시작하겠습니다
          <span role="img" aria-label="walking"> 🚶</span>
        </h1>
      </div>

      <div className="flex-1 relative overflow-hidden flex items-center justify-center">
        <RouteLoading />
      </div>

      <div className="w-full p-4 space-y-4">
        <div className="w-full flex flex-col items-center">
          <button
            className="w-full py-3 bg-gray-300 rounded-full text-gray-700 text-lg font-medium shadow-sm text-center cursor-default mb-2"
            disabled
          >
            현재 위치
          </button>

          <div className="w-full flex justify-center items-center">
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3.7,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-gray-500 text-2xl"
            >
              <span className="block">&#9660;</span>
              <span className="block">&#9660;</span>
            </motion.div>
          </div>

          <div className="relative w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full py-3 bg-red-800 text-white rounded-full text-lg font-bold shadow-md text-center"
            >
              {`광운대학교 ${state?.classroom || '강의실 미선택'}`}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute left-1/2 -top-2 transform -translate-x-1/2"
            >
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteStart;
