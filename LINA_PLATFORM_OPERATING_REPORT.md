# Lina Culture Platform 운영 구조 분석 리포트

작성일: 2026-06-06  
분석 대상: 현재 `/Users/zekedongwookrho/Documents/Culture Platform` 정적 웹 플랫폼  
목적: 현재 플랫폼의 입력, 출력, 저장, 작동 로직, 산식, 제품 철학을 다음 버전 재설계의 기준 문서로 정리

---

## 1. 한 문장 정의

Lina Culture Platform은 `Pulse Survey 신호`를 조직 단위로 해석하고, 그 결과를 `조직도`, `문화 확산 맵`, `세션 설계`, `리더 커뮤니케이션`, `타겟그룹 운영`으로 연결하는 조직문화 운영 플랫폼이다.

현재 구조는 단순한 설문 대시보드가 아니라 다음 흐름을 갖는다.

```text
진단 Detect
  Pulse Survey / 조직 마스터 / 구성원 데이터 / 일정 데이터

해석 Interpret
  전사-본부-문항 분석 / 문화 지표 산식 / 리스크 판정 / 관계 인사이트

설계 Design
  조직별 다음 액션 / WOW x BALANCE 세션 / 타겟그룹 / 메시지 프롬프트

실행 Deliver
  캘린더 일정 / 커뮤니케이션 기록 / 세션 디자이너 / 저장된 분석

검증 Verify
  다음 Pulse Survey / 세션 완료 여부 / You said-We did 루프
```

---

## 2. 현재 제품 철학과 의도

### 2.1 핵심 철학

1. **조직문화는 추상 감상이 아니라 운영 데이터다.**  
   Pulse Survey 결과를 단순 점수표로 보지 않고, 조직 단위의 상태, 리스크, 지원 필요성, 실행 우선순위로 변환한다.

2. **진단은 실행과 연결될 때 의미가 있다.**  
   Pulse 분석만 끝나는 구조가 아니라 세션 설계, 리더 메시지, 캘린더, 타겟그룹까지 이어진다.

3. **조직도는 단순 인사도표가 아니라 문화 운영의 지도다.**  
   조직 카드에 리더, 직급, 호칭, 구성원, Pulse 신호, 일정 진행 상태, 추천 운영이 함께 붙는다.

4. **AI는 현재 보조 조력자이지만, 아직 플랫폼 내부 엔진은 아니다.**  
   지금은 프롬프트 생성 → 외부 GPT 사용 → 결과 붙여넣기 방식이다. 다음 버전에서는 이 루프를 내부 AI 실행 엔진으로 통합할 수 있다.

5. **읽기와 편집은 분리한다.**  
   조직도는 먼저 한눈에 읽게 하고, 설정/수정은 명확한 액션 뒤에 열리도록 구성되어 있다.

---

## 3. 현재 데이터 규모

현재 정본 파일 기준:

| 영역 | 규모 |
|---|---:|
| 조직 단위 전체 | 101개 |
| 전사 | 1개 |
| 부문 | 9개 |
| 본부 | 22개 |
| 팀 | 69개 |
| 구성원 | 720명 |
| Pulse Survey 문항 | 22개 |
| Pulse 카테고리 | 5개 |
| Pulse 본부 데이터 | 18개 |
| Pulse `orgId` 매핑 본부 | 18개 |
| 매핑된 조직 ID | 16개 |

---

## 4. 핵심 파일별 역할

| 파일 | 역할 |
|---|---|
| `index.html` | 앱 셸, 인증 화면, 6개 메인 뷰, People & Organization 컨테이너, 드로어/모달 DOM |
| `platform.js` | Culture Dashboard, Pulse 분석, 데이터셋 저장/업로드, GPT 프롬프트, 세션/커뮤니케이션 브리지, 인증 |
| `app.js` | People & Organization 전체 로직: 조직도, 문화맵, 캘린더, 타겟그룹, 조직 편집, 드래그, 조직 업로드 |
| `organization_data.js` | 조직/구성원 시드 데이터. `window.LINA_ORG_UNITS`, `window.LINA_ORG_PEOPLE` 제공 |
| `pulse-seed-data.json` | Pulse Survey 정본 데이터. 전사/본부/문항/카테고리/메타 정보 |
| `session-designer.html` | 별도 세션 설계 스튜디오. Pulse 컨텍스트를 받아 Project Brief로 전환 |
| `firebase-config.js` | Firebase 설정, 관리자 이메일, 공통 다운로드/인증 오류 헬퍼 |
| `firestore.rules` | 승인 사용자 기반 Firestore 접근 제어 |
| `styles.css` | 앱 셸, People & Organization, 모바일, 조직도 UI |
| `modules.css` | 대시보드, Pulse, 세션, 커뮤니케이션 모듈 UI |
| `sync-embedded.py` | `pulse-seed-data.json`을 `platform.js`의 오프라인 폴백 데이터와 동기화 |

