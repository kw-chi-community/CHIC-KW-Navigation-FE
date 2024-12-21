const Home = () => {
  return (
    <div className="container h-[100vh] flex flex-col items-center justify-center bg-gradient-to-br from-red-700 to-red-950 text-white">
      <h1 className="text-3xl font-bold mb-6 animate-bounce">
        광운 내비게이션
      </h1>
      <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-300 hover:rotate-3 scale-105 transition-all duration-300 mb-4">
        딸깍 !
      </button>
      <button className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-pink-400 hover:rotate-3 hover:scale-105 transition-all duration-300">
        딸깍 !!
      </button>
    </div>
  );
};

export default Home;
