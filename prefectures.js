const jpaOverviewUrl = "https://www.jpa-powerlifting.or.jp/overview.php";

const meetTypes = {
  rookie: "新人大会",
  record: "公認記録会",
  championship: "都道府県選手権",
  kokuspo: "国スポ都道府県予選",
  block: "ブロック選手権",
  "kokuspo-block": "国スポブロック予選"
};

const prefectures = [
  { name: "北海道", region: "北海道・東北", url: "https://h-power.sakura.ne.jp/" },
  { name: "青森県", region: "北海道・東北", url: "https://www.aomoripl.com/" },
  { name: "岩手県", region: "北海道・東北", url: "http://iwate.iinaa.net/" },
  { name: "宮城県", region: "北海道・東北", url: "https://miyagipower.web.fc2.com/" },
  { name: "秋田県", region: "北海道・東北", url: "https://akita-powerlifting.jimdofree.com/" },
  { name: "山形県", region: "北海道・東北", url: "https://ygplf.com/" },
  { name: "福島県", region: "北海道・東北", url: jpaOverviewUrl, fallback: true },
  { name: "茨城県", region: "関東", url: "https://powerlifting-ibaraki.jp/" },
  { name: "栃木県", region: "関東", url: "https://tochigi-powerlifting.com/" },
  { name: "群馬県", region: "関東", url: "https://www.gunma-powerlifting.com/" },
  { name: "埼玉県", region: "関東", url: "https://spapowerlifting.wixsite.com/official" },
  { name: "千葉県", region: "関東", url: "https://www.chibapowerliftingassociation.com/" },
  { name: "東京都", region: "関東", url: "https://powerlifting.tokyo/" },
  { name: "神奈川県", region: "関東", url: "https://kanagawa-power.sakura.ne.jp/wp/" },
  { name: "山梨県", region: "関東", url: jpaOverviewUrl, fallback: true },
  { name: "新潟県", region: "北信越", url: "https://niigata-powerlifting.jimdofree.com/" },
  { name: "富山県", region: "北信越", url: "https://toyama-powerlifting.org/" },
  { name: "石川県", region: "北信越", url: "https://ipa-powerlifting.com/" },
  { name: "福井県", region: "北信越", url: "https://fukui-powerlifting.org/" },
  { name: "長野県", region: "北信越", url: "https://www.nagano-power.org/" },
  { name: "静岡県", region: "東海", url: "http://www7a.biglobe.ne.jp/~jpa-shizuoka/" },
  { name: "愛知県", region: "東海", url: "https://aichi-powerlifting.jimdofree.com/" },
  { name: "岐阜県", region: "東海", url: "http://www.gifu-powerlifting.com/" },
  { name: "三重県", region: "東海", url: "https://junglegym-jp.com/mpa/" },
  { name: "滋賀県", region: "近畿", url: "https://shigapa.web.fc2.com/" },
  { name: "京都府", region: "近畿", url: "https://kyotoppla.com/" },
  { name: "大阪府", region: "近畿", url: "https://osaka-power.jp/" },
  { name: "兵庫県", region: "近畿", url: "https://hpapower.com/" },
  { name: "奈良県", region: "近畿", url: "https://nara-power.com/" },
  { name: "和歌山県", region: "近畿", url: "https://wakayam-power.jimdofree.com/" },
  { name: "鳥取県", region: "中国", url: "https://horibarbellclub.wixsite.com/power" },
  { name: "島根県", region: "中国", url: "https://shimane-power.sakura.ne.jp/" },
  { name: "岡山県", region: "中国", url: "http://okayamapower.web.fc2.com/" },
  { name: "広島県", region: "中国", url: "http://hiroshima-power.moo.jp/" },
  { name: "山口県", region: "中国", url: jpaOverviewUrl, fallback: true },
  { name: "徳島県", region: "四国", url: "http://power2011tokushima.web.fc2.com/" },
  { name: "香川県", region: "四国", url: "http://www.kpa-power.com/" },
  { name: "愛媛県", region: "四国", url: "https://ehimepower.web.fc2.com/" },
  { name: "高知県", region: "四国", url: "https://kpakpa1981.studio.site/" },
  { name: "福岡県", region: "九州・沖縄", url: "https://ameblo.jp/fukuoka-power/" },
  { name: "佐賀県", region: "九州・沖縄", url: "https://saga-powerlifting.jimdofree.com/" },
  { name: "長崎県", region: "九州・沖縄", url: jpaOverviewUrl, fallback: true },
  { name: "熊本県", region: "九州・沖縄", url: "https://kumamoto-power.jimdosite.com/" },
  { name: "大分県", region: "九州・沖縄", url: "https://tsuda-training-gym.jimdosite.com/" },
  { name: "宮崎県", region: "九州・沖縄", url: jpaOverviewUrl, fallback: true },
  { name: "鹿児島県", region: "九州・沖縄", url: "https://yokahoyo.wixsite.com/my-site-3" },
  { name: "沖縄県", region: "九州・沖縄", url: "https://okinawa-powerlifting-association.com/" }
];

