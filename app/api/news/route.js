import { searchNews, insuranceNews } from '@/lib/news';

export async function GET(req) {
  try {
    const q = new URL(req.url).searchParams.get('q');
    return Response.json(q ? await searchNews(q, 20) : await insuranceNews());
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
