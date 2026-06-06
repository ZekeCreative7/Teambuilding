# Lina Culture Platform 운영 구조 분석 리포트

작성일: 2026-06-06  
분석 대상: `/Users/zekedongwookrho/Documents/Culture Platform` 현재 구축 버전  
연결 도표: `LINA_PLATFORM_OPERATING_MODEL.png`  
목적: 현재 플랫폼의 입력, 저장, 출력, 작동 로직, 산식, 제품 철학을 다음 버전 재설계의 기준 문서로 정리

---

## 1. 한 문장 정의

Lina Culture Platform은 `Pulse Survey 신호`를 조직 운영 데이터로 변환하고, 그 결과를 `조직도`, `조직문화 확산 맵`, `WOW x BALANCE 캘린더`, `타겟그룹`, `세션 설계`, `리더 커뮤니케이션`, `Firebase 저장/업로드`로 연결하는 조직문화 운영 플랫폼이다.

현재 버전의 핵심 흐름은 다음과 같다.

```text
Detect
  Pulse Survey / 조직 마스터 / 구성원 / 일정 / 사용자 편집 데이터 수집

Interpret
  Pulse 문항 점수화 / 변화 수용도·신뢰도·피로도·리스크 산식 / 조직별 신호 판정

Design
  조직도 상세 정보 / 타겟그룹 / WOW x BALANCE 세션 / GPT 프롬프트 설계

Deliver
  캘린더 운영 / 세션 현황 대시보드 / 메시지 작성 / 세션 디자이너 전달

Verify
  완료 일정 / 다음 Pulse / 저장된 분석과 커뮤니케이션 기록 / 재업로드와 버전 관리
```

---

## 2. 현재 버전에서 달라진 핵심 사항

현재 구축 버전은 초기 Pulse 대시보드에서 훨씬 확장되어, 조직문화 운영을 위한 통합 워크스페이스에 가까워졌다.

1. **People & Organization이 조직도 중심으로 재정렬되었다.**  
   People & Organization 진입 시 `조직도`가 기본 화면으로 열리고, 조직문화 확산 맵/캘린더/타겟그룹은 같은 프레임 안의 보조 메뉴로 동작한다.

2. **조직도 상세보기는 읽기 패널과 설정 패널로 분리되었다.**  
   카드를 선택하면 조직도 옆에 상세 정보 패널이 열리고, `설정하기`를 누르면 별도 설정 패널에서 조직명, 리더 호칭, 리더 직급, 지표, 구성원, 직급, 사진, 이동/삭제를 관리한다.

3. **조직도 상세 패널은 데스크톱/태블릿에서 고정 위치로 동작한다.**  
   조직도가 아래로 길게 펼쳐져도 상세 패널이 화면 위로 밀려 올라가지 않도록, 데스크톱 기준 독립 패널로 고정했다.

4. **구성원 직급 체계가 확장되었다.**  
   구성원 등록과 등록 후 수정 모두 `사장, 부사장, 전무, 상무, 이사, 부장, 차장, 과장, 대리, 사원`을 같은 목록으로 사용한다.

5. **WOW x BALANCE 세션 현황이 대시보드와 캘린더 사이에서 동기화된다.**  
   캘린더에서 세션을 추가/삭제하면 대시보드의 참여 팀 수, 완료 팀 수, 진행률이 같은 `state.sessions` 기준으로 재계산된다.

6. **대시보드 세션 현황은 전체 팀을 가로 스크롤/버튼으로 볼 수 있다.**  
   기존 4개 팀 제한을 제거하고, `‹ / ›` 버튼과 터치/트랙패드 가로 스크롤 레일로 전체 팀 진행 현황을 볼 수 있게 했다.

7. **로그인 화면 메시지 레이아웃이 안정화되었다.**  
   로그인 실패/승인 안내 메시지는 버튼 아래 전체 폭 박스로 강제 배치되며, 세로 문자열처럼 깨지는 현상을 막기 위해 CSS와 JS 양쪽에서 위치와 쓰기 방향을 보정한다.

8. **왼쪽 사이드바 브랜드와 접힘 동작이 정리되었다.**  
   로고 옆 상단 문구는 `LINA`, 하단 제목은 `Culture Platform`으로 정리했다. 데스크톱에서 메뉴를 접으면 오른쪽 페이지가 줄어든 메뉴 폭만큼 넓어진다. 모바일 오프캔버스 메뉴는 기존 설정을 유지한다.