const mapNamesById = {
  aichi: "愛知県",
  akita: "秋田県",
  aomori: "青森県",
  chiba: "千葉県",
  ehime: "愛媛県",
  fukui: "福井県",
  fukuoka: "福岡県",
  fukushima: "福島県",
  gifu: "岐阜県",
  gunma: "群馬県",
  hiroshima: "広島県",
  hokkaido: "北海道",
  hyogo: "兵庫県",
  ibaraki: "茨城県",
  ishikawa: "石川県",
  iwate: "岩手県",
  kagawa: "香川県",
  kagoshima: "鹿児島県",
  kanagawa: "神奈川県",
  kochi: "高知県",
  kumamoto: "熊本県",
  kyoto: "京都府",
  mie: "三重県",
  miyagi: "宮城県",
  miyazaki: "宮崎県",
  nagano: "長野県",
  nagasaki: "長崎県",
  nara: "奈良県",
  niigata: "新潟県",
  oita: "大分県",
  okayama: "岡山県",
  okinawa: "沖縄県",
  osaka: "大阪府",
  saga: "佐賀県",
  saitama: "埼玉県",
  shiga: "滋賀県",
  shimane: "島根県",
  shizuoka: "静岡県",
  tochigi: "栃木県",
  tokushima: "徳島県",
  tokyo: "東京都",
  tottori: "鳥取県",
  toyama: "富山県",
  wakayama: "和歌山県",
  yamagata: "山形県",
  yamaguchi: "山口県",
  yamanashi: "山梨県"
};

const svgNamespace = "http://www.w3.org/2000/svg";
const prefecturesByName = new Map(prefectures.map((prefecture) => [prefecture.name, prefecture]));
const weightClasses = {
  men: ["59", "66", "74", "83", "93", "105", "120", "120+"],
  women: ["47", "52", "57", "63", "69", "76", "84", "84+"]
};
const recordData = window.prefectureRecordData;
const params = new URLSearchParams(location.search);
const meetType = params.get("type") || "rookie";
const districtsForMeet = recordData.districts?.[meetType] || [];
const recordsForMeet = recordData.recordsByMeetType?.[meetType] || {};
const prefectureMeetsForMeet = recordData.prefectureMeetsByMeetType?.[meetType] || {};
const sourcesForMeet = recordData.sourcesByMeetType?.[meetType] || [];
const researchForMeet = recordData.researchByMeetType?.[meetType] || null;
const meetName = meetTypes[meetType] || "都道府県大会";
const title = document.getElementById("prefecture-title");
const description = document.getElementById("prefecture-description");
const map = document.getElementById("prefecture-map");
const mapPrefectureName = document.getElementById("map-prefecture-name");
const emptyMessage = document.getElementById("prefecture-empty");
const count = document.getElementById("prefecture-count");
const search = document.getElementById("prefecture-search");
const regionButtons = [...document.querySelectorAll(".region-button")];
const sexButtons = [...document.querySelectorAll("[data-sex]")];
const weightClassSelect = document.getElementById("record-weight-class");
const currentRecordLabel = document.getElementById("record-current-label");
const recordCoverage = document.getElementById("record-coverage");
const districtCoverage = document.getElementById("district-coverage");
const districtCallouts = document.getElementById("district-callouts");
const japanMapFrame = document.getElementById("japan-map-frame");
const mapNumberToggle = document.getElementById("map-number-toggle");
const recordToolbar = document.getElementById("record-toolbar");
const recordUnit = document.getElementById("record-unit");
const recordScopeNote = document.getElementById("record-scope-note");
const recordSubmissionForm = document.getElementById("record-submission-form");
const submissionPrefecture = document.getElementById("submission-prefecture");
const submissionUrl = document.getElementById("submission-url");
const hasResultDataset = Boolean(recordData.recordsByMeetType?.[meetType]);
let selectedRegion = "all";
let selectedSex = "men";
let selectedWeightClass = "66";
let showMapNumbers = false;

