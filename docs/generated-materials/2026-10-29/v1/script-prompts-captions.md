# 보험톡 2026-10-29

## 1. 피드 신호
인스타 접근 불가: 9222 소켓 접근 거부. 읽은 게시물0개/링크없음. 상시소재 사용. 피드 유행을 읽었다고 주장하지 않음.

## 2. 후보
- 자동이체 설정과 실제 보험료 납입은 다르다
- 가족 보험 계약정보 한곳에 정리하기
- 보험금 받을 계좌 변경 전 확인
- 갱신 안내를 받았을 때 확인할 항목

## 3. 선정
자동이체 해뒀으니 보험료는 괜찮을까요?
직장인·가족 계약관리에서 자동이체 등록 이후 납입 결과를 놓치는 상황을 짚는다.
가입·해지 권유가 아니라 당장 확인 가능한 행동으로 이어져 저장 가치가 있다.

## 사실 확인 범위
[삼성화재 공식 고객 서비스](https://search.samsungfire.com/v2/html/customer/13/G_030_050_001.html) 검색 발췌에서 납입과 자동이체/계좌변경을 별도 업무로 안내함을 확인. 원문 열기502. 특정 미납 기간, 재출금 날짜, 유예기간, 실효·보장 상태는 일반화하지 않음. 개별 계약·약관 [확인 필요]. 일반 관리 체크리스트이며 개별 계약 판단이 아님.

## 4. 7장 대본·구성
### 1장 MODULE A
자동이체 해뒀으니
보험료는 괜찮을까요?

설정해 둔 것과
실제 납입된 것은 달라요.

구성: 큰 질문 아래 자동이체 설정과 납입 확인을 분리한 두 체크 표시

### 2장 MODULE D
자동이체 설정 ≠ 납입 완료

계좌를 등록했어도
이번 달 납입 결과는 따로 확인하세요.

구성: 설정 / 결과 두 개념을 세로로 크게 대비

### 3장 MODULE C
확인은 이 순서로

출금 내역 확인
보험사 납입 내역 확인
다르면 보험사에 문의

구성: 3단계 흐름을 세로 화살표로 연결

### 4장 MODULE E
통장만 보지 말고
계약별로 확인하세요

통장 내역: 출금된 기록
보험사 내역: 어느 계약의 납입인지

구성: 두 행 비교. 임의 계좌번호 금액 없이 텍스트만

### 5장 MODULE F
계좌를 바꿨다면
함께 확인할 것

변경 신청이 반영됐나요?
어느 회차부터 적용되나요?
이번 회차는 납입됐나요?

구성: 체크 항목 세 개 크게 배치

### 6장 MODULE F
오늘 확인할 질문 세 가지

최근 납입 내역을 봤나요?
미납 안내를 놓치지 않았나요?
계약 상태를 확인했나요?

구성: 세 개 빈 체크박스. 하단 작은 주의 문구: 미납 시 조치는 계약·약관에 따라 확인하세요.

### 7장 MODULE G
자동이체도
확인이 필요해요

댓글 키워드
납입
계약별 납입 상태부터 함께 점검해요.
계좌번호·개인정보는 공개 댓글에 남기지 마세요.

구성: 납입 키워드 박스 본문에서 가장 크게. 자료 자동발송 약속 금지

## 5. 모듈 태깅
|장|대본 핵심|모듈|추출 변수|확인 필요|
|---|---|---|---|---|
|1|자동이체 해뒀으니 보험료는 괜찮을까요?|A|계약별 납입 내역·계좌변경 적용 회차|실제 적용 회차·미납 조치·보장 상태는 해당 보험사와 약관 확인|
|2|자동이체 설정 ≠ 납입 완료|D|계약별 납입 내역·계좌변경 적용 회차|실제 적용 회차·미납 조치·보장 상태는 해당 보험사와 약관 확인|
|3|확인은 이 순서로|C|계약별 납입 내역·계좌변경 적용 회차|실제 적용 회차·미납 조치·보장 상태는 해당 보험사와 약관 확인|
|4|통장만 보지 말고 계약별로 확인하세요|E|계약별 납입 내역·계좌변경 적용 회차|실제 적용 회차·미납 조치·보장 상태는 해당 보험사와 약관 확인|
|5|계좌를 바꿨다면 함께 확인할 것|F|계약별 납입 내역·계좌변경 적용 회차|실제 적용 회차·미납 조치·보장 상태는 해당 보험사와 약관 확인|
|6|오늘 확인할 질문 세 가지|F|계약별 납입 내역·계좌변경 적용 회차|실제 적용 회차·미납 조치·보장 상태는 해당 보험사와 약관 확인|
|7|자동이체도 확인이 필요해요|G|계약별 납입 내역·계좌변경 적용 회차|실제 적용 회차·미납 조치·보장 상태는 해당 보험사와 약관 확인|

## 6. 실제 사용 프롬프트7개
고정 요소는 생성하지 않음. 원본로고 x95/y96/w100; 계정 우95/상96; 카테고리 납입 점검 x95/y280/260x56/r28; 공통 Malgun regular30px/#828282; 페이지 우95/하95. 최종1440x1920, 본문 비율유지 y400~1710.

### 01 / 07
```text
Create ONE Korean editorial insurance card BODY ONLY, not a full carousel. White background, near-square 1440x1310 body artwork. No logo, brand, Instagram handle, category pill, page number, footer or top header. These will be composited separately. Flat typographic graphic, precise readable Korean sans-serif. Dense but calm, use 86-90% width and 85-92% height. Title approx 3 times body type size. Palette only #FFFFFF #151515 #E74A1E #0D5BF9 #EFA40C #828282 #D8D7D7 #F4F3F0 #FEF0EB #EBF1FD #FDF6DF. Primarily black text, occasional blue flat graphics. No gradients/shadows/3D/photos/decorative dividers. No invented facts, fees, account digits, policy conditions or extra copy. Render the following Korean exactly, no missing words. Module A. Layout: 큰 질문 아래 자동이체 설정과 납입 확인을 분리한 두 체크 표시. Headline: "자동이체 해뒀으니
보험료는 괜찮을까요?". Body: "설정해 둔 것과
실제 납입된 것은 달라요.".
```
합성 페이지번호: 01 / 07

### 02 / 07
```text
Create ONE Korean editorial insurance card BODY ONLY, not a full carousel. White background, near-square 1440x1310 body artwork. No logo, brand, Instagram handle, category pill, page number, footer or top header. These will be composited separately. Flat typographic graphic, precise readable Korean sans-serif. Dense but calm, use 86-90% width and 85-92% height. Title approx 3 times body type size. Palette only #FFFFFF #151515 #E74A1E #0D5BF9 #EFA40C #828282 #D8D7D7 #F4F3F0 #FEF0EB #EBF1FD #FDF6DF. Primarily black text, occasional blue flat graphics. No gradients/shadows/3D/photos/decorative dividers. No invented facts, fees, account digits, policy conditions or extra copy. Render the following Korean exactly, no missing words. Module D. Layout: 설정 / 결과 두 개념을 세로로 크게 대비. Headline: "자동이체 설정 ≠ 납입 완료". Body: "계좌를 등록했어도
이번 달 납입 결과는 따로 확인하세요.".
```
합성 페이지번호: 02 / 07

### 03 / 07
```text
Create ONE Korean editorial insurance card BODY ONLY, not a full carousel. White background, near-square 1440x1310 body artwork. No logo, brand, Instagram handle, category pill, page number, footer or top header. These will be composited separately. Flat typographic graphic, precise readable Korean sans-serif. Dense but calm, use 86-90% width and 85-92% height. Title approx 3 times body type size. Palette only #FFFFFF #151515 #E74A1E #0D5BF9 #EFA40C #828282 #D8D7D7 #F4F3F0 #FEF0EB #EBF1FD #FDF6DF. Primarily black text, occasional blue flat graphics. No gradients/shadows/3D/photos/decorative dividers. No invented facts, fees, account digits, policy conditions or extra copy. Render the following Korean exactly, no missing words. Module C. Layout: 3단계 흐름을 세로 화살표로 연결. Headline: "확인은 이 순서로". Body: "출금 내역 확인
보험사 납입 내역 확인
다르면 보험사에 문의".
```
합성 페이지번호: 03 / 07

### 04 / 07
```text
Create ONE Korean editorial insurance card BODY ONLY, not a full carousel. White background, near-square 1440x1310 body artwork. No logo, brand, Instagram handle, category pill, page number, footer or top header. These will be composited separately. Flat typographic graphic, precise readable Korean sans-serif. Dense but calm, use 86-90% width and 85-92% height. Title approx 3 times body type size. Palette only #FFFFFF #151515 #E74A1E #0D5BF9 #EFA40C #828282 #D8D7D7 #F4F3F0 #FEF0EB #EBF1FD #FDF6DF. Primarily black text, occasional blue flat graphics. No gradients/shadows/3D/photos/decorative dividers. No invented facts, fees, account digits, policy conditions or extra copy. Render the following Korean exactly, no missing words. Module E. Layout: 두 행 비교. 임의 계좌번호 금액 없이 텍스트만. Headline: "통장만 보지 말고
계약별로 확인하세요". Body: "통장 내역: 출금된 기록
보험사 내역: 어느 계약의 납입인지".
```
합성 페이지번호: 04 / 07

### 05 / 07
```text
Create ONE Korean editorial insurance card BODY ONLY, not a full carousel. White background, near-square 1440x1310 body artwork. No logo, brand, Instagram handle, category pill, page number, footer or top header. These will be composited separately. Flat typographic graphic, precise readable Korean sans-serif. Dense but calm, use 86-90% width and 85-92% height. Title approx 3 times body type size. Palette only #FFFFFF #151515 #E74A1E #0D5BF9 #EFA40C #828282 #D8D7D7 #F4F3F0 #FEF0EB #EBF1FD #FDF6DF. Primarily black text, occasional blue flat graphics. No gradients/shadows/3D/photos/decorative dividers. No invented facts, fees, account digits, policy conditions or extra copy. Render the following Korean exactly, no missing words. Module F. Layout: 체크 항목 세 개 크게 배치. Headline: "계좌를 바꿨다면
함께 확인할 것". Body: "변경 신청이 반영됐나요?
어느 회차부터 적용되나요?
이번 회차는 납입됐나요?".
```
합성 페이지번호: 05 / 07

### 06 / 07
```text
Create ONE Korean editorial insurance card BODY ONLY, not a full carousel. White background, near-square 1440x1310 body artwork. No logo, brand, Instagram handle, category pill, page number, footer or top header. These will be composited separately. Flat typographic graphic, precise readable Korean sans-serif. Dense but calm, use 86-90% width and 85-92% height. Title approx 3 times body type size. Palette only #FFFFFF #151515 #E74A1E #0D5BF9 #EFA40C #828282 #D8D7D7 #F4F3F0 #FEF0EB #EBF1FD #FDF6DF. Primarily black text, occasional blue flat graphics. No gradients/shadows/3D/photos/decorative dividers. No invented facts, fees, account digits, policy conditions or extra copy. Render the following Korean exactly, no missing words. Module F. Layout: 세 개 빈 체크박스. 하단 작은 주의 문구: 미납 시 조치는 계약·약관에 따라 확인하세요.. Headline: "오늘 확인할 질문 세 가지". Body: "최근 납입 내역을 봤나요?
미납 안내를 놓치지 않았나요?
계약 상태를 확인했나요?".
```
합성 페이지번호: 06 / 07

### 07 / 07
```text
Create ONE Korean editorial insurance card BODY ONLY, not a full carousel. White background, near-square 1440x1310 body artwork. No logo, brand, Instagram handle, category pill, page number, footer or top header. These will be composited separately. Flat typographic graphic, precise readable Korean sans-serif. Dense but calm, use 86-90% width and 85-92% height. Title approx 3 times body type size. Palette only #FFFFFF #151515 #E74A1E #0D5BF9 #EFA40C #828282 #D8D7D7 #F4F3F0 #FEF0EB #EBF1FD #FDF6DF. Primarily black text, occasional blue flat graphics. No gradients/shadows/3D/photos/decorative dividers. No invented facts, fees, account digits, policy conditions or extra copy. Render the following Korean exactly, no missing words. Module G. Layout: 납입 키워드 박스 본문에서 가장 크게. 자료 자동발송 약속 금지. Headline: "자동이체도
확인이 필요해요". Body: "댓글 키워드
납입
계약별 납입 상태부터 함께 점검해요.
계좌번호·개인정보는 공개 댓글에 남기지 마세요.".
```
합성 페이지번호: 07 / 07

## 7. 캡션
### 정보형
자동이체를 신청한 것과 이번 회차 보험료가 실제 납입된 것은 구분해 확인해 주세요. 통장 출금 내역과 보험사 계약별 납입 내역을 함께 보고, 계좌를 바꿨다면 적용 회차도 확인하세요. 미납 안내를 받았다면 안내 내용과 계약 상태를 보험사에 확인하세요. 납입 방법·적용 시점·미납 시 조치는 계약 및 약관에 따라 달라질 수 있습니다. 댓글 키워드 ‘납입’으로 점검을 시작해 보세요. 계좌번호·증권·개인정보는 공개 댓글에 남기지 마세요. #보험톡 #보험료납입 #자동이체 #보험점검

### 감성형
바쁘게 지내다 보면 ‘자동이체 해뒀으니까’ 하고 지나치게 되죠. 오늘은 가족 보험의 최근 납입 내역을 한 번만 확인해 보세요. 불안을 키우기보다, 지금 확인할 수 있는 것부터. 댓글 ‘납입’. 구체적인 납입·보장 상태는 보험사와 해당 계약으로 확인해 주세요.

## 8. 이미지
장당1회, 본문7장 생성 성공. 고정요소 합성 후 후보로 저장. 최종 검수 및 승인 전이며 자동 게시하지 않음.

