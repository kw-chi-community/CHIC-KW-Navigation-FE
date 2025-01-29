import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface TileMapInfo {
  name: string;
  url: string;
  mbr: {
    minx: number;
    miny: number;
    maxx: number;
    maxy: number;
  };
  imageSize: number;
  originX: number;
  originY: number;
  levelInfos: unknown[];
}

interface MapResponse {
  header: {
    resultCode: number;
    code: number;
    serviceName: string;
    format: string;
  };
  tileMapInfos: {
    tileMapInfo: TileMapInfo[];
  };
}

const NaviRoute: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      try {
        const API_KEY = import.meta.env.VITE_SEOUL_MAP_API_KEY;
        const response = await fetch(`https://map.seoul.go.kr/openapi/v5/${API_KEY}/public/map/info`);
        const data = await response.json() as MapResponse;

        if (data.header.resultCode === 200) {
          const map = L.map(mapRef.current, {
            center: [37.5666805, 126.9784147],
            zoom: 15,
            zoomControl: true,
            crs: L.CRS.EPSG3857 // 좌표계 설정
          });
          
          mapInstanceRef.current = map;

          // 서울시 지도 타일 레이어 추가
          const baseUrl = `https://map.seoul.go.kr/v5/${API_KEY}/public/map/base/dawul_kor_normal`;
          
          L.tileLayer(`${baseUrl}/{z}/0/0/{x}/{y}/png`, {
            attribution: '&copy; Seoul Metropolitan Government',
            maxZoom: 18,
            minZoom: 6,
            tileSize: 256,
            zoomOffset: 0
          }).addTo(map);

          // 마커 추가
          L.marker([37.5666805, 126.9784147])
            .addTo(map)
            .bindPopup('서울시청')
            .openPopup();
        }
      } catch (error) {
        console.error('지도 초기화 중 오류 발생:', error);
      }
    };

    // strict mode에서 중복 실행 방지
    const timer = setTimeout(() => {
      if (!mapInstanceRef.current) {
        initMap();
      }
    }, 0);

    return () => {
      clearTimeout(timer);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default NaviRoute;