---

## 5. 입력 구조

### 5.1 고정 입력 데이터

| 입력 | 파일/경로 | 사용처 |
|---|---|---|
| Pulse Survey 2026 정본 | `pulse-seed-data.json` | Culture Dashboard, Culture Intelligence, People & Organization Pulse 신호 |
| Pulse 오프라인 폴백 | `platform.js`의 `EMBEDDED_PULSE_SEED` | `fetch`가 막힌 환경에서 대체 데이터 |
| 조직 마스터 | `organization_data.js` | 조직도, 구성원, 리더, 조직 계층 |
| 로고/이미지 | `lina_logo.png`, `intro_img.png` | 브랜드/인증/인트로 |
| 원본 소스 자산 | `assets/*.csv`, `assets/*.xlsx` | 원본 보존 및 향후 재생성 기준 |

### 5.2 사용자 입력

| 입력 채널 | 입력 내용 | 처리 위치 |
|---|---|---|
| 로그인/회원가입 | 이메일, 비밀번호 | `platform.js`, `session-designer.html`, Firebase Auth |
| Pulse CSV 업로드 | 전사/본부 문항별 fav, low, 비교연도 값 | `platform.js` |
| GPT 분석 붙여넣기 | 전사/본부 분석 텍스트 | `platform.js` |
| 커뮤니케이션 작성 | 목적, 청중, 메시지, GPT 결과 | `platform.js` |
| 조직 설정 | 조직명, 책임자, 호칭, 직급, 변화 수용도, 신뢰도, 피로도, 리스크, 키워드 | `app.js` |
| 조직 마스터 업로드 | unit/person/session/group 통합 XLSX 또는 CSV | `app.js` |
| 구성원 편집 | 추가, 삭제, 이동, 직급, 사진 | `app.js` |
| 드래그 앤 드롭 | 조직 생성, 조직 이동, 구성원 이동 | `app.js` |
| 캘린더 입력 | 날짜, 시간, 세션명, 유형, 팀, 참여인원 | `app.js` |
| 타겟그룹 입력 | 그룹명, 역할 조건, 신호 조건, 영향력/수용도 기준 | `app.js` |
| 세션 디자이너 입력 | Project Brief, 질문, 참여자 감정, 프레임, 슬롯, 스토리카드, 피드백 | `session-designer.html` |

---

## 6. 저장 구조

### 6.1 브라우저 로컬 저장

| 키 | 저장 내용 |
|---|---|
| `linaCultureOS.currentDataset.v1` | 현재 Pulse 데이터셋, GPT 분석, 커뮤니케이션 기록 |
| `linaCultureOS.currentDataset.v1.backup.latest` | Pulse 업로드/불러오기 전 백업 |
| `culture-platform-organization-v4` | 조직도, 구성원, 캘린더, 타겟그룹, 필터, 확대율 |
| `culture-platform-organization-v4.backup.latest` | 조직 업로드/초기화 전 백업 |
| `linaPulseContext` | Pulse 분석에서 세션 디자이너로 넘기는 일회성 맥락 패키지 |
| `session_design_studio_premium_v1` | 세션 디자이너 현재 작업 상태 |
| `session_design_studio_board_v1` | 저장된 세션 프로젝트 보드 |
| `linaCultureOS.onboarded.v1` | 사용 가이드 확인 여부 |

### 6.2 Firebase 저장

Firestore 보안 규칙은 승인된 사용자 본인의 데이터만 읽고 쓰도록 되어 있다.

| Firestore 경로 | 저장 내용 |
|---|---|
| `users/{uid}/pulseDatasets/{datasetId}` | Pulse 원본, 가공 데이터, GPT 분석, 커뮤니케이션 기록 |
| `users/{uid}/organizationStates/default` | 조직도, 구성원, 캘린더, 타겟그룹 |
| `users/{uid}/sessionDesigner/default` | 세션 디자이너 현재 상태와 프로젝트 보드 |
| `pendingUsers/{uid}` | 가입 승인 대기자 |
| `approvedUsers/{uid}` | 승인 사용자 명단 |

### 6.3 저장 방식의 특징

1. **로컬 우선 + Firebase 동기화**  
   대부분의 상태는 먼저 `localStorage`에 저장되고, 로그인/승인 후 Firebase에 저장된다.

2. **Pulse 데이터셋은 버전 목록을 유지**  
   Firebase의 `pulseDatasets` 컬렉션에서 최근 30개 데이터셋을 목록으로 불러온다.

3. **조직 상태는 단일 문서 중심**  
   `organizationStates/default` 하나에 조직, 사람, 일정, 그룹이 통째로 들어간다.

4. **세션 디자이너는 실시간 충돌 감지 일부 보유**  
   동일 문서의 다른 writer가 저장하면 배너를 띄우는 구조가 있다.