---

## 3. 현재 제품 철학과 운영 의도

### 3.1 핵심 철학

1. **조직문화는 감상이 아니라 운영 데이터다.**  
   Pulse Survey 결과를 점수표로 끝내지 않고, 조직별 상태, 리스크, 지원 필요성, 실행 우선순위로 변환한다.

2. **진단은 실행으로 연결될 때 의미가 있다.**  
   Culture Intelligence에서 끝나는 것이 아니라 조직도, 캘린더, 타겟그룹, 세션 설계, 메시지 작성까지 이어진다.

3. **조직도는 인사도표가 아니라 문화 운영 지도다.**  
   조직 카드에는 리더, 직급, 호칭, 구성원, Pulse 신호, 캘린더 진행 상태, 추천 액션이 연결된다.

4. **읽기와 편집은 분리한다.**  
   사용자는 먼저 조직도를 시원하게 보고, 필요한 경우에만 설정 패널에서 편집한다.

5. **AI는 현재 외부 조력자이며, 다음 버전에서는 내부 실행 엔진이 될 수 있다.**  
   지금은 프롬프트 생성 → 외부 GPT 복사/붙여넣기 → 결과 저장 방식이다. 다음 구조에서는 Cloud Function + OpenAI API + JSON 스키마 + 승인 로그로 루프를 줄일 수 있다.

---

## 4. 현재 데이터 규모

현재 `organization_data.js`와 `pulse-seed-data.json` 기준이다.

| 영역 | 규모 |
|---|---:|
| 조직 단위 전체 | 101개 |
| 전사/CEO | 1개 |
| 부문 | 9개 |
| 본부 | 22개 |
| 팀 | 69개 |
| 구성원 | 720명 |
| Pulse Survey 문항 | 22개 |
| Pulse 카테고리 | 5개 |
| Pulse 본부 데이터 | 18개 |
| Pulse `orgId` 매핑 본부 | 18개 |
| 고유 매핑 조직 ID | 16개 |

---

## 5. 핵심 파일별 역할

| 파일 | 현재 역할 |
|---|---|
| `index.html` | 앱 셸, 왼쪽 메뉴, 인증 화면, Dashboard/Pulse/People/Session/Message/Data 뷰, 드로어/모달 DOM |
| `platform.js` | 인증/승인, Culture Dashboard, Pulse 분석, GPT 프롬프트, 커뮤니케이션 기록, Pulse 데이터 저장/업로드, 대시보드 세션 현황 |
| `app.js` | People & Organization 전체 로직: 조직도, 상세 패널, 설정 패널, 문화맵, 캘린더, 타겟그룹, 조직/구성원 편집, 드래그, 조직 업로드/Firebase 저장 |
| `organization_data.js` | 조직/구성원 시드 데이터. `window.LINA_ORG_UNITS`, `window.LINA_ORG_PEOPLE` 제공 |
| `pulse-seed-data.json` | Pulse Survey 정본 데이터. 전사/본부/문항/카테고리/메타 정보 |
| `session-designer.html` | 별도 세션 설계 스튜디오. Pulse 컨텍스트를 받아 Project Brief와 세션 보드로 전환 |
| `firebase-config.js` | Firebase 설정, 관리자 이메일, 인증 오류 메시지, 다운로드 헬퍼 |
| `firestore.rules` | 승인 사용자 기반 Firestore 접근 제어 |
| `styles.css` | 앱 셸, 사이드바, People & Organization, 조직도, 상세 패널, 모바일/데스크톱 레이아웃 |
| `modules.css` | Dashboard, Pulse, Data, 로그인, 세션 현황, 공통 모듈 UI |
| `LINA_PLATFORM_OPERATING_REPORT.md` | 현재 운영 구조 분석 리포트 |
| `LINA_PLATFORM_OPERATING_MODEL.png` | 현재 운영 구조를 한 장으로 요약한 도표 |

---

## 6. 입력 구조

### 6.1 고정 입력 데이터

