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
  { name: "青森県", region: "北海道・東北", url: "https://www.facebook.com/aomoripowerlifting/" },
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
  { name: "島根県", region: "中国", url: "https://w.atwiki.jp/lapdryver/pages/1.html" },
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
const meetType = params.get("type");
const districtsForMeet = recordData.districts?.[meetType] || [];
const meetName = meetTypes[params.get("type")] || "都道府県大会";
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
let selectedRegion = "all";
let selectedSex = "men";
let selectedWeightClass = "66";

document.title = `${meetName}の都道府県選択｜日本のパワーリフティング団体地図`;
title.textContent = `${meetName}：都道府県を選ぶ`;
description.textContent = `${meetName}の最新情報を確認する都道府県協会を選択してください。`;

function getRecord(prefectureName) {
  return recordData.records[prefectureName]?.[selectedSex]?.[selectedWeightClass] ?? null;
}

function getDistrictForPrefecture(prefectureName) {
  return districtsForMeet.find((district) => district.prefectures.includes(prefectureName));
}

function getDistrictRecord(district) {
  return district.records[selectedSex]?.[selectedWeightClass] ?? null;
}

function formatRecord(record) {
  return record === null ? "未公開" : `${record}kg`;
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

function updateRecordControls() {
  const sexLabel = selectedSex === "men" ? "男子" : "女子";
  currentRecordLabel.textContent = `${recordData.category} ${sexLabel}${selectedWeightClass}kg級`;
}

function renderRecordCoverage() {
  recordCoverage.replaceChildren(
    document.createTextNode(`公式記録収録：${recordData.sources.length} / ${prefectures.length}都道府県　`)
  );
  recordData.sources.forEach((source, index) => {
    const link = document.createElement("a");
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.textContent = `${source.prefecture}（${source.updatedAt}）`;
    if (index) recordCoverage.append(document.createTextNode("、"));
    recordCoverage.append(link);
  });

  const districtSources = Object.values(recordData.districts || {}).flat();
  if (districtSources.length) {
    recordCoverage.append(document.createTextNode("　地区大会："));
    districtSources.forEach((district, index) => {
      const link = document.createElement("a");
      link.href = district.sourceUrl;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = `${district.name}（${district.heldAt}）`;
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
  districtCoverage.textContent = `地区新人大会調査（${research.years}公式情報、${research.asOf}時点）：確認 ${research.confirmed.join("、")} ／ 開催確認なし ${research.notConfirmed.join("、")}`;
}

function createPrefectureLink(location, prefecture, isActive, recordLabels) {
  const link = document.createElementNS(svgNamespace, "a");
  const path = document.createElementNS(svgNamespace, "path");
  const pathTitle = document.createElementNS(svgNamespace, "title");
  const destination = prefecture.fallback ? "JPA加盟団体一覧" : "都道府県協会サイト";
  const district = getDistrictForPrefecture(prefecture.name);
  const displayedRecord = district ? getDistrictRecord(district) : getRecord(prefecture.name);
  const recordText = formatRecord(displayedRecord);
  const sexLabel = selectedSex === "men" ? "男子" : "女子";
  const scopeLabel = district ? `${district.name}大会最高` : prefecture.name;
  const label = `${prefecture.name}｜${scopeLabel} ${sexLabel}${selectedWeightClass}kg級 ${recordText}｜${destination}`;

  link.classList.add("map-prefecture");
  link.classList.toggle("is-muted", !isActive);
  link.classList.toggle("is-fallback", Boolean(prefecture.fallback));
  link.setAttribute("href", prefecture.url);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noreferrer");
  link.dataset.prefecture = prefecture.name;
  link.setAttribute("aria-label", `${prefecture.name}の${meetName}情報を${destination}で確認`);
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

function createDistrictOutline(district, isActive) {
  const group = document.createElementNS(svgNamespace, "g");
  const paths = [];

  group.classList.add("map-district-outline");
  group.classList.toggle("is-muted", !isActive);
  group.dataset.district = district.id;
  district.prefectures.forEach((prefectureName) => {
    const location = window.japanMapData.locations.find(
      (item) => mapNamesById[item.id] === prefectureName
    );
    if (!location) return;
    const path = document.createElementNS(svgNamespace, "path");
    path.setAttribute("d", location.path);
    path.setAttribute("vector-effect", "non-scaling-stroke");
    group.append(path);
    paths.push(path);
  });

  return { district, group, paths, isActive };
}

function getCombinedBounds(paths) {
  const bounds = paths.map((path) => path.getBBox());
  const left = Math.min(...bounds.map((box) => box.x));
  const top = Math.min(...bounds.map((box) => box.y));
  const right = Math.max(...bounds.map((box) => box.x + box.width));
  const bottom = Math.max(...bounds.map((box) => box.y + box.height));
  return { x: left, y: top, width: right - left, height: bottom - top };
}

function createDistrictRecordLink({ district, paths }) {
  const link = document.createElementNS(svgNamespace, "a");
  const background = document.createElementNS(svgNamespace, "rect");
  const name = document.createElementNS(svgNamespace, "text");
  const value = document.createElementNS(svgNamespace, "text");
  const bounds = getCombinedBounds(paths);
  const record = getDistrictRecord(district);
  const sexLabel = selectedSex === "men" ? "男子" : "女子";
  const label = `${district.name}｜${sexLabel}${selectedWeightClass}kg級 大会最高${formatRecord(record)}`;

  link.classList.add("map-district-record");
  link.setAttribute("href", district.url);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noreferrer");
  link.setAttribute("aria-label", `${label}の大会情報を確認`);
  link.setAttribute("transform", `translate(${bounds.x + bounds.width / 2} ${bounds.y + bounds.height / 2})`);
  background.setAttribute("x", "-14");
  background.setAttribute("y", "-9");
  background.setAttribute("width", "28");
  background.setAttribute("height", "18");
  background.setAttribute("rx", "3");
  name.classList.add("map-district-name");
  name.setAttribute("y", "-3");
  name.textContent = district.shortName;
  value.classList.add("map-district-value");
  value.setAttribute("y", "5");
  value.textContent = record === null ? "–" : record;
  link.addEventListener("mouseenter", () => { mapPrefectureName.textContent = label; });
  link.addEventListener("focus", () => { mapPrefectureName.textContent = label; });
  link.addEventListener("mouseleave", () => {
    if (document.activeElement !== link) mapPrefectureName.textContent = "";
  });
  link.addEventListener("blur", () => { mapPrefectureName.textContent = ""; });
  link.append(background, name, value);
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
  const districtLayer = document.createElementNS(svgNamespace, "g");
  const districtEntries = districtsForMeet.map((district) => {
    const isActive = district.prefectures.some((prefectureName) => activeNames.has(prefectureName));
    return createDistrictOutline(district, isActive);
  });
  const districtPrefectures = new Set(
    districtEntries.filter((entry) => entry.isActive).flatMap((entry) => entry.district.prefectures)
  );

  svg.classList.add("japan-map-svg");
  svg.setAttribute("viewBox", window.japanMapData.viewBox);
  svg.setAttribute("aria-label", "都道府県境界を表示した日本地図");
  districtLayer.classList.add("map-district-layer");
  districtEntries.forEach((entry) => districtLayer.append(entry.group));
  svg.append(districtLayer);
  window.japanMapData.locations.forEach((location) => {
    const prefecture = prefecturesByName.get(mapNamesById[location.id]);
    if (!prefecture) return;
    svg.append(createPrefectureLink(location, prefecture, activeNames.has(prefecture.name), recordLabels));
  });
  map.replaceChildren(svg);
  recordLayer.classList.add("map-record-layer");
  recordLabels
    .filter((recordLabel) => !districtPrefectures.has(recordLabel.prefecture.name))
    .forEach((recordLabel) => recordLayer.append(createRecordLabel(recordLabel)));
  districtEntries
    .filter((entry) => entry.isActive)
    .forEach((entry) => recordLayer.append(createDistrictRecordLink(entry)));
  svg.append(recordLayer);

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

populateWeightClasses();
renderRecordCoverage();
renderDistrictCoverage();
renderPrefectures();