5. **조직도는 현재 실시간 구독이 아니라 로드/저장 중심**  
   다른 기기 동시 편집 충돌 처리는 다음 버전에서 강화해야 한다.

---

## 7. 출력 구조

| 출력 화면/산출물 | 출력 내용 | 데이터 출처 |
|---|---|---|
| Culture Dashboard | 전사 긍정/부정, 위험 본부 수, 카테고리 비교, 취약 문항, 저장된 GPT 분석 | Pulse 데이터셋 |
| Culture Intelligence | 전사/본부별 Pulse 분석, 카테고리, 문항, 관계 인사이트, GPT 프롬프트 | Pulse 데이터셋 + GPT 분석 |
| People & Organization 조직도 | 조직 계층, 리더/직급/호칭, 구성원, Pulse 상태, 세션 진행 칩 | 조직 상태 + Pulse org bridge |
| 조직문화 확산 맵 | 전사/부문/본부/팀별 문화 지표 2D 분포 | Pulse 산식 + 조직 수동 지표 |
| 캘린더 | WOW x BALANCE 등 세션 일정 월/주/일 표시 | 조직 상태의 `sessions` |
| 타겟그룹 설정 | 조건 기반 그룹 카드, 구성원/조직 묶음 | 조직 상태의 `people`, `units`, `groups` |
| Campaign Studio | Pulse 맥락을 반영한 Project Brief, 슬롯, 원페이저, Runbook | `linaPulseContext` + 세션 상태 |
| Message Center | 스피치/공지문 프롬프트, GPT 결과, 커뮤니케이션 기록 | Pulse context + 사용자 입력 |
| Data & Firebase | 데이터셋 버전 목록, 업로드 템플릿, JSON 다운로드 | Firebase + 로컬 데이터셋 |
| 다운로드 | Pulse CSV 템플릿, 현재 Pulse JSON, 조직 XLSX 템플릿, 세션 Runbook/JSON | 각 상태 객체 |

---

## 8. Pulse Survey 데이터 작동 로직

### 8.1 로딩

```text
loadSeedData()
  1. localStorage에 저장된 현재 데이터셋이 있으면 우선 사용
  2. 없거나 강제 seed이면 pulse-seed-data.json fetch
  3. fetch 실패 시 EMBEDDED_PULSE_SEED 사용
  4. enrichData()로 카테고리/평균/등급 계산
  5. currentDataset으로 저장
```

### 8.2 데이터셋 구조

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
    company: "",
    divisions: {}
  },
  communications: []
}
```

### 8.3 카테고리 구조

현재 Pulse 22개 문항은 5개 카테고리로 묶인다.

| 카테고리 | 문항 |
|---|---|
| 몰입·추천 | Q1, Q2, Q3, Q4 |
| 조직명확성 | Q5, Q6, Q7, Q8, Q9, Q10 |
| 웰빙 | Q11, Q12 |
| 매니저 | Q13, Q14, Q15, Q16 |
| 심리안전·소속감 | Q17, Q18, Q19, Q20, Q21, Q22 |

카테고리 점수는 해당 문항의 평균이다.

```text
category.fav[year] = average(question.fav[year])
category.low[year] = average(question.low[year])
```

### 8.4 본부 등급

```js
if (hi90 >= 20) return "check";
if (avgFav >= 65) return "stable";
if (avgFav >= 55) return "watch";
return "risk";
```

해석:

| 등급 | 의미 |
|---|---|
| `stable` | 안정 |
| `watch` | 주의 |
| `risk` | 위험 |
| `check` | 신뢰도 검토. 지나치게 높은 응답 등 데이터 해석 주의 |

### 8.5 문항 간 관계 인사이트

`RELATION_RULES`는 특정 문항 쌍의 차이를 비교한다. 차이가 기준 이상이면 아하 인사이트를 만든다.

예:

| 비교 | 의미 |
|---|---|
| Q4 잔류 의향 vs Q1 추천 의향 | 남아 있지만 추천하지 않는 조직인지 확인 |
| Q7 목표 기여 이해 vs Q10 학습 기회 | 방향은 명확하지만 성장 경로가 약한지 확인 |
| Q13 매니저 피드백 vs Q19 서베이 조치 신뢰 | 현장 매니저는 움직이나 회사 조치 신뢰가 낮은지 확인 |
| Q5 의견 존중 vs Q17 문제 제기 | 일반 의견은 존중되지만 민감한 문제 제기는 어려운지 확인 |
| Q12 웰빙 프로그램 vs Q11 웰빙 요청 가능 | 제도는 있으나 도움 요청 심리 장벽이 있는지 확인 |
| Q20 포용 노력 vs Q21 소속감 | 포용 메시지가 실제 소속감으로 내려오는지 확인 |
| Q4 잔류 의향 vs Q3 성취감 | 남아 있지만 성취 에너지가 약한지 확인 |

---

## 9. Pulse와 조직도의 연결

`platform.js`의 `buildPulseByOrg()`가 Pulse 본부 데이터를 조직도에 연결한다.

```text
Pulse divisions[]
  └─ 각 division.orgId 기준으로 그룹핑
      └─ 같은 orgId가 여러 개면 평균
          └─ window.LINA_PULSE_BY_ORG[orgId] 생성
              └─ app.js에서 pulseForUnit(unit.id)로 사용