| 입력 | 파일/경로 | 사용처 |
|---|---|---|
| Pulse Survey 2026 정본 | `pulse-seed-data.json` | Culture Dashboard, Culture Intelligence, Culture Signal Engine |
| Pulse 오프라인 폴백 | `platform.js`의 `EMBEDDED_PULSE_SEED` | `fetch`가 막힌 환경에서 대체 데이터 |
| 조직 마스터 | `organization_data.js` | 조직도, 구성원, 리더, 조직 계층, 기본 지표 |
| 브랜드/인트로 이미지 | `lina_logo.png`, `intro_img.png`, `intro_bg.JPG` | 사이드바, 로그인, 브랜드 표시 |
| Firebase 설정 | `firebase-config.js` | 인증, 저장, 승인 관리 |
| Firestore 규칙 | `firestore.rules` | 실제 데이터 접근 제어 |

### 6.2 사용자 입력

| 입력 채널 | 입력 내용 | 처리 위치 |
|---|---|---|
| 로그인/회원가입 | 이메일, 비밀번호 | `platform.js`, Firebase Auth |
| 승인 관리 | 대기 사용자 승인 | `platform.js`, `pendingUsers`, `approvedUsers` |
| Pulse CSV 업로드 | 전사/본부 문항별 fav, low, 비교연도 값 | `platform.js` |
| GPT 분석 붙여넣기 | 전사/본부 분석 텍스트 | `platform.js` |
| 커뮤니케이션 작성 | 목적, 청중, 메시지, GPT 결과 | `platform.js` |
| 조직 설정 | 조직명, 리더, 리더 호칭, 리더 직급, 변화 수용도, 신뢰도, 피로도, 리스크, 키워드 | `app.js` |
| 구성원 설정 | 이름, 직급, 사진, 소속 이동, 삭제 | `app.js` |
| 조직 마스터 업로드 | unit/person/session/group 통합 XLSX 또는 CSV | `app.js` |
| 드래그 앤 드롭 | 조직 생성, 조직 이동, 구성원 이동 | `app.js` |
| 캘린더 입력 | 날짜, 시간, 트랙, 단계, 팀, 참여인원 | `app.js` |
| 타겟그룹 입력 | 그룹명, 역할 조건, 신호 조건, 영향력/수용도 기준 | `app.js` |
| 세션 디자이너 입력 | Project Brief, 질문, 프레임, 슬롯, 의사결정, 보드 | `session-designer.html` |

---

## 7. 저장 구조

### 7.1 브라우저 로컬 저장

| 키 | 저장 내용 |
|---|---|
| `linaCultureOS.currentDataset.v1` | 현재 Pulse 데이터셋, GPT 분석, 커뮤니케이션 기록 |
| `linaCultureOS.currentDataset.v1.backup.latest` | Pulse 업로드/불러오기 전 백업 |
| `culture-platform-organization-v4` | 조직도, 구성원, 캘린더, 타겟그룹, 필터, 확대율, 선택 상태 |
| `culture-platform-organization-v4.backup.latest` | 조직 업로드/초기화 전 백업 |
| `linaPulseContext` | Pulse 분석에서 세션 디자이너로 넘기는 일회성 맥락 패키지 |
| `session_design_studio_premium_v1` | 세션 디자이너 현재 작업 상태 |
| `session_design_studio_board_v1` | 저장된 세션 프로젝트 보드 |
| `linaCultureOS.onboarded.v1` | 사용 가이드 확인 여부 |
| `cp-nav-collapsed` | 데스크톱 사이드바 접힘 여부 |

### 7.2 Firebase 저장

Firestore 보안 규칙은 승인된 사용자 본인의 데이터만 읽고 쓰도록 되어 있다.

| Firestore 경로 | 저장 내용 |
|---|---|
| `users/{uid}/pulseDatasets/{datasetId}` | Pulse 원본, 가공 데이터, GPT 분석, 커뮤니케이션 기록 |
| `users/{uid}/organizationStates/default` | 조직도, 구성원, 캘린더, 타겟그룹, 화면 상태 |
| `users/{uid}/sessionDesigner/default` | 세션 디자이너 현재 상태와 프로젝트 보드 |
| `pendingUsers/{uid}` | 가입 승인 대기자 |
| `approvedUsers/{uid}` | 승인 사용자 명단 |
| `userStates/{uid}` | 이전 배포본 호환 경로 |

### 7.3 저장 방식의 특징

