# Idle DPS Game

스타크래프트1의 "DPS 강화하기" 유즈맵을 모티브로 한 웹 게임 프로토타입입니다.

## 🎮 게임 소개

이 게임은 방어형 타워 디펜스 스타일의 게임으로, 플레이어가 유닛을 배치하여 적의 공격을 막고 DPS를 지속적으로 강화하는 것이 목표입니다.

## 🚀 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Deployment**: Vercel
- **Version Control**: GitHub

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Game.tsx        # 메인 게임 컴포넌트
│   ├── GameCanvas.tsx  # 게임 캔버스
│   └── GameUI.tsx      # 게임 UI
├── stores/             # 상태 관리
│   └── gameStore.ts    # 게임 상태 스토어
├── types/              # TypeScript 타입 정의
├── utils/              # 유틸리티 함수
├── App.tsx             # 앱 루트 컴포넌트
├── main.tsx            # 앱 진입점
└── index.css           # 글로벌 스타일
```

## 🎯 핵심 기능

### 구현된 기능
- ✅ 기본 게임 구조
- ✅ 유닛 선택 및 배치 시스템
- ✅ 게임 상태 관리 (골드, 웨이브, 체력)
- ✅ 업그레이드 시스템 UI

### 개발 예정 기능
- 🔄 유닛 배치 및 드래그 앤 드롭
- 🔄 적 스폰 및 AI 시스템
- 🔄 실시간 전투 시스템
- 🔄 DPS 계산 및 표시
- 🔄 웨이브 진행 시스템
- 🔄 사운드 및 이펙트

## 🚀 배포

### Vercel 배포
1. GitHub 저장소에 코드 푸시
2. Vercel에서 GitHub 저장소 연결
3. 자동 배포 설정 완료

### 환경 변수
현재 환경 변수 설정은 필요하지 않습니다.

## 📱 모바일 게임 개발 계획

이 웹 프로토타입이 완성되면 Unity를 사용하여 모바일 게임으로 포팅할 예정입니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해 주세요.