```

연결 결과는 다음 형태다.

```js
window.LINA_PULSE_BY_ORG[orgId] = {
  fav,
  low,
  tier,
  sources,
  reliab,
  questions
}
```

이 브리지가 있어 People & Organization 조직 카드가 Pulse 데이터를 직접 읽을 수 있다.

---

## 10. 조직문화 지표 산식

People & Organization의 문화 확산 맵과 조직 카드 지표는 4개 핵심 지표를 사용한다.

```text
변화 수용도 changeAcceptance
신뢰도 trust
피로도 / 지원 필요 fatigue
문화 리스크 riskScore
```

### 10.1 문항 기본 점수

단순 긍정률만 쓰지 않고 부정 응답을 일부 패널티로 반영한다.

```js
positivePulseScore = FAV - 0.5 * LOW
```

현재 코드에서는 문항의 1점+2점 비율이 `low`로 들어온다.

### 10.2 변화 수용도 매핑

| 문항 | 가중치 | 의미 |
|---|---:|---|
| Q1 | 0.16 | 회사 추천 의향 |
| Q2 | 0.12 | 재직 자부심 |
| Q3 | 0.13 | 개인적 성취감 |
| Q4 | 0.12 | 잔류 의향 |
| Q7 | 0.15 | 목표 기여 이해 |
| Q8 | 0.12 | 역할 명확성 |
| Q10 | 0.10 | 스킬 학습 기회 |
| Q22 | 0.10 | 동료 협업 |

```text
changeAcceptance = weightedAverage(positivePulseScore)
```

### 10.3 신뢰도 매핑

| 문항 | 가중치 | 의미 |
|---|---:|---|
| Q5 | 0.11 | 의견 존중 |
| Q13 | 0.10 | 적시 피드백 |
| Q14 | 0.10 | 인정 |
| Q15 | 0.10 | 문제 해결 지원 |
| Q16 | 0.09 | 성장 대화 |
| Q17 | 0.14 | 두려움 없는 문제 제기 |
| Q18 | 0.10 | 리더 소통 |
| Q19 | 0.12 | 서베이 조치 신뢰 |
| Q20 | 0.07 | 포용 노력 |
| Q21 | 0.07 | 소속감 |

```text
trust = weightedAverage(positivePulseScore)
```

### 10.4 피로도 / 지원 필요 매핑

피로도는 Pulse에 직접 번아웃 문항이 없으므로 “피로 가능성 / 지원 필요”로 보는 것이 정확하다.

| 문항 | 가중치 | 의미 |
|---|---:|---|
| Q10 | 0.10 | 성장 기회 부족 |
| Q11 | 0.14 | 웰빙 요청 어려움 |
| Q12 | 0.11 | 웰빙 지원 부족 |
| Q13 | 0.10 | 피드백 부족 |
| Q14 | 0.11 | 인정 부족 |
| Q15 | 0.09 | 문제 해결 지원 부족 |
| Q16 | 0.11 | 성장 대화 부족 |
| Q17 | 0.10 | 문제 제기 부담 |
| Q19 | 0.08 | 후속조치 불신 |
| Q21 | 0.06 | 소속감 약화 |

```text
fatigue = weightedAverage(100 - positivePulseScore)
```

### 10.5 문화 리스크 매핑

| 문항 | 가중치 | 의미 |
|---|---:|---|
| Q1 | 0.10 | 추천 의향 약화 |
| Q4 | 0.10 | 잔류 의향 약화 |
| Q5 | 0.11 | 의견 존중 약화 |
| Q17 | 0.16 | 심리적 안전 약화 |
| Q18 | 0.11 | 리더 소통 약화 |
| Q19 | 0.16 | 서베이 조치 불신 |
| Q20 | 0.09 | 포용 체감 약화 |
| Q21 | 0.09 | 소속감 약화 |
| Q22 | 0.08 | 협업 약화 |

```text
riskScore = weightedAverage(100 - positivePulseScore)
```

### 10.6 리스크 등급

```js
if (riskScore >= 60) risk = "high";
else if (riskScore >= 42) risk = "medium";
else risk = "low";
```

---

## 11. 조직문화 확산 맵 산식

4개 지표를 2D 좌표로 변환한다.

```js
x =
  0.55 * changeAcceptance +
  0.30 * trust +
  0.15 * (100 - riskScore)

y =
  0.55 * fatigue +
  0.30 * riskScore +
  0.15 * (100 - trust)
