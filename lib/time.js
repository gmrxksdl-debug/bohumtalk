// 매일 오전 8시(KST)에 새 뉴스판이 나옵니다. 오전 8시 전에는 전날 판입니다.
const H = 3600e3;

export function editionDate(now = Date.now()) {
  return new Date(now + 9 * H - 8 * H).toISOString().slice(0, 10);
}

export function secondsUntil8am(now = Date.now()) {
  const into = (now + 9 * H) % (24 * H);
  let ms = 8 * H - into;
  if (ms <= 0) ms += 24 * H;
  return Math.ceil(ms / 1000);
}