1. **로컬 우선 + Firebase 동기화**  
   대부분의 상태는 먼저 `localStorage`에 저장되고, 로그인/승인 후 Firebase에 저장된다.

2. **Pulse 데이터셋은 버전 목록을 유지한다.**  
   Firebase의 `pulseDatasets` 컬렉션에서 데이터셋 목록을 불러오고, 선택한 버전을 현재 데이터셋으로 복원할 수 있다.

3. **조직 상태는 단일 문서 중심이다.**  
   `organizationStates/default` 하나에 `units`, `people`, `sessions`, `groups`, `filters`, `zoom`이 통째로 들어간다.

4. **조직 업로드는 삭제형 동기화가 아니라 병합형 업데이트다.**  
   업로드에 없는 행은 삭제하지 않는다. 적용 전 백업을 만든 뒤 기존 데이터에 업데이트한다.

5. **캘린더와 대시보드는 같은 세션 배열을 공유한다.**  
   `state.sessions`가 바뀌면 People 영역 렌더 후 `renderHome()`도 재호출되어 세션 현황이 갱신된다.

---

## 8. 출력 구조

| 출력 화면/산출물 | 출력 내용 | 데이터 출처 |
|---|---|---|
| Culture Dashboard | 변화 민첩성, 전사 긍정/부정, 위험 조직, 우선 지원 조직, WOW x BALANCE 진행 현황 | Pulse 데이터셋 + 조직 상태 |
| WOW x BALANCE 세션 현황 | 트랙별 참여 팀, 완료 팀, 진행률, 단계별 완료 수, 전체 팀 가로 스크롤 레일 | `state.sessions`, `trackSummary()` |
| Culture Intelligence | 전사/본부별 Pulse 분석, 카테고리, 문항, 관계 인사이트, GPT 프롬프트 | Pulse 데이터셋 + GPT 분석 |
| People & Organization 조직도 | 조직 계층, 리더/직급/호칭, 구성원, Pulse 상태, 세션 진행 칩, 상세 고정 패널 | 조직 상태 + Pulse org bridge |
| 조직문화 확산 맵 | 전사/부문/본부/팀별 문화 지표 2D 분포 | Pulse 산식 + 조직 수동 지표 |
| 캘린더 | WOW x BALANCE 일정 월/주/일 표시, 일정 추가/삭제 | `state.sessions` |
| 타겟그룹 설정 | 조건 기반 그룹 카드, 구성원/조직 묶음, 추천 액션 | `state.people`, `state.units`, `state.groups` |
| Campaign Studio | Pulse 맥락을 반영한 세션 설계 컨텍스트 전달 | `linaPulseContext` + 세션 디자이너 상태 |
| Message Center | 스피치/공지문 프롬프트, GPT 결과, 커뮤니케이션 기록 | Pulse context + 사용자 입력 |
| Data & Firebase | 데이터셋 버전 목록, 업로드 템플릿, 현재 JSON 다운로드 | Firebase + 로컬 데이터셋 |
| 다운로드 | Pulse CSV 템플릿, 현재 Pulse JSON, 조직 XLSX 템플릿, 조직/세션/그룹 JSON/CSV 계열 | 각 상태 객체 |

---

## 9. Pulse Survey 데이터 작동 로직

### 9.1 로딩 흐름

```text
loadSeedData()
  1. localStorage의 linaCultureOS.currentDataset.v1 확인
  2. 저장 데이터가 있으면 우선 사용
  3. 없거나 강제 seed이면 pulse-seed-data.json fetch
  4. fetch 실패 시 EMBEDDED_PULSE_SEED 사용
  5. enrichData()로 카테고리/평균/등급 계산
  6. currentDataset으로 저장
```

### 9.2 데이터셋 구조

```js
currentDataset = {
  id,
  name,
  year,
  source,
  createdAt,
  updatedAt,
  data: {
    company: { questions, cats },
    divisions,
    meta
  },
  analysis: {
    company: '',
    divisions: {}
  },
  communications: []
}
```

### 9.3 Pulse 분석 엔진