```

해석:

| 축 | 의미 |
|---|---|
| X가 높음 | 변화 수용도와 신뢰가 높고 리스크가 낮음 |
| Y가 높음 | 피로도/지원 필요와 리스크가 높고 신뢰가 낮음 |

### 11.1 사분면 판정

```js
if (x < 50 && y >= 50) return "위험";
if (x >= 50 && y >= 50) return "피로도/지원 필요";
if (x >= 50 && y < 50) return "안정";
return "관망/정체";
```

### 11.2 지원 필요 판정

```js
supportNeeded =
  quadrant === "위험" ||
  quadrant === "피로도/지원 필요" ||
  riskScore >= 60 ||
  fatigue >= 60 ||
  trust < 45
```

### 11.3 팀 단위 처리

팀은 Pulse Survey 직접 매핑이 없으므로 설정값을 사용한다.

```text
팀: unit.readiness / unit.trust / unit.fatigue / unit.risk
본부 이상: Pulse Survey 기반 자동 산식 우선
```

---

## 12. People & Organization 작동 방식

### 12.1 상태 객체

```js
state = {
  units,
  people,
  groups,
  sessions,
  selectedUnitId,
  view: "official",
  orgLayout,
  orgZoom,
  networkLevel,
  calendarView,
  selectedCalendarDate,
  expandedUnitIds,
  openCardIds,
  detailOpen,
  detailModal,
  search,
  filters
}
```

### 12.2 기본 화면 정책

People & Organization에 들어오면 항상 `state.view = "official"`로 조직도가 먼저 보인다.  
이는 조직도가 이 영역의 주 화면이라는 제품 의도를 반영한다.

### 12.3 조직도

지원 기능:

- 가로 조직도
- 폴더형 조직도
- 줌 인/아웃
- 화면 맞춤
- 카드 펼침/접힘
- 하위 조직 펼침/접힘
- 카드 클릭 시 오른쪽 인스펙터 표시
- 모바일에서는 상세 영역으로 자동 스크롤

카드 표시 정보:

- 조직명
- 조직 유형
- 리더 이름
- 리더 직급
- 리더 호칭
- 변화 수용도
- Pulse 상태
- 진행 현황 칩
- 키워드

### 12.4 조직 편집

가능한 편집:

- 조직명 수정
- 책임자 이름 수정
- 책임자 호칭 수정: 본부장, 부문장, 팀장, 파트장 등
- 직급 수정: 이사, 상무, 전무 등
- 변화 수용도 / 신뢰도 / 피로도 슬라이더 수정
- 리스크 선택
- 키워드 수정
- 팀장/조직장 드롭다운 지정
- 조직 삭제
- 구성원 추가
- 구성원 삭제
- 구성원 소속 이동
- 구성원 직급 수정
- 조직/구성원 사진 업로드

### 12.5 드래그 작동 규칙

조직 생성:

```text
새 부문 -> company 하위에만 생성
새 본부 -> company 또는 division 하위
새 팀 -> division 또는 hq 하위
```

조직 이동:

```text
division -> company 하위
hq -> company 또는 division 하위
team -> division 또는 hq 하위
자기 자신/하위 조직 아래로는 이동 불가
```

구성원 이동:

```text
구성원 -> company가 아닌 조직으로 이동 가능
이동 시 기존 조직의 리더였다면 기존 조직 리더 상태 초기화
팀장 직책이던 사람은 이동 시 실무자/구성원으로 정리
```

---

## 13. 조직 마스터 업로드/다운로드

### 13.1 다운로드

`downloadOrganizationTemplate()`이 현재 상태를 XLSX 템플릿으로 만든다.

한 파일 안에 4종 행을 담는다.

| recordType | 의미 |
|---|---|
| `unit` | 조직 |
| `person` | 구성원 |
| `session` | 캘린더 일정 |
| `group` | 타겟그룹 |

### 13.2 업로드

업로드 가능 파일:

- `.xlsx`
- `.csv`

처리 방식:

```text
parseOrganizationUpload()
  -> XLSX 또는 CSV 파싱
  -> analyzeOrganizationUpload()
  -> confirmOrganizationUpload()
  -> createOrganizationBackup("upload")
  -> applyOrganizationTemplate()
  -> render()
  -> persist()
```

중요 정책:

```text
업로드된 행은 기존 데이터에 업데이트/추가된다.
업로드에 없는 기존 데이터는 삭제하지 않는다.
업로드 전 최신 백업을 만든다.
```

이 정책은 운영 안정성 측면에서 좋다. 실수 업로드로 전체 조직도가 날아갈 가능성을 줄인다.

---

## 14. 캘린더 작동 방식

캘린더는 WOW x BALANCE 세션 및 관련 실행 일정을 관리한다.

입력 필드:

- 날짜
- 시간
- 세션명
- 유형
- 팀 이름
- 참여인원

지원 보기:

- 월
- 주
- 일

조직 카드와의 연결:

```text
state.sessions[]에 일정 등록
  -> sessionDoneForUnit(unitId, category)
      -> 일정 날짜가 오늘 이전이면 완료로 간주
          -> 조직 카드의 진행 현황 칩 ON
