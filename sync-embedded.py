#!/usr/bin/env python3
"""pulse-seed-data.json(정본)으로부터 index.html의 EMBEDDED_PULSE_SEED 폴백 사본을 재생성한다.

사용법:
    python3 sync-embedded.py

JSON을 수정한 뒤 반드시 실행하여 두 사본을 동일하게 유지할 것.
"""
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
JSON_PATH = HERE / "pulse-seed-data.json"
HTML_PATH = HERE / "index.html"
PREFIX = "const EMBEDDED_PULSE_SEED="


def main() -> int:
    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    minified = json.dumps(data, ensure_ascii=False, separators=(",", ":"))

    lines = HTML_PATH.read_text(encoding="utf-8").split("\n")
    hits = [i for i, line in enumerate(lines) if line.startswith(PREFIX)]
    if len(hits) != 1:
        print(f"오류: '{PREFIX}'로 시작하는 줄이 {len(hits)}개입니다(1개여야 함).", file=sys.stderr)
        return 1

    lines[hits[0]] = f"{PREFIX}{minified};"
    HTML_PATH.write_text("\n".join(lines), encoding="utf-8")
    print(f"동기화 완료: EMBEDDED_PULSE_SEED ← pulse-seed-data.json ({len(minified)} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