| 함수 | 역할 |
|---|---|
| `enrichData()` | 카테고리 평균, 본부 평균, 부정 평균, 등급 계산 |
| `relationshipInsights()` | 문항 간 차이를 기반으로 해석 인사이트 생성 |
| `buildPulseByOrg()` | Pulse 본부 데이터의 `orgId`를 조직 ID에 연결 |
| `renderPulse()` | 본부별 순위와 Pulse 상세 화면 렌더링 |
| `renderPrompt()` | 외부 GPT에 보낼 분석 프롬프트 생성 |
| `saveGptAnalysis()` | GPT 결과를 현재 데이터셋에 저장 |
| `persistDataset()` | Pulse 데이터셋을 localStorage와 Firebase에 저장 |

---

## 10. Culture Signal Engine 산식

### 10.1 문항 점수

현재 플랫폼은 단순 `FAV`만 쓰지 않고, 부정 응답을 감점한다.

```js
positiveScore = FAV - 0.5 * LOW
```

- `FAV`: 4~5점 긍정 응답 비율
- `LOW`: 1~2점 부정 응답 비율
- 의미: 같은 FAV라도 부정 응답이 높으면 실제 조직 상태 점수를 낮게 본다.

### 10.2 4대 문화 지표

| 지표 | 문항 | 방향 |
|---|---|---|
| 변화 수용도 `changeAcceptance` | Q1, Q2, Q3, Q4, Q7, Q8, Q10, Q22 | 높을수록 좋음 |
| 신뢰도 `trust` | Q5, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21 | 높을수록 좋음 |
| 피로도 / 지원 필요 `fatigue` | Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q19, Q21 | 낮을수록 좋음. 계산 시 `100 - positiveScore` 방향 |
| 문화 리스크 `risk` | Q1, Q4, Q5, Q17, Q18, Q19, Q20, Q21, Q22 | 낮을수록 좋음. 계산 시 `100 - positiveScore` 방향 |

### 10.3 2D 좌표

```js
x = 0.55 * changeAcceptance
  + 0.30 * trust
  + 0.15 * (100 - riskScore)

y = 0.55 * fatigue
  + 0.30 * riskScore
  + 0.15 * (100 - trust)
```

- 오른쪽으로 갈수록 변화 수용도와 신뢰가 높고 리스크가 낮다.
- 위쪽으로 갈수록 피로도/지원 필요와 리스크가 높고 신뢰가 낮다.

### 10.4 4분면 판정

```js
if (x < 50 && y >= 50) return '위험';
if (x >= 50 && y >= 50) return '피로도/지원 필요';
if (x >= 50 && y < 50) return '안정';
return '관망/정체';
```

### 10.5 지원 필요 판정

```js
supportNeeded =
  quadrant === '위험' ||
  quadrant === '피로도/지원 필요' ||
  riskScore >= 60 ||
  fatigue >= 60 ||
  trust < 45
```

### 10.6 전사 변화 민첩성 지수

대시보드의 변화 민첩성 지수는 전사 단위 3대 동력을 결합한다.

```js
agility =
  0.40 * changeAcceptance
  + 0.35 * trust
  + 0.25 * (100 - fatigue)
```

- 피로도는 낮을수록 좋기 때문에 `100 - fatigue`로 반영한다.
- 2024/2025/2026 비교값이 있으면 추세 그래프에 반영한다.

---

## 11. People & Organization 작동 로직

### 11.1 기본 진입

```text
showView('people')
  state.view = 'official'
  state.detailOpen = false
  state.detailModal = null
  render()
```

People & Organization에 다시 들어오면 항상 조직도가 먼저 보인다.

### 11.2 조직도 화면

| 기능 | 구현 |
|---|---|
| 레이아웃 | 가로 조직도 / 폴더 보기 |
| 줌 | 확대, 축소, 맞춤 |
| 카드 열기 | 하위 조직 토글 |
| 카드 선택 | 상세 고정 패널 열기 |
| 설정하기 | 별도 설정 패널 열기 |
| 조직 생성 | 드래그로 부문/본부/팀 생성 |
| 조직 이동 | 드래그로 소속 변경 |
| 구성원 이동 | 드래그 또는 상세 리스트에서 이동 |
| 사진 | 아바타/사진 영역 클릭으로 업로드 |
| 삭제 | 조직/구성원/그룹/세션 삭제 |

### 11.3 상세보기 패널

카드를 선택하면 조직도 오른쪽에 상세 정보가 나타난다.

표시 정보:

