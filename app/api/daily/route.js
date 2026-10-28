import { insuranceNews } from '@/lib/news';
import { write } from '@/lib/ai';
import { editionDate, secondsUntil8am } from '@/lib/time';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

// ponytail: DB 없이 CDN 캐시로 하루치를 보관합니다. 캐시는 다음 오전 8시에 만료되고,
// Vercel Cron(vercel.json)이 8시에 호출해 새 판을 만듭니다. 기록 보관이 필요해지면 DB를 붙이세요.
export async function GET() {
  try {
    const news = (await insuranceNews()).slice(0, 40);
    const list = news.map((n, i) => `${i}. [${n.source}] ${n.title} - ${n.summary}`).join('\n');
    const pick = await write(`아래는 최근 보험 관련 뉴스다. 보험 고객에게 보낼 "오늘의 주요뉴스" 5개와 "오늘의 보험소식" 1개를 골라라.
고객 생활에 영향이 큰 것(보험료, 보장, 제도 변경, 청구 방법)을 우선하고, 업계 내부 인사·실적 기사는 제외하라.
${list}

JSON으로만 답하라:
{"items":[{"i":번호,"headline":"20자 이내","points":["핵심 3개, 각 35자 이내"],"tip":"고객에게 주는 한 줄 조언 40자 이내"}],
 "today":{"i":번호,"headline":"20자 이내","body":"고객에게 카톡으로 보낼 친근한 설명 300자 이내"}}`, { json: true });

    const withSource = (x) => ({ ...x, link: news[x.i]?.link, source: news[x.i]?.source });
    const body = { date: editionDate(), items: pick.items.map(withSource), today: withSource(pick.today) };
    return Response.json(body, { headers: { 'Cache-Control': `public, s-maxage=${secondsUntil8am()}` } });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