```

즉 캘린더는 단순 일정표가 아니라 조직도 진행 상태를 자동 업데이트하는 실행 기록이다.

---

## 15. 타겟그룹 작동 방식

타겟그룹은 조직 단위가 아니라 목적/조건 기반으로 사람과 조직을 묶는다.

현재 그룹 생성 기준:

- 역할: 전체 / 리더 / 구성원
- 신호: 변화 수용도, 신뢰도, 피로도 등
- 영향력 기준
- 수용도 기준
- 추천 템플릿

결과:

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

운영 의도:

```text
팀 단위로만 개입하지 않고,
영향력 있는 사람 / 피로가 높은 조직 / 변화 수용성이 높은 후보군을 따로 묶어
캠페인, 인터뷰, 파일럿, 리더 코칭 대상으로 운영한다.
```

---

## 16. Campaign Studio 연결 방식

Culture Platform에서 선택한 Pulse 범위를 세션 디자이너로 넘긴다.

```text
createSessionFromSelection()
  -> contextPayload(scope)
  -> localStorage.setItem("linaPulseContext", payload)
  -> session-designer.html?pulseContext=1 이동
```

세션 디자이너에서:

```text
applyPulseContextIfPresent()
  -> linaPulseContext 읽기
  -> Project Brief 자동 채움
  -> Feedback raw에 Pulse 근거 추가
  -> Decision Log에 "Pulse Survey 맥락 적용" 기록
```

세션 디자이너의 핵심 출력:

- Project Brief
- 질문 보드
- 참여자 감정 DB
- Big Frame
- Decision Log
- Story Cards
- Slot Action Plan
- One Pager
- Runbook markdown

---

## 17. Message Center 작동 방식

Message Center는 Pulse 데이터를 리더 커뮤니케이션 산출물로 전환한다.

입력:

- 산출물 유형: 리더 스피치 / 전사 공지문 / 본부 공지문
- 대상 데이터: 전사 또는 본부
- 제목
- 대상 청중
- 목적
- 핵심 메시지
- 스토리텔링 단서
- 리스크 체크박스

작동:

```text
renderSpeechContext()
  -> companyPack() 또는 divisionPack()

buildSpeechPrompt()
  -> 유형별 GPT 프롬프트 생성

saveCommunication()
  -> prompt/result를 currentDataset.communications[]에 저장
  -> persistDataset("communication")
```

저장된 커뮤니케이션은 다시 템플릿으로 불러올 수 있다.

---

## 18. 현재 AI 사용 방식

현재 AI는 직접 API로 연결되어 있지 않다.

### 18.1 현재 루프

```text
1. 플랫폼이 데이터 기반 프롬프트를 생성
2. 사용자가 프롬프트 복사
3. 외부 ChatGPT 등에 붙여넣기
4. GPT 답변 복사
5. 플랫폼에 붙여넣기
6. 저장
```

### 18.2 AI가 쓰이는 곳

| 영역 | 현재 방식 |
|---|---|
| Pulse 분석 | 프롬프트 생성 후 GPT 답변을 텍스트로 저장 |
| 본부 상세 분석 | 상세 GPT 프롬프트 복사 |
| 커뮤니케이션 | 스피치/공지문 프롬프트 생성 후 결과 저장 |
| 세션 디자이너 | 비판 질문 프롬프트, 감정 가설 JSON, 슬롯 초안 JSON |
| 세션 슬롯 | GPT JSON 결과를 붙여넣으면 슬롯에 자동 반영 |

### 18.3 현재 방식의 장점

- API 키가 필요 없다.
- 비용이 없다.
- 외부 GPT 품질을 직접 선택할 수 있다.
- 민감한 데이터를 사용자가 통제해서 보낼 수 있다.
- 프로토타입 구현이 빠르다.

### 18.4 현재 방식의 한계

- 복사/붙여넣기 단계가 많다.
- 결과가 자유 텍스트라 재사용성이 낮다.
- 분석 결과가 구조화되지 않아 다음 기능으로 자동 연결하기 어렵다.
- 같은 프롬프트를 반복 생성해야 한다.
- 사용자가 어떤 범위의 데이터를 GPT에 보냈는지 추적하기 어렵다.
- AI 응답 품질과 포맷이 매번 흔들릴 수 있다.

---

## 19. AI 프롬프트 루프를 최소화하는 방법

### 단계 1. 프롬프트 통합 패키지

API 없이 바로 개선 가능한 방법이다.

현재 여러 프롬프트를 따로 복사하는 구조를 다음처럼 바꾼다.

```text
분석 대상 선택
  -> "AI 작업 패키지 생성"
      -> 전사/본부 데이터
      -> 약점 문항
      -> 관계 인사이트
      -> 필요한 출력 형식
      -> JSON 스키마
  -> 사용자는 한 번만 GPT에 붙여넣기
  -> 결과 JSON을 한 번만 붙여넣기
  -> 분석/세션/커뮤니케이션 초안 동시 반영