- 조직명, 조직 유형, 상위 조직
- 현재 상태와 사분면
- 변화 수용도, 신뢰도, 피로도/지원 필요, 문화 리스크
- Pulse 기반 근거 문항
- 캘린더 기준 진행 현황 칩
- 리더/호칭/직급
- 하위 조직 수, 직접 등록 구성원 수
- 팀원 리스트
- 구성원 삭제/이동
- 다음 액션

데스크톱/태블릿에서는 패널이 화면 위치에 고정되고 내부만 스크롤된다. 모바일은 기존 아래쪽 상세보기 흐름을 유지한다.

### 11.4 설정 패널

`설정하기`에서 수정 가능한 항목:

- 조직명
- 조직 유형
- 리더명
- 리더 호칭: 대표이사, 부문장, 본부장, 실장, 센터장, 그룹장, 팀장, 파트장, 챕터리드 등
- 리더 직급: 이사, 상무, 전무, 부사장, 사장, 대표이사
- 팀장 설정: 팀원 중 선택
- 변화 수용도, 신뢰도, 피로도/지원 필요, 문화 리스크
- 키워드/태그
- 구성원 추가
- 구성원 직급: 사장, 부사장, 전무, 상무, 이사, 부장, 차장, 과장, 대리, 사원
- 구성원 이동/삭제
- 조직 삭제

---

## 12. 조직 마스터 업로드/다운로드

### 12.1 다운로드

`downloadOrganizationTemplate()`은 현재 상태를 다음 레코드 타입으로 내보낸다.

| recordType | 내용 |
|---|---|
| `unit` | 조직 ID, 조직명, 레벨, 상위 조직, 리더, 호칭, 직급, 지표, 태그 |
| `person` | 구성원 ID, 이름, 소속 조직, 직급, 역할, 영향력, 수용도, 태그 |
| `session` | 세션 ID, 날짜, 시간, 트랙, 단계, 팀, 참여인원 |
| `group` | 그룹 ID, 이름, 기준, 추천, 구성원/조직 ID |

### 12.2 업로드

```text
parseOrganizationUpload(file)
  XLSX 또는 CSV 읽기
  recordType 판별
  validateOrganizationUpload()
  사용자 확인
  createOrganizationBackup('upload')
  applyOrganizationUpload()
  render()
```

중요한 운영 원칙:

- 업로드 전 백업 생성
- 기존 ID가 있으면 업데이트
- ID가 없으면 새로 생성
- 업로드에 없는 기존 데이터는 삭제하지 않음
- 실패/실수 시 백업 복원 가능

---

## 13. WOW x BALANCE 캘린더와 대시보드 세션 현황

### 13.1 캘린더 입력

캘린더에서 입력하는 값:

- 날짜
- 시간
- 트랙: 팀 세션 / 팀장 세션
- 단계
- 대상 팀
- 참여인원

### 13.2 트랙 구조

| 트랙 | 단계 수 | 단계 |
|---|---:|---|
| 팀 세션 | 7 | WOW 세션, 명상·호흡 세션, 커뮤니케이션 세션, 중간 서베이, 점심 간담회, 협동 웰니스, 마무리 웰니스 |
| 팀장 세션 | 4 | 회복·에너지 관리, 자기 이해·리더십 인식, 건강한 소통·협업, 네트워킹 |

### 13.3 완료 판정

```js
completed = session.date <= today
```

즉, 날짜가 오늘 이전 또는 오늘이면 완료로 본다.

### 13.4 대시보드 현황 집계

`trackSummary(track)` 기준:

```js
participating = unique(teamId with track sessions).length
finished = teams where doneSteps.size >= totalSteps
overall = doneInstances / (participating * totalSteps) * 100
stepCounts = each step's completed team count
```

최근 업데이트로 대시보드의 팀별 완료 현황은 4개 제한 없이 전체 팀을 렌더링하며, 가로 스크롤 레일과 `‹ / ›` 버튼으로 이동한다.

### 13.5 캘린더 삭제와 대시보드 동기화

캘린더 삭제 흐름:

```text
[data-delete-session]
  state.sessions = state.sessions.filter(...)
  render()
  refreshHomeDashboardFromOrgState()
  renderHome()
```

따라서 삭제된 일정은 캘린더와 대시보드 모두에서 같은 기준으로 반영된다.

