'use client';
import { useEffect, useRef, useState } from 'react';

const TABS = [
  ['daily', '오늘의 뉴스'],
  ['card', '뉴스카드'],
  ['blog', '블로그'],
  ['reels', '릴스'],
];

async function api(path, body) {
  const res = await fetch(path, body ? { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) } : undefined);
  const data = await res.json();
  if (!res.ok || data.error) throw new Error(data.error || `오류 ${res.status}`);
  return data;
}

async function copy(text) {
  try { await navigator.clipboard.writeText(text); return true; } catch { return false; }
}

// 1080×1350 인스타그램 세로 카드
function wrap(ctx, text, max) {
  const lines = [];
  let line = '';
  for (const ch of text) {
    if (ctx.measureText(line + ch).width > max && line) { lines.push(line); line = ch.trimStart(); }
    else line += ch;
  }
  if (line) lines.push(line);
  return lines;
}

function drawCard(cv, card, bg) {
  const W = 1080, H = 1350, P = 90, font = "'Pretendard','Malgun Gothic',sans-serif";
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#12285e'; ctx.fillRect(0, 0, W, H);
  if (bg) {
    const s = Math.max(W / bg.width, H / bg.height);
    ctx.drawImage(bg, (W - bg.width * s) / 2, (H - bg.height * s) / 2, bg.width * s, bg.height * s);
    ctx.fillStyle = 'rgba(10,22,52,.72)'; ctx.fillRect(0, 0, W, H);
  }
  ctx.textBaseline = 'top';
  ctx.fillStyle = '#ffd34d'; ctx.font = `700 38px ${font}`;
  ctx.fillText(card.label || '보험 뉴스', P, P);
  ctx.fillStyle = 'rgba(255,255,255,.7)'; ctx.font = `500 32px ${font}`;
  ctx.fillText(card.date || '', W - P - ctx.measureText(card.date || '').width, P + 4);

  let y = P + 110;
  ctx.fillStyle = '#fff'; ctx.font = `800 80px ${font}`;
  for (const l of wrap(ctx, card.headline || '', W - P * 2)) { ctx.fillText(l, P, y); y += 100; }
  y += 40;
  ctx.font = `500 44px ${font}`;
  for (const p of card.points || []) {
    ctx.fillStyle = '#ffd34d'; ctx.fillText('✓', P, y);
    ctx.fillStyle = '#fff';
    for (const l of wrap(ctx, p, W - P * 2 - 60)) { ctx.fillText(l, P + 60, y); y += 62; }
    y += 24;
  }
  if (card.tip) {
    ctx.font = `600 40px ${font}`;
    const lines = wrap(ctx, card.tip, W - P * 2 - 80);
    const boxH = lines.length * 56 + 70, top = H - P - 60 - boxH;
    ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.fillRect(P, top, W - P * 2, boxH);
    ctx.fillStyle = '#fff';
    lines.forEach((l, i) => ctx.fillText(l, P + 40, top + 35 + i * 56));
  }
  ctx.fillStyle = 'rgba(255,255,255,.6)'; ctx.font = `400 28px ${font}`;
  ctx.fillText(`출처: ${card.source || '-'}`, P, H - P);
}

function download(cv, name) {
  const a = document.createElement('a');
  a.href = cv.toDataURL('image/png');
  a.download = `${name}.png`;
  a.click();
}

function loadImage(b64) {
  return new Promise((ok, fail) => { const i = new Image(); i.onload = () => ok(i); i.onerror = fail; i.src = `data:image/png;base64,${b64}`; });
}

function Card({ card, name, bg }) {
  const ref = useRef(null);
  useEffect(() => { document.fonts.ready.then(() => ref.current && drawCard(ref.current, card, bg)); }, [card, bg]);
  return (
    <div style={{ display: 'grid', gap: 8 }}>
      <canvas ref={ref} />
      <button className="btn ghost" onClick={() => download(ref.current, name)}>PNG 저장</button>
    </div>
  );
}

function TextTool({ type, topicLabel, keywordLabel, placeholder }) {
  const [topic, setTopic] = useState('');
  const [keyword, setKeyword] = useState('');
  const [out, setOut] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState('');
  async function run() {
    setBusy(true); setMsg('');
    try { setOut((await api('/api/write', { type, topic, keyword })).result); }
    catch (e) { setMsg(e.message); }
    setBusy(false);
  }
  return (
    <div className="panel">
      <label>{topicLabel}<input id={`${type}-topic`} value={topic} onChange={(e) => setTopic(e.target.value)} placeholder={placeholder} /></label>
      <label>{keywordLabel}<input id={`${type}-kw`} value={keyword} onChange={(e) => setKeyword(e.target.value)} /></label>
      <div className="row">
        <button className="btn" disabled={busy || !topic.trim()} onClick={run}>{busy ? '작성 중…' : '생성하기'}</button>
        {out && <button className="btn ghost" onClick={async () => setMsg((await copy(out)) ? '복사했습니다' : '복사가 안 되면 아래 글을 직접 선택해 복사하세요')}>전체 복사</button>}
        {msg && <span className={msg.includes('복사') ? 'hint' : 'err'}>{msg}</span>}
      </div>
      <textarea id={`${type}-out`} className="out" value={out} onChange={(e) => setOut(e.target.value)} placeholder="결과가 여기에 나옵니다. 바로 고쳐 쓸 수 있습니다." />
    </div>
  );
}

