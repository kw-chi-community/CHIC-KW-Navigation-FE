import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeMap() {
  const navigate = useNavigate();
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const handleQuickSearch = () => {
    navigate("/route/question");
  };

  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.type = "text/javascript";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };

    // 스마트서울맵 스크립트 로드
    loadScript("https://map.seoul.go.kr/openapi/v5/KEY157_a7975bfc0f6e48918236eaaf4ea7fecc/public/map/info")
      .then(() => {
        if (!mapContainerRef.current) return;

        // TileMapInfos 초기화 (API 키 입력)
        const tileMapInfo = new TileMapInfos("KEY157_a7975bfc0f6e48918236eaaf4ea7fecc");

        // SMap 객체 생성
        const mapObj = new SMap(mapContainerRef.current);

        // 지도 타입 설정
        mapObj.setMap("kor_normal");

        // 지도 중심 좌표 설정
        const centerPoint = new SPoint(127.0594186, 37.6198242); // 경도, 위도
        mapObj.setCenter(centerPoint);

        // 줌 레벨 설정
        mapObj.setZoom(16);

        // 마커 추가
        const marker = new SMarker({
          position: centerPoint,
          map: mapObj,
          title: "광운대학교",
        });

        // 마커 클릭 이벤트
        marker.on("click", () => {
          alert("광운대학교입니다!");
        });
      })
      .catch((err) => {
        console.error("스마트서울맵 스크립트 로드 실패:", err);
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-[40vh] w-[370px] container rounded-3xl">
      <div className="relative w-[90vw] h-[40vh] bg-white shadow-md rounded-lg overflow-hidden border text-center">
        {/* 지도 컨테이너 */}
        <div ref={mapContainerRef} className="w-full h-full">
          지도 로드 중...
        </div>
        <div className="absolute bottom-4 left-4 text-gray-600">
          <p>현재 위치: 서울시 광운대학교</p>
        </div>
        <button
          className="absolute bottom-4 right-4 bg-[#7D170A] text-white px-4 py-2 rounded-lg shadow-sm hover:bg-[#5a0f07] active:bg-[#3e0a05] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7D170A]"
          onClick={handleQuickSearch}
        >
          빠른 검색
        </button>
      </div>
    </div>
  );
}