// 네이버 뉴스 검색. 보험 전문지·경제지·금융당국 발표 기사가 모두 여기에 잡힙니다.
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'");

export async function searchNews(query, display = 10) {
  const id = process.env.NAVER_CLIENT_ID, secret = process.env.NAVER_CLIENT_SECRET;
  if (!id || !secret) throw new Error('네이버 API 키가 설정되지 않았습니다 (.env.local 확인)');
  const url = `https://openapi.naver.com/v1/search/news.json?query=${encodeURIComponent(query)}&display=${display}&sort=date`;
  const res = await fetch(url, { headers: { 'X-Naver-Client-Id': id, 'X-Naver-Client-Secret': secret } });
  if (!res.ok) throw new Error(`네이버 검색 오류 ${res.status}`);
  const { items } = await res.json();
  return items.map((it) => ({
    title: strip(it.title),
    summary: strip(it.description),
    link: it.originallink || it.link,
    source: new URL(it.originallink || it.link).hostname.replace(/^www\./, ''),
    date: new Date(it.pubDate).toISOString().slice(0, 10),
  }));
}

export async function insuranceNews() {
  const queries = ['보험', '금융위원회 보험', '금융감독원 보험', '실손보험', '보험료 인상', '간병보험', 'GA 보험대리점'];
  const lists = await Promise.all(queries.map((q) => searchNews(q, 10)));
  const seen = new Set();
  return lists.flat().filter((n) => !seen.has(n.title) && seen.add(n.title));
}