document.title = `${meetName}の都道府県選択｜日本のパワーリフティング団体地図`;
title.textContent = `${meetName}：都道府県を選ぶ`;
description.textContent = `${meetName}の最新情報を確認する都道府県協会を選択してください。`;

function getRecord(prefectureName) {
  return recordsForMeet[prefectureName]?.[selectedSex]?.[selectedWeightClass] ?? null;
}

function getPrefectureMeet(prefectureName) {
  return prefectureMeetsForMeet[prefectureName] || null;
}

function getDistrictRecord(district) {
  return district.records[selectedSex]?.[selectedWeightClass] ?? null;
}

function formatRecord(record) {
  return record === null ? "未確認" : `${record}kg`;
}

function getResultRow(scopeType, scopeName) {
  if (!hasResultDataset) return null;
  return (recordData.resultRows || []).find((row) => (
    row.scopeType === scopeType
    && row.scopeName === scopeName
    && row.sex === selectedSex
    && row.weightClass === selectedWeightClass
  )) || null;
}

function populateWeightClasses() {
  weightClassSelect.replaceChildren();
  weightClasses[selectedSex].forEach((weightClass) => {
    const option = document.createElement("option");
    option.value = weightClass;
    option.textContent = `${weightClass}kg級`;
    weightClassSelect.append(option);
  });
  weightClassSelect.value = selectedWeightClass;
}

function populateSubmissionPrefectures() {
  const options = prefectures.map((prefecture) => {
    const option = document.createElement("option");
    option.value = prefecture.name;
    option.textContent = prefecture.name;
    return option;
  });
  submissionPrefecture.append(...options);
}

function getHttpUrl(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url;
  } catch {
    return null;
  }
}

function openGitHubSubmission(event) {
  event.preventDefault();
  submissionUrl.setCustomValidity("");
  if (!recordSubmissionForm.reportValidity()) return;

  const resultUrl = getHttpUrl(submissionUrl.value.trim());
  if (!resultUrl) {
    submissionUrl.setCustomValidity("http:// または https:// で始まるURLを入力してください。");
    submissionUrl.reportValidity();
    return;
  }

  const prefectureName = submissionPrefecture.value;
  const issueUrl = new URL(recordSubmissionForm.action);
  const issueTitle = `【記録URL】${prefectureName}の新人大会結果`;
  const issueBody = [
    "## 新人大会の記録候補",
    "",
    `- 都道府県：${prefectureName}`,
    `- 公式結果URL：${resultUrl.href}`,
    `- 対象：${recordData.category}`,
    `- 送信ページ：${location.href}`,
    "",
    "公式協会・大会主催者が公開した結果か確認してください。"
  ].join("\n");

  issueUrl.searchParams.set("title", issueTitle);
  issueUrl.searchParams.set("body", issueBody);
  const issueLink = document.createElement("a");
  issueLink.href = issueUrl.toString();
  issueLink.target = "_blank";
  issueLink.rel = "noopener noreferrer";
  issueLink.click();
}

function updateRecordControls() {
  const sexLabel = selectedSex === "men" ? "男子" : "女子";
  currentRecordLabel.textContent = `${recordData.category} ${sexLabel}${selectedWeightClass}kg級`;
}

function updateMapNumberVisibility() {
  showMapNumbers = Boolean(mapNumberToggle?.checked);
  const recordLayer = map.querySelector(".map-record-layer");
  if (!recordLayer) return;
  recordLayer.classList.toggle("is-hidden", !showMapNumbers);
  recordLayer.setAttribute("aria-hidden", String(!showMapNumbers));
  districtCallouts?.classList.toggle("numbers-hidden", !showMapNumbers);
}

function updateDatasetVisibility() {
  if (hasResultDataset) return;
  recordToolbar.hidden = true;
  mapNumberToggle.closest(".map-number-toggle").hidden = true;
  recordUnit.hidden = true;
  recordScopeNote.hidden = true;
  recordCoverage.hidden = true;
}

