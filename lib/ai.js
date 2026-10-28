// OpenAI 호출. 모델을 바꾸려면 여기만 고치면 됩니다.
const TEXT_MODEL = 'gpt-4o-mini';
const IMAGE_MODEL = 'gpt-image-1';

export const RULES = `너는 한국 보험설계사 팀의 콘텐츠 작가다.
- 정보 전달 위주로 쓴다. 특정 보험사·상품 가입 권유, 수익·보장 확정 표현, 타사 비하, 과장 표현은 쓰지 않는다.
- 사실이 불확실하면 단정하지 말고 "확인 필요"라고 쓴다.
- 쉬운 우리말을 쓰고, 고객이 바로 이해할 수 있게 쓴다.`;

async function openai(path, body) {
  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error('OPENAI_API_KEY가 설정되지 않았습니다 (.env.local 확인)');
  const res = await fetch(`https://api.openai.com/v1/${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || `OpenAI 오류 ${res.status}`);
  return data;
}

export async function write(prompt, { json = false } = {}) {
  const data = await openai('chat/completions', {
    model: TEXT_MODEL,
    messages: [{ role: 'system', content: RULES }, { role: 'user', content: prompt }],
    ...(json && { response_format: { type: 'json_object' } }),
  });
  const text = data.choices[0].message.content;
  return json ? JSON.parse(text) : text;
}

export async function image(prompt) {
  const data = await openai('images/generations', { model: IMAGE_MODEL, prompt, size: '1024x1536' });
  return data.data[0].b64_json;
}
