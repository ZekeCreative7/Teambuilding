/* 공통 헬퍼 — index.html과 session-designer.html이 함께 사용합니다.
   firebase compat 스크립트 다음, 각 페이지의 인라인 스크립트보다 먼저 로드되어야 합니다.

   주의: esc()/escAttr()는 페이지마다 사용 맥락(HTML 속성값 vs onclick의 JS 문자열)이 달라
   의미가 다르므로 일부러 공유하지 않고 각 파일에 그대로 둡니다. */

const firebaseConfig = {
  apiKey: "AIzaSyAA2BvQ7yllagmJvbUBUlBUOnfkkdHwuqI",
  authDomain: "creative-session-canvas.firebaseapp.com",
  projectId: "creative-session-canvas",
  storageBucket: "creative-session-canvas.firebasestorage.app",
  messagingSenderId: "605192328299",
  appId: "1:605192328299:web:9be3f62ccae301cccd4d2e",
  measurementId: "G-DRM186YD59"
};

/* 마스터(관리자) 계정 이메일. 승인 관리와 마스터 권한 판정에 사용.
   주의: 클라이언트의 이메일/승인 검사는 UI 가드일 뿐이며, 실제 접근 제어는 Firestore 보안 규칙에서 강제해야 합니다. */
const ADMIN_EMAIL = "rhokoo7@naver.com";

function friendlyAuthErr(e) {
  let c = (e && e.code) || '';
  if (c.includes('invalid-email')) return '이메일 형식이 올바르지 않습니다.';
  if (c.includes('missing-password') || c.includes('weak-password')) return '비밀번호는 6자 이상이어야 합니다.';
  if (c.includes('email-already-in-use')) return '이미 가입된 이메일입니다. 로그인을 눌러주세요.';
  if (c.includes('invalid-credential') || c.includes('wrong-password') || c.includes('user-not-found')) return '이메일 또는 비밀번호가 올바르지 않습니다.';
  if (c.includes('too-many-requests')) return '시도가 너무 많습니다. 잠시 후 다시 시도하세요.';
  return (e && e.message) || '오류가 발생했습니다.';
}

function download(name, text, type) {
  let a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: type || 'text/plain' }));
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 600);
}