```

권장 출력 스키마:

```json
{
  "executiveSummary": "",
  "riskHypotheses": [],
  "organizationActions": [],
  "leaderMessage": "",
  "sessionDesignBrief": {},
  "communicationDrafts": {},
  "verificationQuestions": []
}
```

효과:

- 복사/붙여넣기를 3~5회에서 1회로 줄임
- 결과를 구조화해서 자동 저장 가능
- 분석 결과가 다음 기능으로 흐름

### 단계 2. GPT 결과 Import Center

현재는 각 화면에 붙여넣는 구조다. 다음 버전에서는 공통 Import Center를 둔다.

```text
AI 결과 붙여넣기
  -> JSON 추출
  -> 스키마 검증
  -> 어떤 필드에 반영될지 미리보기
  -> 사용자가 승인
  -> Pulse analysis / Session brief / Communication / Groups 동시 업데이트
```

### 단계 3. Firebase Cloud Functions + OpenAI API

복사/붙여넣기를 거의 없애는 가장 좋은 구조다.

```text
브라우저
  -> 분석 실행 버튼
  -> Firebase Callable Function 호출
      -> 서버에서 OpenAI API 호출
      -> 구조화된 JSON 응답
      -> Firestore aiRuns/{runId} 저장
  -> 앱이 결과를 읽어 화면에 반영
```

중요:

- OpenAI API 키는 브라우저에 넣지 않는다.
- Firebase Cloud Functions 같은 서버 측 프록시에만 저장한다.
- 요청 데이터는 조직 단위 집계값 위주로 보낸다.
- 개인 단위 원본은 최소화한다.

### 단계 4. AI Run Registry

AI 실행 기록을 별도 구조로 남긴다.

```text
users/{uid}/aiRuns/{runId}
  - taskType: pulse_analysis | session_design | communication | group_recommendation
  - inputScope
  - inputHash
  - promptTemplateId
  - promptVersion
  - model
  - status
  - resultJson
  - createdAt
  - appliedAt
  - appliedTargets
```

이렇게 하면 “어떤 데이터로 어떤 분석을 만들었는지” 추적할 수 있다.

### 단계 5. Prompt Template Registry

프롬프트를 코드에 박아두지 않고 버전 관리한다.

```text
promptTemplates/{templateId}
  - name
  - taskType
  - version
  - systemRole
  - userTemplate
  - outputSchema
  - safetyRules
```

장점:

- 프롬프트 개선을 코드 배포 없이 가능
- 분석 품질 실험 가능
- 같은 데이터에 다른 프롬프트 버전을 비교 가능

### 단계 6. 사람 승인 기반 자동화

완전 자동 적용보다 “AI 제안 → 사용자 승인 → 저장”이 안전하다.

권장 UX:

```text
AI 분석 실행
  -> 제안 결과 생성
  -> 변경 미리보기
  -> 사용자가 선택 적용
      - 분석 저장
      - 조직 추천 업데이트
      - 세션 브리프 생성
      - 커뮤니케이션 초안 생성
      - 타겟그룹 추천 생성
```

---

## 20. 다음 버전에서 추천하는 구조

현재는 `platform.js`, `app.js`, `session-designer.html`에 기능이 크게 들어 있다. 다음 버전에서는 아래처럼 분리하는 것이 좋다.

```text
/data
  pulseRepository
  organizationRepository
  sessionRepository
  communicationRepository

/domain
  pulseAnalyticsEngine
  cultureSignalEngine
  orgStructureEngine
  interventionEngine
  calendarProgressEngine

/ai
  promptTemplateRegistry
  aiRunService
  outputSchemaValidator
  resultApplyService

/ui
  dashboard
  pulseIntelligence
  peopleOrganization
  campaignStudio
  messageCenter
  dataAdmin
```

### 20.1 데이터 모델 재설계 제안

현재 조직 상태는 큰 단일 문서에 저장된다. 운영 규모가 커지면 다음처럼 분리하는 것이 좋다.

```text
organizations/{orgId}
people/{personId}
sessions/{sessionId}
targetGroups/{groupId}
pulseDatasets/{datasetId}
analysisRuns/{runId}
communications/{communicationId}
interventions/{interventionId}
```

장점:

- 부분 업데이트 가능
- 충돌 감소
- 권한 분리 가능
- 특정 조직/일정만 로딩 가능
- 변경 이력 추적 가능

### 20.2 문화 운영 엔진으로 고도화

현재 산식은 좋은 출발점이다. 다음 버전에서는 산식을 별도 엔진으로 분리해야 한다.

```text
cultureSignalEngine(input)
  -> metrics
  -> quadrant
  -> supportNeeded
  -> drivers
  -> recommendedInterventions