function renderRecordCoverage() {
  const researchedCount = researchForMeet?.prefectures.length || sourcesForMeet.length;
  const verifiedCount = researchForMeet
    ? researchForMeet.prefectures.filter((item) => item.status === "verified").length
    : sourcesForMeet.length;
  recordCoverage.replaceChildren(
    document.createTextNode(`全国調査：${researchedCount} / ${prefectures.length}　結果確認：${verifiedCount}都道府県　`)
  );
  sourcesForMeet.forEach((source, index) => {
    const link = document.createElement("a");
    link.href = source.sourceUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = `${source.scopeName} ${source.heldAt.slice(0, 4)}結果`;
    if (index) recordCoverage.append(document.createTextNode("、"));
    recordCoverage.append(link);
  });

  const districtSources = districtsForMeet;
  if (districtSources.length) {
    recordCoverage.append(document.createTextNode("　地区："));
    districtSources.forEach((district, index) => {
      const link = document.createElement("a");
      link.href = district.sourceUrl;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = `${district.name} ${district.heldAt.slice(0, 4)}結果`;
      if (index) recordCoverage.append(document.createTextNode("、"));
      recordCoverage.append(link);
    });
  }
}

function renderDistrictCoverage() {
  const research = recordData.districtResearch?.[meetType];
  if (!research) {
    districtCoverage.hidden = true;
    return;
  }

  districtCoverage.hidden = false;
  const districtCount = researchForMeet?.districts.length || research.confirmed.length + research.notConfirmed.length;
  districtCoverage.textContent = `地区調査：${districtCount} / 8　結果確認：${research.confirmed.join("、")} ／ 結果未確認：${research.notConfirmed.join("、")}`;
}

