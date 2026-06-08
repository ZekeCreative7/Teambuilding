const STORAGE_KEY = "culture-platform-organization-v4";

const seedUnits = window.LINA_ORG_UNITS || [
  {
    id: "company",
    name: "전사",
    level: "company",
    leader: "CEO",
    parentId: null,
    members: 1280,
    readiness: 66,
    trust: 63,
    fatigue: 48,
    engagement: 72,
    risk: "medium",
    ambassadors: 18,
    tags: ["변화 인식 상승", "공식 메시지 관심 높음"],
    recommendation: "전사 메시지는 변화 필요성보다 회사가 제공할 지원과 팀별 실행 여지를 먼저 보여주는 흐름이 적합합니다.",
  },
  {
    id: "growth-division",
    name: "성장전략부문",
    level: "division",
    leader: "박서준",
    parentId: "company",
    members: 420,
    readiness: 74,
    trust: 68,
    fatigue: 44,
    engagement: 78,
    risk: "low",
    ambassadors: 9,
    tags: ["확산 중심", "앰버서더 기반 강함"],
    recommendation: "전사 캠페인 파일럿을 먼저 맡기고, 후기와 실무 적용 사례를 다른 부문으로 확산시키기 좋습니다.",
  },
  {
    id: "product-division",
    name: "제품기술부문",
    level: "division",
    leader: "이하린",
    parentId: "company",
    members: 510,
    readiness: 58,
    trust: 54,
    fatigue: 69,
    engagement: 61,
    risk: "high",
    ambassadors: 5,
    tags: ["피로도 높음", "지원 필요"],
    recommendation: "추가 과제처럼 들리는 메시지를 피하고, 회복 경험과 업무 부담 완화를 먼저 설계해야 합니다.",
  },
  {
    id: "operations-division",
    name: "경영지원부문",
    level: "division",
    leader: "정민재",
    parentId: "company",
    members: 350,
    readiness: 62,
    trust: 60,
    fatigue: 52,
    engagement: 65,
    risk: "medium",
    ambassadors: 4,
    tags: ["리더 메시지 정교화 필요"],
    recommendation: "리더 브리핑을 같은 문구로 배포하기보다 조직별 우려와 실무 언어에 맞춰 조정해야 합니다.",
  },
  {
    id: "brand-hq",
    name: "브랜드커뮤니케이션본부",
    level: "hq",
    leader: "최유진",
    parentId: "growth-division",
    members: 170,
    readiness: 78,
    trust: 72,
    fatigue: 38,
    engagement: 84,
    risk: "low",
    ambassadors: 5,
    tags: ["연결자 많음", "확산 중심"],
    recommendation: "타운홀 이후 메시지 확산과 사내 캠페인 스토리텔링의 공동 제작자로 활용하기 좋습니다.",
  },
  {
    id: "customer-hq",
    name: "고객경험본부",
    level: "hq",
    leader: "강태오",
    parentId: "growth-division",
    members: 250,
    readiness: 70,
    trust: 64,
    fatigue: 50,
    engagement: 72,
    risk: "medium",
    ambassadors: 4,
    tags: ["현장 반응 풍부", "타운홀 후속 필요"],
    recommendation: "현장 질문을 먼저 수집하고, 공식 메시지보다 사례 기반 세션으로 연결하는 편이 좋습니다.",
  },
  {
    id: "platform-hq",
    name: "플랫폼개발본부",
    level: "hq",
    leader: "한지우",
    parentId: "product-division",
    members: 290,
    readiness: 55,
    trust: 51,
    fatigue: 74,
    engagement: 58,
    risk: "high",
    ambassadors: 3,
    tags: ["피로도 높음", "고립 신호", "지원 필요"],
    recommendation: "문화 캠페인보다 리더 커뮤니케이션과 업무 우선순위 정리 세션이 먼저 필요합니다.",
  },
  {
    id: "data-hq",
    name: "데이터경험본부",
    level: "hq",
    leader: "윤채원",
    parentId: "product-division",
    members: 220,
    readiness: 63,
    trust: 59,
    fatigue: 63,
    engagement: 66,
    risk: "medium",
    ambassadors: 2,
    tags: ["공정성 이슈", "분석 기반 설득 선호"],
    recommendation: "감성 메시지보다 데이터와 의사결정 기준을 투명하게 설명하는 메시지 톤이 적합합니다.",
  },
  {
    id: "people-hq",
    name: "People & Culture 본부",
    level: "hq",
    leader: "서지안",
    parentId: "operations-division",
    members: 150,
    readiness: 73,
    trust: 70,
    fatigue: 46,
    engagement: 76,
    risk: "low",
    ambassadors: 3,
    tags: ["운영 허브", "리더 지원"],
    recommendation: "세션 빌더, 메시지 리스크 리뷰, 앰버서더 운영을 연결하는 내부 운영 허브 역할이 좋습니다.",
  },
  {
    id: "finance-hq",
    name: "재무관리본부",
    level: "hq",
    leader: "문도현",
    parentId: "operations-division",
    members: 200,
    readiness: 51,
    trust: 55,
    fatigue: 58,
    engagement: 57,
    risk: "medium",
    ambassadors: 1,
    tags: ["변화 수용 낮음", "공식 근거 선호"],
    recommendation: "변화 철학보다 업무 효율, 의사결정 품질, 리스크 감소와 연결해 설명해야 합니다.",
  },
  {
    id: "brand-campaign-team",
    name: "브랜드캠페인팀",
    level: "team",
    leader: "김도윤",
    parentId: "brand-hq",
    members: 42,
    readiness: 82,
    trust: 76,
    fatigue: 34,
    engagement: 88,
    risk: "low",
    ambassadors: 3,
    tags: ["앰버서더 후보", "확산 중심", "연결자"],
    recommendation: "변화 스토리를 사내 콘텐츠로 번역하고, 직원 후기 확산을 설계할 수 있습니다.",
  },
  {
    id: "internal-comms-team",
    name: "사내커뮤니케이션팀",
    level: "team",
    leader: "오수빈",
    parentId: "brand-hq",
    members: 36,
    readiness: 76,
    trust: 73,
    fatigue: 40,
    engagement: 83,
    risk: "low",
    ambassadors: 2,
    tags: ["메시지 리스크 리뷰", "연결자"],
    recommendation: "CEO 메시지와 타운홀 스크립트의 예상 질문, 반발 포인트를 사전 점검하는 중심 팀으로 둘 수 있습니다.",
  },
  {
    id: "cx-insight-team",
    name: "CX 인사이트팀",
    level: "team",
    leader: "장하늘",
    parentId: "customer-hq",
    members: 58,
    readiness: 71,
    trust: 64,
    fatigue: 49,
    engagement: 75,
    risk: "medium",
    ambassadors: 2,
    tags: ["현장 반응 풍부", "타운홀 후속 필요"],
    recommendation: "현장 질문과 자유 의견을 분석해 캠페인 메시지의 실제 수용도를 확인하기 좋습니다.",
  },
  {
    id: "service-operation-team",
    name: "서비스운영팀",
    level: "team",
    leader: "남기훈",
    parentId: "customer-hq",
    members: 88,
    readiness: 64,
    trust: 58,
    fatigue: 62,
    engagement: 64,
    risk: "medium",
    ambassadors: 1,
    tags: ["웰니스 참여 높음", "신뢰 낮음"],
    recommendation: "웰니스 참여는 높지만 조직 신뢰가 낮아, 프로그램 이후 리더의 구체적 후속 액션이 중요합니다.",
  },
  {
    id: "ai-workplace-team",
    name: "AI Workplace 팀",
    level: "team",
    leader: "백이준",
    parentId: "platform-hq",
    members: 74,
    readiness: 61,
    trust: 50,
    fatigue: 78,
    engagement: 59,
    risk: "high",
    ambassadors: 2,
    tags: ["피로도 높음", "영향력자 존재", "지원 필요"],
    recommendation: "팀장용 브리핑과 업무 우선순위 조정 메시지를 먼저 주고, 변화 활동은 짧은 파일럿으로 시작해야 합니다.",
  },
  {
    id: "core-platform-team",
    name: "코어플랫폼팀",
    level: "team",
    leader: "문서연",
    parentId: "platform-hq",
    members: 92,
    readiness: 49,
    trust: 47,
    fatigue: 81,
    engagement: 52,
    risk: "high",
    ambassadors: 0,
    tags: ["고립 신호", "피로도 높음", "공정성 이슈"],
    recommendation: "평가가 아니라 지원이라는 프레임이 필요하며, 메시지보다 리더 1:1 지원과 부담 완화가 먼저입니다.",
  },
  {
    id: "data-strategy-team",
    name: "데이터전략팀",
    level: "team",
    leader: "배소율",
    parentId: "data-hq",
    members: 54,
    readiness: 67,
    trust: 61,
    fatigue: 60,
    engagement: 69,
    risk: "medium",
    ambassadors: 1,
    tags: ["분석 기반 설득 선호", "연결자"],
    recommendation: "서베이와 상담 데이터를 연결해 리더십 이슈와 캠페인 효과를 구분해 보여주기 좋습니다.",
  },
  {
    id: "culture-design-team",
    name: "Culture Design 팀",
    level: "team",
    leader: "차예린",
    parentId: "people-hq",
    members: 34,
    readiness: 86,
    trust: 78,
    fatigue: 41,
    engagement: 89,
    risk: "low",
    ambassadors: 2,
    tags: ["운영 허브", "앰버서더 후보"],
    recommendation: "목적 기반 그룹과 캠페인 여정 맵을 설계하는 중심 운영 팀으로 둘 수 있습니다.",
  },
  {
    id: "wellness-lab-team",
    name: "Wellness Lab",
    level: "team",
    leader: "홍다인",
    parentId: "people-hq",
    members: 28,
    readiness: 80,
    trust: 74,
    fatigue: 35,
    engagement: 86,
    risk: "low",
    ambassadors: 1,
    tags: ["웰니스 참여 높음", "회복 경험"],
    recommendation: "회복 경험을 먼저 제공하고, 그 다음 경영진 변화 철학을 자연스럽게 연결하는 실험을 맡기기 좋습니다.",
  },
  {
    id: "financial-planning-team",
    name: "재무기획팀",
    level: "team",
    leader: "권태민",
    parentId: "finance-hq",
    members: 64,
    readiness: 47,
    trust: 52,
    fatigue: 66,
    engagement: 49,
    risk: "medium",
    ambassadors: 0,
    tags: ["변화 수용 낮음", "공식 근거 선호"],
    recommendation: "캠페인 참여를 요구하기보다 왜 지금 필요한지, 무엇을 줄이고 무엇을 지원할지 분리해서 설명해야 합니다.",
  },
];

const seedPeople = window.LINA_ORG_PEOPLE || [
  { id: "p01", name: "김도윤", role: "브랜드캠페인팀 팀장", position: "팀장", generation: "40대", unitId: "brand-campaign-team", influence: 84, readiness: 88, tags: ["앰버서더 후보", "연결자"] },
  { id: "p02", name: "송리아", role: "콘텐츠 매니저", position: "실무자", generation: "30대", unitId: "brand-campaign-team", influence: 76, readiness: 92, tags: ["조용한 지지자", "앰버서더 후보"] },
  { id: "p03", name: "오수빈", role: "사내커뮤니케이션팀 팀장", position: "팀장", generation: "40대", unitId: "internal-comms-team", influence: 82, readiness: 79, tags: ["메시지 리스크 리뷰", "연결자"] },
  { id: "p04", name: "임태경", role: "커뮤니케이션 파트너", position: "실무자", generation: "30대", unitId: "internal-comms-team", influence: 69, readiness: 75, tags: ["연결자"] },
  { id: "p05", name: "장하늘", role: "CX 인사이트팀 팀장", position: "팀장", generation: "40대", unitId: "cx-insight-team", influence: 72, readiness: 74, tags: ["현장 반응 풍부"] },
  { id: "p06", name: "이주원", role: "리서치 리드", position: "실무자", generation: "30대", unitId: "cx-insight-team", influence: 71, readiness: 80, tags: ["앰버서더 후보"] },
  { id: "p07", name: "남기훈", role: "서비스운영팀 팀장", position: "팀장", generation: "40대", unitId: "service-operation-team", influence: 78, readiness: 61, tags: ["지원 필요", "현장 영향력"] },
  { id: "p08", name: "고서희", role: "운영 코디네이터", position: "실무자", generation: "30대", unitId: "service-operation-team", influence: 64, readiness: 72, tags: ["웰니스 참여 높음"] },
  { id: "p09", name: "백이준", role: "AI Workplace 팀장", position: "팀장", generation: "40대", unitId: "ai-workplace-team", influence: 88, readiness: 64, tags: ["영향력자", "지원 필요"] },
  { id: "p10", name: "노아람", role: "프로덕트 엔지니어", position: "실무자", generation: "30대", unitId: "ai-workplace-team", influence: 74, readiness: 79, tags: ["앰버서더 후보", "조용한 지지자"] },
  { id: "p11", name: "문서연", role: "코어플랫폼팀 팀장", position: "팀장", generation: "40대", unitId: "core-platform-team", influence: 83, readiness: 48, tags: ["지원 필요", "공정성 이슈"] },
  { id: "p12", name: "유현준", role: "시니어 엔지니어", position: "실무자", generation: "30대", unitId: "core-platform-team", influence: 79, readiness: 44, tags: ["고립 신호"] },
  { id: "p13", name: "배소율", role: "데이터전략팀 팀장", position: "팀장", generation: "40대", unitId: "data-strategy-team", influence: 73, readiness: 68, tags: ["연결자"] },
  { id: "p14", name: "정해나", role: "데이터 애널리스트", position: "실무자", generation: "30대", unitId: "data-strategy-team", influence: 66, readiness: 77, tags: ["분석 기반 설득 선호"] },
  { id: "p15", name: "차예린", role: "Culture Design 팀장", position: "팀장", generation: "40대", unitId: "culture-design-team", influence: 81, readiness: 91, tags: ["앰버서더 후보", "운영 허브"] },
  { id: "p16", name: "민가온", role: "세션 디자이너", position: "실무자", generation: "30대", unitId: "culture-design-team", influence: 70, readiness: 87, tags: ["조용한 지지자"] },
  { id: "p17", name: "홍다인", role: "Wellness Lab 리드", position: "팀장", generation: "30대", unitId: "wellness-lab-team", influence: 77, readiness: 84, tags: ["앰버서더 후보", "회복 경험"] },
  { id: "p18", name: "강유나", role: "웰니스 프로그램 매니저", position: "실무자", generation: "30대", unitId: "wellness-lab-team", influence: 68, readiness: 82, tags: ["웰니스 참여 높음"] },
  { id: "p19", name: "권태민", role: "재무기획팀 팀장", position: "팀장", generation: "40대", unitId: "financial-planning-team", influence: 75, readiness: 45, tags: ["지원 필요", "공식 근거 선호"] },
  { id: "p20", name: "윤세아", role: "재무 분석가", position: "실무자", generation: "30대", unitId: "financial-planning-team", influence: 56, readiness: 52, tags: ["공식 근거 선호"] },
];

const seedGroups = [
  {
    id: "g-ambassador-core",
    name: "전사 캠페인 확산 앰버서더 후보군",
    description: "변화 수용성과 영향력이 높은 구성원을 중심으로 전사 캠페인 파일럿과 후기 확산을 맡길 수 있는 그룹입니다.",
    criteria: "변화 수용도 75 이상, 영향력 65 이상, 앰버서더 후보 또는 연결자 태그",
    memberIds: ["p01", "p02", "p03", "p06", "p10", "p15", "p17"],
    unitIds: ["brand-campaign-team", "internal-comms-team", "cx-insight-team", "ai-workplace-team", "culture-design-team", "wellness-lab-team"],
    recommendation: "공식 메시지 전달자처럼 보이지 않도록, 좋은 경험을 먼저 해본 사람들의 자발적 공유 구조로 설계하세요.",
  },
  {
    id: "g-leader-support",
    name: "피로도 높은 영향력 리더 지원 그룹",
    description: "피로도는 높지만 팀 내 영향력이 큰 리더를 묶어 리더 브리핑과 1:1 지원을 우선 제공하는 그룹입니다.",
    criteria: "팀장, 영향력 75 이상, 소속 조직 피로도 60 이상",
    memberIds: ["p07", "p09", "p11", "p19"],
    unitIds: ["service-operation-team", "ai-workplace-team", "core-platform-team", "financial-planning-team"],
    recommendation: "감시나 평가처럼 보이지 않게 Leadership Enablement 관점으로 운영하고, 팀장에게 바로 쓸 수 있는 문장을 제공하세요.",
  },
];

const seedSessions = [
  {
    id: "session-wow-brand",
    date: "2026-06-10",
    startTime: "10:00",
    sessionName: "WOW x BALANCE 리더 킥오프",
    teamId: "brand-campaign-team",
    teamName: "브랜드캠페인팀",
    participants: 18,
  },
  {
    id: "session-wow-service",
    date: "2026-06-12",
    startTime: "14:00",
    sessionName: "WOW x BALANCE 회복 워크숍",
    teamId: "service-operation-team",
    teamName: "서비스운영팀",
    participants: 24,
  },
  {
    id: "session-wow-platform",
    date: "2026-06-17",
    startTime: "09:30",
    sessionName: "WOW x BALANCE 팀 리셋",
    teamId: "ai-workplace-team",
    teamName: "AI Workplace 팀",
    participants: 16,
  },
];

const groupTemplates = [
  {
    id: "ready-practitioners",
    name: "변화 수용성이 높은 30·40대 실무자",
    description: "초기 반응과 확산 가능성이 높은 실무자 그룹입니다.",
    build: () => buildGroupFromPeople({
      name: "변화 수용성이 높은 30·40대 실무자",
      description: "변화 수용성이 높고 현장 언어로 동료에게 설명할 수 있는 실무자 그룹입니다.",
      criteria: "실무자, 30대 또는 40대, 변화 수용도 75 이상",
      peopleFilter: (person) => person.position === "실무자" && ["30대", "40대"].includes(person.generation) && person.readiness >= 75,
      recommendation: "세션 파일럿, 후기 수집, 동료 관점 FAQ 제작에 먼저 참여시키기 좋습니다.",
    }),
  },
  {
    id: "fatigue-leaders",
    name: "피로도가 높지만 영향력이 큰 팀장",
    description: "반발 관리가 아니라 지원 우선순위를 잡기 위한 리더 그룹입니다.",
    build: () => buildGroupFromPeople({
      name: "피로도가 높지만 영향력이 큰 팀장",
      description: "피로도가 높은 조직을 이끄는 영향력 있는 리더에게 리더 브리핑과 지원을 먼저 제공합니다.",
      criteria: "팀장, 영향력 75 이상, 소속 조직 피로도 60 이상",
      peopleFilter: (person) => person.position === "팀장" && person.influence >= 75 && getUnit(person.unitId)?.fatigue >= 60,
      recommendation: "리더에게 같은 문구를 배포하기보다 팀 상황에 맞춘 말하기 가이드를 제공합니다.",
    }),
  },
  {
    id: "fairness-leaders",
    name: "공정성 불만 조직의 리더 그룹",
    description: "공정성 이슈가 있는 조직에는 협업 캠페인보다 리더 커뮤니케이션 개입이 먼저입니다.",
    build: () => buildGroupFromPeople({
      name: "공정성 불만 조직의 리더 그룹",
      description: "공정성 신호가 있는 조직의 리더를 묶어 메시지와 운영 기준을 먼저 정렬합니다.",
      criteria: "팀장, 소속 조직에 공정성 이슈 태그",
      peopleFilter: (person) => person.position === "팀장" && hasUnitTag(person.unitId, "공정성 이슈"),
      recommendation: "회사 책임과 개인 변화를 분리해서 말하고, 의사결정 기준을 투명하게 제시해야 합니다.",
    }),
  },
  {
    id: "wellness-low-trust",
    name: "웰니스 참여 높고 신뢰 낮은 조직",
    description: "활동 참여는 높지만 신뢰가 낮아 후속 메시지와 리더 액션이 필요한 조직입니다.",
    build: () => buildGroupFromUnits({
      name: "웰니스 참여 높고 신뢰 낮은 조직",
      description: "웰니스로 유입은 가능하지만 조직 신뢰가 낮아, 활동 이후 구체적 지원이 필요한 조직입니다.",
      criteria: "웰니스 참여 높음 태그, 신뢰 60 미만",
      unitFilter: (unit) => unit.tags.includes("웰니스 참여 높음") && unit.trust < 60,
      recommendation: "회복 경험을 먼저 제공하고, 그 다음 회사가 할 수 있는 것과 없는 것을 솔직히 분리해 말하세요.",
    }),
  },
  {
    id: "townhall-followup",
    name: "타운홀 이후 Follow-up 필요 본부",
    description: "공식 메시지 이후 질문, 냉소, 추가 설명 니즈가 생길 가능성이 있는 조직입니다.",
    build: () => buildGroupFromUnits({
      name: "타운홀 이후 Follow-up 필요 본부",
      description: "타운홀 이후 질문과 현장 반응을 수집하고, 조직별 후속 세션을 설계할 대상입니다.",
      criteria: "타운홀 후속 필요 태그 또는 신뢰 60 미만 본부",
      unitFilter: (unit) => unit.tags.includes("타운홀 후속 필요") || (unit.level === "hq" && unit.trust < 60),
      recommendation: "일괄 공지보다 조직별 예상 질문과 리더 브리핑을 먼저 준비하세요.",
    }),
  },
];

const leaderTitleOptions = ["이사", "상무", "전무", "부사장", "사장", "대표이사"];
const leaderRoleOptions = ["대표이사", "부문장", "본부장", "실장", "센터장", "그룹장", "팀장", "파트장", "챕터리드"];
const personTitleOptions = ["사장", "부사장", "전무", "상무", "이사", "부장", "차장", "과장", "대리", "사원"];
const personTitleSortOrder = ["전무", "상무", "이사", "부장", "차장", "과장", "대리", "사원"];
const ORG_CLOUD_DOC_ID = "default";
const ORG_CLOUD_WRITER = `org_${Math.random().toString(36).slice(2)}_${Date.now()}`;

let state = loadState();
let activeDragPayload = null;
let pointerDrag = null;
let suppressNextClick = false;
let pendingUnitPhotoId = null;
let pendingPersonPhotoId = null;
let mobileDetailReturnContext = null;
let organizationCloud = {
  db: null,
  uid: null,
  saveTimer: null,
  loading: false,
  status: "로컬 저장",
  lastLocalWrite: 0,
  suppressPersist: false,
};

function defaultFilters() {
  return { sessionDone: false, sessionNone: false, healthy: false, watch: false, support: false, review: false };
}

function defaultOrganizationState() {
  return {
    units: clone(seedUnits),
    people: clone(seedPeople),
    groups: clone(seedGroups),
    sessions: clone(seedSessions),
    wowQuantRows: [],
    wowTextRows: [],
    wowInterimRows: [],
    sessionAnalysisResults: {},
    selectedUnitId: getDefaultSelectedUnitId(),
    view: "official",
    orgLayout: "horizontal",
    orgZoom: 0.68,
    networkLevel: "team",
    calendarView: "month",
    selectedCalendarDate: todayIso(),
    sessionView: "execution",
    selectedSessionAnalysisTeamId: "",
    expandedUnitIds: getDefaultExpandedIds(),
    openCardIds: [],
    detailOpen: false,
    detailModal: null,
    search: "",
    filters: defaultFilters(),
  };
}

function sanitizeOrganizationUnits(rawUnits = []) {
  const seenIds = new Set();
  const units = rawUnits
    .filter((unit) => unit && unit.id)
    .filter((unit) => {
      if (seenIds.has(unit.id)) return false;
      seenIds.add(unit.id);
      return true;
    })
    .map((unit) => ({
      ...unit,
      parentId: unit.parentId || "",
      tags: Array.isArray(unit.tags) ? unit.tags : [],
    }));

  if (!units.length) return clone(seedUnits);

  const byId = new Map(units.map((unit) => [unit.id, unit]));
  const root = units.find((unit) => unit.level === "company") || units.find((unit) => !unit.parentId) || units[0];
  root.parentId = "";

  const fallbackParentId = (unit) => (unit.id === root.id || unit.level === "company" ? "" : root.id);
  const parentChainHasCycle = (unit) => {
    const seen = new Set([unit.id]);
    let parentId = unit.parentId;
    while (parentId) {
      if (seen.has(parentId)) return true;
      seen.add(parentId);
      const parent = byId.get(parentId);
      if (!parent) return false;
      parentId = parent.parentId;
    }
    return false;
  };

  units.forEach((unit) => {
    if (unit.id === root.id) {
      unit.parentId = "";
      return;
    }
    if (!unit.parentId || unit.parentId === unit.id || !byId.has(unit.parentId) || parentChainHasCycle(unit)) {
      unit.parentId = fallbackParentId(unit);
    }
  });

  return units;
}

function normalizeOrganizationState(parsed = {}) {
  const base = defaultOrganizationState();
  const units = sanitizeOrganizationUnits(Array.isArray(parsed.units) && parsed.units.length ? parsed.units : base.units);
  const unitIds = new Set(units.map((unit) => unit.id));
  const rootId = units.find((unit) => !unit.parentId)?.id || getDefaultSelectedUnitId();
  return {
    ...base,
    units,
    people: Array.isArray(parsed.people) ? parsed.people : base.people,
    groups: Array.isArray(parsed.groups) ? parsed.groups : base.groups,
    sessions: Array.isArray(parsed.sessions) ? parsed.sessions : base.sessions,
    wowQuantRows: Array.isArray(parsed.wowQuantRows) ? parsed.wowQuantRows : base.wowQuantRows,
    wowTextRows: Array.isArray(parsed.wowTextRows) ? parsed.wowTextRows : base.wowTextRows,
    wowInterimRows: Array.isArray(parsed.wowInterimRows) ? parsed.wowInterimRows : base.wowInterimRows,
    sessionAnalysisResults: parsed.sessionAnalysisResults && typeof parsed.sessionAnalysisResults === "object" ? parsed.sessionAnalysisResults : base.sessionAnalysisResults,
    selectedUnitId: unitIds.has(parsed.selectedUnitId) ? parsed.selectedUnitId : rootId,
    view: "official",
    orgLayout: parsed.orgLayout || base.orgLayout,
    orgZoom: parsed.orgZoom || base.orgZoom,
    networkLevel: parsed.networkLevel || base.networkLevel,
    calendarView: parsed.calendarView || base.calendarView,
    selectedCalendarDate: parsed.selectedCalendarDate || base.selectedCalendarDate,
    sessionView: ["execution", "calendar", "dashboard"].includes(parsed.sessionView) ? parsed.sessionView : base.sessionView,
    selectedSessionAnalysisTeamId: typeof parsed.selectedSessionAnalysisTeamId === "string" ? parsed.selectedSessionAnalysisTeamId : base.selectedSessionAnalysisTeamId,
    expandedUnitIds: Array.isArray(parsed.expandedUnitIds) ? parsed.expandedUnitIds : base.expandedUnitIds,
    openCardIds: Array.isArray(parsed.openCardIds) ? parsed.openCardIds : base.openCardIds,
    detailOpen: false,
    detailModal: null,
    search: parsed.search || "",
    filters: { ...defaultFilters(), ...(parsed.filters || {}) },
  };
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      return normalizeOrganizationState(JSON.parse(saved));
    } catch (error) {
      // 저장된 데이터를 못 읽었을 때(파싱/정규화 실패), 시드로 되돌려 그걸 덮어쓰면 사용자가 입력한
      // 데이터가 영구 소실된다. 그래서 시드를 쓰기 전에 원본 문자열을 복구용 키에 그대로 보존한다.
      console.error("저장된 조직 데이터를 불러오지 못했습니다. 원본을 복구용 키에 보존합니다.", error);
      try {
        localStorage.setItem(`${STORAGE_KEY}.corrupt.${Date.now()}`, saved);
      } catch (backupError) {
        console.warn("원본 보존에도 실패했습니다(용량 등).", backupError);
      }
    }
  }

  return defaultOrganizationState();
}

function organizationSnapshot() {
  return {
    schemaVersion: 6,
    units: state.units,
    people: state.people,
    groups: state.groups,
    sessions: state.sessions,
    wowQuantRows: state.wowQuantRows || [],
    wowTextRows: state.wowTextRows || [],
    wowInterimRows: state.wowInterimRows || [],
    sessionAnalysisResults: state.sessionAnalysisResults || {},
    selectedUnitId: state.selectedUnitId,
    view: "official",
    orgLayout: state.orgLayout,
    orgZoom: state.orgZoom,
    networkLevel: state.networkLevel,
    calendarView: state.calendarView,
    selectedCalendarDate: state.selectedCalendarDate,
    sessionView: state.sessionView || "execution",
    selectedSessionAnalysisTeamId: state.selectedSessionAnalysisTeamId || "",
    expandedUnitIds: state.expandedUnitIds,
    openCardIds: state.openCardIds,
    search: state.search,
    filters: state.filters,
  };
}

function notifyOrganization(message) {
  if (typeof window.toast === "function") window.toast(message);
  else console.log(message);
}

function organizationCloudStatusMeta(message = organizationCloud.status) {
  if (message.includes("저장 완료")) {
    return {
      state: "saved",
      title: "조직 데이터: Firebase 저장 완료",
      detail: `${message} · 모바일에서 같은 계정으로 새로고침하면 변경 내용이 보입니다.`,
    };
  }
  if (message.includes("불러옴")) {
    return {
      state: "loaded",
      title: "조직 데이터: Firebase 불러옴",
      detail: `${message} · 클라우드 기준 데이터로 화면을 열었습니다.`,
    };
  }
  if (message.includes("실패")) {
    return {
      state: "error",
      title: "조직 데이터: Firebase 동기화 실패",
      detail: `${message} · 지금 변경 내용은 이 브라우저에만 남아 있습니다.`,
    };
  }
  if (message.includes("불러오는 중") || message.includes("준비")) {
    return {
      state: "pending",
      title: "조직 데이터: Firebase 확인 중",
      detail: `${message} · 잠시 후 저장 상태를 다시 확인하세요.`,
    };
  }
  return {
    state: "local",
    title: "조직 데이터: 로컬 저장",
    detail: `${message} · Firebase 저장 전에는 이 PC 브라우저에만 변경 내용이 보입니다.`,
  };
}

function refreshOrganizationCloudStatusUi() {
  const meta = organizationCloudStatusMeta();
  document.querySelectorAll("#orgSyncStatus").forEach((el) => {
    el.textContent = organizationCloud.status;
  });
  const banner = document.getElementById("orgSyncBanner");
  if (banner) {
    banner.dataset.state = meta.state;
    const title = document.getElementById("orgSyncTitle");
    const detail = document.getElementById("orgSyncDetail");
    if (title) title.textContent = meta.title;
    if (detail) detail.textContent = meta.detail;
  }
}

function setOrganizationCloudStatus(message) {
  organizationCloud.status = message;
  refreshOrganizationCloudStatusUi();
}

