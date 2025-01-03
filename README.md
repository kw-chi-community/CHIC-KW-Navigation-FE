# 프론트엔드 폴더 구조


src/
│
├── api/                        # API 호출 관련 파일
│   ├── facilityService.ts
│   ├── mapService.ts
│   └── userService.ts
│
├── assets/                     # 정적 리소스
│   ├── icons/                  # 아이콘 파일
│   ├── images/                 # 이미지 파일
│   └── styles/                 # 전역 스타일
│       ├── global.css          # 전역 스타일 정의
│       ├── variables.css       # CSS 변수
│       └── react.svg
│
├── components/                 # 재사용 가능한 UI 컴포넌트
│   ├── common/                 # 공통 컴포넌트
│   │   ├── Button/             # 버튼 컴포넌트
│   │   ├── Modal/              # 모달 컴포넌트
│   │   │   ├── BottomModal.tsx
│   │   │   └── Modal.tsx
│   │   └── ExModal/            # 추가 모달 컴포넌트
│   ├── layout/                 # 레이아웃 컴포넌트
│   │   ├── Header/             # 헤더 관련 컴포넌트
│   │   │   ├── Header.tsx
│   │   │   └── Navbar.tsx
│   │   └── Layout.tsx          # 전체 레이아웃
│   └── map/                    # 지도 관련 컴포넌트 (새 폴더 추가)
│       ├── MapCanvas.tsx       # 지도 캔버스
│       ├── MapMarker.tsx       # 마커 컴포넌트
│       └── MapLegend.tsx       # 범례 컴포넌트
│
├── hooks/                      # 커스텀 훅
│   ├── location/               # 위치 관련 훅
│   │   └── useLocation.ts
│   ├── map/                    # 지도 관련 훅
│   │   └── useMapData.ts
│   ├── search/                 # 검색 관련 훅
│   │   └── useSearch.ts
│   └── index.ts                # 훅 모음 (export 통합)
│
├── routes/                     # 라우팅 설정
│   └── AppRoutes.tsx           # 전체 라우트 설정
│
├── store/                      # 상태 관리
│   ├── mapSlice.ts             # 지도 상태 관리
│   └── store.ts                # Redux 스토어 설정
│
├── views/                      # 페이지 컴포넌트
│   ├────── Route/              # 라우트 별 페이지
│   │   ├── Home.tsx            # 홈 페이지
│   │   ├── SearchPlace.tsx     # 장소 검색 페이지
│   │   └── Splash.tsx          # 초기 로딩 화면
│   └── App.tsx                 # 전체 앱 컴포넌트
│
├── index.css                   # 전역 스타일
├── main.tsx                    # 애플리케이션 엔트리 포인트
└── vite.config.ts              # Vite 설정 파일