function CardTool() {
  const [q, setQ] = useState('실손보험');
  const [news, setNews] = useState([]);
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [card, setCard] = useState(null);
  const [bg, setBg] = useState(null);
  const [busy, setBusy] = useState('');
  const [err, setErr] = useState('');
  async function step(label, fn) {
    setBusy(label); setErr('');
    try { await fn(); } catch (e) { setErr(e.message); }
    setBusy('');
  }
  return (
    <div className="panel">
      <div className="row">
        <input id="card-q" style={{ flex: 1, minWidth: 0 }} value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && step('search', async () => setNews(await api(`/api/news?q=${encodeURIComponent(q)}`)))} />
        <button className="btn ghost" disabled={!!busy} onClick={() => step('search', async () => setNews(await api(`/api/news?q=${encodeURIComponent(q)}`)))}>뉴스 검색</button>
      </div>
      {news.length > 0 && (
        <div className="news">
          {news.map((n) => (
            <button key={n.link} onClick={() => { setText(`${n.title}\n${n.summary}`); setSource(n.source); }}>
              {n.title}<small>{n.source} · {n.date}</small>
            </button>
          ))}
        </div>
      )}
      <label>카드로 만들 내용 (뉴스를 고르거나 기사 내용을 붙여넣으세요)<textarea id="card-text" value={text} onChange={(e) => setText(e.target.value)} /></label>
      <div className="row">
        <button className="btn" disabled={!!busy || !text.trim()} onClick={() => step('card', async () => { const { result } = await api('/api/write', { type: 'card', topic: text }); setCard({ ...result, source, label: '보험 뉴스', date: new Date().toLocaleDateString('ko-KR') }); })}>{busy === 'card' ? '만드는 중…' : '카드 만들기'}</button>
        {card && <button className="btn ghost" disabled={!!busy} onClick={() => step('bg', async () => setBg(await loadImage((await api('/api/image', { topic: card.headline })).b64)))}>{busy === 'bg' ? '그리는 중… (최대 1분)' : 'AI 배경 이미지'}</button>}
        {err && <span className="err">{err}</span>}
      </div>
      {card && <div className="cards" style={{ maxWidth: 360 }}><Card card={card} bg={bg} name={`뉴스카드-${card.headline}`} /></div>}
    </div>
  );
}

function Daily() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState('');
  const [msg, setMsg] = useState('');
  useEffect(() => { api('/api/daily').then(setData, (e) => setErr(e.message)); }, []);
  if (err) return <div className="panel"><p className="err">{err}</p></div>;
  if (!data) return <div className="panel"><p className="hint">오늘의 뉴스를 불러오는 중입니다. 오전 8시 이후 첫 접속은 30초 정도 걸릴 수 있습니다.</p></div>;
  const kakao = `[${data.date} 오늘의 보험소식]\n\n${data.today.headline}\n${data.today.body}\n\n📌 오늘의 주요뉴스\n${data.items.map((n, i) => `${i + 1}. ${n.headline}\n${n.link}`).join('\n')}`;
  return (
    <div className="panel">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <strong>{data.date} 판 · 매일 오전 8시 갱신</strong>
        <div className="row">
          <button className="btn" onClick={async () => setMsg((await copy(kakao)) ? '카톡용 문구를 복사했습니다' : '복사가 안 되면 아래 문구를 직접 복사하세요')}>카톡 문구 복사</button>
          {msg && <span className="hint">{msg}</span>}
        </div>
      </div>
      <h2 style={{ margin: 0, fontSize: 18 }}>오늘의 보험소식</h2>
      <textarea id="daily-kakao" readOnly value={kakao} style={{ minHeight: 200 }} />
      <h2 style={{ margin: 0, fontSize: 18 }}>주요뉴스 카드</h2>
      <div className="cards">
        <Card card={{ label: '오늘의 보험소식', date: data.date, headline: data.today.headline, points: [], tip: data.today.body.slice(0, 120), source: data.today.source }} name={`${data.date}-오늘의보험소식`} />
        {data.items.map((n, i) => <Card key={i} card={{ ...n, label: '오늘의 주요뉴스', date: data.date }} name={`${data.date}-뉴스${i + 1}`} />)}
      </div>
    </div>
  );
}

export default function Home() {
  const [tab, setTab] = useState('daily');
  return (
    <main className="wrap">
      <header>
        <h1>보험톡 전산</h1>
        <p>보험팀 콘텐츠 제작 도구</p>
      </header>
      <nav role="tablist">
        {TABS.map(([id, name]) => <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)}>{name}</button>)}
      </nav>
      {tab === 'daily' && <Daily />}
      {tab === 'card' && <CardTool />}
      {tab === 'blog' && <TextTool type="blog" topicLabel="블로그 주제" keywordLabel="핵심 키워드 (네이버 검색어)" placeholder="예: 40대 암보험 준비할 때 꼭 볼 3가지" />}
      {tab === 'reels' && <TextTool type="reels" topicLabel="릴스 주제" keywordLabel="강조할 점 (선택)" placeholder="예: 실손보험 청구 안 하면 손해인 것" />}
      <p className="hint" style={{ marginTop: 20 }}>생성된 글은 정보 전달용 초안입니다. 상품 권유가 들어가면 광고심의 대상일 수 있으니 게시 전에 확인하세요.</p>
    </main>
  );
}
