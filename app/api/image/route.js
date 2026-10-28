import { image } from '@/lib/ai';

export const maxDuration = 60;

export async function POST(req) {
  try {
    const { topic } = await req.json();
    const b64 = await image(`인스타그램 카드뉴스 배경 이미지. 주제: ${topic}. 글자 없이, 차분하고 신뢰감 있는 일러스트, 아래쪽 절반은 단순하게.`);
    return Response.json({ b64 });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