function createPrefectureLink(location, prefecture, isActive, recordLabels) {
  const link = document.createElementNS(svgNamespace, "a");
  const path = document.createElementNS(svgNamespace, "path");
  const pathTitle = document.createElementNS(svgNamespace, "title");
  const destination = prefecture.fallback ? "JPA加盟団体一覧" : "都道府県協会サイト";
  const prefectureMeet = getPrefectureMeet(prefecture.name);
  const displayedRecord = getRecord(prefecture.name);
  const resultRow = getResultRow("prefecture", prefecture.name);
  const recordText = formatRecord(displayedRecord);
  const sexLabel = selectedSex === "men" ? "男子" : "女子";
  const eventLabel = prefectureMeet
    ? `${prefectureMeet.eventName}（${prefectureMeet.heldAt.slice(0, 4)}）`
    : "公式結果未確認";
  const athleteLabel = resultRow ? `／${resultRow.athlete}` : "";
  const label = `${prefecture.name}｜${eventLabel} ${sexLabel}${selectedWeightClass}kg級 ${recordText}${athleteLabel}`;
  const targetUrl = prefectureMeet?.sourceUrl || prefecture.url;
  const targetLabel = prefectureMeet ? "公式結果PDF" : destination;

  link.classList.add("map-prefecture");
  link.classList.toggle("is-muted", !isActive);
  link.classList.toggle("is-fallback", Boolean(prefecture.fallback));
  link.setAttribute("href", targetUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noreferrer");
  link.dataset.prefecture = prefecture.name;
  link.setAttribute("aria-label", `${prefecture.name}の${meetName}情報を${targetLabel}で確認`);
  if (!isActive) {
    link.setAttribute("tabindex", "-1");
    link.setAttribute("aria-hidden", "true");
  }

  path.setAttribute("d", location.path);
  path.setAttribute("vector-effect", "non-scaling-stroke");
  pathTitle.textContent = label;
  link.addEventListener("mouseenter", () => { mapPrefectureName.textContent = label; });
  link.addEventListener("focus", () => { mapPrefectureName.textContent = label; });
  link.addEventListener("mouseleave", () => {
    if (document.activeElement !== link) mapPrefectureName.textContent = "";
  });
  link.addEventListener("blur", () => { mapPrefectureName.textContent = ""; });
  link.append(pathTitle, path);
  recordLabels.push({ path, prefecture, isActive });
  return link;
}

function createRecordLabel({ path, prefecture, isActive }) {
  const text = document.createElementNS(svgNamespace, "text");
  const bounds = path.getBBox();
  const record = getRecord(prefecture.name);

  text.classList.add("map-record-value");
  text.classList.toggle("has-value", record !== null);
  text.classList.toggle("is-muted", !isActive);
  text.dataset.prefecture = prefecture.name;
  text.setAttribute("x", bounds.x + bounds.width / 2);
  text.setAttribute("y", bounds.y + bounds.height / 2);
  text.textContent = record === null ? "–" : record;
  return text;
}

function createDistrictCallout({ district }) {
  const link = document.createElement("a");
  const scope = document.createElement("span");
  const name = document.createElement("strong");
  const value = document.createElement("span");
  const event = document.createElement("small");
  const record = getDistrictRecord(district);
  const resultRow = getResultRow("district", district.scopeName);
  const sexLabel = selectedSex === "men" ? "男子" : "女子";
  const athleteLabel = resultRow ? `／${resultRow.athlete}` : "";
  const label = `${district.eventName}（${district.heldAt.slice(0, 4)}）｜${sexLabel}${selectedWeightClass}kg級 ${formatRecord(record)}${athleteLabel}`;

  link.className = "district-callout";
  link.href = district.sourceUrl;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", `${label}の公式結果を確認`);
  scope.className = "district-callout-scope";
  scope.textContent = "地区新人";
  name.textContent = district.shortName;
  value.className = "district-callout-value";
  value.textContent = `${sexLabel}${selectedWeightClass}kg級 ${record === null ? "–" : `${record}kg`}`;
  event.textContent = `${district.heldAt.slice(0, 4)} 公式結果`;
  link.append(scope, name, value, event);
  return link;
}

function renderPrefectures() {
  const keyword = search.value.trim();
  const filtered = prefectures.filter((prefecture) => {
    const matchesRegion = selectedRegion === "all" || prefecture.region === selectedRegion;
    const matchesKeyword = !keyword || prefecture.name.includes(keyword);
    return matchesRegion && matchesKeyword;
  });
  const activeNames = new Set(filtered.map((prefecture) => prefecture.name));
  const svg = document.createElementNS(svgNamespace, "svg");
  const recordLabels = [];
  const recordLayer = document.createElementNS(svgNamespace, "g");
  const activeDistricts = districtsForMeet.filter((district) => (
    district.prefectures.some((prefectureName) => activeNames.has(prefectureName))
  ));

  svg.classList.add("japan-map-svg");
  svg.setAttribute("viewBox", window.japanMapData.viewBox);
  svg.setAttribute("aria-label", "都道府県境界を表示した日本地図");
  window.japanMapData.locations.forEach((location) => {
    const prefecture = prefecturesByName.get(mapNamesById[location.id]);
    if (!prefecture) return;
    svg.append(createPrefectureLink(location, prefecture, activeNames.has(prefecture.name), recordLabels));
  });
  map.replaceChildren(svg);
  recordLayer.classList.add("map-record-layer");
  recordLabels.forEach((recordLabel) => recordLayer.append(createRecordLabel(recordLabel)));
  svg.append(recordLayer);
  districtCallouts.replaceChildren(...activeDistricts.map((district) => createDistrictCallout({ district })));
  districtCallouts.hidden = activeDistricts.length === 0;
  japanMapFrame.classList.toggle("has-district-callouts", activeDistricts.length > 0);
  updateMapNumberVisibility();

  emptyMessage.hidden = filtered.length > 0;
  count.textContent = `${filtered.length}件`;
  updateRecordControls();
  mapPrefectureName.textContent = filtered.length === 1 ? filtered[0].name : "";
}

regionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedRegion = button.dataset.region;
    regionButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    renderPrefectures();
  });
});

search.addEventListener("input", renderPrefectures);
sexButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedSex = button.dataset.sex;
    selectedWeightClass = selectedSex === "men" ? "66" : "63";
    sexButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    populateWeightClasses();
    renderPrefectures();
  });
});

weightClassSelect.addEventListener("change", () => {
  selectedWeightClass = weightClassSelect.value;
  renderPrefectures();
});

mapNumberToggle?.addEventListener("change", updateMapNumberVisibility);
submissionUrl.addEventListener("input", () => submissionUrl.setCustomValidity(""));
recordSubmissionForm.addEventListener("submit", openGitHubSubmission);

populateWeightClasses();
populateSubmissionPrefectures();
updateDatasetVisibility();
renderRecordCoverage();
renderDistrictCoverage();
renderPrefectures();
