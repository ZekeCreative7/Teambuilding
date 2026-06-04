# Lina Culture Platform

데이터로 조직문화를 진단하고 실행으로 연결하는 통합 워크스페이스입니다.
하나의 공유 문화 데이터베이스 위에서 6개의 모듈이 독립적으로 동작합니다.

## 모듈 구성

| 사이드바 메뉴 | 내용 | 핵심 파일 |
|---|---|---|
| **Culture Dashboard** | 전체 현황판 — 전사 신호·본부 위험도·취약 문항을 한 화면에 | `index.html` (`#home`) |
| **Culture Intelligence** | Pulse Survey 분석 — 카테고리/문항/본부별 원인 가설 | `index.html` (`#pulse`) |
| **People & Organization** | 조직도 + 문화 신호 — 카드 펼치기·하위 조직 +/- 펼침, Pulse 신호 오버레이 | `app.js`, `organization_data.js` |
| **Campaign Studio** | 조직문화 세션 만들기 — Pulse 데이터를 세션 설계로 연결 | `session-designer.html` |
| **Message Center** | 커뮤니케이션 솔루션 — 리더 스피치·공지문 설계 | `index.html` (`#speech`) |
| **데이터 / Firebase 관리** | 데이터셋 저장·CSV 템플릿 업로드 | `index.html` (`#data`) |

## 파일 구조

```
index.html            앱 셸 + 6개 뷰 + 인증 게이트
styles.css            셸/People & Organization 디자인
modules.css           대시보드·Pulse·세션·커뮤니케이션 모듈 스타일
firebase-config.js    Firebase 설정 + 공통 헬퍼 (auto-connect)
organization_data.js  Org Master 기반 조직/구성원 데이터
app.js                People & Organization 로직 (조직도·드로어·그룹)
platform.js           대시보드·Pulse·세션·커뮤니케이션·인증 로직
pulse-seed-data.json  Pulse Survey 정본 데이터 (2026)
session-designer.html 세션 디자인 스튜디오 (별도 페이지)
sync-embedded.py      pulse-seed-data.json → platform.js 폴백 동기화 도구
firebase.json / .firebaserc / firestore.rules   Firebase Hosting·보안 규칙
assets/               로고 및 원본 소스 데이터(CSV·XLSX)
```

## 데이터 거버넌스

용어·엔터티·필드·코드 정의는 `assets/culture_operating_platform_data_dictionary_v0_1.xlsx`(데이터 사전)를 기준으로 합니다.
조직 구조는 `assets/organization_master_table (1).xlsx`(Org Master)를 기준으로 하며, `organization_data.js`로 반영되어 있습니다.

- 원본 소스 데이터는 분석 결과와 분리해 보존합니다.
- Pulse 응답·상담·FGD·구성원 데이터는 팀·그룹 단위 집계를 기본으로 합니다.

## Pulse ↔ 조직 연결

`pulse-seed-data.json`의 각 본부에 `orgId`가 매핑되어 있어, People & Organization 카드에 Pulse 긍정 응답률과 등급(안정·주의·위험·신뢰도 검토)이 그대로 표시됩니다.
한 조직에 여러 Pulse 본부가 매핑되면 평균으로 집계됩니다.

> Pulse 데이터를 수정하면 `pulse-seed-data.json`을 고친 뒤 `python3 sync-embedded.py`를 실행해 오프라인 폴백 사본을 동기화하세요.

## Firebase 자동 연결

`firebase-config.js`에 `creative-session-canvas` 프로젝트 설정이 내장되어 있습니다.
어디에 배포하든 페이지가 열리면 클라이언트가 Firebase Auth·Firestore에 **자동으로 연결**됩니다. 별도 환경변수나 빌드 설정이 필요 없습니다.

- 마스터(승인 관리) 계정: `rhokoo7@naver.com`
- 신규 가입자는 마스터 승인 후에만 데이터에 접근할 수 있습니다 (`firestore.rules`에서 강제).

## GitHub에 올리기

이 폴더는 이미 git 저장소로 초기화되어 있습니다. 새 GitHub 저장소를 만든 뒤 연결해 푸시하세요.

```bash
cd "Culture Platform"
git remote add origin https://github.com/<사용자명>/<저장소명>.git
git branch -M main
git push -u origin main
```

## 배포 방법 (둘 중 택1)

### A. GitHub Pages (가장 간단 — 푸시하면 자동 배포)
1. 위 명령으로 푸시합니다.
2. 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions**로 설정합니다.
3. 이후 `main`에 푸시할 때마다 `.github/workflows/deploy-pages.yml`이 자동으로 사이트를 배포합니다.
4. 배포된 도메인을 Firebase Console → **Authentication → Settings → Authorized domains**에 추가합니다. (예: `<사용자명>.github.io`)

### B. Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase deploy        # firebase.json / .firebaserc / firestore.rules 사용
```
`<프로젝트>.web.app` 도메인은 이미 Authorized domains에 포함되어 있습니다.

## 로컬에서 실행

정적 사이트이므로 아무 정적 서버로 열면 됩니다.

```bash
cd "Culture Platform"
python3 -m http.server 8000
# http://localhost:8000 접속 후 로그인
```
로컬 도메인(`localhost`)도 Firebase Authorized domains에 추가되어 있어야 로그인이 됩니다.
