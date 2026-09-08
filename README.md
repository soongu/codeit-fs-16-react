# codeit-react-basic-fs-16

코드잇 부트캠프 리액트(React) 기초 과정 학습용 저장소입니다. Vite + React 환경에서 챕터별 실습 코드를 작성하고 관리합니다.

## 브랜치 전략

챕터(파트)별로 브랜치를 나누어 코드를 관리합니다.

- 브랜치명 규칙: `p{파트번호}-{챕터번호}` (예: `p2-01`)
- 각 브랜치에는 해당 챕터에서 다룬 실습 코드와 컴포넌트를 작성합니다.
- `main` 브랜치는 기본 템플릿 및 공통 설정을 유지합니다.

## 폴더 구조

```
src/
├── App.jsx          # 메인 앱 컴포넌트
├── main.jsx         # 엔트리 포인트
├── HelloBox.jsx      # 실습 컴포넌트
├── assets/          # 이미지 등 정적 리소스
└── lab/             # 챕터별 실습 코드
    └── p2-01/       # 파트2-챕터01 실습
```

새로운 챕터 실습은 `src/lab/{브랜치명}/` 경로 아래에 작성합니다.

## 시작하기

```bash
npm install       # 의존성 설치
npm run dev       # 개발 서버 실행
npm run build     # 프로덕션 빌드
npm run lint      # Oxlint 실행
npm run preview   # 빌드 결과 미리보기
```

## 기술 스택

- React 19
- Vite
- Oxlint