function organizationCloudErrorReason(error) {
  const rawCode = (error && error.code ? String(error.code) : "").replace(/^firestore\//, "");
  const message = error && error.message ? String(error.message) : "";
  if (rawCode.includes("permission-denied")) {
    return "권한 없음(permission-denied): 승인 계정 또는 Firestore rules 배포를 확인하세요";
  }
  if (rawCode.includes("unauthenticated")) {
    return "로그인 확인 필요(unauthenticated): 다시 로그인한 뒤 저장하세요";
  }
  if (rawCode.includes("unavailable")) {
    return "네트워크 연결 실패(unavailable): 인터넷 연결 또는 Firebase 접속 상태를 확인하세요";
  }
  if (rawCode.includes("not-found")) {
    return "Firebase 문서 경로 확인 필요(not-found)";
  }
  if (rawCode) return `${rawCode}: ${message || "Firebase 호출 실패"}`;
  return message || "Firebase 호출 실패";
}

function setOrganizationCloudError(action, error) {
  const reason = organizationCloudErrorReason(error);
  setOrganizationCloudStatus(`Firebase ${action} 실패 · ${reason}`);
}

function formatOrgSyncTime(value) {
  if (!value) return "시간 없음";
  const date = value.toDate ? value.toDate() : new Date(value);
  return Number.isNaN(date.getTime()) ? "시간 없음" : date.toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" });
}

function organizationCloudRef() {
  if (!organizationCloud.db || !organizationCloud.uid) return null;
  return organizationCloud.db
    .collection("userStates")
    .doc(organizationCloud.uid);
}

async function saveOrganizationCloudNow() {
  const ref = organizationCloudRef();
  if (!ref) {
    setOrganizationCloudStatus("로컬 저장 · Firebase 연결 없음");
    return false;
  }
  window.clearTimeout(organizationCloud.saveTimer);
  const stamp = Date.now();
  organizationCloud.lastLocalWrite = stamp;
  // 순환 참조를 제거한 순수 데이터만 Firestore로 보낸다 (없으면 그대로 통과).
  const payload = safeForCloud(organizationSnapshot());
  if (safeForCloud.lastDropped) {
    console.warn(
      `조직 상태에 순환 참조 ${safeForCloud.lastDropped}건이 있어 Firebase 저장 전에 제거했습니다. 문제 필드:`,
      circularFields(organizationSnapshot()),
    );
  }
  await ref.set(
    {
      state: payload,
      updatedAt: stamp,
      updatedAtIso: new Date(stamp).toISOString(),
      writer: ORG_CLOUD_WRITER,
    },
    { merge: true },
  );
  setOrganizationCloudStatus(`Firebase 저장 완료 · ${new Date(stamp).toLocaleTimeString("ko-KR", { hour: "2-digit", minute: "2-digit" })}`);
  return true;
}

function scheduleOrganizationCloudSave() {
  if (organizationCloud.loading || !organizationCloudRef()) return;
  window.clearTimeout(organizationCloud.saveTimer);
  organizationCloud.saveTimer = window.setTimeout(() => {
    saveOrganizationCloudNow().catch((error) => {
      console.warn("Could not sync organization data.", error);
      setOrganizationCloudError("저장", error);
    });
  }, 900);
}

async function connectOrganizationCloud(db, uid) {
  organizationCloud.db = db || null;
  organizationCloud.uid = uid || null;
  window.clearTimeout(organizationCloud.saveTimer);
  if (!db || !uid) {
    setOrganizationCloudStatus("로컬 저장");
    return;
  }
  const ref = organizationCloudRef();
  if (!ref) return;
  organizationCloud.loading = true;
  setOrganizationCloudStatus("Firebase 불러오는 중");
  try {
    const snap = await ref.get();
    if (snap.exists && snap.data()?.state) {
      const cloudState = normalizeOrganizationState(snap.data().state);
      // 낡은(또는 시드) 클라우드가 더 풍부한 로컬 데이터를 덮어써 작업물이 사라지는 것을 막는다.
      // 로컬의 조직+인원+세션 수가 더 많으면, 클라우드를 불러오지 않고 로컬을 클라우드로 올린다.
      const countOf = (s) => (s?.units?.length || 0) + (s?.people?.length || 0) + (s?.sessions?.length || 0);
      if (countOf(state) > countOf(cloudState)) {
        setOrganizationCloudStatus("로컬 데이터가 더 많아 클라우드로 업로드합니다");
        organizationCloud.loading = false;
        try {
          await saveOrganizationCloudNow();
        } catch (saveError) {
          console.warn("Could not push richer local org data to cloud.", saveError);
          setOrganizationCloudError("저장", saveError);
        }
        return;
      }
      state = cloudState;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      setOrganizationCloudStatus(`Firebase 불러옴 · ${formatOrgSyncTime(snap.data().updatedAt)}`);
      organizationCloud.suppressPersist = true;
      try {
        render({ skipPersist: true, skipHomeRefresh: true });
      } finally {
        organizationCloud.suppressPersist = false;
      }
    } else {
      setOrganizationCloudStatus("Firebase 최초 저장 준비");
      organizationCloud.loading = false;
      // 최초 저장 실패는 "불러오기" 실패가 아니라 "저장" 실패로 표기해야 한다.
      try {
        await saveOrganizationCloudNow();
      } catch (saveError) {
        console.warn("Could not perform initial organization cloud save.", saveError);
        setOrganizationCloudError("저장", saveError);
      }
      return;
    }
  } catch (error) {
    console.warn("Could not load organization cloud data.", error);
    setOrganizationCloudError("불러오기", error);
  } finally {
    organizationCloud.loading = false;
  }
}

function disconnectOrganizationCloud() {
  organizationCloud.db = null;
  organizationCloud.uid = null;
  window.clearTimeout(organizationCloud.saveTimer);
  setOrganizationCloudStatus("로컬 저장");
}

function persist() {
  if (organizationCloud.suppressPersist) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    // 순환 참조 등으로 직렬화에 실패하면 어떤 필드가 문제인지 알려주고(원인 추적),
    // 순환 참조를 제거한 사본으로라도 로컬 저장을 시도한다.
    console.error("조직 상태 직렬화 실패 — 문제 필드:", circularFields(state), error);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(safeForCloud(state)));
    } catch (fallbackError) {
      console.warn("Could not save organization data.", fallbackError);
    }
  }
  scheduleOrganizationCloudSave();
}

window.connectOrganizationCloud = connectOrganizationCloud;
window.disconnectOrganizationCloud = disconnectOrganizationCloud;
// 주의: 클래식 <script>에서 window.saveOrganizationCloudNow는 위 함수 선언과 "같은 전역 슬롯"이다.
// 예전처럼 () => saveOrganizationCloudNow().then(...) 형태로 다시 감싸면, 화살표 안의 호출이
// 원본 함수가 아니라 화살표 자신을 가리켜 무한 재귀(RangeError: Maximum call stack size exceeded)에 빠진다.
// 그래서 핵심 함수를 그대로 노출만 하고, 토스트/피드백은 호출부에서 처리한다(예: saveOrgCloudButton 핸들러).
window.saveOrganizationCloudNow = saveOrganizationCloudNow;

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

// Firebase에 넘기기 전에 순환 참조·함수·undefined·DOM 노드를 제거한 "순수 데이터"로 변환한다.
// Firestore의 직렬화는 객체를 재귀 순회하므로, 순환 참조가 있으면 "Maximum call stack size exceeded"로 죽는다.
function safeForCloud(value) {
  const seen = new WeakSet();
  let dropped = 0;
  const json = JSON.stringify(value, (key, val) => {
    if (val && typeof val === "object") {
      if (seen.has(val)) {
        dropped += 1;
        return undefined; // 순환(또는 중복) 참조 제거 → Firestore 직렬화 폭주 방지
      }
      seen.add(val);
    }
    return val;
  });
  safeForCloud.lastDropped = dropped;
  return json ? JSON.parse(json) : {};
}

// JSON 직렬화에 실패하는(순환 참조 등) 최상위 필드 이름을 찾아낸다 — 원인 추적용 진단.
function circularFields(obj) {
  if (!obj || typeof obj !== "object") return [];
  return Object.keys(obj).filter((key) => {
    try {
      JSON.stringify(obj[key]);
      return false;
    } catch (error) {
      return true;
    }
  });
}

function getUnit(id) {
  return state.units.find((unit) => unit.id === id);
}

function getDefaultExpandedIds() {
  return [seedUnits.find((unit) => !unit.parentId)?.id || "company"];
}

function getDefaultSelectedUnitId() {
  return seedUnits.find((unit) => !unit.parentId)?.id || "company";
}

function hasUnitTag(unitId, tag) {
  const unit = getUnit(unitId);
  return Boolean(unit && unit.tags.includes(tag));
}

function getChildren(parentId) {
  return state.units
    .filter((unit) => unit.parentId === parentId)
    .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0) || a.name.localeCompare(b.name, "ko"));
}

function getDescendantUnitIds(unitId) {
  const ids = [unitId];
  const visited = new Set([unitId]);
  const walk = (parentId) => {
    getChildren(parentId).forEach((child) => {
      if (visited.has(child.id)) return;
      visited.add(child.id);
      ids.push(child.id);
      walk(child.id);
    });
  };
  walk(unitId);
  return ids;
}

function getPeopleForUnit(unitId, includeDescendants = true) {
  const unitIds = includeDescendants ? getDescendantUnitIds(unitId) : [unitId];
  return state.people.filter((person) => unitIds.includes(person.unitId));
}

function personTitleRank(person) {
  const title = leaderTitleLabel(person?.title || person?.position || "");
  const index = personTitleSortOrder.indexOf(title);
  return index === -1 ? personTitleSortOrder.length + 1 : index;
}

function sortPeopleForDisplay(people) {
  return [...people].sort((a, b) => {
    const explicitOrder = Number(a.sortOrder ?? 9999) - Number(b.sortOrder ?? 9999);
    if (explicitOrder) return explicitOrder;
    const titleOrder = personTitleRank(a) - personTitleRank(b);
    if (titleOrder) return titleOrder;
    return String(a.name || "").localeCompare(String(b.name || ""), "ko");
  });
}

function getParentName(unit) {
  return unit.parentId ? getUnit(unit.parentId)?.name || "" : "Root";
}

function hasActiveRefinement() {
  return Boolean(
    state.search.trim() ||
      state.filters.sessionDone ||
      state.filters.sessionNone ||
      state.filters.healthy ||
      state.filters.watch ||
      state.filters.support ||
      state.filters.review,
  );
}

function getAncestorIds(unitId) {
  const ids = [];
  let unit = getUnit(unitId);
  const visited = new Set([unitId]);
  while (unit?.parentId) {
    if (visited.has(unit.parentId)) break;
    visited.add(unit.parentId);
    ids.push(unit.parentId);
    unit = getUnit(unit.parentId);
  }
  return ids;
}

function refreshSourcePaths(unitId, visited = new Set()) {
  if (visited.has(unitId)) return;
  visited.add(unitId);
  const unit = getUnit(unitId);
  if (!unit) return;

  const parent = unit.parentId ? getUnit(unit.parentId) : null;
  unit.orgDepth = parent ? (parent.orgDepth || 0) + 1 : 0;
  unit.sourcePath = parent ? `${parent.sourcePath || parent.name} > ${unit.name}` : unit.name;
  getChildren(unit.id).forEach((child) => refreshSourcePaths(child.id, visited));
}

function hasVisibleDescendant(unitId) {
  return getDescendantUnitIds(unitId).some((id) => id !== unitId && unitMatches(getUnit(id)));
}

function isExpanded(unitId) {
  return state.expandedUnitIds.includes(unitId) || hasActiveRefinement();
}

function toggleExpanded(unitId) {
  if (state.expandedUnitIds.includes(unitId)) {
    state.expandedUnitIds = state.expandedUnitIds.filter((id) => id !== unitId);
    return;
  }
  state.expandedUnitIds = [...state.expandedUnitIds, unitId];
}

function openDetail(unitId) {
  state.selectedUnitId = unitId;
  state.detailOpen = true;
  state.detailModal = null;
}

function closeDetail() {
  state.detailOpen = false;
  state.detailModal = null;
}

function openDetailModal(mode = "overview") {
  state.detailOpen = true;
  state.detailModal = mode;
}

function closeDetailModal() {
  state.detailModal = null;
}

function isStackedDetailLayout() {
  if (typeof window === "undefined") return false;
  const viewportWidth = Math.min(window.innerWidth || Infinity, document.documentElement?.clientWidth || Infinity);
  return window.matchMedia("(max-width: 1280px)").matches || viewportWidth <= 1280;
}

function getMobileScrollOffset() {
  const floatingNav = document.querySelector(".nav-fab");
  if (!floatingNav) return 18;
  const rect = floatingNav.getBoundingClientRect();
  return Math.max(18, rect.top + rect.height + 16);
}

function getScrollParent(element) {
  let node = element?.parentElement;
  while (node && node !== document.body && node !== document.documentElement) {
    const style = window.getComputedStyle(node);
    const canScrollY = /(auto|scroll|overlay)/.test(style.overflowY);
    if (canScrollY && node.scrollHeight > node.clientHeight + 2) return node;
    node = node.parentElement;
  }
  return window;
}

function scrollWindowTo(top, behavior = "smooth") {
  try {
    window.scrollTo({ top: Math.max(0, top), behavior });
  } catch (error) {
    window.scrollTo(0, Math.max(0, top));
  }
}

function scrollElementForMobile(element, block = "start") {
  if (!element) return;
  const offset = getMobileScrollOffset();
  const scrollParent = getScrollParent(element);

  if (scrollParent === window) {
    const rect = element.getBoundingClientRect();
    const targetTop = block === "center"
      ? window.scrollY + rect.top - (window.innerHeight - rect.height) / 2
      : window.scrollY + rect.top - offset;
    scrollWindowTo(targetTop, "smooth");
    window.setTimeout(() => scrollWindowTo(targetTop, "auto"), 260);
    return;
  }

  const parentRect = scrollParent.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  const targetTop = block === "center"
    ? scrollParent.scrollTop + rect.top - parentRect.top - (scrollParent.clientHeight - rect.height) / 2
    : scrollParent.scrollTop + rect.top - parentRect.top - offset;

  try {
    scrollParent.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
  } catch (error) {
    scrollParent.scrollTop = Math.max(0, targetTop);
  }
  window.setTimeout(() => {
    scrollParent.scrollTop = Math.max(0, targetTop);
  }, 260);
}

function scheduleMobileScroll(work) {
  if (!isStackedDetailLayout()) return;
  window.requestAnimationFrame(() => window.requestAnimationFrame(work));
  window.setTimeout(work, 180);
  window.setTimeout(work, 420);
}

function captureMobileDetailReturn(unitId, sourceElement) {
  if (!isStackedDetailLayout()) return;
  if (mobileDetailReturnContext?.unitId === unitId) return;
  const anchor = sourceElement?.closest?.("[data-unit-card]") || sourceElement;
  const scrollParent = getScrollParent(anchor);
  mobileDetailReturnContext = {
    unitId,
    scrollY: Math.max(0, window.scrollY + (anchor?.getBoundingClientRect?.().top || 0) - 16),
    parentScrollTop: scrollParent === window ? null : scrollParent.scrollTop,
  };
}

function scrollToMobileDetailPanel() {
  if (!isStackedDetailLayout()) return;
  scheduleMobileScroll(() => {
    scrollElementForMobile(document.querySelector(".org-inspector"), "start");
  });
}

function restoreMobileDetailReturn() {
  if (!isStackedDetailLayout() || !mobileDetailReturnContext) return;
  const { unitId, scrollY, parentScrollTop } = mobileDetailReturnContext;
  mobileDetailReturnContext = null;
  scheduleMobileScroll(() => {
    const selector = `[data-unit-card="${cssEscapeSelector(unitId)}"]`;
    const anchor = document.querySelector(selector);
    if (anchor) {
      scrollElementForMobile(anchor, "center");
      return;
    }
    const workbench = document.querySelector(".org-workbench");
    const scrollParent = getScrollParent(workbench);
    if (scrollParent !== window && parentScrollTop !== null) {
      try {
        scrollParent.scrollTo({ top: parentScrollTop, behavior: "smooth" });
      } catch (error) {
        scrollParent.scrollTop = parentScrollTop;
      }
      window.setTimeout(() => {
        scrollParent.scrollTop = parentScrollTop;
      }, 260);
      return;
    }
    scrollWindowTo(scrollY, "smooth");
    window.setTimeout(() => scrollWindowTo(scrollY, "auto"), 260);
  });
}

function canCreateUnder(level, parent) {
  if (!parent) return false;
  if (level === "division") return parent.level === "company";
  if (level === "hq") return ["company", "division"].includes(parent.level);
  if (level === "team") return ["division", "hq"].includes(parent.level);
  return false;
}

function canMoveUnit(unit, parent) {
  if (!unit || !parent || unit.id === parent.id) return false;
  if (getDescendantUnitIds(unit.id).includes(parent.id)) return false;
  if (unit.level === "division") return parent.level === "company";
  if (unit.level === "hq") return ["company", "division"].includes(parent.level);
  if (unit.level === "team") return ["division", "hq"].includes(parent.level);
  return false;
}

function createUnit(level, parentId) {
  const parent = getUnit(parentId);
  if (!canCreateUnder(level, parent)) return null;

  const sameLevelCount = state.units.filter((unit) => unit.level === level).length + 1;
  const id = `${level}-${Date.now()}`;
  const isTeam = level === "team";
  const isDivision = level === "division";
  const unit = {
    id,
    name: isDivision ? `새 부문 ${sameLevelCount}` : isTeam ? `새 팀 ${sameLevelCount}` : `새 본부 ${sameLevelCount}`,
    level,
    orgType: isDivision ? "부문" : isTeam ? "팀" : "본부",
    orgDepth: (parent.orgDepth || 0) + 1,
    leader: unsetLeaderLabel(level),
    leaderRole: defaultLeaderRole(level),
    leaderTitle: "",
    parentId,
    members: 0,
    readiness: parent.readiness,
    trust: parent.trust,
    fatigue: parent.fatigue,
    engagement: parent.engagement,
    risk: parent.risk,
    ambassadors: 0,
    tags: isDivision ? ["신규 부문"] : isTeam ? ["신규 팀"] : ["신규 본부"],
    recommendation: "신규 조직입니다. 조직 목적, 책임자, 문화 신호를 업데이트하세요.",
    sourcePath: `${parent.sourcePath || parent.name} > ${isDivision ? `새 부문 ${sameLevelCount}` : isTeam ? `새 팀 ${sameLevelCount}` : `새 본부 ${sameLevelCount}`}`,
    status: "active",
    sortOrder: sameLevelCount,
  };

  state.units.push(unit);
  refreshSourcePaths(id);
  state.selectedUnitId = id;
  state.detailOpen = true;
  state.expandedUnitIds = [...new Set([...state.expandedUnitIds, parentId])];
  return unit;
}

function moveUnit(unitId, parentId) {
  const unit = getUnit(unitId);
  const parent = getUnit(parentId);
  if (!canMoveUnit(unit, parent)) return false;
  unit.parentId = parentId;
  refreshSourcePaths(unitId);
  state.selectedUnitId = unitId;
  state.detailOpen = true;
  state.expandedUnitIds = [...new Set([...state.expandedUnitIds, parentId])];
  return true;
}

function movePerson(personId, unitId) {
  const person = state.people.find((item) => item.id === personId);
  const unit = getUnit(unitId);
  if (!person || !unit || unit.level === "company") return false;

  const previousUnit = getUnit(person.unitId);
  if (previousUnit && previousUnit.leader === person.name) {
    previousUnit.leader = unsetLeaderForUnit(previousUnit);
    previousUnit.leaderTitle = "";
  }

  person.unitId = unitId;
  person.position = person.position === "팀장" ? "실무자" : person.position;
  person.role = `${unit.name} 구성원`;
  const nextOrder = getPeopleForUnit(unitId, false)
    .filter((item) => item.id !== personId)
    .reduce((max, item) => Math.max(max, Number(item.sortOrder || 0)), 0) + 1;
  person.sortOrder = nextOrder;
  return true;
}

function reorderPerson(personId, targetPersonId) {
  if (!personId || !targetPersonId || personId === targetPersonId) return false;
  const person = state.people.find((item) => item.id === personId);
  const target = state.people.find((item) => item.id === targetPersonId);
  if (!person || !target || person.unitId !== target.unitId) return false;

  const current = sortPeopleForDisplay(getPeopleForUnit(person.unitId, false));
  const next = current.filter((item) => item.id !== personId);
  const targetIndex = next.findIndex((item) => item.id === targetPersonId);
  next.splice(targetIndex < 0 ? next.length : targetIndex, 0, person);
  next.forEach((item, index) => {
    item.sortOrder = index + 1;
  });
  return true;
}

