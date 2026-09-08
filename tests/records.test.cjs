const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
function load(overrides = {}) {
  const window = {};
  const context = vm.createContext({ window });
  for (const file of ['newcomer-results.js', 'newcomer-research.js', 'prefecture-fallback-results.js', 'kokuspo-results.js']) {
    vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context);
  }
  Object.assign(window, overrides);
  vm.runInContext(fs.readFileSync(path.join(root, 'prefecture-records.js'), 'utf8'), context);
  return window;
}
test('新人は東京・愛知・近畿の3大会、近畿を県記録に複製しない', () => {
  const data = load().prefectureRecordData;
  assert.deepEqual(Object.keys(data.recordsByMeetType.rookie).sort(), ['愛知県', '東京都'].sort());
  const [kinki] = data.districts.rookie;
  assert.equal(kinki.scopeName, '近畿');
  assert.equal(kinki.prefectures.length, 6);
  for (const name of kinki.prefectures) assert.equal(data.recordsByMeetType.rookie[name], undefined);
  assert.equal(data.countsByMeetType.rookie.confirmed, 2);
});
test('最高と最低、男女、階級、超級の集計を分離する', () => {
  const original = load().kokuspoResultRows[0];
  const make = (changes) => ({ ...original, ...changes });
  const rows = [make({ total: 650 }), make({ total: 600 }),
    make({ weightClass: '120', total: 780 }), make({ weightClass: '120+', total: 800 }),
    make({ sex: 'women', weightClass: '57', total: 320 })];
  const data = load({ kokuspoResultRows: rows, newcomerResultRows: rows.map(r => ({ ...r, scopeName: '東京都' })) }).prefectureRecordData;
  assert.equal(data.recordsByMeetType.kokuspo['埼玉県'].men['83'], 600);
  assert.equal(data.recordsByMeetType.kokuspo['埼玉県'].men.all, 600);
  assert.equal(data.recordsByMeetType.rookie['東京都'].men.all, 800);
  assert.equal(data.recordsByMeetType.kokuspo['埼玉県'].men['120'], 780);
  assert.equal(data.recordsByMeetType.kokuspo['埼玉県'].men['120+'], 800);
  assert.equal(data.recordsByMeetType.kokuspo['埼玉県'].women.all, 320);
});
test('補欠・異なる年度・失格・未確認のTotalをボーダーへ混入しない', () => {
  const original = load().kokuspoResultRows[0];
  const rows = [original, ...[
    { qualificationStatus: 'alternate', total: 100 }, { edition: 2025, total: 200 },
    { total: 0 }, { total: -1 }, { total: null }, { total: NaN }, { total: Infinity }
  ].map(changes => ({ ...original, ...changes }))];
  const data = load({ kokuspoResultRows: rows }).prefectureRecordData;
  assert.equal(data.resultRowsByMeetType.kokuspo.length, 1);
  assert.equal(data.recordsByMeetType.kokuspo['埼玉県'].men.all, 710);
  assert.equal(data.recordsByMeetType.kokuspo['埼玉県'].men['59'], undefined);
});
test('公式通過者20名の既知値と出典を保持する', () => {
  const { prefectureRecordData: data, kokuspoResultRows: rows, kokuspoMetadata: meta } = load();
  assert.equal(rows.length, 20);
  assert.equal(data.countsByMeetType.kokuspo.confirmed, 7);
  const records = data.recordsByMeetType.kokuspo;
  assert.equal(records['福岡県'].men.all, 615);
  assert.equal(records['福岡県'].men['105'], undefined); // highest prefectural total is a reserve
  assert.equal(records['静岡県'].men['66'], undefined); // reserve
  assert.equal(records['長野県'].women['47'], 297.5);
  assert.equal(records['三重県'].men['105'], 732.5);
  assert.deepEqual(Array.from(meta.verifiedSelections['静岡県']), ['men']);
  for (const row of rows) {
    assert.match(row.sourceUrl, /^https:\/\//);
    assert.match(row.selectionSourceUrl, /^https:\/\//);
    assert.equal(row.qualificationStatus, 'qualified');
    assert.ok(row.ipfPoints > 0);
  }
});
