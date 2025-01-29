import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import proj4 from 'proj4';
import 'proj4leaflet';

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

// EPSG:5181 정의
const EPSG5181 = '+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=GRS80 +units=m +no_defs';
proj4.defs('EPSG:5181', EPSG5181);

const NaviRoute: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    const initMap = async () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      try {
        const API_KEY = import.meta.env.VITE_SEOUL_MAP_API_KEY;

        // 지도 초기화
        const map = L.map(mapRef.current, {
          center: [37.5666805, 126.9784147],
          zoom: 12,
          zoomControl: true,
          maxZoom: 18,
          minZoom: 6
        });
        
        mapInstanceRef.current = map;

        // 타일 레이어 추가 - 수정된 URL 형식
        const tileLayer = L.tileLayer(`https://map.seoul.go.kr/smgis/apps/mapsvr/getMapImage.do?key=${API_KEY}`, {
          attribution: '&copy; Seoul Metropolitan Government',
          tileSize: 256,
          bounds: L.latLngBounds(
            L.latLng(37.42829, 126.76621),
            L.latLng(37.70130, 127.18364)
          ),
          // 타일 URL 생성 함수 재정의
          getTileUrl: function(coords: L.Coords) {
            const z = coords.z;
            const x = coords.x;
            const y = coords.y;
            return `https://map.seoul.go.kr/smgis/apps/mapsvr/getMapImage.do?key=${API_KEY}&service=BASEMAP&version=1.0.0&request=GetMap&format=png&transparent=false&layout=normal&crs=EPSG:3857&zLevel=${z}&xPos=${x}&yPos=${y}`;
          }
        }).addTo(map);

        // 마커 추가
        L.marker([37.5666805, 126.9784147])
          .addTo(map)
          .bindPopup('서울시청')
          .openPopup();

      } catch (error) {
        console.error('지도 초기화 중 오류 발생:', error);
      }
    };

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