function deleteUnit(unitId) {
  const unit = getUnit(unitId);
  if (!unit || !unit.parentId) return false;

  const deletedUnitIds = new Set(getDescendantUnitIds(unitId));
  const deletedPeopleIds = new Set(state.people.filter((person) => deletedUnitIds.has(person.unitId)).map((person) => person.id));

  state.units = state.units.filter((item) => !deletedUnitIds.has(item.id));
  state.people = state.people.filter((person) => !deletedPeopleIds.has(person.id));
  state.groups = state.groups
    .map((group) => ({
      ...group,
      memberIds: group.memberIds.filter((id) => !deletedPeopleIds.has(id)),
      unitIds: group.unitIds.filter((id) => !deletedUnitIds.has(id)),
    }))
    .filter((group) => group.memberIds.length || group.unitIds.length);

  state.selectedUnitId = unit.parentId;
  state.expandedUnitIds = state.expandedUnitIds.filter((id) => !deletedUnitIds.has(id));
  state.detailOpen = false;
  return true;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cssEscapeSelector(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(value);
  }

  return String(value).replace(/["\\]/g, "\\$&");
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function todayIso() {
  const date = new Date();
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

function setOrgZoom(value) {
  state.orgZoom = Math.round(clamp(value, 0.45, 1.25) * 100) / 100;
}

function fitOrgToView() {
  const canvas = document.getElementById("orgCanvas");
  const tree = document.querySelector(".org-tree");
  if (!canvas || !tree) {
    setOrgZoom(0.72);
    render();
    return;
  }

  const width = tree.scrollWidth || tree.getBoundingClientRect().width / (state.orgZoom || 1);
  const height = tree.scrollHeight || tree.getBoundingClientRect().height / (state.orgZoom || 1);
  const fitX = (canvas.clientWidth - 72) / Math.max(width, 1);
  const fitY = (canvas.clientHeight - 72) / Math.max(height, 1);
  setOrgZoom(Math.min(1, fitX, fitY));
  render();
}

function formatRisk(risk) {
  return {
    low: "안정",
    medium: "관찰",
    high: "지원 필요",
  }[risk] || "관찰";
}

function levelLabel(level) {
  return {
    company: "전사",
    division: "부문",
    hq: "본부",
    team: "팀",
  }[level] || level;
}

function displayOrgType(unit) {
  return unit.orgType || levelLabel(unit.level);
}

function leaderTitleLabel(title) {
  return title?.trim() || "직급 미정";
}

function defaultLeaderRole(level) {
  return {
    company: "대표이사",
    division: "부문장",
    hq: "본부장",
    team: "팀장",
  }[level] || "책임자";
}

function leaderRoleLabel(unit) {
  return unit?.leaderRole?.trim() || defaultLeaderRole(unit?.level);
}

function unsetLeaderLabel(level) {
  return `${defaultLeaderRole(level)} 미정`;
}

function unsetLeaderForUnit(unit) {
  return `${leaderRoleLabel(unit)} 미정`;
}

function hasAssignedLeader(unit) {
  const name = unit?.leader?.trim();
  return Boolean(name && name !== "미정" && name !== "리더 미정" && name !== unsetLeaderForUnit(unit));
}

function leaderNameLabel(unit) {
  return hasAssignedLeader(unit) ? unit.leader.trim() : unsetLeaderForUnit(unit);
}

function renderLeaderTitleDatalist() {
  return `
    <datalist id="leaderTitleOptions">
      ${leaderTitleOptions.map((title) => `<option value="${escapeHtml(title)}"></option>`).join("")}
    </datalist>
  `;
}

function renderPersonTitleDatalist() {
  return `
    <datalist id="personTitleOptions">
      ${personTitleOptions.map((title) => `<option value="${escapeHtml(title)}"></option>`).join("")}
    </datalist>
  `;
}

function renderLeaderRoleDatalist() {
  return `
    <datalist id="leaderRoleOptions">
      ${leaderRoleOptions.map((role) => `<option value="${escapeHtml(role)}"></option>`).join("")}
    </datalist>
  `;
}

function renderPersonTargetOptions(person) {
  return state.units
    .filter((unit) => unit.level !== "company")
    .sort((a, b) => (a.sourcePath || a.name).localeCompare(b.sourcePath || b.name, "ko"))
    .map((unit) => {
      const depth = Math.min(unit.orgDepth || getAncestorIds(unit.id).length, 4);
      const prefix = "　".repeat(depth);
      return `<option value="${escapeHtml(unit.id)}" ${person.unitId === unit.id ? "selected" : ""}>${prefix}${escapeHtml(unit.name)} · ${escapeHtml(displayOrgType(unit))}</option>`;
    })
    .join("");
}

function syncLeaderPersonTitle(unit) {
  const leaderPerson = state.people.find((person) => person.unitId === unit.id && person.name === unit.leader);
  if (leaderPerson) leaderPerson.title = unit.leaderTitle || "";
}

function updatePersonTitle(personId, title) {
  const person = state.people.find((item) => item.id === personId);
  if (!person) return false;

  person.title = title.trim();
  const unit = getUnit(person.unitId);
  if (unit && unit.leader === person.name) {
    unit.leaderTitle = person.title;
  }
  return true;
}

function setTeamLeader(unitId, personId) {
  const unit = getUnit(unitId);
  const selected = state.people.find((item) => item.id === personId);
  if (!unit) return false;
  // 직책: 팀=팀장, 본부=본부장, 부문=부문장, CEO=대표이사 …
  const roleLabel = unit.leaderRole || defaultLeaderRole(unit.level);

  if (!personId) {
    state.people.forEach((person) => {
      if (person.unitId === unit.id && (person.position === roleLabel || person.name === unit.leader)) {
        person.position = "구성원";
        person.role = `${unit.name} 구성원`;
        person.tags = (person.tags || []).filter((tag) => tag !== "리더");
      }
    });
    unit.leader = unsetLeaderForUnit(unit);
    unit.leaderTitle = "";
    unit.leaderRole = roleLabel;
    return true;
  }

  if (!selected || selected.unitId !== unit.id) return false;

  state.people.forEach((person) => {
    if (person.unitId !== unit.id) return;
    if (person.id === selected.id) {
      person.position = roleLabel;
      person.role = `${unit.name} ${roleLabel}`;
      person.tags = [...new Set([...(person.tags || []).filter((tag) => tag !== "신규 등록"), "리더"])];
      return;
    }
    if (person.position === roleLabel || person.name === unit.leader) {
      person.position = "구성원";
      person.role = `${unit.name} 구성원`;
      person.tags = (person.tags || []).filter((tag) => tag !== "리더");
    }
  });

  unit.leader = selected.name;
  unit.leaderTitle = selected.title || unit.leaderTitle || "";
  unit.leaderRole = roleLabel;
  return true;
}

function deletePerson(personId) {
  const person = state.people.find((item) => item.id === personId);
  if (!person) return false;

  const unit = getUnit(person.unitId);
  state.people = state.people.filter((item) => item.id !== personId);
  state.groups = state.groups
    .map((group) => ({ ...group, memberIds: group.memberIds.filter((id) => id !== personId) }))
    .filter((group) => group.memberIds.length || group.unitIds.length);

  if (unit && unit.leader === person.name) {
    unit.leader = unsetLeaderForUnit(unit);
    unit.leaderTitle = "";
  }
  return true;
}

function unitMatches(unit) {
  const query = state.search.trim().toLowerCase();
  const people = getPeopleForUnit(unit.id, unit.level !== "team");
  const text = [
    unit.name,
    unit.leader,
    levelLabel(unit.level),
    displayOrgType(unit),
    getParentName(unit),
    unit.tags.join(" "),
    people.map((person) => `${person.name} ${person.role} ${person.tags.join(" ")}`).join(" "),
  ].join(" ").toLowerCase();

  if (query && !text.includes(query)) return false;
  // 세션 여부 필터 (캘린더 기준): 완료 / 미완료
  if (state.filters.sessionDone || state.filters.sessionNone) {
    const done = unitSessionDone(unit.id);
    const ok = (state.filters.sessionDone && done) || (state.filters.sessionNone && !done);
    if (!ok) return false;
  }
  // Pulse 서베이 결과 기준 필터 (선택된 상태 중 하나라도 일치하면 표시)
  const activeStatus = ORG_STATUS_FILTERS.filter((f) => state.filters[f.key]).map((f) => f.key);
  if (activeStatus.length) {
    const def = pulseStatusDef(unit);
    if (!def || !activeStatus.includes(def.key)) return false;
  }
  return true;
}

function getVisibleUnits() {
  return state.units.filter(unitMatches);
}

function render(options = {}) {
  syncControls();
  renderMetrics();
  renderView();
  if (document.getElementById("session")?.classList.contains("active")) renderWowSessionWorkspace();
  renderDetail();
  renderTemplates();
  if (!options.skipHomeRefresh) refreshHomeDashboardFromOrgState();
  refreshOrganizationCloudStatusUi();
  if (!options.skipPersist) persist();
}

function refreshHomeDashboardFromOrgState() {
  if (typeof renderHome !== "function") return;
  if (typeof currentDataset === "undefined" || !currentDataset) return;
  if (!document.getElementById("sessionOps")) return;

  try {
    renderHome();
  } catch (error) {
    console.warn("Could not refresh home dashboard from organization state.", error);
  }
}

function syncControls() {
  const searchInput = document.getElementById("searchInput");
  if (document.activeElement !== searchInput) {
    searchInput.value = state.search;
  }

  document.querySelectorAll(".segment").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });

  document.querySelectorAll("[data-layout]").forEach((button) => {
    button.classList.toggle("active", button.dataset.layout === state.orgLayout);
  });

  document.querySelectorAll("[data-network-level]").forEach((button) => {
    button.classList.toggle("active", button.dataset.networkLevel === state.networkLevel);
  });

  document.querySelectorAll("[data-filter]").forEach((input) => {
    input.checked = Boolean(state.filters[input.dataset.filter]);
  });
}

function getOrgMetrics() {
  const teamUnits = state.units.filter((unit) => unit.level === "team" || displayOrgType(unit).includes("팀"));
  const averageReadiness = teamUnits.length ? Math.round(teamUnits.reduce((sum, unit) => sum + signalForUnit(unit).changeAcceptance, 0) / teamUnits.length) : 0;
  const riskCount = state.units.filter((unit) => signalForUnit(unit).supportNeeded).length;
  const peopleAmbassadorCount = state.people.filter((person) => person.tags.includes("앰버서더 후보")).length;
  const ambassadorCount = peopleAmbassadorCount || state.units.filter((unit) => unit.ambassadors > 0).length;
  const assignedLeaderKeys = new Set(teamUnits.filter(hasAssignedLeader).map((unit) => `${unit.id}::${unit.leader}`));
  const peopleLeaderCount = state.people.filter((person) => person.position === "팀장" || assignedLeaderKeys.has(`${person.unitId}::${person.name}`)).length;
  const leaderCount = Math.max(peopleLeaderCount, assignedLeaderKeys.size);
  const groupCount = state.groups.length;

  const metrics = [
    { label: "조직 단위", value: teamUnits.length, note: "팀 기준" },
    { label: "팀장", value: leaderCount, note: "설정된 책임자 수" },
    { label: peopleAmbassadorCount ? "앰버서더 후보" : "확산 신호 조직", value: ambassadorCount, note: peopleAmbassadorCount ? "수용성·영향력 기준" : "조직도 기반 추정" },
    { label: "지원 필요 조직", value: riskCount, note: "피로도·신뢰 신호" },
    { label: "평균 변화 수용도", value: `${averageReadiness}%`, note: `${groupCount}개 목적 그룹 운영` },
  ];
  return metrics;
}

function renderMetrics() {
  const metricRoot = document.getElementById("metricRow");
  if (!metricRoot) return;
  metricRoot.hidden = true;
  metricRoot.innerHTML = "";
}

function renderCompactMetrics() {
  return getOrgMetrics()
    .map((metric) => `
      <article class="org-mini-metric">
        <span>${escapeHtml(metric.label)}</span>
        <strong>${escapeHtml(metric.value)}</strong>
        <em>${escapeHtml(metric.note)}</em>
      </article>
    `)
    .join("");
}

function renderView() {
  if (!["official", "network", "calendar", "groups"].includes(state.view)) {
    state.view = "official";
  }

  if (state.view === "official") {
    renderOfficialView();
  } else if (state.view === "network") {
    renderNetworkView();
  } else if (state.view === "calendar") {
    renderCalendarView();
  } else {
    renderGroupsView();
  }
}

function renderOfficialView() {
  const visibleUnits = getVisibleUnits();
  const roots = state.units.filter((unit) => !unit.parentId);
  const selectedUnit = state.detailOpen ? getUnit(state.selectedUnitId) : null;

  document.getElementById("viewRoot").innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">Organization Structure</p>
        <h3>조직도</h3>
        <p>카드를 누르면 진행 현황이 열리고, 상세 버튼을 누르면 오른쪽에 선택 조직 정보가 나옵니다. 조직 생성과 이동은 드래그로도 가능합니다.</p>
      </div>
      <div class="panel-actions">
        <div class="zoom-controls" aria-label="조직도 줌">
          <button class="zoom-button" data-zoom-action="out" type="button" aria-label="축소">−</button>
          <span class="zoom-value">${Math.round(state.orgZoom * 100)}%</span>
          <button class="zoom-button" data-zoom-action="in" type="button" aria-label="확대">+</button>
          <button class="zoom-fit" data-zoom-action="fit" type="button">맞춤</button>
        </div>
        <div class="segmented compact" aria-label="조직도 보기 방식">
          <button class="segment ${state.orgLayout === "folder" ? "" : "active"}" data-layout="horizontal" type="button">가로</button>
          <button class="segment ${state.orgLayout === "folder" ? "active" : ""}" data-layout="folder" type="button">폴더</button>
        </div>
        <button class="ghost-button compact-action" id="downloadOrgTemplateButton" type="button">엑셀 템플릿</button>
        <button class="ghost-button compact-action" id="uploadOrgButton" type="button">엑셀 업로드</button>
        <button class="ghost-button compact-action" id="saveOrgCloudButton" type="button">Firebase 저장</button>
        <button class="ghost-button compact-action" id="restoreOrgBackupButton" type="button">업로드 되돌리기</button>
        <span class="status-pill" id="orgSyncStatus">${escapeHtml(organizationCloud.status)}</span>
        <span class="status-pill">${visibleUnits.length}개 표시</span>
      </div>
    </div>
    <div class="org-frame-summary" aria-label="조직 주요 지표">
      ${renderCompactMetrics()}
    </div>
    <div class="org-toolbelt" aria-label="조직도 드래그 도구">
      <div class="drag-source" draggable="true" data-drag-create="division"><span>+</span><strong>새 부문</strong><small>CEO 카드에 드롭</small></div>
      <div class="drag-source" draggable="true" data-drag-create="hq"><span>+</span><strong>새 본부</strong><small>CEO/부문 카드에 드롭</small></div>
      <div class="drag-source" draggable="true" data-drag-create="team"><span>+</span><strong>새 팀</strong><small>부문/본부 카드에 드롭</small></div>
      <p>드래그로 조직을 만들거나 소속을 이동합니다.</p>
    </div>
    <div class="org-workbench ${selectedUnit ? "inspector-open" : ""}">
      <div class="org-board">
        ${
          state.orgLayout === "folder"
            ? `<div class="org-folder" id="orgFolder">${roots.map((unit) => renderFolderRow(unit, 0)).join("")}</div>`
            : `<div class="org-canvas" id="orgCanvas">
                <div class="org-zoom-surface" id="orgZoomSurface" style="--org-zoom:${state.orgZoom}">
                  <svg class="connector-layer" id="connectorLayer" aria-hidden="true"></svg>
                  <div class="org-tree ${escapeHtml(state.orgLayout)}">
                    ${roots.map((unit) => renderTreeNode(unit)).join("")}
                  </div>
                </div>
              </div>`
        }
      </div>
      ${selectedUnit ? renderOrgInspector(selectedUnit) : ""}
    </div>
  `;

  requestAnimationFrame(drawOrgConnections);
}

function renderTreeNode(unit) {
  const activeRefinement = hasActiveRefinement();
  const children = getChildren(unit.id).filter((child) => {
    if (!activeRefinement) return true;
    return unitMatches(child) || hasVisibleDescendant(child.id);
  });
  const expanded = isExpanded(unit.id);
  const showChildren = children.length && expanded;

  if (activeRefinement && !unitMatches(unit) && !hasVisibleDescendant(unit.id) && unit.parentId) {
    return "";
  }

  return `
    <div class="tree-node-wrap ${showChildren ? "has-open-children" : ""}" data-tree-node="${escapeHtml(unit.id)}">
      ${renderUnitCard(unit, children.length)}
      ${
        showChildren
          ? `<div class="tree-children">${children.map((child) => renderTreeNode(child)).join("")}</div>`
          : ""
      }
    </div>
  `;
}

// 폴더(파일탐색기) 형식 조직도 — 트리보다 공간 효율이 높고 한 화면에 더 많이 보인다.
function renderFolderRow(unit, depth = 0) {
  const activeRefinement = hasActiveRefinement();
  const children = getChildren(unit.id).filter(
    (child) => !activeRefinement || unitMatches(child) || hasVisibleDescendant(child.id),
  );
  if (activeRefinement && !unitMatches(unit) && !hasVisibleDescendant(unit.id) && unit.parentId) return "";
  const expanded = isExpanded(unit.id);
  const selected = unit.id === state.selectedUnitId ? "selected" : "";
  const status = pulseStatusDef(unit);
  const tone = status ? `tone-${status.tone}` : "";
  const hasLeader = unit.leader && unit.leader !== "미정" && unit.leader !== "리더 미정";
  const seed = hasLeader ? unit.leader : unit.name;
  const initial = unitInitial(seed) || (unit.name || "·").charAt(0);
  const avatar = unit.photo
    ? `<span class="folder-avatar has-photo"><img src="${escapeHtml(unit.photo)}" alt="" /></span>`
    : `<span class="folder-avatar" style="--av:${avatarColor(seed)}">${escapeHtml(initial)}</span>`;
  const headcount = getPeopleForUnit(unit.id, unit.level !== "team").length || unit.members;
  const titleTxt = unit.leaderTitle ? leaderTitleLabel(unit.leaderTitle) : "";
  // 조직장 이름은 볼드(진하게), 나머지(유형·인원·직급·직무)는 회색 톤
  const leaderTxt = hasLeader
    ? `<b class="fm-leader">${escapeHtml(unit.leader)}</b> ${[titleTxt, unit.leaderRole].filter(Boolean).map(escapeHtml).join(" · ")}`
    : `${escapeHtml(unit.leaderRole || "책임자")} 미정`;
  const hasChildren = children.length > 0;
  return `
    <div class="folder-branch">
      <div class="folder-row ${selected} ${tone}" style="--depth:${depth}" data-unit-card="${escapeHtml(unit.id)}" draggable="${unit.level !== "company"}" data-drag-unit-id="${escapeHtml(unit.id)}" data-drop-unit-id="${escapeHtml(unit.id)}">
        <button class="folder-main" type="button" ${hasChildren ? `data-toggle-unit="${escapeHtml(unit.id)}"` : `data-open-detail="${escapeHtml(unit.id)}"`} aria-label="${escapeHtml(unit.name)} ${hasChildren ? (expanded ? "하위 접기" : "하위 조직 펼치기") : "상세 보기"}">
          <span class="folder-twist ${hasChildren ? (expanded ? "open" : "") : "empty"}">▸</span>
          ${avatar}
          <span class="folder-text">
            <span class="folder-name">${escapeHtml(unit.name)}</span>
            <span class="folder-meta">${escapeHtml(displayOrgType(unit))} · ${headcount}명 · ${leaderTxt}</span>
          </span>
        </button>
        <span class="folder-sessions">${renderStatusChips(unit, { mini: true, sessionsOnly: true })}</span>
        ${status ? `<span class="folder-status pulse-${status.tone}">${escapeHtml(status.label)}</span>` : ""}
        <button class="folder-detail-btn" type="button" data-open-detail="${escapeHtml(unit.id)}" aria-label="${escapeHtml(unit.name)} 상세 보기" title="상세 보기">→</button>
      </div>
      ${
        expanded && hasChildren
          ? `<div class="folder-children">${children.map((c) => renderFolderRow(c, depth + 1)).join("")}</div>`
          : ""
      }
    </div>`;
}

function pulseForUnit(unitId) {
  return (window.LINA_PULSE_BY_ORG || {})[unitId] || null;
}

function pulseTierLabel(tier) {
  return { stable: "안정", watch: "주의", risk: "위험", check: "신뢰도 검토" }[tier] || tier || "";
}

const CULTURE_METRIC_FORMULA = {
  changeAcceptance: [
    { no: 1, weight: 0.16, label: "회사 추천 의향" },
    { no: 2, weight: 0.12, label: "재직 자부심" },
    { no: 3, weight: 0.13, label: "개인적 성취감" },
    { no: 4, weight: 0.12, label: "잔류 의향" },
    { no: 7, weight: 0.15, label: "목표 기여 이해" },
    { no: 8, weight: 0.12, label: "역할 명확성" },
    { no: 10, weight: 0.1, label: "스킬 학습 기회" },
    { no: 22, weight: 0.1, label: "동료 협업" },
  ],
  trust: [
    { no: 5, weight: 0.11, label: "의견 존중" },
    { no: 13, weight: 0.1, label: "적시 피드백" },
    { no: 14, weight: 0.1, label: "인정" },
    { no: 15, weight: 0.1, label: "문제 해결 지원" },
    { no: 16, weight: 0.09, label: "성장 대화" },
    { no: 17, weight: 0.14, label: "두려움 없는 문제 제기" },
    { no: 18, weight: 0.1, label: "리더 소통" },
    { no: 19, weight: 0.12, label: "서베이 조치 신뢰" },
    { no: 20, weight: 0.07, label: "포용 노력" },
    { no: 21, weight: 0.07, label: "소속감" },
  ],
  fatigue: [
    { no: 10, weight: 0.1, label: "성장 기회 부족" },
    { no: 11, weight: 0.14, label: "웰빙 요청 어려움" },
    { no: 12, weight: 0.11, label: "웰빙 지원 부족" },
    { no: 13, weight: 0.1, label: "피드백 부족" },
    { no: 14, weight: 0.11, label: "인정 부족" },
    { no: 15, weight: 0.09, label: "문제 해결 지원 부족" },
    { no: 16, weight: 0.11, label: "성장 대화 부족" },
    { no: 17, weight: 0.1, label: "문제 제기 부담" },
    { no: 19, weight: 0.08, label: "후속조치 불신" },
    { no: 21, weight: 0.06, label: "소속감 약화" },
  ],
  risk: [
    { no: 1, weight: 0.1, label: "추천 의향 약화" },
    { no: 4, weight: 0.1, label: "잔류 의향 약화" },
    { no: 5, weight: 0.11, label: "의견 존중 약화" },
    { no: 17, weight: 0.16, label: "심리적 안전 약화" },
    { no: 18, weight: 0.11, label: "리더 소통 약화" },
    { no: 19, weight: 0.16, label: "서베이 조치 불신" },
    { no: 20, weight: 0.09, label: "포용 체감 약화" },
    { no: 21, weight: 0.09, label: "소속감 약화" },
    { no: 22, weight: 0.08, label: "협업 약화" },
  ],
};

function positivePulseScore(question, lowPenalty = 0.5) {
  if (!question) return null;
  const fav = Number(question.fav);
  if (!Number.isFinite(fav)) return null;
  const low = Number(question.low);
  return clamp(Math.round(fav - lowPenalty * (Number.isFinite(low) ? low : 0)), 0, 100);
}

function pulseQuestionMap(pulse) {
  return new Map((pulse?.questions || []).map((question) => [Number(question.no), question]));
}

function weightedPulseScore(questionMap, mapping, invert = false, options = {}) {
  let totalWeight = 0;
  let total = 0;
  const drivers = [];
  const lowPenalty = options.lowPenalty ?? 0.5;
  mapping.forEach((item) => {
    const question = questionMap.get(item.no);
    const positive = positivePulseScore(question, lowPenalty);
    if (positive == null) return;
    const value = invert ? 100 - positive : positive;
    total += value * item.weight;
    totalWeight += item.weight;
    drivers.push({
      no: item.no,
      label: item.label,
      value: Math.round(value),
      positive,
      fav: Math.round(Number(question.fav) || 0),
      low: Math.round(Number(question.low) || 0),
    });
  });
  return {
    value: totalWeight ? clamp(Math.round(total / totalWeight), 0, 100) : null,
    drivers,
  };
}

function riskLevelFromScore(score) {
  if (score >= 60) return "high";
  if (score >= 42) return "medium";
  return "low";
}

function cultureQuadrant(x, y) {
  if (x < 50 && y >= 50) return "위험";
  if (x >= 50 && y >= 50) return "피로도/지원 필요";
  if (x >= 50 && y < 50) return "안정";
  return "관망/정체";
}

function quadrantTone(quadrant) {
  return {
    위험: "risk",
    "피로도/지원 필요": "support",
    안정: "stable",
    "관망/정체": "watch",
  }[quadrant] || "watch";
}

function cultureMapCoordinates(signal) {
  const riskScore = Number.isFinite(Number(signal.riskScore)) ? Number(signal.riskScore) : signal.risk === "high" ? 72 : signal.risk === "medium" ? 52 : 28;
  const x = clamp(Math.round(0.55 * signal.changeAcceptance + 0.3 * signal.trust + 0.15 * (100 - riskScore)), 0, 100);
  const y = clamp(Math.round(0.55 * signal.fatigue + 0.3 * riskScore + 0.15 * (100 - signal.trust)), 0, 100);
  return { x, y };
}

function supportNeededFromSignal(signal) {
  return (
    signal.quadrant === "위험" ||
    signal.quadrant === "피로도/지원 필요" ||
    signal.riskScore >= 60 ||
    signal.fatigue >= 60 ||
    signal.trust < 45
  );
}

const WOW_SCALE = {
  그렇다: 5,
  "조금 그렇다": 4,
  보통이다: 3,
  "잘 모르겠다": 2,
  아니다: 1,
};

const TEXT_SIGNAL_KEYWORDS = {
  fatigue: ["지쳐", "피로", "무기력", "바빠", "여유", "과중", "벅찬", "힘든", "업무 증가", "고착화", "의욕", "강도", "부담", "답답"],
  trustRisk: ["단절", "오해", "경영진", "의사결정", "가이드라인", "시켜서", "와닿지", "회사 분위기", "좋은 것 같지", "안 좋은", "장표", "결정자"],
  collaborationRisk: ["사일로", "개인주의", "각자", "협업하기 어려운", "서로 맞서는", "내팀", "내꺼", "유관부서", "불만"],
  teamPositive: ["팀 분위기는 괜찮", "팀 분위기는 좋", "화기애애", "편하게", "도움", "좋았습니다", "재밌", "감사", "대화", "팀빌딩"],
  programEfficacy: ["도움", "확대", "전사", "정기", "계속", "유익", "필요", "실제", "활용", "구체화", "명확화", "소통", "협업"],
};

function cultureAverage(values) {
  const valid = values.filter((value) => value != null && value !== "" && Number.isFinite(Number(value))).map(Number);
  return valid.length ? valid.reduce((sum, value) => sum + value, 0) / valid.length : null;
}

function cultureWeightedAverage(items) {
  const valid = items.filter(([score]) => score != null && Number.isFinite(Number(score)));
  const totalWeight = valid.reduce((sum, [, weight]) => sum + weight, 0);
  if (!totalWeight) return null;
  return valid.reduce((sum, [score, weight]) => sum + Number(score) * (weight / totalWeight), 0);
}

function responseConfidence(count, target = 10) {
  return clamp(Number(count || 0) / target, 0, 1);
}

function boundedDelta(sourceScore, baseScore, maxDelta = 25) {
  if (sourceScore == null || baseScore == null) return 0;
  return clamp(Number(sourceScore) - Number(baseScore), -maxDelta, maxDelta);
}

function likertTo100(value) {
  if (value == null || value === "") return null;
  const raw = String(value).trim();
  const numeric = Number(raw);
  if (Number.isFinite(numeric)) {
    if (numeric > 5) return clamp(numeric, 0, 100);
    return clamp(((numeric - 1) / 4) * 100, 0, 100);
  }
  const scaled = WOW_SCALE[raw];
  return scaled ? clamp(((scaled - 1) / 4) * 100, 0, 100) : null;
}

function normalizedTeamName(value) {
  return String(value || "").replace(/\s+/g, "").toLowerCase();
}

function rowBelongsToTeam(row, unit) {
  if (!row || !unit) return false;
  if (row.teamId && row.teamId === unit.id) return true;
  return normalizedTeamName(row.teamName || row.team) === normalizedTeamName(unit.name);
}

function wowQuantRowsForTeam(unit) {
  return (state.wowQuantRows || []).filter((row) => rowBelongsToTeam(row, unit));
}

function wowTextRowsForTeam(unit) {
  return (state.wowTextRows || []).filter((row) => rowBelongsToTeam(row, unit));
}

function countKeywordHits(text, keywords) {
  if (!text) return 0;
  const normalized = String(text).toLowerCase();
  return keywords.reduce((sum, keyword) => sum + (normalized.includes(String(keyword).toLowerCase()) ? 1 : 0), 0);
}

function normalizeHits(hitCount, maxHits = 5) {
  return clamp((Number(hitCount || 0) / maxHits) * 100, 0, 100);
}

function calculateWowQuantScores(rowsForTeam) {
  const qMeans = {};
  for (let i = 1; i <= 10; i += 1) {
    const key = `WQ${i}`;
    qMeans[key] = cultureAverage(rowsForTeam.map((row) => likertTo100(row[key] ?? row[key.toLowerCase()])));
  }
  return {
    qMeans,
    responseCount: rowsForTeam.length,
    sessionChangeAcceptance: cultureWeightedAverage([[qMeans.WQ1, 0.25], [qMeans.WQ2, 0.25], [qMeans.WQ5, 0.2], [qMeans.WQ6, 0.15], [qMeans.WQ9, 0.15]]),
    sessionTrust: cultureWeightedAverage([[qMeans.WQ6, 0.2], [qMeans.WQ7, 0.2], [qMeans.WQ9, 0.25], [qMeans.WQ10, 0.25], [qMeans.WQ5, 0.1]]),
    sessionFatigueProtection: cultureWeightedAverage([[qMeans.WQ3, 0.15], [qMeans.WQ4, 0.25], [qMeans.WQ8, 0.25], [qMeans.WQ10, 0.2], [qMeans.WQ7, 0.15]]),
    sessionRiskMitigation: cultureWeightedAverage([[qMeans.WQ1, 0.15], [qMeans.WQ2, 0.15], [qMeans.WQ6, 0.15], [qMeans.WQ7, 0.15], [qMeans.WQ9, 0.2], [qMeans.WQ10, 0.2]]),
  };
}

function calculateQualitativeSignals(rowsForTeam) {
  const joined = rowsForTeam.map((row) => [row.goodBadText, row.moodText, row.messageText].join("\n")).join("\n");
  return {
    responseCount: rowsForTeam.length,
    fatigueTextRisk: normalizeHits(countKeywordHits(joined, TEXT_SIGNAL_KEYWORDS.fatigue), 5),
    trustTextRisk: normalizeHits(countKeywordHits(joined, TEXT_SIGNAL_KEYWORDS.trustRisk), 5),
    collaborationTextRisk: normalizeHits(countKeywordHits(joined, TEXT_SIGNAL_KEYWORDS.collaborationRisk), 4),
    teamPositiveSignal: normalizeHits(countKeywordHits(joined, TEXT_SIGNAL_KEYWORDS.teamPositive), 6),
    programEfficacySignal: normalizeHits(countKeywordHits(joined, TEXT_SIGNAL_KEYWORDS.programEfficacy), 6),
  };
}

function normalizedSessionAnalysis(raw = {}, unit = null) {
  const source = raw && typeof raw === "object" ? raw : {};
  const getScore = (...keys) => {
    for (const key of keys) {
      if (source[key] != null && source[key] !== "") return clamp(Number(source[key]) || 0, 0, 100);
    }
    return null;
  };
  const keywords = Array.isArray(source.keywords)
    ? source.keywords
    : String(source.keywords || "")
        .split(/[,\n;]/)
        .map((item) => item.trim())
        .filter(Boolean);
  const recommendations = Array.isArray(source.recommendations)
    ? source.recommendations
    : String(source.recommendations || "")
        .split(/\n|;/)
        .map((item) => item.trim())
        .filter(Boolean);
  return {
    teamId: source.teamId || unit?.id || "",
    teamName: source.teamName || unit?.name || "",
    createdAt: source.createdAt || new Date().toISOString(),
    rawText: source.rawText || source.raw || "",
    fatigueTextRisk: getScore("fatigueTextRisk", "fatigue", "fatigueRisk", "피로도"),
    trustTextRisk: getScore("trustTextRisk", "trustRisk", "lowTrustRisk", "신뢰리스크"),
    collaborationTextRisk: getScore("collaborationTextRisk", "collaborationRisk", "siloRisk", "협업리스크"),
    teamPositiveSignal: getScore("teamPositiveSignal", "positiveSignal", "teamPositive", "긍정신호"),
    programEfficacySignal: getScore("programEfficacySignal", "programEfficacy", "executionSignal", "실행효과"),
    summary: source.summary || source.diagnosis || source.진단 || "",
    keywords,
    recommendations,
  };
}

function sessionAnalysisForUnit(unit) {
  if (!unit) return null;
  const direct = state.sessionAnalysisResults?.[unit.id];
  if (direct) return normalizedSessionAnalysis(direct, unit);
  const byName = Object.values(state.sessionAnalysisResults || {}).find((item) => normalizedTeamName(item?.teamName) === normalizedTeamName(unit.name));
  return byName ? normalizedSessionAnalysis(byName, unit) : null;
}

function mergeSessionAnalysisSignals(text, analysis) {
  if (!analysis) return text;
  const merged = { ...text, aiAnalysis: analysis };
  const mergeScore = (key) => {
    if (analysis[key] == null) return;
    const local = Number(text[key] || 0);
    const ai = Number(analysis[key] || 0);
    merged[key] = Math.round(local * 0.55 + ai * 0.45);
  };
  ["fatigueTextRisk", "trustTextRisk", "collaborationTextRisk", "teamPositiveSignal", "programEfficacySignal"].forEach(mergeScore);
  merged.responseCount = Number(text.responseCount || 0);
  merged.aiAdjusted = true;
  return merged;
}

function pulseContextForUnit(unit) {
  if (!unit) return null;
  const direct = pulseForUnit(unit.id);
  if (direct) return { pulse: direct, baseSource: unit.level === "team" ? "teamPulse" : "directPulse", inheritedPulse: false, sourceUnit: unit };
  const ancestors = getAncestorIds(unit.id).map(getUnit).filter(Boolean);
  for (const ancestor of ancestors) {
    const pulse = pulseForUnit(ancestor.id);
    if (pulse) {
      const baseSource = ancestor.level === "hq" ? "parentHqPulse" : ancestor.level === "division" ? "parentDivisionPulse" : "companyPulse";
      return { pulse, baseSource, inheritedPulse: true, sourceUnit: ancestor };
    }
  }
  const root = state.units.find((item) => !item.parentId);
  const companyPulse = root ? pulseForUnit(root.id) : null;
  return companyPulse ? { pulse: companyPulse, baseSource: "companyPulse", inheritedPulse: unit.id !== root.id, sourceUnit: root } : null;
}

function baseSourceLabel(signal) {
  return {
    teamPulse: "팀 직접 Pulse",
    directPulse: "조직 직접 Pulse",
    parentHqPulse: "상위 본부 Pulse 상속",
    parentDivisionPulse: "상위 부문 Pulse 상속",
    companyPulse: "전사 Pulse 상속",
    manual: "수동 설정값",
  }[signal?.baseSource || "manual"] || "수동 설정값";
}

function applySessionFormulaV2(unit, baseSignal) {
  if (!unit || unit.level !== "team") return baseSignal;
  const quant = calculateWowQuantScores(wowQuantRowsForTeam(unit));
  const text = mergeSessionAnalysisSignals(calculateQualitativeSignals(wowTextRowsForTeam(unit)), sessionAnalysisForUnit(unit));
  const sessionConfidence = responseConfidence(quant.responseCount, 10);
  const qualitativeConfidence = clamp(responseConfidence(text.responseCount, 8) + (text.aiAdjusted ? 0.25 : 0), 0, 1);

  const changeAcceptanceAdjustment = clamp(
    0.2 * sessionConfidence * boundedDelta(quant.sessionChangeAcceptance, baseSignal.changeAcceptance, 25)
      + 0.08 * qualitativeConfidence * ((text.programEfficacySignal ?? 50) - 50)
      - 0.05 * qualitativeConfidence * text.collaborationTextRisk,
    -12,
    5,
  );
  const changeAcceptance = clamp(Math.round(baseSignal.changeAcceptance + changeAcceptanceAdjustment), 0, 100);
  const trust = clamp(Math.round(
    baseSignal.trust
      + 0.18 * sessionConfidence * boundedDelta(quant.sessionTrust, baseSignal.trust, 25)
      + 0.05 * qualitativeConfidence * text.teamPositiveSignal
      - 0.12 * qualitativeConfidence * text.trustTextRisk,
  ), 0, 100);
  const riskScore = clamp(Math.round(
    baseSignal.riskScore
      - 0.12 * sessionConfidence * ((quant.sessionRiskMitigation ?? 50) - 50)
      + 0.1 * qualitativeConfidence * text.trustTextRisk
      + 0.08 * qualitativeConfidence * text.collaborationTextRisk
      + 0.05 * qualitativeConfidence * text.fatigueTextRisk,
  ), 0, 100);
  const fatigue = clamp(Math.round(
    baseSignal.fatigue
      - 0.16 * sessionConfidence * ((quant.sessionFatigueProtection ?? 50) - 50)
      + 0.16 * qualitativeConfidence * text.fatigueTextRisk
      + 0.05 * qualitativeConfidence * text.trustTextRisk,
  ), 0, 100);
  const risk = riskLevelFromScore(riskScore);
  const coords = cultureMapCoordinates({ changeAcceptance, trust, fatigue, riskScore, risk });
  const quadrant = cultureQuadrant(coords.x, coords.y);
  const textSupport = text.fatigueTextRisk >= 60 || text.trustTextRisk >= 60;
  const supportNeeded = supportNeededFromSignal({ trust, fatigue, riskScore, quadrant }) || textSupport;

  return {
    ...baseSignal,
    readiness: changeAcceptance,
    changeAcceptance,
    trust,
    fatigue,
    risk,
    riskScore,
    mapX: coords.x,
    mapY: coords.y,
    quadrant,
    supportNeeded,
    sessionAdjusted: quant.responseCount > 0 || text.responseCount > 0,
    sessionConfidence,
    qualitativeConfidence,
    sessionQuant: quant,
    textSignal: text,
    pulseBase: {
      changeAcceptance: baseSignal.changeAcceptance,
      trust: baseSignal.trust,
      fatigue: baseSignal.fatigue,
      riskScore: baseSignal.riskScore,
      mapX: baseSignal.mapX,
      mapY: baseSignal.mapY,
      quadrant: baseSignal.quadrant,
    },
    tags: [...new Set([...(baseSignal.tags || []), quant.responseCount ? "Session Adjusted" : "", text.responseCount ? "Text Risk Signal" : ""])].filter(Boolean).slice(0, 6),
  };
}

function cultureDriverSummary(signal) {
  const drivers = signal.drivers || [];
  if (!drivers.length) return [];
  return drivers
    .slice()
    .sort((a, b) => b.value - a.value)
    .slice(0, 3);
}

function renderCultureDrivers(signal, compact = false) {
  const drivers = cultureDriverSummary(signal);
  if (!drivers.length) return "";
  return `
    <div class="culture-driver-list ${compact ? "compact" : ""}">
      ${drivers
        .map(
          (driver) => `
        <div class="culture-driver">
          <b>Q${driver.no} ${escapeHtml(driver.label)}</b>
          <span>${escapeHtml(driver.metric)} · 영향 ${driver.value} · 긍정 ${driver.fav}% · 부정 ${driver.low}%</span>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

function signedDelta(value) {
  const rounded = Math.round(Number(value || 0));
  if (!rounded) return "0";
  return `${rounded > 0 ? "+" : ""}${rounded}`;
}

function renderFormulaV2Breakdown(signal) {
  const base = signal.pulseBase || signal;
  const quant = signal.sessionQuant || {};
  const text = signal.textSignal || {};
  const hasQuant = Number(quant.responseCount || 0) > 0;
  const hasText = Number(text.responseCount || 0) > 0;
  const deltaChange = signal.changeAcceptance - base.changeAcceptance;
  const deltaTrust = signal.trust - base.trust;
  const deltaFatigue = signal.fatigue - base.fatigue;
  const deltaRisk = signal.riskScore - base.riskScore;

  return `
    <div class="formula-v2-stack" aria-label="Formula v2 진단">
      <article>
        <span>Pulse Base</span>
        <strong>${base.changeAcceptance}% · ${base.trust}% · ${base.fatigue}% · R${base.riskScore}</strong>
        <small>${escapeHtml(baseSourceLabel(signal))}${signal.baseSourceUnitName ? ` · ${escapeHtml(signal.baseSourceUnitName)}` : ""}</small>
      </article>
      <article>
        <span>Session Adjusted</span>
        <strong>${hasQuant ? `${quant.responseCount}명 응답 · 신뢰도 ${Math.round((signal.sessionConfidence || 0) * 100)}%` : "응답 없음"}</strong>
        <small>수용 ${signedDelta(deltaChange)} · 신뢰 ${signedDelta(deltaTrust)} · 피로 ${signedDelta(deltaFatigue)} · 리스크 ${signedDelta(deltaRisk)}</small>
      </article>
      <article>
        <span>Text Risk Signal</span>
        <strong>${hasText ? `${text.responseCount}건 · 피로 ${Math.round(text.fatigueTextRisk || 0)} · 불신 ${Math.round(text.trustTextRisk || 0)}` : "응답 없음"}</strong>
        <small>사일로 ${Math.round(text.collaborationTextRisk || 0)} · 팀 긍정 ${Math.round(text.teamPositiveSignal || 0)} · 실행효과 ${Math.round(text.programEfficacySignal || 0)}</small>
      </article>
    </div>
  `;
}

function recommendationFromCultureSignal(signal, fallback) {
  if (signal.quadrant === "위험") {
    return "Pulse 문항상 신뢰와 수용도가 동시에 약한 위험 구간입니다. 리더 브리핑, 심리적 안전 대화, 후속조치 약속을 먼저 설계하세요.";
  }
  if (signal.quadrant === "피로도/지원 필요") {
    return "수용도는 있지만 피로도/지원 필요 신호가 높습니다. 실행 과제를 늘리기보다 회복, 인정, 매니저 지원 루틴을 먼저 배치하세요.";
  }
  if (signal.quadrant === "관망/정체") {
    return "급한 위험은 낮지만 변화 에너지가 충분히 올라오지 않은 구간입니다. 작은 성공 경험과 역할 명확화를 통해 참여 진입 장벽을 낮추세요.";
  }
  return fallback || "안정 구간입니다. 현재 신뢰 자산을 유지하면서 앰버서더와 성공 사례를 확산하세요.";
}

// 분포 캘리브레이션: 긍정 응답(수용·신뢰)이 과대평가되는 경향을 보정해 낮추고, 피로는 상향한다.
// (요청: 변화수용도가 관대 → 대부분 2·3분면으로, 피로도 ↑, 신뢰도 함께 보정. 값만 보정하고 맵 공식은 유지.)
const CULTURE_CALIBRATION = { positiveDrop: 24, fatigueLift: 12 };
function calibratePositive(score) {
  return score == null ? score : clamp(Math.round(Number(score) - CULTURE_CALIBRATION.positiveDrop), 0, 100);
}
function calibrateFatigue(score) {
  return score == null ? score : clamp(Math.round(Number(score) + CULTURE_CALIBRATION.fatigueLift), 0, 100);
}

function signalFromPulse(unit, context = pulseContextForUnit(unit)) {
  const pulse = context?.pulse;
  if (!pulse) return null;

  const questionMap = pulseQuestionMap(pulse);
  const changeMetric = weightedPulseScore(questionMap, CULTURE_METRIC_FORMULA.changeAcceptance, false, { lowPenalty: 0.68 });
  const trustMetric = weightedPulseScore(questionMap, CULTURE_METRIC_FORMULA.trust);
  const fatigueMetric = weightedPulseScore(questionMap, CULTURE_METRIC_FORMULA.fatigue, true);
  const riskMetric = weightedPulseScore(questionMap, CULTURE_METRIC_FORMULA.risk, true);
  const changeAcceptance = calibratePositive(changeMetric.value ?? clamp(Math.round(pulse.fav - 0.68 * (pulse.low || 0)), 0, 100));
  const trust = calibratePositive(trustMetric.value ?? clamp(Math.round(pulse.fav * 0.72 + Math.max(0, 100 - pulse.low) * 0.28), 0, 100));
  const fatigue = calibrateFatigue(fatigueMetric.value ?? clamp(Math.round(pulse.low * 1.18 + (pulse.tier === "risk" ? 15 : pulse.tier === "watch" ? 8 : 0)), 0, 100));
  const riskScore = riskMetric.value ?? (pulse.tier === "risk" ? 72 : pulse.tier === "watch" || pulse.reliab ? 52 : 28);
  const risk = riskLevelFromScore(riskScore);
  const coords = cultureMapCoordinates({ changeAcceptance, trust, fatigue, riskScore, risk });
  const quadrant = cultureQuadrant(coords.x, coords.y);
  const supportNeeded = supportNeededFromSignal({ trust, fatigue, riskScore, quadrant });
  const drivers = [
    ...fatigueMetric.drivers.map((driver) => ({ ...driver, metric: "피로도 / 지원 필요" })),
    ...riskMetric.drivers.map((driver) => ({ ...driver, metric: "문화 리스크" })),
    ...trustMetric.drivers.map((driver) => ({ ...driver, metric: "신뢰도" })),
    ...changeMetric.drivers.map((driver) => ({ ...driver, metric: "변화 수용도" })),
  ];
  const pulseTags = [
    pulseTierLabel(pulse.tier),
    `긍정 ${pulse.fav}%`,
    `부정 ${pulse.low}%`,
    quadrant,
    supportNeeded ? "지원 필요" : "",
    pulse.reliab ? "신뢰도 검토" : "",
  ].filter(Boolean);

  return {
    readiness: changeAcceptance,
    changeAcceptance,
    trust,
    fatigue,
    risk,
    riskScore,
    mapX: coords.x,
    mapY: coords.y,
    quadrant,
    supportNeeded,
    drivers,
    inheritedPulse: Boolean(context.inheritedPulse),
    baseSource: context.baseSource || "directPulse",
    baseSourceUnitName: context.sourceUnit?.name || unit.name,
    tags: [...new Set([...(unit.tags || []), ...pulseTags])].slice(0, 6),
    recommendation: recommendationFromCultureSignal({ quadrant }, unit.recommendation),
  };
}

function manualSignalForUnit(unit) {
  const fallback = {
    readiness: calibratePositive(unit.readiness),
    changeAcceptance: calibratePositive(unit.readiness),
    trust: calibratePositive(unit.trust),
    fatigue: calibrateFatigue(unit.fatigue),
    risk: unit.risk,
    riskScore: unit.risk === "high" ? 72 : unit.risk === "medium" ? 52 : 28,
    tags: unit.tags || [],
    recommendation: unit.recommendation,
    inheritedPulse: false,
    baseSource: "manual",
    baseSourceUnitName: unit.name,
  };
  const coords = cultureMapCoordinates(fallback);
  fallback.mapX = coords.x;
  fallback.mapY = coords.y;
  fallback.quadrant = cultureQuadrant(coords.x, coords.y);
  fallback.supportNeeded = supportNeededFromSignal(fallback);
  fallback.drivers = [];
  return fallback;
}

function signalForUnit(unit) {
  const base = signalFromPulse(unit) || manualSignalForUnit(unit);
  const withBase = {
    ...base,
    pulseBase: {
      changeAcceptance: base.changeAcceptance,
      trust: base.trust,
      fatigue: base.fatigue,
      riskScore: base.riskScore,
      mapX: base.mapX,
      mapY: base.mapY,
      quadrant: base.quadrant,
    },
  };
  return applySessionFormulaV2(unit, withBase);
}

// Pulse Survey 분석 결과로 조직의 상태(state)를 정의한다. 필터/카드에서 공통 사용.
const ORG_STATUS_FILTERS = [
  { key: "healthy", label: "긍정 안정" },
  { key: "watch", label: "주의 관찰" },
  { key: "support", label: "지원 시급" },
  { key: "review", label: "신뢰도 검토" },
];

function pulseStatusDef(unit) {
  const context = pulseContextForUnit(unit);
  const p = context?.pulse;
  if (!p) return null;
  const signal = signalForUnit(unit);
  if (signal?.supportNeeded) {
    return {
      key: "support",
      label: signal.quadrant === "위험" ? "위험" : "지원 필요",
      note: `수용 ${signal.changeAcceptance}% · 리스크 ${signal.riskScore}%`,
      tone: signal.quadrant === "위험" ? "risk" : "watch",
    };
  }
  if (p.reliab || p.tier === "check")
    return { key: "review", label: "신뢰도 검토", note: "점수가 고점, 데이터 확인 필요", tone: "check" };
  if (p.tier === "watch")
    return { key: "watch", label: "주의 관찰", note: `긍정 ${p.fav}% · 추세 관찰`, tone: "watch" };
  return { key: "healthy", label: "긍정 안정", note: `긍정 ${p.fav}% · 부정 낮음`, tone: "stable" };
}

// 아바타: 리더 성(姓) 이니셜 + 이름 해시 기반 배경색 (사진은 unit.photo로 추후 교체)
function unitInitial(name) {
  const n = (name || "").trim();
  if (!n || n === "미정" || n.endsWith(" 미정")) return "";
  return n.charAt(0);
}
function avatarColor(seed) {
  let h = 0;
  const s = seed || "";
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return `hsl(${h % 360} 58% 50%)`;
}
function isCardOpen(id) {
  return Array.isArray(state.openCardIds) && state.openCardIds.includes(id);
}
// 업로드 이미지를 정사각형 썸네일(데이터 URL)로 축소 — localStorage 용량 절약
function readImageDownscaled(file, max = 160) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const side = Math.min(img.width, img.height);
        const sx = (img.width - side) / 2;
        const sy = (img.height - side) / 2;
        const canvas = document.createElement("canvas");
        canvas.width = max;
        canvas.height = max;
        canvas.getContext("2d").drawImage(img, sx, sy, side, side, 0, 0, max, max);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}
// 카드 열기 시 표시하는 진행 현황 칩 (pulseSurvey는 Pulse 데이터로 자동 판정)
const ORG_STATUS_CHIPS = [
  { key: "townhall", label: "타운홀", short: "타운홀", session: true },
  { key: "pulseSurvey", label: "Pulse", short: "Pulse", session: false },
  { key: "wowTeam", label: "WOW·팀", short: "W·팀", session: true },
  { key: "wowLead", label: "WOW·팀장", short: "W·팀장", session: true },
  { key: "teamSurvey", label: "팀 설문", short: "설문", session: true },
];

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// 캘린더에 등록한 세션 일정의 날짜가 오늘 이전(과거 포함)이면 완료로 간주.
// 과거 날짜를 넣으면 즉시 완료, 미래 날짜는 그 날이 지나면 자동 완료된다.
function sessionDoneForUnit(unitId, category) {
  const today = todayISO();
  return (state.sessions || []).some(
    (s) => s.teamId === unitId && s.category === category && s.date && s.date <= today,
  );
}

// 조직에 (유형 무관) 완료된 세션 일정이 하나라도 있는지 — 필터용
function unitSessionDone(unitId) {
  const today = todayISO();
  return (state.sessions || []).some((s) => s.teamId === unitId && s.date && s.date <= today);
}

// 진행 현황 칩(읽기 전용): 카드/폴더/상세 공용. Pulse는 데이터, 세션류는 캘린더 기준.
// WOW x BALANCE 세션 트랙: 팀 세션(7단계) · 팀장 세션(4단계)
const WOW_TRACKS = {
  team: { label: "팀 세션", short: "팀", steps: ["WOW 세션", "명상·호흡 세션", "커뮤니케이션 세션", "중간 서베이", "점심 간담회", "협동 웰니스", "마무리 웰니스"] },
  lead: { label: "팀장 세션", short: "팀장", steps: ["회복·에너지 관리", "자기 이해·리더십 인식", "건강한 소통·협업", "네트워킹"] },
};
function trackSteps(track) { return (WOW_TRACKS[track] || {}).steps || []; }
// 트랙 변경 시 단계 드롭다운 갱신 (캘린더 세션 폼)
function onSessionTrackChange() {
  const track = document.getElementById("sessionTrackInput")?.value || "team";
  const sel = document.getElementById("sessionStepInput");
  if (sel) sel.innerHTML = trackSteps(track).map((s, i) => `<option value="${i + 1}">${i + 1}. ${escapeHtml(s)}</option>`).join("");
}
// 특정 조직(팀)이 트랙에서 완료(오늘 이전 일정)한 단계 집합
function teamTrackDoneSteps(unitId, track) {
  const today = todayISO();
  const done = new Set();
  (state.sessions || []).forEach((s) => {
    if (s.teamId === unitId && s.track === track && s.step && s.date && s.date <= today) done.add(Number(s.step));
  });
  return done;
}
function trackSummary(track) {
  const steps = trackSteps(track), total = steps.length, today = todayISO();
  const byTeam = {};
  (state.sessions || []).forEach((s) => {
    if (s.track !== track || !s.teamId || !s.step) return;
    const b = (byTeam[s.teamId] = byTeam[s.teamId] || { sched: new Set(), done: new Set(), name: s.teamName || (getUnit(s.teamId) || {}).name || s.teamId });
    b.sched.add(Number(s.step));
    if (s.date && s.date <= today) b.done.add(Number(s.step));
  });
  const ids = Object.keys(byTeam);
  const stepCounts = steps.map((_, i) => ids.filter((id) => byTeam[id].done.has(i + 1)).length);
  const doneInstances = ids.reduce((a, id) => a + byTeam[id].done.size, 0);
  const teamRows = ids.map((id) => ({ id, name: byTeam[id].name, done: byTeam[id].done.size, sched: byTeam[id].sched.size, total })).sort((a, b) => b.done - a.done);
  return {
    track, steps, total,
    participating: ids.length,
    finished: ids.filter((id) => total > 0 && byTeam[id].done.size >= total).length,
    stepCounts, teamRows,
    overall: ids.length ? Math.round((doneInstances / (ids.length * total)) * 100) : 0,
  };
}

// 진행 현황 칩: Pulse + 팀 세션 진행 + 팀장 세션 진행 (읽기 전용, 캘린더 기준)
function renderStatusChips(unit, opts = {}) {
  const cls = "schip" + (opts.mini ? " mini" : "");
  const pulse = pulseForUnit(unit.id);
  const pOn = Boolean(pulse) || Boolean(unit.pulseSurvey);
  const team = teamTrackDoneSteps(unit.id, "team").size, teamTot = trackSteps("team").length;
  const lead = teamTrackDoneSteps(unit.id, "lead").size, leadTot = trackSteps("lead").length;
  const items = [
    { key: "pulse", txt: "Pulse", on: pOn, hint: `Pulse ${pOn ? "완료" : "미연동"}` },
    { key: "team", txt: `팀 ${team}/${teamTot}`, on: team > 0, hint: `팀 세션 ${team}/${teamTot} 단계 완료` },
    { key: "lead", txt: `팀장 ${lead}/${leadTot}`, on: lead > 0, hint: `팀장 세션 ${lead}/${leadTot} 단계 완료` },
  ];
  const shown = opts.sessionsOnly ? items.filter((i) => i.key !== "pulse") : items;
  return shown.map((c) => `<span class="${cls} ${c.on ? "on" : ""}" title="${escapeHtml(c.hint)}">${escapeHtml(c.txt)}</span>`).join("");
}

function renderUnitCard(unit, childCount = 0) {
  const people = getPeopleForUnit(unit.id, unit.level !== "team");
  const signal = signalForUnit(unit);
  const selected = unit.id === state.selectedUnitId ? "selected" : "";
  const selectedPath = new Set([state.selectedUnitId, ...getAncestorIds(state.selectedUnitId)]);
  const inPath = selectedPath.has(unit.id) ? "in-path" : "";
  const expanded = isExpanded(unit.id);
  const open = isCardOpen(unit.id);
  const pulse = pulseForUnit(unit.id);
  const status = pulseStatusDef(unit);
  const tone = status ? status.tone : null;
  const cardTone = tone ? `tone-${tone}` : "";
  const scoreTone = tone ? `pulse-${tone}` : `read-${signal.risk}`;
  const score = signal.changeAcceptance;
  const scoreLabel = "변화 수용도";
  const scoreSuffix = "%";
  // 리더: 이름(크게/굵게) + 직급(전무·상무·이사) · 직무(부문장·본부장·팀장)
  const role = leaderRoleLabel(unit); // 직무
  const hasLeader = hasAssignedLeader(unit);
  const titleTxt = unit.leaderTitle ? leaderTitleLabel(unit.leaderTitle) : ""; // 직급
  const leaderMeta = [titleTxt, role].filter(Boolean).join(" · ");
  const leaderBlock = hasLeader
    ? `<span class="unit-leader"><b class="leader-name">${escapeHtml(unit.leader)}</b><span class="leader-meta">${escapeHtml(leaderMeta)}</span></span>`
    : `<span class="unit-leader"><span class="leader-meta">${escapeHtml(role)} 미정</span></span>`;
  const avSeed = hasLeader ? unit.leader : unit.name;
  const initial = unitInitial(hasLeader ? unit.leader : unit.name) || (unit.name || "·").charAt(0);
  const avatar = unit.photo
    ? `<span class="unit-avatar has-photo photo-trigger" data-upload-unit-photo="${escapeHtml(unit.id)}" title="사진 변경"><img src="${escapeHtml(unit.photo)}" alt="${escapeHtml(leaderNameLabel(unit))}" /></span>`
    : `<span class="unit-avatar photo-trigger" data-upload-unit-photo="${escapeHtml(unit.id)}" style="--av:${avatarColor(avSeed)}" title="사진 업로드">${escapeHtml(initial)}</span>`;
  const chips = renderStatusChips(unit);
  const keywords = (signal.tags || []).filter(Boolean);
  return `
    <article class="unit-card ${cardTone} risk-${signal.risk} ${selected} ${inPath} ${open ? "card-open" : ""}" draggable="${unit.level !== "company"}" data-unit-card="${escapeHtml(unit.id)}" data-drag-unit-id="${escapeHtml(unit.id)}" data-drop-unit-id="${escapeHtml(unit.id)}">
      <button class="unit-head" type="button" data-card-open="${escapeHtml(unit.id)}" aria-expanded="${open}" aria-label="${escapeHtml(unit.name)} 카드 ${open ? "닫기" : "열기"}">
        ${avatar}
        <span class="unit-head-main">
          <span class="unit-kicker"><span>${escapeHtml(displayOrgType(unit))}</span>${tone ? `<span class="unit-dot tone-${tone}"></span>` : ""}</span>
          <strong class="unit-name">${escapeHtml(unit.name)}</strong>
          ${leaderBlock}
        </span>
        <span class="card-caret">${open ? "▴" : "▾"}</span>
      </button>
      ${
        open
          ? `<div class="unit-detail">
              <div class="status-chips">${chips}</div>
              <div class="unit-score ${scoreTone}">
                <div class="score-head"><span>${scoreLabel}</span><b>${score}${scoreSuffix}</b></div>
                <div class="score-bar"><i style="width:${clamp(score, 0, 100)}%"></i></div>
              </div>
              ${
                status
                  ? `<div class="unit-state pulse-${status.tone}"><b>${escapeHtml(status.label)}</b><span>${escapeHtml(status.note)}</span></div>`
                  : `<div class="unit-state read-${signal.risk}"><b>${escapeHtml(formatRisk(signal.risk))}</b><span>변화 수용도 ${signal.readiness} 기준</span></div>`
              }
              ${keywords.length ? `<div class="unit-keywords">${keywords.slice(0, 4).map((t) => `<span class="kw">${escapeHtml(t)}</span>`).join("")}</div>` : ""}
              <div class="card-foot">
                <button class="card-detail-link" type="button" data-open-detail="${escapeHtml(unit.id)}">상세 · 편집 →</button>
              </div>
            </div>`
          : ""
      }
      ${
        childCount
          ? `<button class="expand-button ${expanded ? "expanded" : ""}" type="button" data-toggle-unit="${escapeHtml(unit.id)}" aria-label="${escapeHtml(unit.name)} 하위 조직 ${expanded ? "접기" : "펼치기"}" title="${expanded ? "하위 조직 접기" : "하위 조직 펼치기"}">
              <span>${expanded ? "−" : "+"}</span>
              <small>${childCount}</small>
            </button>`
          : ""
      }
    </article>
  `;
}

function renderOrgInspector(unit) {
  const pulse = pulseForUnit(unit.id);
  const status = pulseStatusDef(unit);
  const signal = signalForUnit(unit);
  const people = getPeopleForUnit(unit.id, unit.level !== "team");
  const directPeople = getPeopleForUnit(unit.id, false);
  const childUnits = getChildren(unit.id);
  const sortedPeople = sortPeopleForDisplay(people);
  const sortedDirectPeople = sortPeopleForDisplay(directPeople);
  const visibleMembers = sortedDirectPeople.length ? sortedDirectPeople : sortedPeople.slice(0, 20);
  const memberScopeLabel = directPeople.length ? "직접 등록 팀원" : "하위 포함 팀원";
  const memberCountLabel = directPeople.length || people.length <= visibleMembers.length
    ? `${visibleMembers.length}명 표시`
    : `${visibleMembers.length}/${people.length}명 표시`;
  const statusLabel = status?.label || formatRisk(signal.risk);
  const statusNote = `사분면 ${signal.quadrant} · X ${signal.mapX} · Y ${signal.mapY}`;
  const tone = status?.tone || signal.risk;
  const sourceNote = pulse && unit.level !== "team" ? `Pulse ${pulse.sources.join(", ")}` : "수동 설정값";

  return `
    <aside class="org-inspector tone-${escapeHtml(tone)}" aria-label="선택 조직 요약">
      <header class="inspector-head">
        <div>
          <p class="eyebrow">Selected Organization</p>
          <h3>${escapeHtml(unit.name)}</h3>
          <span>${escapeHtml(displayOrgType(unit))} · ${escapeHtml(getParentName(unit))}</span>
        </div>
        <button class="icon-button" type="button" data-close-inspector aria-label="선택 조직 요약 닫기">×</button>
      </header>

      <div class="inspector-action-list top-actions-list">
        <button type="button" data-open-detail-modal="settings">설정하기</button>
        <button type="button" onclick="if(typeof showView==='function')showView('pulse')">Pulse 분석</button>
      </div>

      <section class="inspector-state">
        <span>현재 상태</span>
        <strong>${escapeHtml(statusLabel)}</strong>
        <p>${escapeHtml(statusNote)}</p>
      </section>

	      <div class="inspector-metrics">
	        <article><span>변화 수용도</span><strong>${signal.changeAcceptance}%</strong></article>
	        <article><span>신뢰도</span><strong>${signal.trust}%</strong></article>
	        <article><span>피로도 / 지원 필요</span><strong>${signal.fatigue}%</strong></article>
	        <article><span>문화 리스크</span><strong>${signal.riskScore}%</strong></article>
	        <article><span>범위</span><strong>${people.length || unit.members}명</strong></article>
	      </div>
		      ${renderFormulaV2Breakdown(signal)}

	      <section class="inspector-section">
        <div class="inspector-section-title-row">
          <h4>맵 위치 근거</h4>
          <span>${escapeHtml(sourceNote)}</span>
        </div>
        ${renderCultureDrivers(signal, true) || `<div class="recommend-card">팀 단위는 설정값을 기준으로 표시됩니다. 설정하기에서 네 개 지표를 조정하면 맵 위치가 바로 바뀝니다.</div>`}
      </section>

      <section class="inspector-section">
        <div class="inspector-section-title-row">
          <h4>진행 현황</h4>
          <span>캘린더 일정 기준 자동</span>
        </div>
        <div class="status-chips inspector-chips">${renderStatusChips(unit)}</div>
      </section>

      <section class="inspector-section">
        <h4>${escapeHtml(leaderRoleLabel(unit))}</h4>
        <div class="inspector-leader">
          ${personAvatar({ name: leaderNameLabel(unit), photo: unit.photo })}
          <div>
            <strong>${escapeHtml(leaderNameLabel(unit))}</strong>
            <span>${[leaderTitleLabel(unit.leaderTitle), leaderRoleLabel(unit)].filter(Boolean).map(escapeHtml).join(" · ")}</span>
          </div>
        </div>
      </section>

      <section class="inspector-section">
        <h4>구성</h4>
        <div class="inspector-chip-row">
          <span>${childUnits.length}개 하위 조직</span>
          <span>${directPeople.length}명 직접 등록</span>
          ${signal.tags.slice(0, 2).map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
      </section>

      <section class="inspector-section">
        <div class="inspector-section-title-row">
          <h4>팀원</h4>
          <span>${escapeHtml(memberScopeLabel)} · ${escapeHtml(memberCountLabel)}</span>
        </div>
        ${
          visibleMembers.length
            ? `<div class="inspector-member-list">
                ${visibleMembers.map(renderInspectorMemberRow).join("")}
              </div>`
            : `<div class="inspector-empty">등록된 팀원이 없습니다. 설정하기에서 구성원을 추가할 수 있습니다.</div>`
        }
      </section>

      <section class="inspector-section">
        <h4>추천 운영</h4>
        <p>${escapeHtml(signal.recommendation)}</p>
      </section>
    </aside>
  `;
}

function personAvatar(person, cls = "member-avatar") {
  const initial = unitInitial(person.name) || (person.name || "·").charAt(0);
  const tag = person.id ? "button" : "span";
  const attrs = person.id ? `type="button" data-upload-person-photo="${escapeHtml(person.id)}" title="사진 변경"` : "";
  return person.photo
    ? `<${tag} class="${cls} has-photo photo-trigger" ${attrs}><img src="${escapeHtml(person.photo)}" alt="${escapeHtml(person.name)}" /></${tag}>`
    : `<${tag} class="${cls} photo-trigger" ${attrs} style="--av:${avatarColor(person.name)}" title="사진 업로드">${escapeHtml(initial)}</${tag}>`;
}

function renderInspectorMemberRow(person) {
  return `
    <article class="inspector-member-row" draggable="true" data-drag-person-id="${escapeHtml(person.id)}" data-person-row-unit="${escapeHtml(person.unitId)}" title="드래그해서 순서를 바꾸거나 다른 팀으로 이동">
      <div class="member-line-main">
        <span class="drag-grip" aria-hidden="true">⠿</span>
        ${personAvatar(person)}
        <div>
          <strong>${escapeHtml(person.name)}</strong>
          <span>${escapeHtml(person.position)} · 직급 ${escapeHtml(leaderTitleLabel(person.title))}</span>
        </div>
        <div class="member-actions">
          <button type="button" class="member-delete-button" data-delete-person="${escapeHtml(person.id)}" aria-label="${escapeHtml(person.name)} 삭제">삭제</button>
        </div>
      </div>
    </article>
  `;
}

function renderBar(label, value, className) {
  return `
    <div class="bar-row">
      <span>${escapeHtml(label)}</span>
      <div class="bar-track"><div class="bar-fill ${escapeHtml(className)}" style="width:${clamp(value, 0, 100)}%"></div></div>
      <span>${value}</span>
    </div>
  `;
}

function drawOrgConnections() {
  const layer = document.getElementById("connectorLayer");
  const surface = document.getElementById("orgZoomSurface");
  if (!layer || !surface || state.view !== "official") return;

  const baseRect = surface.getBoundingClientRect();
  const scale = state.orgZoom || 1;
  const cards = [...surface.querySelectorAll("[data-unit-card]")];
  const cardById = new Map(cards.map((card) => [card.dataset.unitCard, card]));

  if (!cards.length) {
    layer.innerHTML = "";
    return;
  }

  const rectFor = (element) => {
    const rect = element.getBoundingClientRect();
    return {
      left: (rect.left - baseRect.left) / scale,
      top: (rect.top - baseRect.top) / scale,
      right: (rect.right - baseRect.left) / scale,
      bottom: (rect.bottom - baseRect.top) / scale,
      width: rect.width / scale,
      height: rect.height / scale,
    };
  };

  const surfaceWidth = Math.ceil(Math.max(...cards.map((card) => rectFor(card).right)) + 80);
  const surfaceHeight = Math.ceil(Math.max(...cards.map((card) => rectFor(card).bottom)) + 80);
  layer.setAttribute("viewBox", `0 0 ${surfaceWidth} ${surfaceHeight}`);
  layer.setAttribute("width", surfaceWidth);
  layer.setAttribute("height", surfaceHeight);

  const paths = cards
    .map((card) => {
      const unit = getUnit(card.dataset.unitCard);
      const parentCard = unit?.parentId ? cardById.get(unit.parentId) : null;
      if (!unit || !parentCard) return "";

      const parentRect = rectFor(parentCard);
      const childRect = rectFor(card);

      if (state.orgLayout === "vertical") {
        const startX = parentRect.left + parentRect.width / 2;
        const startY = parentRect.bottom + 6;
        const endX = childRect.left + childRect.width / 2;
        const endY = childRect.top - 6;
        const bend = Math.max(28, Math.abs(endY - startY) * 0.52);
        return `<path d="M ${startX} ${startY} C ${startX} ${startY + bend}, ${endX} ${endY - bend}, ${endX} ${endY}" />`;
      }

      const startX = parentRect.right + 6;
      const startY = parentRect.top + parentRect.height / 2;
      const endX = childRect.left - 6;
      const endY = childRect.top + childRect.height / 2;
      const bend = Math.max(34, Math.abs(endX - startX) * 0.5);
      return `<path d="M ${startX} ${startY} C ${startX + bend} ${startY}, ${endX - bend} ${endY}, ${endX} ${endY}" />`;
    })
    .join("");

  layer.innerHTML = `
    <defs>
      <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6d5dfc" stop-opacity="0.42" />
        <stop offset="55%" stop-color="#2563eb" stop-opacity="0.32" />
        <stop offset="100%" stop-color="#14b8a6" stop-opacity="0.48" />
      </linearGradient>
    </defs>
    <g fill="none" stroke="url(#connectorGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 7">
      ${paths}
    </g>
  `;
}

function cultureIndex(signal) {
  // 전체 문화 인덱스: 수용·신뢰(긍정)와 낮은 피로·낮은 리스크를 종합한 건강도 (0-100, 높을수록 건강)
  return clamp(Math.round(0.3 * signal.changeAcceptance + 0.3 * signal.trust + 0.2 * (100 - signal.fatigue) + 0.2 * (100 - signal.riskScore)), 0, 100);
}

// x=높을수록 좋음(수용/신뢰), y=높을수록 주의(피로/리스크)
function mapQuadrantTone(xVal, yVal) {
  if (xVal < 50 && yVal >= 50) return "risk";
  if (xVal >= 50 && yVal >= 50) return "support";
  if (xVal >= 50 && yVal < 50) return "stable";
  return "watch";
}

function renderMapNode(unit, signal, xVal, yVal, index, meta) {
  const jx = ((index % 3) - 1) * 2.2;
  const jy = ((Math.floor(index / 3) % 3) - 1) * 2.0;
  const left = clamp(xVal + jx, 6, 94);
  const top = clamp(100 - yVal + jy, 6, 94);
  const tone = mapQuadrantTone(xVal, yVal);
  const selected = unit.id === state.selectedUnitId ? "selected" : "";
  return `
    <article class="network-node ${tone} ${selected}" style="--x:${left}%; --y:${top}%">
      <button type="button" data-open-detail="${escapeHtml(unit.id)}" aria-label="${escapeHtml(unit.name)} 상세 정보 열기">
        <span class="network-dot"></span>
        <strong>${escapeHtml(unit.name)}</strong>
        <small>${escapeHtml(meta.xLabel)} ${xVal} · ${escapeHtml(meta.yLabel)} ${yVal}</small>
      </button>
    </article>
  `;
}

function renderCultureMapPanel(sigs, meta) {
  return `
    <div class="culture-map-panel">
      <div class="cmp-head"><h4>${escapeHtml(meta.title)}</h4><span>${escapeHtml(meta.sub)}</span></div>
      <div class="quad-legend mini" aria-label="사분면 안내">
        ${meta.legend.map((l) => `<span class="ql ql-${l.tone}"><i></i>${escapeHtml(l.label)}</span>`).join("")}
      </div>
      <div class="network-canvas quad-tinted">
        <div class="axis-line horizontal"></div>
        <div class="axis-line vertical"></div>
        <span class="axis-label axis-x">${escapeHtml(meta.xLabel)} →</span>
        <span class="axis-label axis-y">↑ ${escapeHtml(meta.yLabel)}</span>
        ${sigs.length ? sigs.map((s, i) => renderMapNode(s.unit, s.signal, s.signal[meta.xKey], s.signal[meta.yKey], i, meta)).join("") : `<div class="empty-state"><strong>표시할 조직이 없습니다</strong><span>검색이나 필터를 조정해보세요.</span></div>`}
      </div>
    </div>
  `;
}

function renderNetworkView() {
  const levels = [
    { id: "company", label: "전사" },
    { id: "division", label: "부문" },
    { id: "hq", label: "본부" },
    { id: "team", label: "팀" },
  ];
  const units = getVisibleUnits().filter((unit) => unit.level === state.networkLevel);
  const sigs = units.map((unit) => ({ unit, signal: signalForUnit(unit) }));
  const avg = (key) => (sigs.length ? Math.round(sigs.reduce((sum, s) => sum + (Number(s.signal[key]) || 0), 0) / sigs.length) : 0);
  const indexScore = sigs.length ? Math.round(sigs.reduce((sum, s) => sum + cultureIndex(s.signal), 0) / sigs.length) : 0;
  const supportCount = sigs.filter((s) => s.signal.supportNeeded).length;
  const mapA = { title: "변화 동력", sub: "수용도 × 피로도", xKey: "changeAcceptance", yKey: "fatigue", xLabel: "변화 수용도", yLabel: "피로도", legend: [{ tone: "stable", label: "주도·안정" }, { tone: "support", label: "의욕·소진위험" }, { tone: "risk", label: "저항·소진" }, { tone: "watch", label: "관망·정체" }] };
  const mapB = { title: "관계 건강", sub: "신뢰도 × 리스크", xKey: "trust", yKey: "riskScore", xLabel: "신뢰도", yLabel: "문화 리스크", legend: [{ tone: "stable", label: "건강" }, { tone: "support", label: "신뢰有·리스크" }, { tone: "risk", label: "위험" }, { tone: "watch", label: "관망" }] };
  document.getElementById("viewRoot").innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">Culture Propagation Map</p>
        <h3>조직문화 확산 맵</h3>
        <p>수용도×피로도, 신뢰도×리스크 두 지도로 나눠 봅니다. 합산이 아닌 원지표라 위치 해석이 명확합니다.</p>
      </div>
      <div class="panel-actions">
        <div class="segmented compact" aria-label="문화지도 레벨">
          ${levels.map((level) => `<button class="segment ${state.networkLevel === level.id ? "active" : ""}" data-network-level="${level.id}" type="button">${level.label}</button>`).join("")}
        </div>
        <span class="status-pill">${units.length}개 표시</span>
      </div>
    </div>
    <div class="culture-index-row">
      <article class="culture-index-card">
        <span>전체 문화 인덱스</span>
        <strong>${indexScore}</strong>
        <em>수용·신뢰 + 낮은 피로·리스크 종합 (100=건강)</em>
      </article>
      <article><span>평균 변화 수용도</span><strong>${avg("changeAcceptance")}%</strong></article>
      <article><span>평균 신뢰도</span><strong>${avg("trust")}%</strong></article>
      <article><span>평균 피로도</span><strong>${avg("fatigue")}%</strong></article>
      <article><span>평균 리스크 / 지원</span><strong>${avg("riskScore")}% · ${supportCount}</strong></article>
    </div>
    <div class="culture-map-pair">
      ${renderCultureMapPanel(sigs, mapA)}
      ${renderCultureMapPanel(sigs, mapB)}
    </div>
  `;
}

function networkPosition(unit, index = 0) {
  const signal = signalForUnit(unit);
  const xOffset = ((index % 3) - 1) * 2.4;
  const yOffset = (Math.floor(index / 3) % 3 - 1) * 2.2;
  const x = clamp(signal.mapX + xOffset, 8, 92);
  const y = clamp(100 - signal.mapY + yOffset, 8, 92);
  return { x, y };
}

function networkKind(unit) {
  const signal = signalForUnit(unit);
  if (signal.quadrant === "위험") return "risk";
  if (signal.quadrant === "피로도/지원 필요" || signal.supportNeeded) return "support";
  if (signal.quadrant === "안정") return "stable";
  if (signal.tags.includes("확산 중심") || signal.tags.includes("앰버서더 후보")) return "diffusion";
  if (signal.tags.includes("연결자") || signal.tags.includes("연결자 많음")) return "bridge";
  return "watch";
}

function networkLabel(kind) {
  return {
    diffusion: "확산 중심",
    bridge: "연결자",
    risk: "위험",
    support: "지원 필요",
    stable: "안정",
    watch: "관찰",
  }[kind];
}

function renderNetworkNode(unit, index) {
  const position = networkPosition(unit, index);
  const kind = networkKind(unit);
  const signal = signalForUnit(unit);
  const selected = unit.id === state.selectedUnitId ? "selected" : "";
  const drivers = cultureDriverSummary(signal);
  return `
    <article class="network-node ${kind} ${selected}" style="--x:${position.x}%; --y:${position.y}%">
      <button type="button" data-open-detail="${escapeHtml(unit.id)}" aria-label="${escapeHtml(unit.name)} 상세 정보 열기">
        <span class="network-dot"></span>
        <strong>${escapeHtml(unit.name)}</strong>
	        <small>${escapeHtml(signal.quadrant || networkLabel(kind))} · X ${signal.mapX} · Y ${signal.mapY}<br>Pulse Base ${signal.pulseBase?.changeAcceptance ?? signal.changeAcceptance}/${signal.pulseBase?.trust ?? signal.trust} · Session ${signal.sessionQuant?.responseCount || 0} · Text ${signal.textSignal?.responseCount || 0}<br>수용 ${signal.changeAcceptance} · 신뢰 ${signal.trust} · 리스크 ${signal.riskScore} · 피로 ${signal.fatigue}${drivers.length ? `<br>${drivers.map((driver) => `Q${driver.no} ${driver.label}`).join(" / ")}` : ""}</small>
      </button>
    </article>
  `;
}

function renderNetworkLink(parent, child) {
  if (!parent || !child) return "";
  const p1 = networkPosition(parent);
  const p2 = networkPosition(child);
  const stroke = signalForUnit(child).risk === "high" ? "#be5b45" : "#94a3a8";
  return `<line x1="${p1.x}" y1="${p1.y}" x2="${p2.x}" y2="${p2.y}" stroke="${stroke}" stroke-width="0.45" stroke-dasharray="2 2" vector-effect="non-scaling-stroke" />`;
}

function parseIsoDate(value) {
  const [year, month, day] = String(value || todayIso()).split("-").map(Number);
  return new Date(year || new Date().getFullYear(), (month || 1) - 1, day || 1);
}

function toIsoDate(date) {
  const local = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const offset = local.getTimezoneOffset();
  return new Date(local.getTime() - offset * 60 * 1000).toISOString().slice(0, 10);
}

function shiftCalendarDate(amount) {
  const date = parseIsoDate(state.selectedCalendarDate);
  if (state.calendarView === "month") date.setMonth(date.getMonth() + amount);
  else date.setDate(date.getDate() + amount * (state.calendarView === "week" ? 7 : 1));
  state.selectedCalendarDate = toIsoDate(date);
}

function formatCalendarTitle() {
  const date = parseIsoDate(state.selectedCalendarDate);
  if (state.calendarView === "month") return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
  if (state.calendarView === "week") {
    const start = new Date(date);
    start.setDate(date.getDate() - date.getDay());
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return `${start.getMonth() + 1}.${start.getDate()} - ${end.getMonth() + 1}.${end.getDate()}`;
  }
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
}

function sessionsForDate(iso) {
  return (state.sessions || [])
    .filter((session) => session.date === iso)
    .sort((a, b) => `${a.startTime || ""}`.localeCompare(`${b.startTime || ""}`));
}

function sessionTimeOptions(selected = "10:00") {
  const times = [];
  for (let hour = 8; hour <= 19; hour += 1) {
    times.push(`${String(hour).padStart(2, "0")}:00`);
    times.push(`${String(hour).padStart(2, "0")}:30`);
  }
  return times.map((time) => `<option value="${time}" ${time === selected ? "selected" : ""}>${time}</option>`).join("");
}

function participantCountForTeam(teamId) {
  const team = getUnit(teamId);
  if (!team) return 1;
  const directPeople = getPeopleForUnit(teamId, false);
  const hasLeaderPerson = hasAssignedLeader(team) && directPeople.some((person) => person.name === team.leader);
  return Math.max(1, directPeople.length + (hasAssignedLeader(team) && !hasLeaderPerson ? 1 : 0));
}

function renderSessionParticipantNote(teamId) {
  const count = participantCountForTeam(teamId);
  return `
    <div class="session-participant-note" id="sessionParticipantsPreview">
      <strong>${count}명</strong>
      <span>조직도 기준 자동 계산 · 팀장 포함</span>
    </div>
  `;
}

function sessionTeamUnits() {
  return state.units
    .filter((unit) => unit.level === "team" || displayOrgType(unit).includes("팀"))
    .sort((a, b) => (a.sourcePath || a.name).localeCompare(b.sourcePath || b.name, "ko"));
}

function teamPeopleForSession(teamId) {
  const team = getUnit(teamId);
  const direct = sortPeopleForDisplay(getPeopleForUnit(teamId, false));
  if (!team || !hasAssignedLeader(team)) return direct;
  const hasLeaderPerson = direct.some((person) => person.name === team.leader);
  if (hasLeaderPerson) return direct;
  return sortPeopleForDisplay([
    {
      id: `leader:${team.id}`,
      name: team.leader,
      title: team.leaderTitle || "",
      position: leaderRoleLabel(team),
      role: `${team.name} ${leaderRoleLabel(team)}`,
      unitId: team.id,
      sortOrder: -1,
      isSyntheticLeader: true,
    },
    ...direct,
  ]);
}

function sessionAbsentIds(session) {
  return Array.isArray(session?.absentPersonIds) ? session.absentPersonIds.filter(Boolean) : [];
}

function sessionActualParticipants(session) {
  const capacity = participantCountForTeam(session?.teamId);
  const validIds = new Set(teamPeopleForSession(session?.teamId).map((person) => person.id));
  const absentCount = sessionAbsentIds(session).filter((id) => validIds.has(id)).length;
  return Math.max(0, capacity - absentCount);
}

function absentPersonNames(session) {
  const byId = new Map(teamPeopleForSession(session?.teamId).map((person) => [person.id, person]));
  return sessionAbsentIds(session)
    .map((id) => byId.get(id)?.name)
    .filter(Boolean);
}

function isMobileCalendarLayout() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 600px)").matches;
}

function closeCalendarDayPopup() {
  const popup = document.getElementById("calendarDayPopup");
  if (popup) popup.remove();
}

function showCalendarDayPopup(iso) {
  const sessions = sessionsForDate(iso);
  closeCalendarDayPopup();
  if (!sessions.length) return;
  const popup = document.createElement("div");
  popup.id = "calendarDayPopup";
  popup.className = "calendar-day-popup";
  popup.innerHTML = `
    <div class="calendar-day-popup-card" role="dialog" aria-modal="true" aria-label="선택일 일정">
      <div class="calendar-day-popup-head">
        <div>
          <span>WOW x BALANCE</span>
          <strong>${escapeHtml(iso)} 일정</strong>
        </div>
        <button class="icon-button" type="button" data-close-calendar-popup aria-label="닫기">×</button>
      </div>
      <div class="calendar-day-popup-list">
        ${sessions.map((session) => renderSessionItem(session)).join("")}
      </div>
    </div>
  `;
  document.body.appendChild(popup);
}

function renderSessionItem(session, compact = false) {
  if (compact) {
    return `<span class="session-item compact"><b>${escapeHtml(session.startTime || "--:--")}</b>${escapeHtml(session.teamName || getUnit(session.teamId)?.name || "팀 미정")}</span>`;
  }
  const actual = sessionActualParticipants(session);
  const capacity = participantCountForTeam(session.teamId);

  return `
    <article class="session-item">
      <span class="session-time">${escapeHtml(session.startTime || "--:--")}</span>
      <strong>${escapeHtml(session.sessionName || "WOW x BALANCE 세션")}</strong>
      <small>${escapeHtml(session.teamName || getUnit(session.teamId)?.name || "팀 미정")} · ${actual}/${capacity}명</small>
      <button type="button" data-delete-session="${escapeHtml(session.id)}" aria-label="일정 삭제">삭제</button>
    </article>
  `;
}

function renderMonthCalendar() {
  const selected = parseIsoDate(state.selectedCalendarDate);
  const year = selected.getFullYear();
  const month = selected.getMonth();
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const blanks = first.getDay();
  const cells = [];
  for (let i = 0; i < blanks; i += 1) cells.push(`<div class="calendar-day muted"></div>`);
  for (let day = 1; day <= daysInMonth; day += 1) {
    const iso = toIsoDate(new Date(year, month, day));
    const sessions = sessionsForDate(iso);
    const active = iso === state.selectedCalendarDate ? "active" : "";
    cells.push(`
      <button class="calendar-day ${active}" type="button" data-pick-calendar-date="${iso}">
        <span>${day}</span>
        <div class="calendar-session-summary">${sessions.length ? `${sessions.length}개 일정` : ""}</div>
        <div class="calendar-session-details">${sessions.slice(0, 3).map((session) => renderSessionItem(session, true)).join("")}</div>
        ${sessions.length > 3 ? `<em>+${sessions.length - 3}</em>` : ""}
      </button>
    `);
  }

  return `
    <div class="calendar-weekdays">${["일", "월", "화", "수", "목", "금", "토"].map((day) => `<span>${day}</span>`).join("")}</div>
    <div class="calendar-grid">${cells.join("")}</div>
  `;
}

function renderWeekCalendar() {
  const selected = parseIsoDate(state.selectedCalendarDate);
  const start = new Date(selected);
  start.setDate(selected.getDate() - selected.getDay());
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });

  return `
    <div class="week-board">
      ${days
        .map((date) => {
          const iso = toIsoDate(date);
          const sessions = sessionsForDate(iso);
          return `
            <section class="week-day ${iso === state.selectedCalendarDate ? "active" : ""}">
              <button type="button" data-pick-calendar-date="${iso}">
                <span>${["일", "월", "화", "수", "목", "금", "토"][date.getDay()]}</span>
                <strong>${date.getDate()}</strong>
              </button>
              <div>${sessions.map((session) => renderSessionItem(session)).join("") || `<p class="calendar-empty">일정 없음</p>`}</div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderDayCalendar() {
  const sessions = sessionsForDate(state.selectedCalendarDate);
  return `
    <div class="day-board">
      ${sessions.map((session) => renderSessionItem(session)).join("") || `<div class="empty-state"><strong>오늘 등록된 세션이 없습니다</strong><span>오른쪽 입력 영역에서 WOW x BALANCE 일정을 추가하세요.</span></div>`}
    </div>
  `;
}

function renderCalendarView(targetId = "viewRoot") {
  const root = document.getElementById(targetId);
  if (!root) return;
  const teams = sessionTeamUnits();
  const selectedTeam = teams[0]?.id || "";
  const totalSessions = (state.sessions || []).length;

  root.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">WOW x BALANCE Calendar</p>
        <h3>캘린더</h3>
        <p>팀별 WOW x BALANCE 세션 일정을 월·주·일 단위로 확인하고 바로 추가합니다.</p>
      </div>
      <div class="panel-actions">
        <div class="segmented compact" aria-label="캘린더 보기">
          <button class="segment ${state.calendarView === "month" ? "active" : ""}" data-calendar-view="month" type="button">월</button>
          <button class="segment ${state.calendarView === "week" ? "active" : ""}" data-calendar-view="week" type="button">주</button>
          <button class="segment ${state.calendarView === "day" ? "active" : ""}" data-calendar-view="day" type="button">일</button>
        </div>
        <span class="status-pill">${totalSessions}개 일정</span>
      </div>
    </div>
    <div class="calendar-shell">
      <section class="calendar-main">
        <div class="calendar-toolbar">
          <button class="icon-button" type="button" data-calendar-shift="-1" aria-label="이전">‹</button>
          <strong>${escapeHtml(formatCalendarTitle())}</strong>
          <button class="icon-button" type="button" data-calendar-shift="1" aria-label="다음">›</button>
          <input id="calendarDateInput" type="date" value="${escapeHtml(state.selectedCalendarDate)}" />
        </div>
        ${
          state.calendarView === "month"
            ? renderMonthCalendar()
            : state.calendarView === "week"
              ? renderWeekCalendar()
              : renderDayCalendar()
        }
      </section>
      <aside class="calendar-side">
        <h4>세션 스케줄 추가</h4>
        <form id="sessionForm" class="session-form">
          <label>날짜<input id="sessionDateInput" type="date" value="${escapeHtml(state.selectedCalendarDate)}" required /></label>
          <label>시간
            <select id="sessionTimeInput" required>
              ${sessionTimeOptions("10:00")}
            </select>
          </label>
          <label>트랙
            <select id="sessionTrackInput" onchange="onSessionTrackChange()">
              <option value="team">팀 세션 (7단계)</option>
              <option value="lead">팀장 세션 (4단계)</option>
            </select>
          </label>
          <label>단계
            <select id="sessionStepInput">
              ${trackSteps("team").map((s, i) => `<option value="${i + 1}">${i + 1}. ${escapeHtml(s)}</option>`).join("")}
            </select>
          </label>
          <label>대상 팀
            <select id="sessionTeamInput" required>
              ${teams.map((team) => `<option value="${escapeHtml(team.id)}" ${team.id === selectedTeam ? "selected" : ""}>${escapeHtml(team.name)}</option>`).join("")}
            </select>
          </label>
          <label>참여인원</label>
          ${renderSessionParticipantNote(selectedTeam)}
          <input id="sessionParticipantsInput" type="hidden" value="${participantCountForTeam(selectedTeam)}" />
          <button class="primary-button wide" type="submit">일정 추가</button>
        </form>
        <div class="session-today-list">
          <h4>선택일 일정</h4>
          ${sessionsForDate(state.selectedCalendarDate).map((session) => renderSessionItem(session)).join("") || `<p class="calendar-empty">선택한 날짜에 일정이 없습니다.</p>`}
        </div>
      </aside>
    </div>
  `;
}

function teamSessions(teamId) {
  return (state.sessions || [])
    .filter((session) => session.teamId === teamId)
    .sort((a, b) => `${a.date || ""} ${a.startTime || ""}`.localeCompare(`${b.date || ""} ${b.startTime || ""}`));
}

function findTeamStepSession(teamId, track, step) {
  return teamSessions(teamId)
    .filter((session) => session.track === track && Number(session.step) === Number(step))
    .sort((a, b) => `${a.date || ""} ${a.startTime || ""}`.localeCompare(`${b.date || ""} ${b.startTime || ""}`))[0];
}

function isSessionDone(session) {
  return Boolean(session?.date && session.date <= todayISO());
}

function teamProgramSummary(team) {
  const sessions = teamSessions(team.id);
  // 수행률은 팀 세션(team 트랙) 단계만으로 계산한다. 팀장 세션(lead 트랙)은 완료율에서 제외(별도 관리).
  const totalSteps = trackSteps("team").length;
  const doneSteps = teamTrackDoneSteps(team.id, "team").size;
  const scheduledSteps = new Set(sessions.filter((session) => session.track && session.step).map((session) => `${session.track}:${session.step}`)).size;
  const completionRate = totalSteps ? Math.round((doneSteps / totalSteps) * 100) : 0;
  const participationRate = sessions.length
    ? Math.round(
        sessions.reduce((sum, session) => {
          const capacity = participantCountForTeam(session.teamId);
          return sum + (capacity ? sessionActualParticipants(session) / capacity : 0);
        }, 0) / sessions.length * 100,
      )
    : 0;
  return {
    sessions,
    totalSteps,
    doneSteps,
    scheduledSteps,
    completionRate,
    participationRate,
  };
}

function renderProgramDateChips(team, track) {
  return trackSteps(track)
    .map((stepName, index) => {
      const step = index + 1;
      const session = findTeamStepSession(team.id, track, step);
      const stateClass = session ? (isSessionDone(session) ? "done" : "planned") : "empty";
      const label = session ? `${session.date || "날짜 미정"} ${session.startTime || ""}`.trim() : "미등록";
      return `
        <div class="program-step ${stateClass}">
          <span>${step}. ${escapeHtml(stepName)}</span>
          <strong>${escapeHtml(label)}</strong>
        </div>
      `;
    })
    .join("");
}

function renderAbsentSelect(session) {
  const people = teamPeopleForSession(session.teamId);
  const selected = new Set(sessionAbsentIds(session));
  if (!people.length) {
    return `<p class="program-muted">조직도에 등록된 팀원이 없어 결석자를 선택할 수 없습니다.</p>`;
  }
  return `
    <div class="absent-picker" data-session-absentees="${escapeHtml(session.id)}">
      <div class="absent-picker-head">
        <span>빠진 사람 (탭하여 복수 선택)</span>
        <strong>불참 ${selected.size} / ${people.length}명</strong>
      </div>
      <div class="absent-chips">
        ${people
          .map((person) => `
            <button type="button" class="absent-chip ${selected.has(person.id) ? "on" : ""}" data-absent-toggle="${escapeHtml(person.id)}" aria-pressed="${selected.has(person.id) ? "true" : "false"}" title="${escapeHtml(person.name)}${person.isSyntheticLeader ? " · 조직장" : ""}">
              <span class="absent-chip-mark" aria-hidden="true"></span>${escapeHtml(person.name)}
            </button>`)
          .join("")}
      </div>
    </div>
  `;
}

function renderTeamSessionList(team) {
  const sessions = teamSessions(team.id);
  if (!sessions.length) {
    return `<div class="program-empty">아직 등록된 WOW x BALANCE 일정이 없습니다. 캘린더 탭에서 팀 일정을 먼저 추가하세요.</div>`;
  }
  return sessions
    .map((session) => {
      const absentNames = absentPersonNames(session);
      const capacity = participantCountForTeam(session.teamId);
      const actual = sessionActualParticipants(session);
      return `
        <article class="team-session-row">
          <div>
            <strong>${escapeHtml(session.sessionName || "WOW x BALANCE 세션")}</strong>
            <span>${escapeHtml(session.date || "날짜 미정")} · ${escapeHtml(session.startTime || "--:--")} · ${actual}/${capacity}명 참여</span>
            <em>${absentNames.length ? `불참: ${escapeHtml(absentNames.join(", "))}` : "불참자 없음"}</em>
          </div>
          ${renderAbsentSelect(session)}
        </article>
      `;
    })
    .join("");
}

const WOW_INTERIM_QUESTIONS = [
  "지금까지 WOW x BALANCE 세션에서 가장 좋았던 점은?",
  "진행하면서 아쉬웠거나 개선이 필요한 점은?",
  "남은 세션에서 다뤘으면 하는 것 / 운영진에게 바라는 점은?",
];
const WOW_FINAL_QUANT_KEYS = Array.from({ length: 10 }, (_, i) => `WQ${i + 1}`);

function wowInterimRowsForTeam(unit) {
  return (state.wowInterimRows || []).filter((row) => rowBelongsToTeam(row, unit));
}

function selectedSessionTeam() {
  const teams = sessionTeamUnits();
  const sel = getUnit(state.selectedSessionAnalysisTeamId);
  if (sel && sel.level === "team") return sel;
  return teams[0] || null;
}

function surveyCsvEscape(v) {
  const t = String(v == null ? "" : v);
  return /[",\n]/.test(t) ? '"' + t.replace(/"/g, '""') + '"' : t;
}
function surveyToCsv(headers, rows) {
  const head = headers.map(surveyCsvEscape).join(",");
  const body = rows.map((r) => headers.map((h) => surveyCsvEscape(r[h])).join(",")).join("\n");
  return "﻿" + head + "\n" + body + "\n";
}
function surveyParseCsv(text) {
  const out = [];
  let row = [], field = "", inQ = false;
  const t = String(text || "").replace(/^﻿/, "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  for (let i = 0; i < t.length; i += 1) {
    const c = t[i];
    if (inQ) {
      if (c === '"') { if (t[i + 1] === '"') { field += '"'; i += 1; } else inQ = false; }
      else field += c;
    } else if (c === '"') inQ = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); out.push(row); row = []; field = ""; }
    else field += c;
  }
  if (field.length || row.length) { row.push(field); out.push(row); }
  if (!out.length) return [];
  const headers = out[0].map((h) => h.trim());
  return out.slice(1)
    .filter((r) => r.some((c) => String(c).trim() !== ""))
    .map((r) => { const o = {}; headers.forEach((h, idx) => { o[h] = (r[idx] == null ? "" : String(r[idx])).trim(); }); return o; });
}

function surveyTemplateCsv(type, team) {
  const tn = team ? team.name : "팀명";
  if (type === "interim") {
    const headers = ["teamName", "respondentNo", ...WOW_INTERIM_QUESTIONS];
    const sample = { teamName: tn, respondentNo: 1 };
    WOW_INTERIM_QUESTIONS.forEach((q) => { sample[q] = ""; });
    return surveyToCsv(headers, [sample]);
  }
  const headers = ["teamName", "respondentNo", ...WOW_FINAL_QUANT_KEYS, "goodBadText", "moodText", "messageText"];
  const sample = { teamName: tn, respondentNo: 1, goodBadText: "", moodText: "", messageText: "" };
  WOW_FINAL_QUANT_KEYS.forEach((k) => { sample[k] = ""; });
  return surveyToCsv(headers, [sample]);
}

function downloadSurveyTemplate(type) {
  const team = selectedSessionTeam();
  const name = type === "interim" ? "WOW_중간서베이_템플릿.csv" : "WOW_최종서베이_템플릿.csv";
  if (typeof download === "function") download(name, surveyTemplateCsv(type, team), "text/csv;charset=utf-8");
  else notifyOrganization("다운로드를 지원하지 않는 환경입니다.");
}

// 업로드된 행을 선택 팀 데이터로 반영(같은 팀 기존 응답은 교체)
function applySurveyUpload(type, team, parsedRows) {
  if (!team || !parsedRows || !parsedRows.length) return 0;
  if (type === "interim") {
    const rows = parsedRows.map((r, idx) => {
      const o = { teamId: team.id, teamName: r.teamName || team.name, respondentNo: r.respondentNo || idx + 1 };
      WOW_INTERIM_QUESTIONS.forEach((q, i) => { o["q" + (i + 1)] = r[q] || r["q" + (i + 1)] || r["문항" + (i + 1)] || ""; });
      return o;
    });
    state.wowInterimRows = [...(state.wowInterimRows || []).filter((x) => x.teamId !== team.id), ...rows];
    return rows.length;
  }
  const quant = [], text = [];
  parsedRows.forEach((r, idx) => {
    const base = { teamId: team.id, teamName: r.teamName || team.name, respondentNo: r.respondentNo || idx + 1 };
    const q = { ...base };
    WOW_FINAL_QUANT_KEYS.forEach((k) => { q[k] = r[k] != null && r[k] !== "" ? r[k] : (r[k.toLowerCase()] || ""); });
    quant.push(q);
    text.push({ ...base, goodBadText: r.goodBadText || "", moodText: r.moodText || "", messageText: r.messageText || "" });
  });
  state.wowQuantRows = [...(state.wowQuantRows || []).filter((x) => x.teamId !== team.id), ...quant];
  state.wowTextRows = [...(state.wowTextRows || []).filter((x) => x.teamId !== team.id), ...text];
  return parsedRows.length;
}

function triggerSurveyUpload(type) {
  const team = selectedSessionTeam();
  if (!team) { notifyOrganization("먼저 팀을 선택하세요."); return; }
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".csv,text/csv";
  input.addEventListener("change", () => {
    const file = input.files && input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const rows = surveyParseCsv(String(reader.result || ""));
        const n = applySurveyUpload(type, team, rows);
        persist();
        renderWowSessionWorkspace();
        notifyOrganization(`${team.name} ${type === "interim" ? "중간" : "최종"} 서베이 ${n}건 반영됨`);
      } catch (error) {
        console.warn("survey upload failed", error);
        notifyOrganization("업로드 파싱 실패 · CSV 형식을 확인하세요");
      }
    };
    reader.readAsText(file, "utf-8");
  });
  input.click();
}

function renderWowExecutionView() {
  const teams = sessionTeamUnits();
  if (!teams.length) {
    return `<div class="empty-state"><strong>팀 조직이 없습니다</strong><span>People &amp; Organization에서 팀을 먼저 등록하세요.</span></div>`;
  }
  const team = selectedSessionTeam();
  state.selectedSessionAnalysisTeamId = team.id;
  const summary = teamProgramSummary(team);
  const interim = wowInterimRowsForTeam(team);
  const finalQuant = wowQuantRowsForTeam(team);
  const finalText = wowTextRowsForTeam(team);
  const quantScores = calculateWowQuantScores(finalQuant);
  const prompt = buildTeamSessionAnalysisPrompt(team.id);
  const saved = sessionAnalysisForUnit(team);

  const interimBody = interim.length
    ? `<div class="survey-resp-list">${interim
        .slice(0, 30)
        .map((r) => `
          <div class="survey-resp">
            <b>#${escapeHtml(String(r.respondentNo || ""))}</b>
            <span>${WOW_INTERIM_QUESTIONS.map((q, i) => `<em>${escapeHtml(q)}</em> ${escapeHtml(r["q" + (i + 1)] || "-")}`).join("<br>")}</span>
          </div>`)
        .join("")}</div>`
    : `<div class="survey-empty">중간 서베이 데이터가 없습니다. 템플릿을 받아 작성 후 업로드하세요.</div>`;

  const finalBody = finalQuant.length || finalText.length
    ? `<div class="survey-quant-grid">${WOW_FINAL_QUANT_KEYS.map((k) => `<span><b>${k}</b>${quantScores.qMeans[k] == null ? "-" : Math.round(quantScores.qMeans[k])}</span>`).join("")}</div>
       <p class="survey-note">객관식 응답 ${finalQuant.length}명 · 주관식 ${finalText.length}명 (점수=100점 환산 평균)</p>`
    : `<div class="survey-empty">최종 서베이 데이터가 없습니다. 템플릿을 받아 작성 후 업로드하세요.</div>`;

  return `
    <div class="wow-exec">
      <div class="wow-exec-pick">
        <label>팀 선택
          <select id="wowTeamSelect" data-wow-team-select>
            ${teams.map((t) => `<option value="${escapeHtml(t.id)}" ${t.id === team.id ? "selected" : ""}>${escapeHtml(t.name)}</option>`).join("")}
          </select>
        </label>
        <div class="wow-exec-meta">
          <span><b>${escapeHtml(getParentName(team))}</b></span>
          <span>${escapeHtml(leaderRoleLabel(team))} ${escapeHtml(leaderNameLabel(team))}</span>
          <span>${participantCountForTeam(team.id)}명 · 수행 ${summary.completionRate}% · 참여 ${summary.participationRate}%</span>
        </div>
      </div>

      <section class="wow-exec-card">
        <h3>세션 일정 · 불참자</h3>
        <p class="survey-note">세션별로 빠진 사람을 선택하면 참여율에 반영됩니다 (조직도 인원 기준).</p>
        ${renderTeamSessionList(team)}
      </section>

      <div class="wow-survey-pair">
        <section class="wow-exec-card">
          <div class="wow-card-head">
            <h3>중간 서베이 <small>주관식 3문항 · ${interim.length}명</small></h3>
            <div class="wow-card-actions">
              <button class="ghost-button" type="button" data-survey-template="interim">템플릿</button>
              <button class="primary-button" type="button" data-survey-upload="interim">업로드</button>
            </div>
          </div>
          ${interimBody}
        </section>

        <section class="wow-exec-card">
          <div class="wow-card-head">
            <h3>최종 서베이 <small>객관식 + 주관식</small></h3>
            <div class="wow-card-actions">
              <button class="ghost-button" type="button" data-survey-template="final">템플릿</button>
              <button class="primary-button" type="button" data-survey-upload="final">업로드</button>
            </div>
          </div>
          ${finalBody}
        </section>
      </div>

      <section class="wow-exec-card analysis-card">
        <div class="wow-card-head">
          <h3>주관식 GPT 분석 <small>→ 포뮬라 반영</small></h3>
          ${renderSessionAnalysisStatus(team)}
        </div>
        <p class="survey-note">주관식은 자동 분석이 완벽치 않으므로, 아래 프롬프트를 GPT에 넣고 결과(JSON)를 붙여넣어 저장하면 팀 신호(피로·신뢰·협업 등)에 반영됩니다.</p>
        <label>분석 프롬프트(중간·최종 주관식 포함)
          <textarea id="sessionAnalysisPrompt" readonly rows="8">${escapeHtml(prompt)}</textarea>
        </label>
        <button class="ghost-button" type="button" data-copy-session-prompt>프롬프트 복사</button>
        <label>GPT 결과 붙여넣기 (JSON)
          <textarea id="sessionAnalysisResultInput" rows="7" placeholder='{"summary":"...","fatigueTextRisk":40,"trustTextRisk":35,...}'>${escapeHtml(saved?.rawText || "")}</textarea>
        </label>
        <button class="primary-button wide" type="button" data-save-session-analysis>분석 저장 · 팀 신호 반영</button>
        ${saved ? `<div class="analysis-saved-note"><strong>${escapeHtml(saved.summary || "저장된 분석")}</strong><span>${(saved.keywords || []).map(escapeHtml).join(" · ")}</span></div>` : ""}
      </section>
    </div>
  `;
}

function renderSessionAnalysisStatus(team) {
  const analysis = sessionAnalysisForUnit(team);
  if (!analysis) return `<span class="analysis-state empty">GPT 분석 미저장</span>`;
  return `<span class="analysis-state saved">GPT 분석 저장됨 · ${escapeHtml((analysis.createdAt || "").slice(0, 10))}</span>`;
}

function buildTeamSessionAnalysisPrompt(teamId) {
  const team = getUnit(teamId) || sessionTeamUnits()[0];
  if (!team) return "";
  const summary = teamProgramSummary(team);
  const quant = calculateWowQuantScores(wowQuantRowsForTeam(team));
  const textRows = wowTextRowsForTeam(team);
  const current = signalForUnit(team);
  const textSamples = textRows
    .slice(0, 20)
    .map((row, index) => ({
      no: row.respondentNo || index + 1,
      goodBadText: row.goodBadText || "",
      moodText: row.moodText || "",
      messageText: row.messageText || "",
    }));
  const interimSamples = wowInterimRowsForTeam(team)
    .slice(0, 20)
    .map((row, index) => ({
      no: row.respondentNo || index + 1,
      답변: WOW_INTERIM_QUESTIONS.map((q, i) => row["q" + (i + 1)] || "").filter(Boolean),
    }));
  return `당신은 조직문화 진단 전문가입니다. 아래 WOW x BALANCE 세션 데이터와 주관식 응답을 읽고 팀 단위 보정 신호를 JSON만으로 반환하세요.

팀: ${team.name}
상위 조직: ${getParentName(team)}
조직도 기준 인원: ${participantCountForTeam(team.id)}명
프로그램 수행률: ${summary.completionRate}%
프로그램 참여율: ${summary.participationRate}%
현재 팀 신호: 변화수용도 ${current.changeAcceptance}, 신뢰도 ${current.trust}, 피로도/지원필요 ${current.fatigue}, 리스크 ${current.riskScore}
정량 설문 응답 수: ${quant.responseCount}
정량 요약: ${JSON.stringify(quant.qMeans)}

최종 서베이 주관식 응답:
${JSON.stringify(textSamples, null, 2)}

중간 서베이 주관식 응답(3문항):
${JSON.stringify(interimSamples, null, 2)}

반환 형식:
{
  "summary": "한 문장 진단",
  "fatigueTextRisk": 0-100,
  "trustTextRisk": 0-100,
  "collaborationTextRisk": 0-100,
  "teamPositiveSignal": 0-100,
  "programEfficacySignal": 0-100,
  "keywords": ["키워드1", "키워드2", "키워드3"],
  "recommendations": ["운영 액션1", "운영 액션2"]
}

주의:
- 숫자는 실제 응답 근거가 있을 때만 높게 주세요.
- 피로도는 번아웃 확정값이 아니라 피로 가능성/지원 필요 신호로 해석하세요.
- JSON 외 설명 문장은 쓰지 마세요.`;
}

function parseSessionAnalysisResult(rawText, team) {
  const cleaned = String(rawText || "").replace(/^```(?:json)?/i, "").replace(/```$/i, "").trim();
  if (!cleaned) return null;
  try {
    const parsed = JSON.parse(cleaned);
    return normalizedSessionAnalysis({ ...parsed, rawText: cleaned, teamId: team.id, teamName: team.name, createdAt: new Date().toISOString() }, team);
  } catch (error) {
    return normalizedSessionAnalysis({ rawText: cleaned, summary: cleaned.slice(0, 220), teamId: team.id, teamName: team.name, createdAt: new Date().toISOString() }, team);
  }
}

function saveSelectedSessionAnalysisResult() {
  const teamId = document.getElementById("sessionAnalysisTeamSelect")?.value || state.selectedSessionAnalysisTeamId || sessionTeamUnits()[0]?.id;
  const team = getUnit(teamId);
  const rawText = document.getElementById("sessionAnalysisResultInput")?.value || "";
  if (!team || !rawText.trim()) {
    notifyOrganization("저장할 팀과 GPT 분석 결과를 먼저 입력하세요");
    return false;
  }
  const result = parseSessionAnalysisResult(rawText, team);
  if (!result) return false;
  state.sessionAnalysisResults = { ...(state.sessionAnalysisResults || {}), [team.id]: result };
  state.selectedSessionAnalysisTeamId = team.id;
  render();
  notifyOrganization(`${team.name} GPT 분석 결과를 팀 신호에 반영했습니다`);
  return true;
}

function copySessionAnalysisPrompt() {
  const prompt = document.getElementById("sessionAnalysisPrompt")?.value || "";
  if (!prompt) return;
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(prompt).then(() => notifyOrganization("분석 프롬프트를 복사했습니다")).catch(() => {});
    return;
  }
  const textarea = document.getElementById("sessionAnalysisPrompt");
  textarea?.select();
  document.execCommand("copy");
  notifyOrganization("분석 프롬프트를 복사했습니다");
}

function renderWowDashboardView() {
  const teams = sessionTeamUnits();
  const summaries = teams.map((team) => ({ team, summary: teamProgramSummary(team) }));
  const started = summaries.filter((item) => item.summary.doneSteps > 0);
  const completed = started.filter((item) => item.summary.completionRate >= 100);
  const inProgress = started.filter((item) => item.summary.completionRate < 100);
  const avgParticipation = started.length
    ? Math.round(started.reduce((sum, item) => sum + item.summary.participationRate, 0) / started.length)
    : 0;
  // 완료 → 진행률 높은 순으로 정렬해 나열
  const listed = started
    .slice()
    .sort((a, b) => b.summary.completionRate - a.summary.completionRate);
  return `
    <div class="wow-dashboard">
      <section class="wow-kpi-row">
        <article><span>총 운영 팀</span><strong>${teams.length}</strong><em>조직도 팀 기준</em></article>
        <article><span>수행 완료</span><strong>${completed.length}</strong><em>전 단계 완료</em></article>
        <article><span>진행 중</span><strong>${inProgress.length}</strong><em>일부 단계 진행</em></article>
        <article><span>평균 참여율</span><strong>${avgParticipation}%</strong><em>불참자 반영 · 수행 팀 기준</em></article>
      </section>

      <section class="wow-dash-list">
        <div class="wow-table-head">
          <h3>완료 · 진행중 팀</h3>
          <span class="wow-dash-count">${listed.length}팀</span>
        </div>
        ${
          listed
            .map(({ team, summary }) => {
              const done = summary.completionRate >= 100;
              const sessions = summary.sessions
                .slice()
                .sort((a, b) => String(a.date || "").localeCompare(String(b.date || "")));
              const sessionRows = sessions.length
                ? sessions
                    .map((session) => {
                      const cap = participantCountForTeam(session.teamId);
                      const act = sessionActualParticipants(session);
                      const rate = cap ? Math.round((act / cap) * 100) : 0;
                      return `
                        <div class="wow-dash-session ${isSessionDone(session) ? "done" : "planned"}">
                          <span class="wds-name">${escapeHtml(session.sessionName || "WOW x BALANCE 세션")}</span>
                          <span class="wds-date">${escapeHtml(session.date || "날짜 미정")}${session.startTime ? " " + escapeHtml(session.startTime) : ""}</span>
                          <span class="wds-rate">${act}/${cap}명 · 참여 ${rate}%</span>
                        </div>`;
                    })
                    .join("")
                : `<div class="wow-dash-session empty">등록된 세션이 없습니다.</div>`;
              return `
                <details class="wow-dash-team">
                  <summary>
                    <span class="wow-dash-team-name">
                      <b>${escapeHtml(team.name)}</b>
                      <small>${escapeHtml(getParentName(team))} · ${participantCountForTeam(team.id)}명 · 참여 ${summary.participationRate}%</small>
                    </span>
                    <span class="wow-dash-status ${done ? "done" : "ing"}">${done ? "완료" : "진행중"}</span>
                    <span class="wow-dash-progress">
                      <span class="wow-dash-bar"><i style="width:${summary.completionRate}%"></i></span>
                      <b>${summary.completionRate}%</b>
                    </span>
                  </summary>
                  <div class="wow-dash-sessions">${sessionRows}</div>
                </details>`;
            })
            .join("") ||
          `<div class="program-empty">아직 수행을 시작한 팀이 없습니다. 캘린더에서 팀 세션 일정을 추가하세요.</div>`
        }
      </section>
    </div>
  `;
}

function renderWowSessionWorkspace() {
  const root = document.getElementById("wowSessionRoot");
  if (!root) return;
  if (!["execution", "calendar", "dashboard"].includes(state.sessionView)) state.sessionView = "dashboard";
  const teams = sessionTeamUnits();
  const sessions = state.sessions || [];
  root.innerHTML = `
    <section class="wow-session-shell">
      <div class="wow-session-hero">
        <div>
          <p class="eyebrow">WOW x BALANCE Operations</p>
          <h2>WOW x BALANCE 운영</h2>
          <p class="sub">팀별 프로그램 수행, 일정, 참여율, 설문 분석을 한 곳에서 운영합니다.</p>
        </div>
        <div class="wow-session-tabs" role="tablist" aria-label="WOW x BALANCE 운영 보기">
          <button class="${state.sessionView === "dashboard" ? "active" : ""}" type="button" data-wow-session-tab="dashboard">대시보드</button>
          <button class="${state.sessionView === "calendar" ? "active" : ""}" type="button" data-wow-session-tab="calendar">캘린더</button>
          <button class="${state.sessionView === "execution" ? "active" : ""}" type="button" data-wow-session-tab="execution">팀별수행</button>
        </div>
      </div>
      <div class="wow-session-summary">
        <article><span>운영 팀</span><strong>${teams.length}</strong></article>
        <article><span>등록 일정</span><strong>${sessions.length}</strong></article>
        <article><span>정량 설문</span><strong>${(state.wowQuantRows || []).length}</strong></article>
        <article><span>주관식 설문</span><strong>${(state.wowTextRows || []).length}</strong></article>
      </div>
      <div id="wowSessionBody" class="wow-session-body">
        ${state.sessionView === "execution" ? renderWowExecutionView() : state.sessionView === "dashboard" ? renderWowDashboardView() : `<div id="wowCalendarRoot"></div>`}
      </div>
    </section>
  `;
  if (state.sessionView === "calendar") {
    renderCalendarView("wowCalendarRoot");
  }
}

function openWowSessionTab(tab = "execution") {
  state.sessionView = ["execution", "calendar", "dashboard"].includes(tab) ? tab : "execution";
  if (typeof showView === "function") showView("session");
  renderWowSessionWorkspace();
  persist();
}

window.openWowSessionTab = openWowSessionTab;
window.renderWowSessionWorkspace = renderWowSessionWorkspace;

function organizationTemplateRows() {
  const headers = [
    "recordType",
    "id",
    "level",
    "parentId",
    "name",
    "leader",
    "leaderTitle",
    "leaderRole",
    "readiness",
    "trust",
    "fatigue",
    "risk",
    "tags",
    "personId",
    "personName",
    "position",
    "role",
    "generation",
    "unitId",
    "influence",
    "personReadiness",
    "sessionId",
    "date",
    "startTime",
    "sessionName",
    "category",
    "teamId",
    "teamName",
    "participants",
    "absentPersonIds",
    "WQ1",
    "WQ2",
    "WQ3",
    "WQ4",
    "WQ5",
    "WQ6",
    "WQ7",
    "WQ8",
    "WQ9",
    "WQ10",
    "goodBadText",
    "moodText",
    "messageText",
    "groupId",
    "groupName",
    "description",
    "criteria",
    "recommendation",
    "memberIds",
    "unitIds",
    "respondentNo",
    "sourceFileName",
    "sourceSheetName",
  ];
  const rowFromObject = (record) => headers.map((header) => record[header] ?? "");
  const unitRows = state.units
    .slice()
    .sort((a, b) => (a.sourcePath || a.name).localeCompare(b.sourcePath || b.name, "ko"))
    .map((unit) => [
      "unit",
      unit.id,
      unit.level,
      unit.parentId || "",
      unit.name,
      unit.leader || "",
      unit.leaderTitle || "",
      leaderRoleLabel(unit),
      unit.readiness,
      unit.trust,
      unit.fatigue,
      unit.risk,
      (unit.tags || []).join(";"),
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);

  const personRows = state.people
    .slice()
    .sort((a, b) => (getUnit(a.unitId)?.name || "").localeCompare(getUnit(b.unitId)?.name || "", "ko") || a.name.localeCompare(b.name, "ko"))
    .map((person) => [
      "person",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      (person.tags || []).join(";"),
      person.id,
      person.name,
      person.position || "",
      person.role || "",
      person.generation || "",
      person.unitId || "",
      person.influence ?? "",
      person.readiness ?? "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ]);

  const sessionRows = (state.sessions || []).map((session) => rowFromObject({
    recordType: "session",
    sessionId: session.id || "",
    date: session.date || "",
    startTime: session.startTime || "",
    sessionName: session.sessionName || "",
    category: session.track ? `${session.track}:${session.step || 1}` : session.category || "",
    teamId: session.teamId || "",
    teamName: session.teamName || "",
    participants: sessionActualParticipants(session),
    absentPersonIds: sessionAbsentIds(session).join(";"),
  }));

  const wowQuantRows = (state.wowQuantRows || []).map((row) => rowFromObject({
    recordType: "wowquant",
    id: row.id || "",
    teamId: row.teamId || "",
    teamName: row.teamName || "",
    respondentNo: row.respondentNo || "",
    sourceFileName: row.sourceFileName || "",
    sourceSheetName: row.sourceSheetName || "",
    WQ1: row.WQ1 || "",
    WQ2: row.WQ2 || "",
    WQ3: row.WQ3 || "",
    WQ4: row.WQ4 || "",
    WQ5: row.WQ5 || "",
    WQ6: row.WQ6 || "",
    WQ7: row.WQ7 || "",
    WQ8: row.WQ8 || "",
    WQ9: row.WQ9 || "",
    WQ10: row.WQ10 || "",
  }));

  const wowTextRows = (state.wowTextRows || []).map((row) => rowFromObject({
    recordType: "wowtext",
    id: row.id || "",
    teamId: row.teamId || "",
    teamName: row.teamName || "",
    respondentNo: row.respondentNo || "",
    sourceFileName: row.sourceFileName || "",
    sourceSheetName: row.sourceSheetName || "",
    goodBadText: row.goodBadText || "",
    moodText: row.moodText || "",
    messageText: row.messageText || "",
  }));

  const groupRows = (state.groups || []).map((group) => [
    "group",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    group.id,
    group.name,
    group.description || "",
    group.criteria || "",
    group.recommendation || "",
    (group.memberIds || []).join(";"),
    (group.unitIds || []).join(";"),
  ]);

  const bodyRows = [...unitRows, ...personRows, ...sessionRows, ...wowQuantRows, ...wowTextRows, ...groupRows].map((row) => {
    if (row.length === headers.length) return row;
    if (row.length > headers.length) return row.slice(0, headers.length);
    return [...row, ...Array.from({ length: headers.length - row.length }, () => "")];
  });

  return [headers, ...bodyRows];
}

function xmlEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function columnName(index) {
  let name = "";
  let value = index + 1;
  while (value > 0) {
    const mod = (value - 1) % 26;
    name = String.fromCharCode(65 + mod) + name;
    value = Math.floor((value - mod) / 26);
  }
  return name;
}

function buildWorksheetXml(rows) {
  const sheetRows = rows
    .map((row, rowIndex) => {
      const rowNumber = rowIndex + 1;
      const cells = row
        .map((value, columnIndex) => {
          const ref = `${columnName(columnIndex)}${rowNumber}`;
          return `<c r="${ref}" t="inlineStr"><is><t>${xmlEscape(value)}</t></is></c>`;
        })
        .join("");
      return `<row r="${rowNumber}">${cells}</row>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <sheetData>${sheetRows}</sheetData>
</worksheet>`;
}

function crc32(bytes) {
  if (!crc32.table) {
    crc32.table = Array.from({ length: 256 }, (_, index) => {
      let value = index;
      for (let i = 0; i < 8; i += 1) value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
      return value >>> 0;
    });
  }

  let crc = 0xffffffff;
  bytes.forEach((byte) => {
    crc = crc32.table[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function textBytes(value) {
  return new TextEncoder().encode(value);
}

function concatBytes(chunks) {
  const total = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  chunks.forEach((chunk) => {
    out.set(chunk, offset);
    offset += chunk.length;
  });
  return out;
}

function makeZip(entries) {
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  entries.forEach(({ name, content }) => {
    const nameBytes = textBytes(name);
    const data = typeof content === "string" ? textBytes(content) : content;
    const crc = crc32(data);
    const local = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(local.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, 0, true);
    localView.setUint16(8, 0, true);
    localView.setUint16(10, 0, true);
    localView.setUint16(12, 0, true);
    localView.setUint32(14, crc, true);
    localView.setUint32(18, data.length, true);
    localView.setUint32(22, data.length, true);
    localView.setUint16(26, nameBytes.length, true);
    localView.setUint16(28, 0, true);
    local.set(nameBytes, 30);
    localParts.push(local, data);

    const central = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(central.buffer);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, 0, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint16(12, 0, true);
    centralView.setUint16(14, 0, true);
    centralView.setUint32(16, crc, true);
    centralView.setUint32(20, data.length, true);
    centralView.setUint32(24, data.length, true);
    centralView.setUint16(28, nameBytes.length, true);
    centralView.setUint16(30, 0, true);
    centralView.setUint16(32, 0, true);
    centralView.setUint16(34, 0, true);
    centralView.setUint16(36, 0, true);
    centralView.setUint32(38, 0, true);
    centralView.setUint32(42, offset, true);
    central.set(nameBytes, 46);
    centralParts.push(central);
    offset += local.length + data.length;
  });

  const centralOffset = offset;
  const centralDirectory = concatBytes(centralParts);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(4, 0, true);
  endView.setUint16(6, 0, true);
  endView.setUint16(8, entries.length, true);
  endView.setUint16(10, entries.length, true);
  endView.setUint32(12, centralDirectory.length, true);
  endView.setUint32(16, centralOffset, true);
  endView.setUint16(20, 0, true);

  return new Blob([...localParts, centralDirectory, end], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
}

function makeOrganizationXlsxBlob(rows) {
  return makeZip([
    {
      name: "[Content_Types].xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`,
    },
    {
      name: "_rels/.rels",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
</Relationships>`,
    },
    {
      name: "xl/workbook.xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="Organization" sheetId="1" r:id="rId1"/></sheets>
</workbook>`,
    },
    {
      name: "xl/_rels/workbook.xml.rels",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
</Relationships>`,
    },
    { name: "xl/worksheets/sheet1.xml", content: buildWorksheetXml(rows) },
  ]);
}

function downloadOrganizationTemplate() {
  const blob = makeOrganizationXlsxBlob(organizationTemplateRows());
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "lina_organization_template.xlsx";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function parseCsvRows(text) {
  const rows = [];
  let current = "";
  let row = [];
  let quoted = false;
  const source = String(text || "").replace(/^\uFEFF/, "");

  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    const next = source[i + 1];
    if (char === '"' && quoted && next === '"') {
      current += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === "," && !quoted) {
      row.push(current);
      current = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(current);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      current = "";
    } else {
      current += char;
    }
  }

  row.push(current);
  if (row.some((cell) => cell.trim())) rows.push(row);
  if (!rows.length) return [];

  const headers = rows[0].map((cell) => cell.trim());
  return rows.slice(1).map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""])));
}

function findEndOfCentralDirectory(view) {
  const minOffset = Math.max(0, view.byteLength - 66000);
  for (let offset = view.byteLength - 22; offset >= minOffset; offset -= 1) {
    if (view.getUint32(offset, true) === 0x06054b50) return offset;
  }
  throw new Error("엑셀 파일 구조를 읽을 수 없습니다.");
}

async function inflateRaw(bytes) {
  if (!window.DecompressionStream) {
    throw new Error("이 브라우저는 압축된 엑셀 업로드를 지원하지 않습니다.");
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

function normalizeXlsxPath(basePath, target) {
  const cleanTarget = String(target || "").replace(/^\/+/, "");
  if (cleanTarget.startsWith("xl/")) return cleanTarget;
  const stack = basePath.split("/").filter(Boolean);
  cleanTarget.split("/").forEach((part) => {
    if (!part || part === ".") return;
    if (part === "..") stack.pop();
    else stack.push(part);
  });
  return stack.join("/");
}

function xmlElements(root, localName) {
  return [...root.getElementsByTagName("*")].filter((node) => node.localName === localName);
}

function xmlFirst(root, localName) {
  return xmlElements(root, localName)[0] || null;
}

async function readXlsxEntries(arrayBuffer) {
  const bytes = new Uint8Array(arrayBuffer);
  const view = new DataView(arrayBuffer);
  const decoder = new TextDecoder();
  const eocdOffset = findEndOfCentralDirectory(view);
  const entryCount = view.getUint16(eocdOffset + 10, true);
  const centralOffset = view.getUint32(eocdOffset + 16, true);
  const entries = {};
  let offset = centralOffset;

  for (let i = 0; i < entryCount; i += 1) {
    if (view.getUint32(offset, true) !== 0x02014b50) break;
    const method = view.getUint16(offset + 10, true);
    const compressedSize = view.getUint32(offset + 20, true);
    const nameLength = view.getUint16(offset + 28, true);
    const extraLength = view.getUint16(offset + 30, true);
    const commentLength = view.getUint16(offset + 32, true);
    const localOffset = view.getUint32(offset + 42, true);
    const name = decoder.decode(bytes.slice(offset + 46, offset + 46 + nameLength));

    const localNameLength = view.getUint16(localOffset + 26, true);
    const localExtraLength = view.getUint16(localOffset + 28, true);
    const dataOffset = localOffset + 30 + localNameLength + localExtraLength;
    const compressed = bytes.slice(dataOffset, dataOffset + compressedSize);
    let data;
    if (method === 0) data = compressed;
    else if (method === 8) data = await inflateRaw(compressed);
    else throw new Error("지원하지 않는 엑셀 압축 방식입니다.");

    entries[name] = decoder.decode(data);
    offset += 46 + nameLength + extraLength + commentLength;
  }

  return entries;
}

function getWorksheetRefs(entries) {
  const parser = new DOMParser();
  const workbook = parser.parseFromString(entries["xl/workbook.xml"], "application/xml");
  const rels = parser.parseFromString(entries["xl/_rels/workbook.xml.rels"], "application/xml");
  return xmlElements(workbook, "sheet").map((sheet, index) => {
    const relId =
      sheet?.getAttribute("r:id") ||
      sheet?.getAttributeNS("http://schemas.openxmlformats.org/officeDocument/2006/relationships", "id");
    const rel = xmlElements(rels, "Relationship").find((item) => item.getAttribute("Id") === relId);
    const target = rel?.getAttribute("Target") || `worksheets/sheet${index + 1}.xml`;
    return {
      name: sheet.getAttribute("name") || `Sheet${index + 1}`,
      path: normalizeXlsxPath("xl", target),
    };
  });
}

function parseSharedStrings(xmlText) {
  if (!xmlText) return [];
  const xml = new DOMParser().parseFromString(xmlText, "application/xml");
  return xmlElements(xml, "si").map((item) => xmlElements(item, "t").map((node) => node.textContent || "").join(""));
}

function columnIndexFromRef(ref) {
  const letters = String(ref || "").match(/[A-Z]+/i)?.[0]?.toUpperCase() || "A";
  return [...letters].reduce((sum, char) => sum * 26 + char.charCodeAt(0) - 64, 0) - 1;
}

function textFromInlineString(cell) {
  return xmlElements(cell, "t").map((node) => node.textContent || "").join("");
}

function parseWorksheetRows(worksheetXml, sharedStrings, sheetName = "") {
  const xml = new DOMParser().parseFromString(worksheetXml, "application/xml");
  const rowArrays = xmlElements(xml, "row").map((row) => {
    const cells = [];
    xmlElements(row, "c").forEach((cell) => {
      const type = cell.getAttribute("t");
      const raw = xmlFirst(cell, "v")?.textContent || "";
      let value = raw;
      if (type === "s") value = sharedStrings[Number(raw)] || "";
      if (type === "inlineStr") value = textFromInlineString(cell);
      cells[columnIndexFromRef(cell.getAttribute("r"))] = value;
    });
    return cells;
  });

  const headerIndex = rowArrays.findIndex((row) => row.some((value) => String(value || "").trim()));
  if (headerIndex < 0) return [];
  const headers = rowArrays[headerIndex].map((header) => String(header || "").trim());
  return rowArrays
    .slice(headerIndex + 1)
    .filter((row) => row.some((value) => String(value || "").trim()))
    .map((row) => ({
      __sheetName: sheetName,
      ...Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ""])),
    }));
}

async function parseXlsxRows(file) {
  const entries = await readXlsxEntries(await file.arrayBuffer());
  const sharedStrings = parseSharedStrings(entries["xl/sharedStrings.xml"]);
  const refs = getWorksheetRefs(entries);
  const fallback = entries["xl/worksheets/sheet1.xml"] ? [{ name: "Sheet1", path: "xl/worksheets/sheet1.xml" }] : [];
  const sheetRefs = refs.length ? refs : fallback;
  const preferredSurveyRefs = sheetRefs.filter((sheet) => ["전체응답", "전사본"].includes(String(sheet.name || "").trim()));
  const refsToParse = preferredSurveyRefs.length ? preferredSurveyRefs : sheetRefs;
  const rows = refsToParse.flatMap((sheet) => {
    const worksheetXml = entries[sheet.path];
    return worksheetXml ? parseWorksheetRows(worksheetXml, sharedStrings, sheet.name) : [];
  });
  if (!rows.length) throw new Error("엑셀에서 읽을 수 있는 데이터 행을 찾지 못했습니다.");
  return rows;
}

async function parseOrganizationUpload(file) {
  const name = file.name.toLowerCase();
  let rows = [];
  if (name.endsWith(".xlsx")) rows = await parseXlsxRows(file);
  else if (name.endsWith(".csv") || file.type.includes("csv")) rows = parseCsvRows(await file.text());
  else throw new Error("xlsx 또는 csv 파일만 업로드할 수 있습니다.");
  return rows.map((row) => ({ __sourceFileName: file.name, ...row }));
}

const uploadAliases = {
  recordType: ["recordType", "type", "구분"],
  id: ["id", "조직ID", "unitId"],
  level: ["level", "조직레벨"],
  parentId: ["parentId", "상위조직ID"],
  name: ["name", "조직명"],
  leader: ["leader", "조직장"],
  leaderTitle: ["leaderTitle", "직급"],
  leaderRole: ["leaderRole", "호칭"],
  readiness: ["readiness", "변화수용도"],
  trust: ["trust", "신뢰"],
  fatigue: ["fatigue", "피로도"],
  risk: ["risk", "위험도"],
  tags: ["tags", "태그"],
  personId: ["personId", "구성원ID"],
  personName: ["personName", "구성원명"],
  position: ["position", "직책"],
  role: ["role", "역할"],
  generation: ["generation", "세대"],
  personUnitId: ["unitId", "소속조직ID"],
  influence: ["influence", "영향력"],
  personReadiness: ["personReadiness", "구성원변화수용도"],
  sessionId: ["sessionId", "일정ID"],
  date: ["date", "날짜"],
  startTime: ["startTime", "시간"],
  sessionName: ["sessionName", "세션명"],
  category: ["category", "유형"],
  teamId: ["teamId", "팀ID"],
  teamName: ["teamName", "팀명", "팀"],
  respondentNo: ["respondentNo", "respondentId", "참여자", "번호", "응답번호"],
  participants: ["participants", "참여인원"],
  absentPersonIds: ["absentPersonIds", "불참자ID", "빠진사람ID", "결석자ID"],
  WQ1: ["WQ1", "Q1", "이번 프로그램을 통해 WOW 조직문화가 왜 필요한지 다시 생각해보게 되었다."],
  WQ2: ["WQ2", "Q2", "이번 프로그램을 통해 우리팀의 역할과 일하는 방식에 대해 다시 돌아보게 되었다."],
  WQ3: ["WQ3", "Q3", "명상과 심호흡 세션에서 배운 방법을 한 번이라도 직접 해봤다."],
  WQ4: ["WQ4", "Q4", "나는 피로하거나 감정이 올라올 때, 잠시 멈추고 나를 가라앉히는 방법을 이전보다 더 의식하게 되었다."],
  WQ5: ["WQ5", "Q5", "이번 프로그램을 통해 커뮤니케이션이 왜 어려운지 좀 더 이해하게 되었다."],
  WQ6: ["WQ6", "Q6", "나는 팀과의 대화에서 잘 전달하기 위해 한 번 더 생각하고 표현해 보려는 의식을 갖게 되었다."],
  WQ7: ["WQ7", "Q7", "BALANCE 세션은 서로를 조금 더 편하게 느끼는 데 도움이 되었다.", "민원과 장기한 BALANCE 세션(스트레칭 파트너 운동 등)은 서로를 조금 더 편하게 느끼는 데 도움이 되었다."],
  WQ8: ["WQ8", "Q8", "이번 프로그램에서 다룬 에너지 회복 방법은 사무실이나 일상에서 실제로 활용할 수 있다.", "이번 프로그램에서 다룬 에너지 회복 방법(명상, 심호흡 등)은 사무실이나 일상에서 실제로 활용할 수 있다."],
  WQ9: ["WQ9", "Q9", "전반적으로 이번 프로그램은 우리 팀이 더 건강하게 소통하고 협업하는 데 도움이 되었다고 느낀다."],
  WQ10: ["WQ10", "Q10", "나는 우리 회사가 나를 케어하고 있다고 느낀다."],
  goodBadText: ["goodBadText", "좋았던점아쉬웠던점", "WOW X BALANCE 프로그램 관련 활동 중 좋았던 점이나, 아쉬웠던 점", "WOW X BALANCE 프로그램 관련 활동 중 좋았던 점이나, '이건 좀 아쉽다'하는 것을 가감 없이 적어주세요."],
  moodText: ["moodText", "팀분위기회사분위기", "요즘 팀 분위기나 회사 분위기 솔직히 어떤가요?"],
  messageText: ["messageText", "운영진에게하고싶은말", "WOW X BALANCE 운영진에게 하고 싶은 말", "WOW X BALANCE 운영진에게 하고 싶은 말!"],
  groupId: ["groupId", "그룹ID"],
  groupName: ["groupName", "그룹명"],
  description: ["description", "설명"],
  criteria: ["criteria", "기준"],
  recommendation: ["recommendation", "추천액션"],
  memberIds: ["memberIds", "구성원ID목록"],
  unitIds: ["unitIds", "조직ID목록"],
  sourceFileName: ["sourceFileName", "원본파일", "출처파일"],
  sourceSheetName: ["sourceSheetName", "원본시트", "출처시트"],
};

function normalizeUploadHeader(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^0-9a-z가-힣]/g, "");
}

function uploadValue(row, field) {
  const aliases = uploadAliases[field] || [field];
  const keys = Object.keys(row);
  for (const alias of aliases) {
    if (Object.prototype.hasOwnProperty.call(row, alias)) return String(row[alias] ?? "").trim();
    const found = keys.find((key) => key.toLowerCase() === alias.toLowerCase());
    if (found) return String(row[found] ?? "").trim();
    const normalizedAlias = normalizeUploadHeader(alias);
    const normalizedFound = keys.find((key) => normalizeUploadHeader(key) === normalizedAlias);
    if (normalizedFound) return String(row[normalizedFound] ?? "").trim();
  }
  return "";
}

function splitUploadList(value) {
  return String(value || "")
    .split(/[;,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function uploadTeamFromRow(row) {
  const teamId = uploadValue(row, "teamId");
  if (teamId && getUnit(teamId)) return getUnit(teamId);
  const teamName = uploadValue(row, "teamName");
  return state.units.find((unit) => unit.level === "team" && normalizedTeamName(unit.name) === normalizedTeamName(teamName)) || null;
}

function uploadSurveyRowId(row, prefix, index, teamName) {
  const source = normalizeUploadHeader(uploadValue(row, "sourceFileName") || row.__sourceFileName || "manual");
  const sheet = normalizeUploadHeader(uploadValue(row, "sourceSheetName") || row.__sheetName || "sheet");
  const team = normalizedTeamName(teamName) || "team";
  const respondent = normalizeUploadHeader(uploadValue(row, "respondentNo")) || String(index + 1);
  return `${prefix}-${source}-${sheet}-${team}-${respondent}`;
}

function uploadRecordType(row) {
  const explicit = uploadValue(row, "recordType").toLowerCase();
  if (["unit", "person", "session", "group", "wowquant", "wowtext"].includes(explicit)) return explicit;
  const sheetName = String(row.__sheetName || "").toLowerCase();
  if (uploadValue(row, "level") || uploadValue(row, "parentId") || uploadValue(row, "leader")) return "unit";
  if (uploadValue(row, "personName") || uploadValue(row, "position")) return "person";
  if (sheetName.includes("전체응답") || uploadValue(row, "WQ1") || uploadValue(row, "WQ2") || uploadValue(row, "WQ10")) return "wowquant";
  if (sheetName.includes("전사본") || uploadValue(row, "goodBadText") || uploadValue(row, "moodText") || uploadValue(row, "messageText")) return "wowtext";
  if (uploadValue(row, "sessionName") || uploadValue(row, "date")) return "session";
  if (uploadValue(row, "groupName") || uploadValue(row, "memberIds")) return "group";
  return "unknown";
}

function analyzeOrganizationUpload(rows) {
  const report = { unit: 0, person: 0, session: 0, group: 0, wowquant: 0, wowtext: 0, unknown: 0, issues: [] };
  const uploadedUnitIds = new Set(state.units.map((unit) => unit.id));
  rows.forEach((row, index) => {
    const type = uploadRecordType(row);
    report[type] = (report[type] || 0) + 1;
    const rowNo = index + 2;
    if (type === "unit") {
      const id = uploadValue(row, "id");
      const name = uploadValue(row, "name");
      const parentId = uploadValue(row, "parentId");
      if (!name) report.issues.push(`${rowNo}행: 조직명이 비어 있습니다.`);
      if (id) uploadedUnitIds.add(id);
      if (parentId && !uploadedUnitIds.has(parentId)) report.issues.push(`${rowNo}행: 상위 조직 ID(${parentId})를 아직 찾지 못했습니다. 적용 시 전사 하위로 보정됩니다.`);
    } else if (type === "person") {
      if (!uploadValue(row, "personName")) report.issues.push(`${rowNo}행: 구성원명이 비어 있습니다.`);
      const unitId = uploadValue(row, "personUnitId");
      if (unitId && !uploadedUnitIds.has(unitId)) report.issues.push(`${rowNo}행: 구성원 소속 조직 ID(${unitId})를 찾지 못했습니다.`);
    } else if (type === "session") {
      if (!uploadValue(row, "sessionName")) report.issues.push(`${rowNo}행: 세션명이 비어 있습니다.`);
      if (!uploadValue(row, "date")) report.issues.push(`${rowNo}행: 일정 날짜가 비어 있습니다.`);
    } else if (type === "wowquant" || type === "wowtext") {
      if (!uploadValue(row, "teamId") && !uploadValue(row, "teamName")) report.issues.push(`${rowNo}행: WOW 서베이 팀ID 또는 팀명이 필요합니다.`);
    } else if (type === "group") {
      if (!uploadValue(row, "groupName")) report.issues.push(`${rowNo}행: 그룹명이 비어 있습니다.`);
    } else {
      report.issues.push(`${rowNo}행: recordType을 인식하지 못했습니다.`);
    }
  });
  return report;
}

function confirmOrganizationUpload(rows) {
  const report = analyzeOrganizationUpload(rows);
  const recognized = report.unit + report.person + report.session + report.group + report.wowquant + report.wowtext;
  if (!recognized) {
    window.alert("업로드할 수 있는 조직/구성원/일정/그룹 행을 찾지 못했습니다.");
    return false;
  }
  const warnings = report.issues.slice(0, 8).join("\n");
  const more = report.issues.length > 8 ? `\n외 ${report.issues.length - 8}개 경고` : "";
  return window.confirm(
    `업로드 내용을 적용할까요?\n\n조직 ${report.unit}개 · 구성원 ${report.person}명 · 일정 ${report.session}개 · 타겟그룹 ${report.group}개 · WOW 정량 ${report.wowquant}건 · WOW 주관식 ${report.wowtext}건\n\n기존 데이터는 먼저 백업되고, 업로드된 행은 기존 데이터에 업데이트됩니다. 업로드에 없는 데이터는 삭제하지 않습니다.${
      warnings ? `\n\n확인할 점:\n${warnings}${more}` : ""
    }`,
  );
}

function createOrganizationBackup(reason = "manual") {
  try {
    localStorage.setItem(
      `${STORAGE_KEY}.backup.latest`,
      JSON.stringify({
        reason,
        createdAt: new Date().toISOString(),
        state: organizationSnapshot(),
      }),
    );
  } catch (error) {
    console.warn("Could not create organization backup.", error);
  }
}

function restoreOrganizationBackup() {
  try {
    const backup = JSON.parse(localStorage.getItem(`${STORAGE_KEY}.backup.latest`) || "null");
    if (!backup?.state) {
      window.alert("복원할 업로드 백업이 없습니다.");
      return false;
    }
    if (!window.confirm(`마지막 백업(${new Date(backup.createdAt).toLocaleString("ko-KR")})으로 되돌릴까요?`)) return false;
    state = normalizeOrganizationState(backup.state);
    render();
    notifyOrganization("업로드 이전 상태로 복원했습니다");
    return true;
  } catch (error) {
    window.alert("백업을 복원할 수 없습니다.");
    return false;
  }
}

function applyOrganizationTemplate(rows) {
  if (!rows.length) return false;
  createOrganizationBackup("upload");

  rows.filter((row) => uploadRecordType(row) === "unit").forEach((row, index) => {
    const id = uploadValue(row, "id") || `uploaded-unit-${Date.now()}-${index}`;
    const existing = getUnit(id);
    const level = uploadValue(row, "level") || existing?.level || "team";
    const unit = existing || {
      id,
      level,
      orgType: levelLabel(level),
      parentId: "",
      members: 0,
      engagement: 60,
      ambassadors: 0,
      recommendation: "업로드된 조직입니다. 문화 신호와 운영 액션을 확인하세요.",
      status: "active",
      sortOrder: state.units.length + index + 1,
    };

    unit.level = level;
    unit.orgType = levelLabel(level);
    unit.parentId = uploadValue(row, "parentId") || "";
    unit.name = uploadValue(row, "name") || unit.name || `${levelLabel(level)} ${index + 1}`;
    unit.leaderRole = uploadValue(row, "leaderRole") || unit.leaderRole || defaultLeaderRole(level);
    unit.leader = uploadValue(row, "leader") || unit.leader || unsetLeaderForUnit(unit);
    unit.leaderTitle = uploadValue(row, "leaderTitle") || unit.leaderTitle || "";
    unit.readiness = clamp(Number(uploadValue(row, "readiness") || unit.readiness || 60), 0, 100);
    unit.trust = clamp(Number(uploadValue(row, "trust") || unit.trust || 60), 0, 100);
    unit.fatigue = clamp(Number(uploadValue(row, "fatigue") || unit.fatigue || 45), 0, 100);
    const risk = uploadValue(row, "risk");
    unit.risk = ["low", "medium", "high"].includes(risk) ? risk : unit.risk || "medium";
    const tags = splitUploadList(uploadValue(row, "tags"));
    if (tags.length) unit.tags = tags.slice(0, 6);

    if (!existing) state.units.push(unit);
  });

  rows.filter((row) => uploadRecordType(row) === "person").forEach((row, index) => {
    const id = uploadValue(row, "personId") || `p-uploaded-${Date.now()}-${index}`;
    const existing = state.people.find((person) => person.id === id);
    const unitId = uploadValue(row, "personUnitId") || existing?.unitId || getDefaultSelectedUnitId();
    const person = existing || {
      id,
      name: "",
      role: "",
      position: "구성원",
      generation: "",
      unitId,
      influence: 55,
      readiness: 60,
      tags: [],
    };
    person.name = uploadValue(row, "personName") || person.name || `구성원 ${index + 1}`;
    person.position = uploadValue(row, "position") || person.position || "구성원";
    person.role = uploadValue(row, "role") || person.role || `${getUnit(unitId)?.name || "조직"} ${person.position}`;
    person.generation = uploadValue(row, "generation") || person.generation || "";
    person.unitId = getUnit(unitId) ? unitId : getDefaultSelectedUnitId();
    person.influence = clamp(Number(uploadValue(row, "influence") || person.influence || 55), 0, 100);
    person.readiness = clamp(Number(uploadValue(row, "personReadiness") || person.readiness || 60), 0, 100);
    const tags = splitUploadList(uploadValue(row, "tags"));
    if (tags.length) person.tags = tags;
    if (!existing) state.people.push(person);
  });

  rows.filter((row) => uploadRecordType(row) === "session").forEach((row, index) => {
    const id = uploadValue(row, "sessionId") || `session-uploaded-${Date.now()}-${index}`;
    const existing = (state.sessions || []).find((session) => session.id === id);
    const uploadTeam = uploadTeamFromRow(row);
    const teamId = uploadTeam?.id || uploadValue(row, "teamId") || existing?.teamId || "";
    const session = existing || { id };
    session.date = uploadValue(row, "date") || session.date || todayIso();
    session.startTime = uploadValue(row, "startTime") || session.startTime || "10:00";
    session.sessionName = uploadValue(row, "sessionName") || session.sessionName || "WOW x BALANCE 세션";
    const catVal = uploadValue(row, "category") || "";
    if (catVal.includes(":")) {
      const parts = catVal.split(":");
      session.track = parts[0];
      session.step = Number(parts[1]) || 1;
      session.stepName = trackSteps(session.track)[session.step - 1] || "";
    } else if (catVal) {
      session.category = catVal;
    }
    session.teamId = getUnit(teamId) ? teamId : session.teamId || "";
    session.teamName = uploadValue(row, "teamName") || getUnit(session.teamId)?.name || session.teamName || "팀 미정";
    const absentIds = splitUploadList(uploadValue(row, "absentPersonIds"));
    session.absentPersonIds = absentIds.length ? absentIds : Array.isArray(session.absentPersonIds) ? session.absentPersonIds : [];
    session.participants = sessionActualParticipants(session);
    if (!existing) state.sessions = [...(state.sessions || []), session];
  });

  rows.filter((row) => uploadRecordType(row) === "wowquant").forEach((row, index) => {
    const uploadTeam = uploadTeamFromRow(row);
    const teamName = uploadValue(row, "teamName") || uploadTeam?.name || "팀 미정";
    const id = uploadValue(row, "id") || uploadSurveyRowId(row, "wow-quant", index, teamName);
    const existing = (state.wowQuantRows || []).find((item) => item.id === id);
    const item = existing || { id };
    item.teamId = uploadTeam?.id || uploadValue(row, "teamId") || item.teamId || "";
    item.teamName = teamName;
    item.sourceFileName = uploadValue(row, "sourceFileName") || row.__sourceFileName || item.sourceFileName || "";
    item.sourceSheetName = uploadValue(row, "sourceSheetName") || row.__sheetName || item.sourceSheetName || "";
    item.respondentNo = uploadValue(row, "respondentNo") || item.respondentNo || "";
    for (let i = 1; i <= 10; i += 1) item[`WQ${i}`] = uploadValue(row, `WQ${i}`) || item[`WQ${i}`] || "";
    if (!existing) state.wowQuantRows = [...(state.wowQuantRows || []), item];
  });

  rows.filter((row) => uploadRecordType(row) === "wowtext").forEach((row, index) => {
    const uploadTeam = uploadTeamFromRow(row);
    const teamName = uploadValue(row, "teamName") || uploadTeam?.name || "팀 미정";
    const id = uploadValue(row, "id") || uploadSurveyRowId(row, "wow-text", index, teamName);
    const existing = (state.wowTextRows || []).find((item) => item.id === id);
    const item = existing || { id };
    item.teamId = uploadTeam?.id || uploadValue(row, "teamId") || item.teamId || "";
    item.teamName = teamName;
    item.sourceFileName = uploadValue(row, "sourceFileName") || row.__sourceFileName || item.sourceFileName || "";
    item.sourceSheetName = uploadValue(row, "sourceSheetName") || row.__sheetName || item.sourceSheetName || "";
    item.respondentNo = uploadValue(row, "respondentNo") || item.respondentNo || "";
    item.goodBadText = uploadValue(row, "goodBadText") || item.goodBadText || "";
    item.moodText = uploadValue(row, "moodText") || item.moodText || "";
    item.messageText = uploadValue(row, "messageText") || item.messageText || "";
    if (!existing) state.wowTextRows = [...(state.wowTextRows || []), item];
  });

  rows.filter((row) => uploadRecordType(row) === "group").forEach((row, index) => {
    const id = uploadValue(row, "groupId") || `group-uploaded-${Date.now()}-${index}`;
    const existing = (state.groups || []).find((group) => group.id === id);
    const group = existing || { id, memberIds: [], unitIds: [] };
    group.name = uploadValue(row, "groupName") || group.name || `타겟그룹 ${index + 1}`;
    group.description = uploadValue(row, "description") || group.description || "";
    group.criteria = uploadValue(row, "criteria") || group.criteria || "업로드 조건";
    group.recommendation = uploadValue(row, "recommendation") || group.recommendation || "업로드된 그룹입니다. 대상과 액션을 확인하세요.";
    const memberIds = splitUploadList(uploadValue(row, "memberIds"));
    const unitIds = splitUploadList(uploadValue(row, "unitIds"));
    if (memberIds.length) group.memberIds = memberIds;
    if (unitIds.length) group.unitIds = unitIds;
    if (!existing) state.groups = [group, ...(state.groups || [])];
  });

  state.units.forEach((unit) => {
    if (!unit.parentId || !getUnit(unit.parentId)) unit.parentId = unit.level === "company" ? "" : getDefaultSelectedUnitId();
  });
  state.units.filter((unit) => !unit.parentId).forEach((unit) => refreshSourcePaths(unit.id));
  state.view = "official";
  state.detailOpen = false;
  state.detailModal = null;
  return true;
}

function renderGroupsView() {
  document.getElementById("viewRoot").innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">Purpose-Based Groups</p>
        <h3>타겟그룹 설정</h3>
        <p>팀 단위가 아니라 변화 수용성, 영향력, 신뢰, 피로도, 캠페인 목적을 기준으로 대상을 묶습니다.</p>
      </div>
      <button class="primary-button" id="openGroupPanelButtonInline" type="button">새 그룹</button>
    </div>
    ${
      state.groups.length
        ? `<div class="group-board">${state.groups.map(renderGroupCard).join("")}</div>`
        : `<div class="empty-state"><strong>아직 만든 그룹이 없습니다</strong><span>추천 템플릿이나 직접 조건으로 그룹을 생성하세요.</span></div>`
    }
  `;
}

function renderGroupCard(group) {
  const members = group.memberIds.map((id) => state.people.find((person) => person.id === id)).filter(Boolean);
  const units = group.unitIds.map(getUnit).filter(Boolean);
  return `
    <article class="group-card">
      <header>
        <div>
          <p class="eyebrow">Target Group</p>
          <h3>${escapeHtml(group.name)}</h3>
        </div>
        <button class="small-button" type="button" data-delete-group="${escapeHtml(group.id)}">삭제</button>
      </header>
      <p>${escapeHtml(group.description)}</p>
      <div class="tag-list">
        <span class="tag">${members.length}명</span>
        <span class="tag">${units.length}개 조직</span>
      </div>
      <div class="recommend-card">${escapeHtml(group.recommendation)}</div>
      <div class="member-preview">
        ${members.slice(0, 4).map((person) => `<span><strong>${escapeHtml(person.name)}</strong>${escapeHtml(getUnit(person.unitId)?.name || "")}</span>`).join("")}
        ${members.length > 4 ? `<span>외 ${members.length - 4}명</span>` : ""}
        ${!members.length && units.slice(0, 4).map((unit) => `<span><strong>${escapeHtml(unit.name)}</strong>${escapeHtml(levelLabel(unit.level))}</span>`).join("")}
      </div>
      <p><strong>기준</strong> ${escapeHtml(group.criteria)}</p>
    </article>
  `;
}

function renderDetail() {
  const modal = document.getElementById("detailDrawer");
  const panel = document.getElementById("detailPanel");
  const backdrop = document.getElementById("drawerBackdrop");
  const groupDrawer = document.getElementById("groupDrawer");
  const isOpen = Boolean(state.detailModal);

  if (modal) {
    modal.classList.toggle("open", isOpen);
    modal.setAttribute("aria-hidden", isOpen ? "false" : "true");
  }
  if (backdrop && !groupDrawer?.classList.contains("open")) {
    backdrop.hidden = !isOpen;
  }
  if (!panel) return;
  if (!isOpen) {
    panel.innerHTML = "";
    return;
  }

  const unit = getUnit(state.selectedUnitId) || state.units[0];
  if (!unit) {
    panel.innerHTML = `<div class="empty-state"><strong>선택된 조직 없음</strong></div>`;
    return;
  }

  panel.innerHTML = renderSettingsModal(unit);
}

function renderOverviewModal(unit) {
  const people = getPeopleForUnit(unit.id, unit.level !== "team");
  const directPeople = getPeopleForUnit(unit.id, false);
  const childUnits = getChildren(unit.id);
  const pulse = pulseForUnit(unit.id);
  const signal = signalForUnit(unit);

  return `
    <div class="detail-title">
      <div class="detail-title-row">
        <div class="tag-list">
          <span class="risk-pill risk-${signal.risk}">${escapeHtml(formatRisk(signal.risk))}</span>
          <span class="tag">${escapeHtml(displayOrgType(unit))}</span>
        </div>
        <button class="icon-button" id="closeDetailButton" type="button" aria-label="상세 정보 닫기">×</button>
      </div>
      <h3>${escapeHtml(unit.name)}</h3>
      <p class="detail-sub">${escapeHtml(leaderRoleLabel(unit))} ${escapeHtml(leaderNameLabel(unit))} · 직급 ${escapeHtml(leaderTitleLabel(unit.leaderTitle))} · ${escapeHtml(getParentName(unit))} 소속 · ${people.length || unit.members}명 범위</p>
      <p class="path-crumb">${escapeHtml(unit.sourcePath || unit.name)}</p>
    </div>

    <section class="detail-section">
      <h4>1. 현재 신호</h4>
      <div class="unit-bars">
        ${renderBar("변화 수용도", signal.changeAcceptance, "")}
        ${renderBar("신뢰도", signal.trust, "trust")}
        ${renderBar("피로도 / 지원 필요", signal.fatigue, "fatigue")}
        ${renderBar("문화 리스크", signal.riskScore, "fatigue")}
      </div>
	      <div class="culture-map-readout">
	        <article><span>사분면</span><strong>${escapeHtml(signal.quadrant)}</strong></article>
	        <article><span>X 좌표</span><strong>${signal.mapX}</strong></article>
	        <article><span>Y 좌표</span><strong>${signal.mapY}</strong></article>
	      </div>
	      ${renderFormulaV2Breakdown(signal)}
	      <div class="tag-list">${signal.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
    </section>

    ${
      pulse
        ? `
    <section class="detail-section">
      <div class="detail-section-head">
        <h4>2. Pulse Survey 근거</h4>
        <button class="text-link" type="button" onclick="if(typeof showView==='function')showView('pulse')">Culture Intelligence 열기 →</button>
      </div>
      <div class="pulse-readout pulse-${pulse.tier}">
        <div class="pulse-readout-item"><span>긍정 응답</span><strong>${pulse.fav}%</strong></div>
        <div class="pulse-readout-item"><span>부정 응답</span><strong>${pulse.low}%</strong></div>
        <div class="pulse-readout-item"><span>등급</span><strong>${escapeHtml(pulseTierLabel(pulse.tier))}</strong></div>
      </div>
      <p class="detail-foot">출처: ${pulse.sources.map(escapeHtml).join(", ")}${pulse.reliab ? " · 신뢰도 검토 포함" : ""}</p>
      ${renderCultureDrivers(signal)}
    </section>`
        : ""
    }

    <section class="detail-section">
      <h4>3. 다음 액션</h4>
      <div class="recommend-card">${escapeHtml(signal.recommendation)}</div>
      <div class="modal-action-row">
        <button class="primary-button" type="button" data-open-detail-modal="settings">설정하기</button>
        <button class="ghost-button" type="button" onclick="if(typeof showView==='function')showView('pulse')">Pulse 분석으로 이동</button>
      </div>
    </section>
  `;
}

function renderSettingsModal(unit) {
  const people = getPeopleForUnit(unit.id, unit.level !== "team");
  const directPeople = getPeopleForUnit(unit.id, false);
  const sortedPeople = sortPeopleForDisplay(people);
  const sortedDirectPeople = sortPeopleForDisplay(directPeople);
  const childUnits = getChildren(unit.id);
  const signal = signalForUnit(unit);
  const settingsPeople = sortedDirectPeople.length ? sortedDirectPeople : sortedPeople.slice(0, 5);
  const settingsPeopleLabel = directPeople.length
    ? `${directPeople.length}명 직접 등록`
    : people.length
      ? `${Math.min(people.length, 5)}명 미리보기`
      : "0명";

  return `
    <div class="detail-title">
      <div class="detail-title-row">
        <div class="tag-list">
          <span class="tag">${escapeHtml(displayOrgType(unit))}</span>
          <span class="tag">설정</span>
        </div>
        <button class="icon-button" id="closeDetailButton" type="button" aria-label="닫기">×</button>
      </div>
      <h3>${escapeHtml(unit.name)} 설정</h3>
      <p class="detail-sub">조직명, 책임자 호칭, 직급, 문화 신호와 구성원 소속을 수정합니다.</p>
    </div>
    ${(() => {
      const roleLabel = unit.leaderRole || defaultLeaderRole(unit.level);
      const picker = `<section class="detail-section team-leader-picker">
            <h4>${escapeHtml(roleLabel)} 설정</h4>
            ${
              directPeople.length
                ? `<label>
                    구성원 중 ${escapeHtml(roleLabel)} 선택
                    <select id="teamLeaderSelect">
                      <option value="">${escapeHtml(roleLabel)} 미정</option>
                      ${sortedDirectPeople
                        .map((person) => `<option value="${escapeHtml(person.id)}" ${person.name === unit.leader ? "selected" : ""}>${escapeHtml(person.name)} · ${escapeHtml(leaderTitleLabel(person.title))}</option>`)
                        .join("")}
                    </select>
                  </label>
                  <p class="field-hint">선택한 구성원이 카드와 조직도의 ${escapeHtml(roleLabel)}으로 반영됩니다.</p>`
                : `<div class="recommend-card">먼저 구성원을 추가한 뒤 ${escapeHtml(roleLabel)}을 선택할 수 있습니다.</div>`
            }
          </section>`;
      const pulseNote =
        unit.level !== "team"
          ? `<section class="detail-section auto-signal-note">
            <h4>Pulse Survey 자동 반영</h4>
            <div class="recommend-card">본부 이상 조직은 Pulse Survey 22개 문항 기준으로 변화 수용도, 신뢰도, 피로도 / 지원 필요, 문화 리스크와 키워드를 자동 보정합니다.</div>
          </section>`
          : "";
      return picker + pulseNote;
    })()}
    <section class="detail-section">
      <h4>조직 값 편집</h4>
      <form class="edit-form" id="editUnitForm">
        <label>
          조직 이름
          <input id="editUnitName" type="text" value="${escapeHtml(unit.name)}" required />
        </label>
        <div class="form-grid two">
          <label>
            책임자 이름
            <input id="editUnitLeader" type="text" value="${escapeHtml(hasAssignedLeader(unit) ? unit.leader : "")}" placeholder="${escapeHtml(unsetLeaderForUnit(unit))}" />
          </label>
          <label>
            책임자 호칭
            <input id="editUnitLeaderRole" type="text" list="leaderRoleOptions" value="${escapeHtml(leaderRoleLabel(unit))}" placeholder="본부장, 부문장, 팀장, 파트장" />
          </label>
        </div>
        <div class="form-grid two">
          <label>
            직급
            <input id="editUnitLeaderTitle" type="text" list="leaderTitleOptions" value="${escapeHtml(unit.leaderTitle || "")}" placeholder="이사, 상무, 전무" />
          </label>
          <label>
            조직 유형
            <input type="text" value="${escapeHtml(displayOrgType(unit))}" disabled />
          </label>
        </div>
        ${renderLeaderTitleDatalist()}
        ${renderPersonTitleDatalist()}
        ${renderLeaderRoleDatalist()}
        <div class="slider-line">
          <label for="editReadiness">변화 수용도(Change Acceptance) <output id="editReadinessOutput">${signal.changeAcceptance}</output></label>
          <input id="editReadiness" type="range" min="0" max="100" value="${unit.readiness}" />
        </div>
        <div class="slider-line">
          <label for="editTrust">신뢰도(Trust) <output id="editTrustOutput">${signal.trust}</output></label>
          <input id="editTrust" type="range" min="0" max="100" value="${unit.trust}" />
        </div>
        <div class="slider-line">
          <label for="editFatigue">피로도 / 지원 필요(Fatigue / Support Need) <output id="editFatigueOutput">${signal.fatigue}</output></label>
          <input id="editFatigue" type="range" min="0" max="100" value="${unit.fatigue}" />
        </div>
        <label>
          문화 리스크(Risk)
          <select id="editRisk">
            <option value="low" ${unit.risk === "low" ? "selected" : ""}>안정</option>
            <option value="medium" ${unit.risk === "medium" ? "selected" : ""}>관찰</option>
            <option value="high" ${unit.risk === "high" ? "selected" : ""}>지원 필요</option>
          </select>
        </label>
        <label>
          키워드 <small class="field-hint">쉼표로 구분해 직접 입력 · 카드에 표시</small>
          <input id="editUnitTags" type="text" value="${escapeHtml((unit.tags || []).join(", "))}" placeholder="예: 신뢰 안정, 변화 주도, 협업 강점" />
        </label>
        <button class="primary-button wide" type="submit">저장</button>
      </form>
    </section>

    <section class="detail-section">
      <h4>${unit.level === "team" ? "구성원" : "하위 조직과 구성원"} · ${escapeHtml(settingsPeopleLabel)}</h4>
      ${childUnits.length ? `<div class="tag-list">${childUnits.map((child) => `<span class="tag">${escapeHtml(child.name)}</span>`).join("")}</div>` : ""}
      <div class="people-list">
        ${settingsPeople.map(renderPersonRow).join("") || `<div class="recommend-card">이 조직에 직접 등록된 구성원이 없습니다.</div>`}
      </div>
      <form class="add-person-form" id="addPersonForm">
        <input id="personNameInput" type="text" placeholder="구성원 이름" required />
        <select id="personTitleSelect" aria-label="구성원 직급">
          ${personTitleOptions.map((title) => `<option value="${escapeHtml(title)}" ${title === "사원" ? "selected" : ""}>${escapeHtml(title)}</option>`).join("")}
        </select>
        <small class="field-hint">팀장 지정은 위의 ${escapeHtml(leaderRoleLabel(unit))} 설정에서 선택하세요.</small>
        <button class="small-button" type="submit">구성원 추가</button>
      </form>
    </section>

    ${
      unit.parentId
        ? `<section class="detail-section danger-zone">
            <h4>조직 삭제</h4>
            <div class="recommend-card warning-card">삭제하면 이 조직의 하위 조직과 직접 등록된 구성원이 함께 정리됩니다.</div>
            <button class="danger-button wide" type="button" data-delete-unit="${escapeHtml(unit.id)}">조직 삭제</button>
          </section>`
        : ""
    }
  `;
}

function renderPersonRow(person) {
  return `
    <article class="people-row">
      <div class="people-row-main">
        ${personAvatar(person, "member-avatar settings-avatar")}
        <div class="people-row-header">
          <strong>${escapeHtml(person.name)}</strong>
          <span>${escapeHtml(person.position)} · 직급 ${escapeHtml(leaderTitleLabel(person.title))}</span>
        </div>
      </div>
      <span>${escapeHtml(person.role)} · ${escapeHtml(person.generation)} · 영향력 ${person.influence} · 변화 수용도 ${person.readiness}</span>
      <div class="tag-list">
        ${person.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="person-inline-controls">
        <label class="person-rank-control">
          직급
          <input data-edit-person-title="${escapeHtml(person.id)}" type="text" list="personTitleOptions" value="${escapeHtml(person.title || "")}" placeholder="사장부터 사원까지" />
        </label>
        <label class="person-move-control">
          소속 이동
          <select data-move-person="${escapeHtml(person.id)}">
            ${renderPersonTargetOptions(person)}
          </select>
        </label>
      </div>
    </article>
  `;
}

function renderTemplates() {
  const templateRoot = document.getElementById("templateList");
  if (!templateRoot) return;

  templateRoot.innerHTML = groupTemplates
    .map((template) => `
      <article class="template-card">
        <strong>${escapeHtml(template.name)}</strong>
        <p>${escapeHtml(template.description)}</p>
        <button class="small-button" type="button" data-template-id="${escapeHtml(template.id)}">템플릿 적용</button>
      </article>
    `)
    .join("");
}

function buildGroupFromPeople({ name, description, criteria, peopleFilter, recommendation }) {
  const members = state.people.filter(peopleFilter);
  const unitIds = [...new Set(members.map((person) => person.unitId))];
  return {
    id: `g-${Date.now()}`,
    name,
    description,
    criteria,
    memberIds: members.map((person) => person.id),
    unitIds,
    recommendation,
  };
}

function buildGroupFromUnits({ name, description, criteria, unitFilter, recommendation }) {
  const units = state.units.filter(unitFilter);
  const unitIds = units.map((unit) => unit.id);
  const memberIds = state.people.filter((person) => unitIds.includes(person.unitId)).map((person) => person.id);
  return {
    id: `g-${Date.now()}`,
    name,
    description,
    criteria,
    memberIds,
    unitIds,
    recommendation,
  };
}

function createCustomGroup() {
  const name = document.getElementById("groupNameInput").value.trim() || "새 목적 기반 그룹";
  const role = document.getElementById("groupRoleSelect").value;
  const signal = document.getElementById("groupSignalSelect").value;
  const readiness = Number(document.getElementById("readinessRange").value);
  const influence = Number(document.getElementById("influenceRange").value);

  const members = state.people.filter((person) => {
    const unit = getUnit(person.unitId);
    if (role === "leader" && person.position !== "팀장") return false;
    if (role === "member" && person.position !== "실무자") return false;
    if (person.readiness < readiness || person.influence < influence) return false;

    if (signal === "ambassador") return person.tags.includes("앰버서더 후보");
    if (signal === "connector") return person.tags.includes("연결자");
    if (signal === "support") return person.tags.includes("지원 필요") || unit?.risk === "high";
    if (signal === "fatigue") return (unit?.fatigue || 0) >= 62;
    return true;
  });

  const unitIds = [...new Set(members.map((person) => person.unitId))];
  const group = {
    id: `g-${Date.now()}`,
    name,
    description: "직접 설정한 조건으로 만든 목적 기반 그룹입니다.",
    criteria: `역할 ${role}, 신호 ${signal}, 변화 수용도 ${readiness} 이상, 영향력 ${influence} 이상`,
    memberIds: members.map((person) => person.id),
    unitIds,
    recommendation: "그룹을 캠페인 타겟으로 쓰기 전, 개인 낙인이 아니라 팀 단위 지원 목적임을 운영 원칙에 명확히 남기세요.",
  };

  state.groups.unshift(group);
  state.view = "groups";
  closeDrawer();
  render();
}

function openDrawer() {
  state.detailModal = null;
  const drawer = document.getElementById("groupDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  backdrop.hidden = false;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  const drawer = document.getElementById("groupDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  backdrop.hidden = true;
}

document.addEventListener("click", (event) => {
  if (suppressNextClick) {
    suppressNextClick = false;
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  const unitPhotoTrigger = event.target.closest("[data-upload-unit-photo]");
  if (unitPhotoTrigger) {
    event.preventDefault();
    event.stopPropagation();
    pendingUnitPhotoId = unitPhotoTrigger.dataset.uploadUnitPhoto;
    document.getElementById("unitPhotoInput")?.click();
    return;
  }

  const personPhotoTrigger = event.target.closest("[data-upload-person-photo]");
  if (personPhotoTrigger) {
    event.preventDefault();
    event.stopPropagation();
    pendingPersonPhotoId = personPhotoTrigger.dataset.uploadPersonPhoto;
    document.getElementById("personPhotoInput")?.click();
    return;
  }

  const cardOpenButton = event.target.closest("[data-card-open]");
  if (cardOpenButton) {
    const id = cardOpenButton.dataset.cardOpen;
    if (!Array.isArray(state.openCardIds)) state.openCardIds = [];
    state.openCardIds = state.openCardIds.includes(id)
      ? state.openCardIds.filter((x) => x !== id)
      : [...state.openCardIds, id];
    render();
    return;
  }

  const statusButton = event.target.closest("[data-toggle-status]");
  if (statusButton) {
    const targetUnit = getUnit(statusButton.dataset.unit);
    const statusKey = statusButton.dataset.toggleStatus;
    if (targetUnit && statusKey) {
      targetUnit[statusKey] = !targetUnit[statusKey];
      render();
    }
    return;
  }

  const removePhotoButton = event.target.closest("[data-remove-photo]");
  if (removePhotoButton) {
    const photoUnit = getUnit(removePhotoButton.dataset.removePhoto);
    if (photoUnit) {
      photoUnit.photo = "";
      render();
    }
    return;
  }

  const removePersonPhotoButton = event.target.closest("[data-remove-person-photo]");
  if (removePersonPhotoButton) {
    const person = state.people.find((p) => p.id === removePersonPhotoButton.dataset.removePersonPhoto);
    if (person) {
      person.photo = "";
      render();
    }
    return;
  }

  const detailButton = event.target.closest("[data-open-detail]");
  if (detailButton) {
    captureMobileDetailReturn(detailButton.dataset.openDetail, detailButton);
    openDetail(detailButton.dataset.openDetail);
    render();
    scrollToMobileDetailPanel();
    return;
  }

  const toggleButton = event.target.closest("[data-toggle-unit]");
  if (toggleButton) {
    toggleExpanded(toggleButton.dataset.toggleUnit);
    render();
    return;
  }

  const closeInspectorButton = event.target.closest("[data-close-inspector]");
  if (closeInspectorButton) {
    closeDetail();
    render();
    restoreMobileDetailReturn();
    return;
  }

  const detailModalButton = event.target.closest("[data-open-detail-modal]");
  if (detailModalButton) {
    captureMobileDetailReturn(state.selectedUnitId, detailModalButton);
    openDetailModal(detailModalButton.dataset.openDetailModal || "overview");
    render();
    return;
  }

  const viewButton = event.target.closest("[data-view]");
  if (viewButton && viewButton.closest("#people .control-surface")) {
    state.view = viewButton.dataset.view;
    if (state.view !== "official") {
      state.detailOpen = false;
      state.detailModal = null;
    }
    render();
    return;
  }

  const zoomButton = event.target.closest("[data-zoom-action]");
  if (zoomButton) {
    const action = zoomButton.dataset.zoomAction;
    if (action === "fit") {
      fitOrgToView();
    } else {
      setOrgZoom(state.orgZoom + (action === "in" ? 0.1 : -0.1));
      render();
    }
    return;
  }

  const layoutButton = event.target.closest("[data-layout]");
  if (layoutButton) {
    state.orgLayout = layoutButton.dataset.layout;
    render();
    return;
  }

  const networkLevelButton = event.target.closest("[data-network-level]");
  if (networkLevelButton) {
    state.networkLevel = networkLevelButton.dataset.networkLevel;
    render();
    return;
  }

  const calendarViewButton = event.target.closest("[data-calendar-view]");
  if (calendarViewButton) {
    state.calendarView = calendarViewButton.dataset.calendarView;
    render();
    return;
  }

  const calendarShiftButton = event.target.closest("[data-calendar-shift]");
  if (calendarShiftButton) {
    shiftCalendarDate(Number(calendarShiftButton.dataset.calendarShift || 0));
    render();
    return;
  }

  const calendarDateButton = event.target.closest("[data-pick-calendar-date]");
  if (calendarDateButton) {
    state.selectedCalendarDate = calendarDateButton.dataset.pickCalendarDate;
    const shouldPopup = isMobileCalendarLayout() && sessionsForDate(state.selectedCalendarDate).length > 0;
    render();
    if (shouldPopup) requestAnimationFrame(() => showCalendarDayPopup(state.selectedCalendarDate));
    return;
  }

  if (event.target.closest("[data-close-calendar-popup]") || event.target.id === "calendarDayPopup") {
    closeCalendarDayPopup();
    return;
  }

  const wowSessionTabButton = event.target.closest("[data-wow-session-tab]");
  if (wowSessionTabButton) {
    state.sessionView = wowSessionTabButton.dataset.wowSessionTab || "execution";
    renderWowSessionWorkspace();
    persist();
    return;
  }

  if (event.target.closest("[data-session-survey-upload]")) {
    document.getElementById("orgUploadInput")?.click();
    return;
  }

  if (event.target.closest("[data-refresh-session-prompt]")) {
    renderWowSessionWorkspace();
    return;
  }

  if (event.target.closest("[data-copy-session-prompt]")) {
    copySessionAnalysisPrompt();
    return;
  }

  if (event.target.closest("[data-save-session-analysis]")) {
    saveSelectedSessionAnalysisResult();
    return;
  }

  const surveyTplBtn = event.target.closest("[data-survey-template]");
  if (surveyTplBtn) {
    downloadSurveyTemplate(surveyTplBtn.dataset.surveyTemplate);
    return;
  }

  const surveyUpBtn = event.target.closest("[data-survey-upload]");
  if (surveyUpBtn) {
    triggerSurveyUpload(surveyUpBtn.dataset.surveyUpload);
    return;
  }

  const absentToggle = event.target.closest("[data-absent-toggle]");
  if (absentToggle) {
    const container = absentToggle.closest("[data-session-absentees]");
    const session = (state.sessions || []).find((s) => s.id === container?.dataset.sessionAbsentees);
    if (session) {
      const pid = absentToggle.dataset.absentToggle;
      const set = new Set(sessionAbsentIds(session));
      if (set.has(pid)) set.delete(pid);
      else set.add(pid);
      session.absentPersonIds = Array.from(set);
      session.participants = sessionActualParticipants(session);
      persist();
      renderWowSessionWorkspace();
    }
    return;
  }

  const filterInput = event.target.closest("[data-filter]");
  if (filterInput) {
    state.filters[filterInput.dataset.filter] = filterInput.checked;
    render();
    return;
  }

  const deleteButton = event.target.closest("[data-delete-group]");
  if (deleteButton) {
    state.groups = state.groups.filter((group) => group.id !== deleteButton.dataset.deleteGroup);
    render();
    return;
  }

  const deleteUnitButton = event.target.closest("[data-delete-unit]");
  if (deleteUnitButton) {
    const unit = getUnit(deleteUnitButton.dataset.deleteUnit);
    if (unit && window.confirm(`${unit.name} 조직을 삭제할까요? 하위 조직과 직접 등록 구성원도 함께 삭제됩니다.`)) {
      deleteUnit(unit.id);
      render();
    }
    return;
  }

  const deletePersonButton = event.target.closest("[data-delete-person]");
  if (deletePersonButton) {
    const person = state.people.find((item) => item.id === deletePersonButton.dataset.deletePerson);
    if (person && window.confirm(`${person.name} 구성원을 삭제할까요?`)) {
      deletePerson(person.id);
      render();
    }
    return;
  }

  const deleteSessionButton = event.target.closest("[data-delete-session]");
  if (deleteSessionButton) {
    state.sessions = (state.sessions || []).filter((session) => session.id !== deleteSessionButton.dataset.deleteSession);
    closeCalendarDayPopup();
    render();
    return;
  }

  if (event.target.id === "downloadOrgTemplateButton") {
    downloadOrganizationTemplate();
    return;
  }

  if (event.target.id === "uploadOrgButton") {
    document.getElementById("orgUploadInput")?.click();
    return;
  }

  if (event.target.id === "saveOrgCloudButton") {
    saveOrganizationCloudNow()
      .then((saved) => notifyOrganization(saved ? "조직도 Firebase 저장 완료" : "Firebase 연결 없음 · PC에만 저장됨"))
      .catch((error) => {
        console.warn("Could not save organization data manually.", error);
        setOrganizationCloudError("저장", error);
        notifyOrganization("Firebase 저장 실패 · 상태바에서 원인을 확인하세요");
      });
    return;
  }

  if (event.target.id === "restoreOrgBackupButton") {
    restoreOrganizationBackup();
    return;
  }

  const templateButton = event.target.closest("[data-template-id]");
  if (templateButton) {
    const template = groupTemplates.find((item) => item.id === templateButton.dataset.templateId);
    if (template) {
      state.groups.unshift(template.build());
      state.view = "groups";
      closeDrawer();
      render();
    }
    return;
  }

  if (event.target.id === "openGroupPanelButton" || event.target.id === "openGroupPanelButtonInline") {
    openDrawer();
    return;
  }

  if (event.target.id === "drawerBackdrop") {
    if (state.detailModal) {
      closeDetailModal();
      render();
      restoreMobileDetailReturn();
    } else {
      closeDrawer();
    }
    return;
  }

  if (event.target.id === "closeGroupPanelButton") {
    closeDrawer();
    return;
  }

  if (event.target.id === "closeDetailButton") {
    closeDetailModal();
    render();
    restoreMobileDetailReturn();
    return;
  }

  if (event.target.id === "createGroupButton") {
    createCustomGroup();
    return;
  }

  // "샘플 복원" 기능 제거됨: 시드로 리셋 후 클라우드까지 시드로 덮어써 데이터가 사라지는 사고를 막기 위해 삭제.
});

document.addEventListener("input", (event) => {
  if (event.target.id === "searchInput") {
    state.search = event.target.value;
    render();
    return;
  }

  if (event.target.id === "readinessRange") {
    document.getElementById("readinessOutput").textContent = event.target.value;
    return;
  }

  if (event.target.id === "influenceRange") {
    document.getElementById("influenceOutput").textContent = event.target.value;
    return;
  }

  if (event.target.id === "editReadiness") {
    document.getElementById("editReadinessOutput").textContent = event.target.value;
    return;
  }

  if (event.target.id === "editTrust") {
    document.getElementById("editTrustOutput").textContent = event.target.value;
    return;
  }

  if (event.target.id === "editFatigue") {
    document.getElementById("editFatigueOutput").textContent = event.target.value;
  }
});

document.addEventListener("change", (event) => {
  const filterToggle = event.target.closest("[data-filter]");
  if (filterToggle) {
    state.filters[filterToggle.dataset.filter] = filterToggle.checked;
    render();
    return;
  }

  if (event.target.id === "unitPhotoInput" && event.target.files && event.target.files[0]) {
    const unitId = pendingUnitPhotoId;
    readImageDownscaled(event.target.files[0], 180)
      .then((dataUrl) => {
        const unit = getUnit(unitId);
        if (unit) {
          unit.photo = dataUrl;
          render();
        }
      })
      .finally(() => {
        pendingUnitPhotoId = null;
        event.target.value = "";
      })
      .catch(() => {});
    return;
  }

  if (event.target.id === "personPhotoInput" && event.target.files && event.target.files[0]) {
    const personId = pendingPersonPhotoId;
    readImageDownscaled(event.target.files[0], 140)
      .then((dataUrl) => {
        const person = state.people.find((p) => p.id === personId);
        if (person) {
          person.photo = dataUrl;
          render();
        }
      })
      .finally(() => {
        pendingPersonPhotoId = null;
        event.target.value = "";
      })
      .catch(() => {});
    return;
  }

  if (event.target.id === "orgUploadInput" && event.target.files && event.target.files[0]) {
    parseOrganizationUpload(event.target.files[0])
      .then(async (rows) => {
        if (confirmOrganizationUpload(rows) && applyOrganizationTemplate(rows)) {
          render();
          try {
            const saved = await saveOrganizationCloudNow();
            notifyOrganization(saved ? "조직/설문 업로드 적용 및 Firebase 저장 완료" : "조직/설문 업로드 적용 · Firebase 연결 없음");
          } catch (saveError) {
            console.warn("Could not save uploaded organization survey data.", saveError);
            setOrganizationCloudError("저장", saveError);
            notifyOrganization("조직/설문 업로드 적용 · Firebase 저장 실패");
          }
        }
      })
      .catch((error) => {
        window.alert(error.message || "조직도 업로드 중 오류가 발생했습니다.");
      })
      .finally(() => {
        event.target.value = "";
      });
    return;
  }

  if (event.target.id === "calendarDateInput") {
    state.selectedCalendarDate = event.target.value || todayIso();
    render();
    return;
  }

  if (event.target.id === "sessionTeamInput") {
    const input = document.getElementById("sessionParticipantsInput");
    const preview = document.getElementById("sessionParticipantsPreview");
    const count = participantCountForTeam(event.target.value);
    if (input) input.value = String(count);
    if (preview) {
      preview.innerHTML = `<strong>${count}명</strong><span>조직도 기준 자동 계산 · 팀장 포함</span>`;
    }
    return;
  }

  if (event.target.id === "sessionAnalysisTeamSelect" || event.target.closest("[data-wow-team-select]")) {
    state.selectedSessionAnalysisTeamId = event.target.value;
    renderWowSessionWorkspace();
    persist();
    return;
  }

  if (event.target.id === "teamLeaderSelect") {
    if (setTeamLeader(state.selectedUnitId, event.target.value)) {
      render();
    }
    return;
  }

  const photoInput = event.target.closest("[data-photo-unit]");
  if (photoInput && photoInput.files && photoInput.files[0]) {
    const unitId = photoInput.dataset.photoUnit;
    readImageDownscaled(photoInput.files[0], 160)
      .then((dataUrl) => {
        const unit = getUnit(unitId);
        if (unit) {
          if (!state.openCardIds.includes(unitId)) state.openCardIds = [...state.openCardIds, unitId];
          unit.photo = dataUrl;
          render();
        }
      })
      .catch(() => {});
    return;
  }

  const personPhotoInput = event.target.closest("[data-photo-person]");
  if (personPhotoInput && personPhotoInput.files && personPhotoInput.files[0]) {
    const personId = personPhotoInput.dataset.photoPerson;
    readImageDownscaled(personPhotoInput.files[0], 128)
      .then((dataUrl) => {
        const person = state.people.find((p) => p.id === personId);
        if (person) {
          person.photo = dataUrl;
          render();
        }
      })
      .catch(() => {});
    return;
  }

  const personTitleInput = event.target.closest("[data-edit-person-title]");
  if (personTitleInput) {
    if (updatePersonTitle(personTitleInput.dataset.editPersonTitle, personTitleInput.value)) {
      render();
    }
    return;
  }

  const moveSelect = event.target.closest("[data-move-person]");
  if (moveSelect) {
    if (movePerson(moveSelect.dataset.movePerson, moveSelect.value)) {
      render();
    }
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "sessionForm") {
    event.preventDefault();
    const team = getUnit(document.getElementById("sessionTeamInput").value);
    const track = document.getElementById("sessionTrackInput")?.value || "team";
    const step = Number(document.getElementById("sessionStepInput")?.value || 1);
    const stepName = trackSteps(track)[step - 1] || "";
    const session = {
      id: `session-${Date.now()}`,
      date: document.getElementById("sessionDateInput").value || state.selectedCalendarDate,
      startTime: document.getElementById("sessionTimeInput").value || "10:00",
      track,
      step,
      stepName,
      sessionName: `${(WOW_TRACKS[track] || {}).label || "세션"} ${step}. ${stepName}`,
      teamId: team?.id || "",
      teamName: team?.name || "팀 미정",
      participants: participantCountForTeam(team?.id),
      absentPersonIds: [],
    };
    state.sessions = [...(state.sessions || []), session];
    state.selectedCalendarDate = session.date;
    render();
    return;
  }

  if (event.target.id === "editUnitForm") {
    event.preventDefault();
    const unit = getUnit(state.selectedUnitId);
    if (!unit) return;
    unit.name = document.getElementById("editUnitName").value.trim() || unit.name;
    unit.leaderRole = document.getElementById("editUnitLeaderRole").value.trim() || defaultLeaderRole(unit.level);
    unit.leader = document.getElementById("editUnitLeader").value.trim() || unsetLeaderForUnit(unit);
    unit.leaderTitle = document.getElementById("editUnitLeaderTitle").value.trim();
    unit.readiness = Number(document.getElementById("editReadiness").value);
    unit.trust = Number(document.getElementById("editTrust").value);
    unit.fatigue = Number(document.getElementById("editFatigue").value);
    unit.risk = document.getElementById("editRisk").value;
    const tagsInput = document.getElementById("editUnitTags");
    if (tagsInput) {
      unit.tags = tagsInput.value
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .slice(0, 6);
    }
    syncLeaderPersonTitle(unit);
    refreshSourcePaths(unit.id);
    render();
    return;
  }

  if (event.target.id === "addPersonForm") {
    event.preventDefault();
    const unit = getUnit(state.selectedUnitId);
    const name = document.getElementById("personNameInput").value.trim();
    const title = document.getElementById("personTitleSelect")?.value || "사원";
    if (!unit || !name) return;

    const person = {
      id: `p-${Date.now()}`,
      name,
      title,
      role: `${unit.name} 구성원`,
      position: "구성원",
      generation: "30대",
      unitId: unit.id,
      influence: 55,
      readiness: unit.readiness,
      tags: ["신규 등록"],
    };

    state.people.push(person);
    render();
  }
});

document.addEventListener("mousedown", (event) => {
  if (event.button !== 0) return;
  if (event.target.closest("[data-toggle-unit]")) return;

  const createSource = event.target.closest("[data-drag-create]");
  const unitSource = event.target.closest("[data-drag-unit-id]");
  if (!createSource && !unitSource) return;

  const payload = createSource
    ? { action: "create", level: createSource.dataset.dragCreate }
    : { action: "move", unitId: unitSource.dataset.dragUnitId };

  pointerDrag = {
    active: false,
    payload,
    source: createSource || unitSource,
    startX: event.clientX,
    startY: event.clientY,
    ghost: null,
  };
});

document.addEventListener("mousemove", (event) => {
  if (!pointerDrag) return;
  const distance = Math.hypot(event.clientX - pointerDrag.startX, event.clientY - pointerDrag.startY);
  if (!pointerDrag.active && distance < 8) return;

  if (!pointerDrag.active) {
    pointerDrag.active = true;
    activeDragPayload = pointerDrag.payload;
    pointerDrag.source.classList.add("dragging");
    pointerDrag.ghost = document.createElement("div");
    pointerDrag.ghost.className = "drag-ghost";
    pointerDrag.ghost.textContent =
      pointerDrag.payload.action === "create"
        ? pointerDrag.payload.level === "division"
          ? "새 부문"
          : pointerDrag.payload.level === "hq"
          ? "새 본부"
          : "새 팀"
        : getUnit(pointerDrag.payload.unitId)?.name || "조직 이동";
    document.body.appendChild(pointerDrag.ghost);
  }

  pointerDrag.ghost.style.left = `${event.clientX}px`;
  pointerDrag.ghost.style.top = `${event.clientY}px`;

  document.querySelectorAll(".drop-ready").forEach((element) => element.classList.remove("drop-ready"));
  const dropTarget = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-drop-unit-id]");
  if (!dropTarget) return;

  const parent = getUnit(dropTarget.dataset.dropUnitId);
  const allowed =
    pointerDrag.payload.action === "create"
      ? canCreateUnder(pointerDrag.payload.level, parent)
      : canMoveUnit(getUnit(pointerDrag.payload.unitId), parent);
  if (allowed) dropTarget.classList.add("drop-ready");
});

document.addEventListener("mouseup", (event) => {
  if (!pointerDrag) return;
  const wasActive = pointerDrag.active;
  const payload = pointerDrag.payload;
  const ghost = pointerDrag.ghost;
  pointerDrag.source.classList.remove("dragging");
  document.querySelectorAll(".drop-ready").forEach((element) => element.classList.remove("drop-ready"));
  if (ghost) ghost.remove();
  pointerDrag = null;
  activeDragPayload = null;

  if (!wasActive) return;
  suppressNextClick = true;

  const dropTarget = document.elementFromPoint(event.clientX, event.clientY)?.closest("[data-drop-unit-id]");
  if (!dropTarget) return;

  const parentId = dropTarget.dataset.dropUnitId;
  const changed = payload.action === "create" ? Boolean(createUnit(payload.level, parentId)) : moveUnit(payload.unitId, parentId);
  if (changed) render();
});

document.addEventListener("dragstart", (event) => {
  const createSource = event.target.closest("[data-drag-create]");
  if (createSource) {
    activeDragPayload = { action: "create", level: createSource.dataset.dragCreate };
    event.dataTransfer.setData("application/json", JSON.stringify(activeDragPayload));
    event.dataTransfer.effectAllowed = "copy";
    createSource.classList.add("dragging");
    return;
  }

  const personSource = event.target.closest("[data-drag-person-id]");
  if (personSource) {
    activeDragPayload = { action: "move-person", personId: personSource.dataset.dragPersonId };
    event.dataTransfer.setData("application/json", JSON.stringify(activeDragPayload));
    event.dataTransfer.effectAllowed = "move";
    personSource.classList.add("dragging");
    return;
  }

  const unitSource = event.target.closest("[data-drag-unit-id]");
  if (unitSource) {
    activeDragPayload = { action: "move", unitId: unitSource.dataset.dragUnitId };
    event.dataTransfer.setData("application/json", JSON.stringify(activeDragPayload));
    event.dataTransfer.effectAllowed = "move";
    unitSource.classList.add("dragging");
  }
});

document.addEventListener("dragend", () => {
  document.querySelectorAll(".dragging, .drop-ready").forEach((element) => {
    element.classList.remove("dragging", "drop-ready");
  });
  activeDragPayload = null;
});

document.addEventListener("dragover", (event) => {
  const rowTarget = event.target.closest(".inspector-member-row[data-drag-person-id]");
  const payload = getDragPayload(event);
  if (rowTarget && payload?.action === "move-person" && rowTarget.dataset.dragPersonId !== payload.personId) {
    event.preventDefault();
    rowTarget.classList.add("drop-ready");
    return;
  }

  const dropTarget = event.target.closest("[data-drop-unit-id]");
  if (!dropTarget) return;

  const parent = getUnit(dropTarget.dataset.dropUnitId);
  if (!payload) return;

  const allowed =
    payload.action === "create"
      ? canCreateUnder(payload.level, parent)
      : payload.action === "move-person"
        ? Boolean(parent && parent.level !== "company")
        : canMoveUnit(getUnit(payload.unitId), parent);

  if (!allowed) return;
  event.preventDefault();
  dropTarget.classList.add("drop-ready");
});

document.addEventListener("dragleave", (event) => {
  const rowTarget = event.target.closest(".inspector-member-row[data-drag-person-id]");
  if (rowTarget) rowTarget.classList.remove("drop-ready");

  const dropTarget = event.target.closest("[data-drop-unit-id]");
  if (dropTarget) dropTarget.classList.remove("drop-ready");
});

document.addEventListener("drop", (event) => {
  const rowTarget = event.target.closest(".inspector-member-row[data-drag-person-id]");
  const rowPayload = getDragPayload(event);
  if (rowTarget && rowPayload?.action === "move-person" && rowTarget.dataset.dragPersonId !== rowPayload.personId) {
    event.preventDefault();
    rowTarget.classList.remove("drop-ready");
    const targetPerson = state.people.find((person) => person.id === rowTarget.dataset.dragPersonId);
    let changed = false;
    if (targetPerson) {
      const source = state.people.find((person) => person.id === rowPayload.personId);
      if (source && source.unitId !== targetPerson.unitId) changed = movePerson(rowPayload.personId, targetPerson.unitId);
      changed = reorderPerson(rowPayload.personId, rowTarget.dataset.dragPersonId) || changed;
    }
    if (changed) render();
    activeDragPayload = null;
    return;
  }

  const dropTarget = event.target.closest("[data-drop-unit-id]");
  if (!dropTarget) return;

  const payload = getDragPayload(event);
  if (!payload) return;

  event.preventDefault();
  dropTarget.classList.remove("drop-ready");
  const parentId = dropTarget.dataset.dropUnitId;
  let changed = false;

  if (payload.action === "create") {
    changed = Boolean(createUnit(payload.level, parentId));
  } else if (payload.action === "move") {
    changed = moveUnit(payload.unitId, parentId);
  } else if (payload.action === "move-person") {
    changed = movePerson(payload.personId, parentId);
  }

  if (changed) render();
  activeDragPayload = null;
});

function getDragPayload(event) {
  try {
    const raw = event.dataTransfer?.getData("application/json");
    return raw ? JSON.parse(raw) : activeDragPayload;
  } catch (error) {
    return activeDragPayload;
  }
}

window.addEventListener("resize", () => {
  if (state.view === "official") drawOrgConnections();
});

render();
