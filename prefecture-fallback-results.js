// 47都道府県の県大会版データ。
// 値は各県で直近に確認できたJPA公認県大会（山形・鳥取は合同／地区大会）の男子最高Total。
// 新人大会データとは別配列で管理する。
(() => {
  const sourceRows = [
    { prefecture: "北海道", region: "北海道・東北", date: "2026-04-25", event: "春の北海道パワーリフティング大会", athlete: "及川 慎二", weightClass: "120", total: 780, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/9d829eb7b3.pdf" },
    { prefecture: "青森県", region: "北海道・東北", date: "2026-04-12", event: "第23回青森県パワーリフティング選手権大会", athlete: "越前 祐輔", weightClass: "105", total: 660, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/efc80fd13b.pdf" },
    { prefecture: "岩手県", region: "北海道・東北", date: "2026-04-05", event: "第42回岩手県パワーリフティング選手権大会", athlete: "佐々木 一馬", weightClass: "120", total: 670, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/9fc37b5419.pdf" },
    { prefecture: "宮城県", region: "北海道・東北", date: "2026-04-19", event: "第61回宮城県パワーリフティング選手権大会", athlete: "齋藤 大", weightClass: "93", total: 755, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/6f86e0a457.pdf" },
    { prefecture: "秋田県", region: "北海道・東北", date: "2026-05-31", event: "第44回秋田県パワーリフティング選手権大会", athlete: "伊藤 拓", weightClass: "74", total: 617.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/2d4a922dbd.pdf" },
    { prefecture: "山形県", region: "北海道・東北", date: "2026-06-07", event: "第11回北海道・東北ブロックパワーリフティング選手権大会", athlete: "上野 望夢", weightClass: "93", total: 720, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/9fd812b878.pdf", sourceScope: "地区大会・山形県登録選手" },
    { prefecture: "福島県", region: "北海道・東北", date: "2025-11-23", event: "第40回福島県パワーリフティング選手権大会", athlete: "羽田 大", weightClass: "120", total: 810, url: "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/18309/kekka_260114_10.pdf" },
    { prefecture: "茨城県", region: "関東", date: "2026-04-25", event: "第45回茨城県パワーリフティング選手権大会", athlete: "森田 大貴", weightClass: "120", total: 777.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/238d32e3ab.pdf" },
    { prefecture: "栃木県", region: "関東", date: "2026-05-10", event: "第43回栃木県パワーリフティング選手権大会", athlete: "枝 和輝", weightClass: "120", total: 850, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/f9bc00d040.pdf" },
    { prefecture: "群馬県", region: "関東", date: "2026-05-02", event: "第3回群馬県パワーリフティング選手権大会", athlete: "落合 広樹", weightClass: "105", total: 737.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/c394afd32f.pdf" },
    { prefecture: "埼玉県", region: "関東", date: "2026-04-12", event: "第91回埼玉県パワーリフティング選手権大会", athlete: "及川 傑", weightClass: "105", total: 790, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/9ab5487dd8.pdf" },
    { prefecture: "千葉県", region: "関東", date: "2026-04-19", event: "第47回千葉県パワーリフティング選手権大会", athlete: "永山 壱世", weightClass: "74", total: 720, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/694679ef6f.pdf" },
    { prefecture: "東京都", region: "関東", date: "2026-08-22", event: "第2回東京都オープンパワーリフティング選手権大会", athlete: "友松 蒼司", weightClass: "105", total: 787.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/851114f717.pdf" },
    { prefecture: "神奈川県", region: "関東", date: "2026-04-12", event: "第70回神奈川県パワーリフティング選手権大会", athlete: "中西 正悟", weightClass: "93", total: 700, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/2c65dbf939.pdf" },
    { prefecture: "山梨県", region: "関東", date: "2026-05-10", event: "第7回山梨県パワーリフティング選手権大会", athlete: "石川 葵", weightClass: "83", total: 742.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/2391440a50.pdf" },
    { prefecture: "新潟県", region: "北信越", date: "2026-04-19", event: "第50回新潟県パワーリフティング選手権大会", athlete: "佐藤 勇次", weightClass: "83", total: 660, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/176c1bb1eb.pdf" },
    { prefecture: "富山県", region: "北信越", date: "2026-03-22", event: "第54回富山県パワーリフティング選手権大会", athlete: "平井 勇輝", weightClass: "105", total: 700, url: "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/18309/260401_001.pdf" },
    { prefecture: "石川県", region: "北信越", date: "2026-04-19", event: "第69回金沢市民体育大会・石川県代表選考会", athlete: "白田 亘", weightClass: "93", total: 640, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/1aae6a269e.pdf" },
    { prefecture: "福井県", region: "北信越", date: "2026-05-10", event: "第31回福井県パワーリフティング選手権大会", athlete: "梯 貴喜", weightClass: "120+", total: 825, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/1bb8b03433.pdf" },
    { prefecture: "長野県", region: "北信越", date: "2026-04-18", event: "第15回長野県パワーリフティング選手権大会", athlete: "高木 厚徳", weightClass: "105", total: 800, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/24e90176bd.pdf" },
    { prefecture: "静岡県", region: "東海", date: "2026-04-19", event: "第53回静岡県パワーリフティング選手権大会", athlete: "林瀬 龍紀", weightClass: "83", total: 702.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/6b1be9789c.pdf" },
    { prefecture: "愛知県", region: "東海", date: "2025-11-09", event: "第51回愛知県パワーリフティング選手権大会", athlete: "野口 昌利", weightClass: "120", total: 730, url: "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/18309/251120_3.pdf" },
    { prefecture: "岐阜県", region: "東海", date: "2025-11-23", event: "第16回岐阜県パワーリフティング選手権大会", athlete: "西村 直樹", weightClass: "93", total: 745, url: "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/18309/overview_251217_08.pdf" },
    { prefecture: "三重県", region: "東海", date: "2026-04-05", event: "第64回三重県パワーリフティング選手権大会", athlete: "永井 雄太", weightClass: "120", total: 777.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/73adf07f5d.pdf" },
    { prefecture: "滋賀県", region: "近畿", date: "2026-05-31", event: "第12回滋賀県クラシックパワーリフティング選手権大会", athlete: "西方 孝志", weightClass: "105", total: 685, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/789484d7b4.pdf" },
    { prefecture: "京都府", region: "近畿", date: "2026-06-07", event: "第16回京都府クラシックパワーリフティング選手権大会", athlete: "長野 友陽", weightClass: "93", total: 650, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/acf121383a.pdf" },
    { prefecture: "大阪府", region: "近畿", date: "2026-03-29", event: "第54回大阪府パワーリフティング選手権大会", athlete: "福住 昌也", weightClass: "74", total: 657.5, url: "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/18309/2026osaka-p-result.pdf" },
    { prefecture: "兵庫県", region: "近畿", date: "2026-04-19", event: "第44回兵庫県パワーリフティング選手権大会", athlete: "田野 智徳", weightClass: "105", total: 745, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/3d8c2bf0e7.pdf" },
    { prefecture: "奈良県", region: "近畿", date: "2026-04-26", event: "第2回奈良県パワーリフティング選手権大会", athlete: "田村 優", weightClass: "105", total: 700, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/ecdb2e5ca0.pdf" },
    { prefecture: "和歌山県", region: "近畿", date: "2026-04-12", event: "第13回和歌山県クラシックパワーリフティング選手権大会", athlete: "門堀 涼介", weightClass: "66", total: 690, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/312ade50e0.pdf" },
    { prefecture: "鳥取県", region: "中国", date: "2025-11-16", event: "第33回岡山県パワーリフティング選手権大会・岡山県／鳥取県予選", athlete: "田中 悠真", weightClass: "93", total: 650, url: "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/18309/615519_3.pdf", sourceScope: "合同大会・鳥取県登録選手" },
    { prefecture: "島根県", region: "中国", date: "2026-03-01", event: "第30回島根県パワーリフティング選手権大会", athlete: "周藤 竜之介", weightClass: "83", total: 640, url: "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/18309/overview_260527.pdf" },
    { prefecture: "岡山県", region: "中国", date: "2026-04-05", event: "第1回岡山県パワーリフティング公式記録会", athlete: "杉野 浩生", weightClass: "83", total: 735, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/3f6bbea031.pdf" },
    { prefecture: "広島県", region: "中国", date: "2026-06-06", event: "第8回広島県パワーリフティング選手権大会", athlete: "國芳 雅也", weightClass: "83", total: 707.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/276072db66.pdf" },
    { prefecture: "山口県", region: "中国", date: "2025-11-02", event: "2025秋季山口県パワーリフティング選手権大会", athlete: "原田 創", weightClass: "66", total: 545, url: "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/18309/251111_04.pdf" },
    { prefecture: "徳島県", region: "四国", date: "2026-04-26", event: "第18回春季徳島県パワーリフティング選手権大会", athlete: "井口 悠稀", weightClass: "83", total: 635, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/fa2844456b.pdf" },
    { prefecture: "香川県", region: "四国", date: "2026-04-19", event: "第108回香川県春季パワーリフティング選手権大会", athlete: "岡村 慎弥", weightClass: "120", total: 722.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/e94d6763c0.pdf" },
    { prefecture: "愛媛県", region: "四国", date: "2025-12-07", event: "2025年度秋季愛媛県クラシックパワーリフティング競技大会", athlete: "住田 世凪", weightClass: "83", total: 580, url: "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/18309/251225_03.pdf" },
    { prefecture: "高知県", region: "四国", date: "2026-07-26", event: "2026高知県パワーリフティング夏の記録会", athlete: "山本 英嗣", weightClass: "74", total: 600, url: "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/18309/260805_kouchi_kirokukai_pl.pdf" },
    { prefecture: "福岡県", region: "九州・沖縄", date: "2026-04-18", event: "第55回福岡県パワーリフティング選手権大会", athlete: "久保田 真斗", weightClass: "105", total: 702.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/eb99698ccc.pdf" },
    { prefecture: "佐賀県", region: "九州・沖縄", date: "2025-12-07", event: "第48回佐賀県パワーリフティング選手権大会", athlete: "前田 貴久", weightClass: "120", total: 735, url: "https://ros-cdn.s3.ap-northeast-1.amazonaws.com/hp/img/ros_keiyaku/18309/overview_251217_03.pdf" },
    { prefecture: "長崎県", region: "九州・沖縄", date: "2026-05-04", event: "第16回長崎県パワーリフティング選手権大会", athlete: "福田 章人", weightClass: "93", total: 620, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/d44ae652bc.pdf" },
    { prefecture: "熊本県", region: "九州・沖縄", date: "2026-06-20", event: "熊本県オープンパワーリフティング選手権大会2026", athlete: "後藤 慎司", weightClass: "105", total: 702.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/db749bece9.pdf" },
    { prefecture: "大分県", region: "九州・沖縄", date: "2026-05-17", event: "第11回大分県パワーリフティング大会", athlete: "菊地 龍馬", weightClass: "93", total: 652.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/45bb015e0e.pdf" },
    { prefecture: "宮崎県", region: "九州・沖縄", date: "2026-04-19", event: "第27回宮崎県パワーリフティング選手権大会", athlete: "野元 秀貴郎", weightClass: "93", total: 630, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/61d5dcdf14.pdf" },
    { prefecture: "鹿児島県", region: "九州・沖縄", date: "2026-05-03", event: "第9回鹿児島県パワーリフティング選手権大会", athlete: "味園 恵", weightClass: "74", total: 652.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/36e39be82b.pdf" },
    { prefecture: "沖縄県", region: "九州・沖縄", date: "2026-04-05", event: "第51回沖縄県パワーリフティング選手権大会", athlete: "Damion Morris", weightClass: "93", total: 802.5, url: "https://ros-cms-data.s3.ap-northeast-1.amazonaws.com/_file/10951/6419204505.pdf" }
  ];

  window.prefectureChampionshipResultRows = sourceRows.map((row) => ({
    meetId: `prefecture-championship-${row.prefecture}-${row.date}`,
    eventName: row.event,
    heldAt: row.date,
    hostPrefecture: row.prefecture,
    scopeType: "prefecture",
    scopeName: row.prefecture,
    region: row.region,
    coveredPrefectures: [row.prefecture],
    newcomerCategory: "県大会：直近JPA公認大会",
    recordKind: "championship",
    sourceScope: row.sourceScope || "県大会内最高Total",
    sex: "men",
    weightClass: row.weightClass,
    athlete: row.athlete,
    total: row.total,
    organizerUrl: row.url,
    sourceUrl: row.url
  }));

  // 旧変数名を参照する外部コード向けの互換エイリアス。
  window.prefectureFallbackResultRows = window.prefectureChampionshipResultRows;
})();
