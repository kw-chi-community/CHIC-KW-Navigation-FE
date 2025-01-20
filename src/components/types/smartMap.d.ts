declare class TileMapInfos {
  constructor(apiKey: string);
}

declare class SPoint {
  constructor(x: number, y: number);
}

declare class SMap {
  constructor(container: HTMLElement | string);
  setMap(type: string): void;
  setCenter(point: SPoint): void;
  setZoom(level: number): void;
}

declare class SMarker {
  constructor(options: {
    position: SPoint;
    map: SMap;
    title?: string;
  });

  on(event: string, callback: () => void): void;
}