---

## 14. 타겟그룹 작동 로직

타겟그룹은 구성원 또는 조직을 조건으로 묶어 운영 대상을 만든다.

### 14.1 기본 템플릿

- 변화 수용도 높은 실무자 그룹
- 피로도 높은 영향력 리더 지원 그룹
- 공정성/신뢰 이슈 리더 그룹
- 웰니스 참여 높고 신뢰 낮은 조직
- 타운홀 이후 Follow-up 필요 본부

### 14.2 사용자 생성 그룹

입력값:

- 그룹 이름
- 역할 조건
- 신호 조건
- 영향력 범위
- 변화 수용도 범위

출력값:

```js
group = {
  id,
  name,
  description,
  criteria,
  memberIds,
  unitIds,
  recommendation
}
```

---

## 15. AI/GPT 루프의 현재 상태

현재 AI 루프는 플랫폼 내부에서 모델을 직접 호출하지 않는다. 대신 사용자가 프롬프트를 복사해 외부 GPT에 입력하고, 결과를 다시 플랫폼에 붙여넣고 저장한다.

```text
Pulse/조직 데이터 선택
  -> 프롬프트 생성
  -> 외부 GPT에 복사
  -> GPT 결과 수신
  -> 플랫폼에 붙여넣기
  -> localStorage/Firebase 저장
```

현재 장점:

- 구현이 단순하다.
- 모델 비용/권한/보안 설계를 아직 내부화하지 않아도 된다.
- 사용자가 답변을 검토한 뒤 저장한다.

현재 한계:

- 반복 작업이 많다.
- GPT 답변 형식이 일정하지 않을 수 있다.
- 어떤 데이터로 어떤 결과가 생성됐는지 추적이 약하다.
- 추천 액션이 캘린더/타겟그룹/커뮤니케이션으로 자동 연결되지 않는다.

---

## 16. AI 루프를 최소화하는 다음 구조

다음 버전에서는 아래 구조로 프롬프트 복사/붙여넣기를 줄일 수 있다.

### 16.1 1단계: 프롬프트 패키지 표준화

현재 생성되는 프롬프트를 JSON 패키지로 만든다.

```js
analysisRequest = {
  type: 'pulse-analysis',
  scope: 'company' | 'division' | 'team',
  targetId,
  pulseSummary,
  cultureSignal,
  orgContext,
  requestedOutputSchema
}
```

사용자는 여전히 외부 GPT를 쓰더라도, 입력/출력 구조가 더 안정된다.

### 16.2 2단계: 결과 JSON 붙여넣기

GPT 결과를 자유 텍스트가 아니라 JSON으로 받는다.

```js
analysisResult = {
  summary,
  keyRisks,
  recommendedActions,
  targetGroups,
  sessions,
  communicationDrafts
}
```

플랫폼은 JSON을 파싱해 대시보드, 캘린더, 타겟그룹, 메시지에 자동 반영할 수 있다.

### 16.3 3단계: Cloud Function + OpenAI API

```text
Client
  -> callable Cloud Function
  -> OpenAI API
  -> JSON Schema validation
  -> Firestore 저장
  -> 사용자 승인 후 적용
```

이 구조의 장점:

- API 키가 클라이언트에 노출되지 않는다.
- 결과 형식을 JSON Schema로 강제할 수 있다.
- 모든 요청/결과가 Firestore에 기록된다.
- 사용자는 `AI 분석 생성` 버튼만 누르면 된다.

### 16.4 4단계: AI Run Registry

Firestore에 AI 실행 로그를 남긴다.

| 경로 | 내용 |
|---|---|
| `users/{uid}/aiRuns/{runId}` | 요청 타입, 대상, 입력 스냅샷, 모델, 결과, 승인 상태, 생성 시간 |

추천 상태:

```text
created -> reviewed -> approved -> applied -> archived
```

중요한 원칙은 `사람 승인 후 적용`이다. 조직문화 운영은 민감하기 때문에 AI 결과를 바로 조직/일정/메시지에 반영하기보다 검토 단계를 둔다.

---

## 17. 데이터 흐름 관점의 끊김 여부

현재 기준으로 입력, 저장, 출력 흐름은 대부분 연결되어 있다.

### 17.1 연결된 흐름

