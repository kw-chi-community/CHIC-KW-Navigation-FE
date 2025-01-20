# 광운대학교 교내시설 내비게이션

### **프로젝트 개요**

- **목적**: 광운대학교의 학교 내 다양한 시설에 대한 정보를 제공하고, 캠퍼스 내 효율적인 길 안내와 실시간 강의 정보를 제공하여 학생들의 편의성을 높임.
- **타겟 사용자**: 광운대학교 신입생, 재학생, 교직원, 방문객

---

### **주요 기능**

1. **시설 정보 및 길 안내 기능**
    - **길 안내**: 건물, 강의실, 편의시설 등 학교 내 주요 장소에 대한 길 안내 제공
    - **일반 / 빠른 길 안내**:
        - *일반 길 안내*: 전통적인 루트로 안내
        - *빠른 길 안내*: 지름길을 사용해 최단 경로 제공
    - **즐겨찾기 기능**: 자주 방문하는 장소를 즐겨찾기에 추가하여 쉽게 접근 가능
2. **장소 검색 및 빌딩 버튼 기능**
    - **검색 기능**: 건물명을 입력하거나 제공된 건물 버튼을 눌러 위치 검색을 빠르게 수행
    - **건물 버튼 제공**: 학내 주요 건물에 대해 버튼 제공하여 검색 편의성 극대화
3. **강의실 정보 및 시간표 연동**
    - **강의실 현황 파악**: 각 강의실에서 현재 진행 중인 수업 정보를 실시간으로 제공
    - **시간표 연동**: 학생이 시간표를 입력하면, 해당 시간에 맞추어 이동할 장소와 최적 루트 안내 및 알림 제공
4. **편의시설 정보**
    - **캠퍼스 내 편의시설**: 학교 내 편의점, 우체국, 보건실, 학생처, 은행, 식당 등의 정보 제공
    - **유용한 정보 통합 제공**: 모든 편의 정보를 하나의 앱에서 바로 확인 가능
5. **강의실 상세 안내**
    - **건물 및 강의실 위치**: 건물 내부에서 특정 강의실까지 안내
    - **강의실 별 강의 정보**: 해당 강의실에서 진행 중인 강의명, 교수명 등 정보 제공
6. **식당 정보 및 오늘의 메뉴**
    - **오늘의 메뉴 추천**: 사용자가 학식 메뉴를 랜덤으로 추천받을 수 있는 기능
    - **학식 정보 제공**: 각 식당의 메뉴 및 가격 정보 제공

---

### **기대 효과**

- 학생 및 교직원의 캠퍼스 내 이동 효율성을 높이고, 학내 주요 시설 정보를 쉽게 접근 가능하도록 함.
- 즐겨찾기, 편의시설 통합, 시간표 연동 등 다양한 기능을 통해 학내 활동을 지원하여 학생의 학교 생활 만족도를 향상.
- 신입생들에게 처음 접하는 광운대학교 환경이 어려울 수 있지만, 네비게이션을 시스템을 통해 건물과 강의실을 쉽게 찾을 수 있게 되어 학교 적응을 빠르게 할 수 있습니다. 특히 지름길 안내 기능은 신입생들이 활용하여 효율적인 학교 생활을 할 수 있도록 도와줍니다.

### **추가 고려사항**

- **UX/UI 디자인**: 직관적인 네비게이션과 정보 접근성을 고려한 디자인 필요
- **데이터 연동**: 학사 시스템과 연동하여 실시간 강의실 정보 및 시간표 정보를 제공
- **알림 기능**: 시간표에 따른 강의 장소 알림을 설정하여 이동 시간을 효율적으로 관리할 수 있도록 지원

### 스플래시 화면
![image](https://github.com/user-attachments/assets/8af06965-b8ea-4f0f-856c-c41b05593fdb)

## 버전 목표
- **버전 1**: React PWA 2D 지도 구현 (현재 목표)
- **버전 2**: React Native 3D 지도 구현

---

## 사용 기술 스택
- **Frontend**: React, TypeScript, TailwindCSS, Vite
- **Backend**: Node.js

---

## 프론트엔드 폴더 구조
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
│   └── map/                    # 지도 관련 컴포넌트
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
│   ├── Route/                  # 라우트 별 페이지
│   │   ├── Home.tsx            # 홈 페이지
│   │   ├── SearchPlace.tsx     # 장소 검색 페이지
│   │   └── Splash.tsx          # 초기 로딩 화면
│   └── App.tsx                 # 전체 앱 컴포넌트
│
├── index.css                   # 전역 스타일
├── main.tsx                    # 애플리케이션 엔트리 포인트
└── vite.config.ts              # Vite 설정 파일
