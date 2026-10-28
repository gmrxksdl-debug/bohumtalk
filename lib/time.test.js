import { test } from 'node:test';
import assert from 'node:assert/strict';
import { editionDate, secondsUntil8am } from './time.js';

test('오전 8시 KST 경계', () => {
  const at8 = Date.UTC(2026, 9, 27, 23, 0, 0); // 2026-10-28 08:00 KST
  assert.equal(editionDate(at8), '2026-10-28');
  assert.equal(secondsUntil8am(at8), 86400);
  assert.equal(editionDate(at8 - 60e3), '2026-10-27');
  assert.equal(secondsUntil8am(at8 - 60e3), 60);
});
