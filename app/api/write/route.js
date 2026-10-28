import { write } from '@/lib/ai';

const PROMPTS = {
  blog: ({ topic, keyword }) => `네이버 블로그 상위노출용 보험 정보 글을 써라.
주제: ${topic}
핵심 키워드: ${keyword || topic}
형식:
[제목 후보] 키워드를 앞쪽에 넣은 제목 5개
[본문] 2000자 이상. 도입 → 소제목 4~5개 → 정리. 키워드를 본문에 자연스럽게 5~7회 포함. 소제목마다 이미지 넣을 위치를 (이미지: 설명)으로 표시.
[태그] 네이버 태그 10개 (#포함)
마지막 줄: "※ 본 글은 일반 정보 제공 목적이며, 구체적인 보장 내용은 약관을 확인하세요."`,

  reels: ({ topic, keyword }) => `보험 정보 인스타그램 릴스(30초) 제작안을 써라.
주제: ${topic}
${keyword ? `강조할 점: ${keyword}` : ''}
형식:
[후킹 문구] 첫 3초용 3개
[대본] 장면별로 "장면 / 화면 자막 / 내레이션 / 초"
[썸네일 문구] 3개 (15자 이내)
[캡션] 본문 + 저장·공유 유도 한 줄
[해시태그] 15개`,

  card: ({ topic }) => `다음 뉴스를 인스타그램 카드뉴스 1장으로 요약하라.
${topic}
JSON으로만 답하라: {"headline": "20자 이내 제목", "points": ["핵심 3개, 각 35자 이내"], "tip": "고객에게 주는 한 줄 조언 40자 이내"}`,
};

export async function POST(req) {
  try {
    const { type, ...input } = await req.json();
    if (!PROMPTS[type] || !input.topic?.trim()) return Response.json({ error: '주제를 입력하세요' }, { status: 400 });
    const result = await write(PROMPTS[type](input), { json: type === 'card' });
    return Response.json({ result });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
