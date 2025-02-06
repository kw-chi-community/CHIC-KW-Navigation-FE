import { motion } from "framer-motion";

export const RouteLoading = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <motion.div
      animate={
        isLoading
          ? { x: [0, window.innerWidth - 50, 0] } 
          : { x: 0 }
      }
      transition={{
        duration: 10, 
        repeat: isLoading ? Infinity : 0,
        ease: "easeInOut", 
      }}
      className="absolute left-0 top-1/3" 
    >
      <motion.img
        src="/assets/Routeloading.svg"
        alt="Mascot"
        className="w-52 h-52"
        animate={{
          y: [0, -8, 0, -5, 0], 
          rotate: [-5, 0, 5, 0, -5],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export const ClassroomAnimation = ({ isLoading }: { isLoading: boolean }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={isLoading ? { y: [0, -10, 0] } : { y: 0 }}
    transition={{
      duration: 7,
      repeat: isLoading ? Infinity : 0,
      ease: "easeInOut",
    }}
    className="text-gray-500 text-2xl"
  >
    <span className="block">&#9660;</span>
    <span className="block">&#9660;</span>
  </motion.div>
);

export const ClassroomDisplay = ({ classroom }: { classroom: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="w-full py-3 bg-red-800 text-white rounded-full text-lg font-bold shadow-md text-center"
  >
    {`광운대학교 ${classroom}`} 
  </motion.div>
);
