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

const params = new URLSearchParams(location.search);
const meetName = meetTypes[params.get("type")] || "都道府県大会";
const title = document.getElementById("prefecture-title");
const description = document.getElementById("prefecture-description");
const grid = document.getElementById("prefecture-grid");
const count = document.getElementById("prefecture-count");
const search = document.getElementById("prefecture-search");
const regionButtons = [...document.querySelectorAll(".region-button")];
let selectedRegion = "all";

document.title = `${meetName}の都道府県選択｜日本のパワーリフティング団体地図`;
title.textContent = `${meetName}：都道府県を選ぶ`;
description.textContent = `${meetName}の最新情報を確認する都道府県協会を選択してください。`;

function createPrefectureLink(prefecture) {
  const link = document.createElement("a");
  const name = document.createElement("strong");
  const destination = document.createElement("span");

  link.className = "prefecture-link";
  link.href = prefecture.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", `${prefecture.name}の${meetName}情報を確認`);
  name.textContent = prefecture.name;
  destination.textContent = prefecture.fallback ? "JPA加盟団体一覧" : "都道府県協会サイト";
  if (prefecture.fallback) destination.className = "fallback-label";

  link.append(name, destination);
  return link;
}

function renderPrefectures() {
  const keyword = search.value.trim();
  const filtered = prefectures.filter((prefecture) => {
    const matchesRegion = selectedRegion === "all" || prefecture.region === selectedRegion;
    const matchesKeyword = !keyword || prefecture.name.includes(keyword);
    return matchesRegion && matchesKeyword;
  });

  grid.replaceChildren();
  filtered.forEach((prefecture) => grid.append(createPrefectureLink(prefecture)));

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "prefecture-empty";
    empty.textContent = "該当する都道府県がありません。";
    grid.append(empty);
  }

  count.textContent = `${filtered.length}件`;
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