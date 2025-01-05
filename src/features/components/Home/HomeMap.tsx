export default function HomeMap() {
  return (
    <div className="flex items-center justify-center h-[40vh]  w-[20vw] container rounded-3xl mt-8">
      <div className="relative w-[90vw] h-[40vh] bg-white shadow-lg rounded-lg overflow-hidden border">
        {/* 반경 표시 */}
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-500 opacity-20 rounded-full transform -translate-x-1/2 -translate-y-1/2 border border-blue-400"></div>
        
        {/* 현재 위치 정보 */}
        <div className="absolute bottom-4 left-4 text-gray-600">
          <p>현재 위치: 서울시 광운대학교</p>
        </div>
      </div>
    </div>
  );
}