```

추천 결과는 단순 문장이 아니라 실행 카드가 되어야 한다.

```json
{
  "interventionType": "leader_briefing",
  "priority": "high",
  "targetOrgIds": [],
  "reason": [],
  "recommendedTimeline": "30 days",
  "successMetric": "Q19 +5p"
}
```

---

## 21. 현재 구조의 강점

1. **Pulse와 조직도를 연결한 점이 매우 강하다.**  
   대부분의 설문 대시보드는 점수만 보여주지만, 이 플랫폼은 조직도 위에 신호를 얹는다.

2. **실행 화면이 이미 있다.**  
   캘린더, 세션 디자이너, 커뮤니케이션 기록, 타겟그룹이 연결되어 있다.

3. **업로드/백업/저장 흐름을 고려했다.**  
   다음 해 데이터 교체, 조직 마스터 업로드, 되돌리기, Firebase 저장이 있다.

4. **AI를 무리하게 붙이지 않고 수동 루프로 시작했다.**  
   프로토타입에서는 안전하고 빠른 접근이다.

5. **제품 철학이 분명하다.**  
   조직문화 관리가 “보고서”가 아니라 “운영 체계”가 되어야 한다는 방향이 잘 드러난다.

---

## 22. 현재 구조의 약점과 리스크

### 22.1 코드 구조

- `platform.js`와 `app.js`가 매우 크고 전역 상태가 많다.
- 렌더링과 저장이 강하게 결합되어 있다. `render()`가 항상 `persist()`를 호출한다.
- 향후 기능이 늘면 유지보수 난이도가 급격히 올라갈 수 있다.

### 22.2 데이터 구조

- 조직/구성원/세션/그룹이 단일 문서에 통째로 저장된다.
- 사람 사진이 base64로 localStorage에 들어가면 용량 문제가 생길 수 있다.
- 구성원 데이터는 개인정보 성격이 있으므로 접근권한, 익명화, 데이터 최소화 정책이 필요하다.

### 22.3 AI 구조

- GPT 결과가 대부분 자유 텍스트라 자동 재사용이 어렵다.
- 프롬프트/결과 버전 추적이 없다.
- 분석 결과가 조직 추천, 세션, 커뮤니케이션으로 자동 적용되지 않는다.

### 22.4 운영 구조

- 세션 완료는 날짜 기준 자동 판정이지만 실제 수행 여부/참여율/피드백은 아직 없다.
- You said-We did 실행 추적이 아직 본격 기능으로 없다.
- 개입 효과가 다음 Pulse와 연결되는 검증 루프가 부족하다.

---

## 23. 다음 고도화 우선순위

### 1순위. AI 결과 구조화

복사/붙여넣기를 줄이기 전에, 먼저 결과를 JSON으로 구조화해야 한다.

```text
자유 텍스트 저장 -> 구조화 결과 저장
```

### 2순위. Intervention Tracker

진단 결과가 실제 실행으로 이어지는지 추적해야 한다.

```text
위험 신호
  -> 추천 개입
  -> 담당자
  -> 일정
  -> 완료
  -> 구성원 피드백
  -> 다음 Pulse 변화
```

### 3순위. You Said-We Did

Q19 서베이 조치 신뢰가 핵심 리스크이므로, 사용자가 본 피드백과 회사의 조치가 닫히는 구조가 필요하다.

### 4순위. AI 내부 실행

Firebase Cloud Functions + OpenAI API로 프롬프트 복사/붙여넣기를 줄인다.

### 5순위. 데이터 모델 분리

단일 거대 state에서 엔터티별 저장으로 바꾼다.

---

## 24. 최종 결론

현재 Lina Culture Platform은 이미 다음 제품 뼈대를 갖고 있다.

```text
Pulse Survey Dashboard
  -> Organization Signal Map
  -> Targeting
  -> Session Design
  -> Communication
  -> Execution Calendar
  -> Data/Firebase Management
```

다음 버전의 핵심은 화면을 더 추가하는 것이 아니라, 아래 3가지를 구조화하는 것이다.

1. **Culture Signal Engine**  
   Pulse와 조직 데이터를 문화 지표, 리스크, 추천 개입으로 변환하는 독립 엔진

2. **AI Run Engine**  
   프롬프트 생성/실행/결과 저장/적용을 한 번의 흐름으로 처리하는 엔진

3. **Intervention Operating System**  
   진단을 실제 세션, 커뮤니케이션, 리더 액션, You said-We did, 다음 Pulse 검증으로 연결하는 운영 시스템

이 관점에서 보면, 이 플랫폼의 다음 단계는 “더 예쁜 대시보드”가 아니라 **조직문화 운영체계**로 재설계하는 것이다.