| 흐름 | 현재 상태 |
|---|---|
| Pulse seed -> Dashboard | 연결됨 |
| Pulse upload -> Dashboard/Pulse | 연결됨 |
| GPT 분석 저장 -> Dashboard/Pulse 상세 | 연결됨 |
| 조직 마스터 -> 조직도 | 연결됨 |
| 조직 편집 -> localStorage/Firebase | 연결됨 |
| 구성원 추가/삭제/이동 -> 상세보기/타겟그룹 | 연결됨 |
| 캘린더 추가/삭제 -> 캘린더 | 연결됨 |
| 캘린더 추가/삭제 -> Dashboard 세션 현황 | 연결됨 |
| 조직 XLSX/CSV 다운로드 -> 재업로드 | 연결됨 |
| Pulse 분석 -> 세션 디자이너 컨텍스트 | 연결됨 |
| 커뮤니케이션 작성 -> 기록 저장 | 연결됨 |
| 로그인/승인 -> 데이터 접근 | 연결됨 |

### 17.2 아직 약한 흐름

| 약점 | 설명 | 다음 개선 |
|---|---|---|
| AI 결과 자동 적용 | 외부 GPT 결과를 사람이 붙여넣어야 함 | Cloud Function + OpenAI API + JSON Schema |
| 조직 상태 충돌 | `organizationStates/default` 단일 문서 중심 | writer/version 기반 충돌 관리 |
| 세션 완료 검증 | 날짜 기준 자동 완료 | 실제 참석/피드백 입력 추가 |
| Pulse-팀 매핑 | 본부까지 Pulse 기반, 팀은 수동/상속 값 중심 | 팀 단위 Pulse 또는 팀장 입력 신호 추가 |
| 추천 액션 실행 추적 | 추천은 보이나 액션 상태 관리가 약함 | Action/Experiment 객체 추가 |
| 권한 세분화 | 승인 사용자 중심 | 관리자/HR/리더/읽기전용 권한 분리 |

---

## 18. 다음 버전 데이터 모델 제안

현재 상태 객체가 커졌기 때문에 다음 버전은 컬렉션을 분리하는 편이 좋다.

```text
organizations/{orgId}
people/{personId}
sessions/{sessionId}
targetGroups/{groupId}
pulseDatasets/{datasetId}
analysisRuns/{runId}
actions/{actionId}
communications/{messageId}
```

다만 현재 정적 웹앱 단계에서는 단일 문서 방식이 빠르고 단순하다. 다음 버전에서 다중 사용자 협업과 AI 자동화를 본격화할 때 분리하는 것이 좋다.

---

## 19. 현재 운영 모델 요약

```text
입력
  Pulse Survey, 조직 마스터, 사용자 편집, 캘린더, GPT 결과, 인증/승인

저장
  localStorage, Firestore, 백업, 데이터셋 버전, 조직 상태 문서

엔진
  Pulse 분석 엔진, Culture Signal Engine, Organization Engine, Execution Engine, Prompt Loop

출력
  Dashboard, Intelligence, Organization, Culture Map, Calendar, Target Groups, Campaign Studio, Message Center, Data & Firebase

다음 구조
  Cloud Function, OpenAI API, JSON Schema, AI Run Registry, 사람 승인 후 적용
```

---

## 20. 결론

현재 Lina Culture Platform은 단순 Pulse Survey 대시보드가 아니라, 조직문화 운영을 위한 초기 OS 구조를 갖추고 있다. 핵심은 `Pulse Survey 신호`를 `조직 구조`, `문화 지도`, `세션 일정`, `타겟그룹`, `커뮤니케이션`으로 연결한다는 점이다.

다음 고도화의 방향은 명확하다.

1. AI 루프를 외부 복사/붙여넣기에서 내부 실행/검증 구조로 이동한다.
2. 추천 액션을 실제 실행 객체로 만들고 상태를 추적한다.
3. 세션 완료를 날짜 기준에서 참석/피드백/후속 Pulse 기준으로 확장한다.
4. 조직 상태 저장을 단일 문서에서 협업 가능한 구조로 발전시킨다.
5. 리더와 HR이 각자 볼 수 있는 권한별 운영 화면을 만든다.

이 방향으로 가면 플랫폼은 `진단 화면`이 아니라 `조직문화 운영 체계`가 된다.
