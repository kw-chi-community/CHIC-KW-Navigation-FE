export interface ClassRoom {
    id: string;
    name: string;
  }
  
  export const CLASSROOMS: { [key: string]: ClassRoom[] } = {
    '1층': [
      { id: '101', name: '새빛 101호' },
      { id: '102', name: '새빛 102호' },
      { id: '103', name: '새빛 103호' },
      { id: '104', name: '새빛 104호' },
    ],
    // 다른 층의 강의실도 추후에 추가
  };
  