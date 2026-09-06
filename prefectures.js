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

const mapPositions = {
  北海道: [15, 1],
  青森県: [14, 2],
  岩手県: [14, 3],
  宮城県: [14, 4],
  秋田県: [13, 3],
  山形県: [13, 4],
  福島県: [13, 5],
  茨城県: [14, 6],
  栃木県: [13, 6],
  群馬県: [12, 6],
  埼玉県: [13, 7],
  千葉県: [15, 7],
  東京都: [13, 8],
  神奈川県: [12, 8],
  山梨県: [11, 7],
  新潟県: [12, 5],
  富山県: [10, 6],
  石川県: [9, 6],
  福井県: [9, 7],
  長野県: [11, 6],
  静岡県: [11, 8],
  愛知県: [10, 8],
  岐阜県: [10, 7],
  三重県: [9, 8],
  滋賀県: [8, 7],
  京都府: [7, 7],
  大阪府: [7, 8],
  兵庫県: [6, 7],
  奈良県: [8, 8],
  和歌山県: [7, 9],
  鳥取県: [5, 7],
  島根県: [4, 7],
  岡山県: [5, 8],
  広島県: [4, 8],
  山口県: [3, 8],
  徳島県: [6, 9],
  香川県: [5, 9],
  愛媛県: [4, 9],
  高知県: [5, 10],
  福岡県: [2, 9],
  佐賀県: [1, 10],
  長崎県: [1, 11],
  熊本県: [2, 10],
  大分県: [3, 9],
  宮崎県: [3, 10],
  鹿児島県: [2, 11],
  沖縄県: [1, 12]
};

const params = new URLSearchParams(location.search);
const meetName = meetTypes[params.get("type")] || "都道府県大会";
const title = document.getElementById("prefecture-title");
const description = document.getElementById("prefecture-description");
const map = document.getElementById("prefecture-map");
const mapFrame = document.querySelector(".japan-map-frame");
const emptyMessage = document.getElementById("prefecture-empty");
const count = document.getElementById("prefecture-count");
const search = document.getElementById("prefecture-search");
const regionButtons = [...document.querySelectorAll(".region-button")];
let selectedRegion = "all";
let mapPositionInitialized = false;

document.title = `${meetName}の都道府県選択｜日本のパワーリフティング団体地図`;
title.textContent = `${meetName}：都道府県を選ぶ`;
description.textContent = `${meetName}の最新情報を確認する都道府県協会を選択してください。`;

function createPrefectureLink(prefecture, isActive) {
  const link = document.createElement("a");
  const name = document.createElement("strong");
  const [column, row] = mapPositions[prefecture.name];
  const destination = prefecture.fallback ? "JPA加盟団体一覧" : "都道府県協会サイト";

  link.className = "prefecture-link";
  link.classList.toggle("is-muted", !isActive);
  link.classList.toggle("is-fallback", Boolean(prefecture.fallback));
  link.href = prefecture.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.style.setProperty("--map-column", column);
  link.style.setProperty("--map-row", row);
  link.setAttribute("aria-label", `${prefecture.name}の${meetName}情報を${destination}で確認`);
  link.title = `${prefecture.name}｜${destination}`;
  if (!isActive) {
    link.tabIndex = -1;
    link.setAttribute("aria-hidden", "true");
  }

  name.textContent = prefecture.name;
  link.append(name);
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

  map.replaceChildren();
  prefectures.forEach((prefecture) => {
    map.append(createPrefectureLink(prefecture, activeNames.has(prefecture.name)));
  });

  emptyMessage.hidden = filtered.length > 0;
  count.textContent = `${filtered.length}件`;

  if (filtered.length && (selectedRegion !== "all" || keyword)) {
    const activeLink = map.querySelector(".prefecture-link:not(.is-muted)");
    const targetLeft = activeLink.offsetLeft - (mapFrame.clientWidth - activeLink.offsetWidth) / 2;
    mapFrame.scrollTo({ left: targetLeft, behavior: "auto" });
  } else if (!mapPositionInitialized) {
    mapFrame.scrollLeft = mapFrame.scrollWidth - mapFrame.clientWidth;
    mapPositionInitialized = true;
  }
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
renderPrefectures();