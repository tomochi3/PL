const routeProfiles = {
  general: {
    nodes: ["ipf", "jpa", "local"]
  },
  student: {
    nodes: ["ipf", "jpa", "student"]
  },
  highschool: {
    nodes: ["ipf", "jpa", "highschool"]
  },
  company: {
    nodes: ["ipf", "jpa", "local", "company"]
  },
  para: {
    nodes: ["wppo", "jppf", "para-national", "para-local"]
  },
  pushpull: {
    nodes: ["jpff"]
  }
};

const routeButtons = [...document.querySelectorAll(".route-button")];
const diagramNodes = [...document.querySelectorAll("[data-node]")];

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[href]");
  const selection = window.getSelection();
  if (!link || !selection || selection.isCollapsed || !selection.toString().trim()) return;

  const selectionTouchesLink = link.contains(selection.anchorNode) || link.contains(selection.focusNode);
  if (selectionTouchesLink) event.preventDefault();
});

function setProfile(profileName) {
  const profile = routeProfiles[profileName];
  if (!profile) return;

  routeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.profile === profileName));
  });

  diagramNodes.forEach((node) => {
    const active = profile.nodes.includes(node.dataset.node);
    node.classList.toggle("is-active", active);
    node.classList.toggle("is-dimmed", !active);
  });

}

routeButtons.forEach((button) => {
  button.addEventListener("click", () => setProfile(button.dataset.profile));
});

document.querySelectorAll("[data-jump-profile]").forEach((node) => {
  node.addEventListener("click", () => setProfile(node.dataset.jumpProfile));
});

setProfile("general");

const rookieMeets = [
  {
    id: "tokyo",
    region: "関東",
    place: "東京",
    prefecture: "東京都",
    year: "2026",
    meet: "第7回 新人限定TOKYO",
    men: { total: "675", athlete: "森 圭佑・93kg級" },
    women: { total: "355", athlete: "藤原 彩香・57kg級" },
    coordinates: [139.6917, 35.6895],
    offset: [72, -20],
    mobileOffset: [49, -24],
    source: "https://powerlifting.tokyo/wp-content/uploads/2026/02/458c7bb3fbd515a3a11f1b4da8fe095b.pdf"
  },
  {
    id: "aichi",
    region: "東海",
    place: "愛知",
    prefecture: "愛知県",
    year: "2026",
    meet: "第9回 愛知県新人",
    men: { total: "625", athlete: "神戸 大暉・120kg級" },
    women: { total: "312.5", athlete: "Bolognese Lucia・76kg級" },
    coordinates: [136.9066, 35.1802],
    offset: [13, 57],
    mobileOffset: [35, 94],
    source: "https://aichi-powerlifting.jimdofree.com/app/download/11064181571/%E7%AC%AC9%E5%9B%9E%E6%84%9B%E7%9F%A5%E7%9C%8C%E6%96%B0%E4%BA%BA%E5%A4%A7%E4%BC%9A%E7%B5%90%E6%9E%9C%286%E6%9C%889%E6%97%A5%EF%BC%89.pdf?t=1782124922"
  },
  {
    id: "kinki",
    region: "近畿",
    place: "近畿",
    prefecture: "兵庫県",
    year: "2024",
    meet: "第1回 近畿新人",
    men: { total: "587.5", athlete: "奥出 舜一郎・105kg級" },
    women: { total: "340", athlete: "上野 侑香・52kg級" },
    coordinates: [135.1830, 34.6913],
    offset: [-75, 28],
    mobileOffset: [-64, 27],
    source: "https://hpapower.com/wp-content/uploads/2024/06/%E7%AC%AC%EF%BC%92%EF%BC%96%E5%9B%9E%E8%BF%91%E7%95%BF%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E7%B5%90%E6%9E%9C%E7%B7%8F%E5%90%88.pdf"
  }
];

const rookieMapStage = document.querySelector("#rookie-map-stage");
const rookieMapSvg = document.querySelector("#rookie-map-svg");
const rookieMapMarkers = document.querySelector("#rookie-map-markers");
const rookieMapError = document.querySelector("#rookie-map-error");
let selectedRookieMeet = "tokyo";
let rookieMapGeoJSON;

function getRookieMapGeoJSON() {
  if (rookieMapGeoJSON) return rookieMapGeoJSON;

  const reverseRings = (geometry) => {
    const coordinates = geometry.type === "Polygon"
      ? geometry.coordinates.map((ring) => [...ring].reverse())
      : geometry.coordinates.map((polygon) => polygon.map((ring) => [...ring].reverse()));
    return { ...geometry, coordinates };
  };

  rookieMapGeoJSON = {
    ...window.JAPAN_PREFECTURES,
    features: window.JAPAN_PREFECTURES.features.map((feature) => ({
      ...feature,
      geometry: reverseRings(feature.geometry)
    }))
  };
  return rookieMapGeoJSON;
}

function updateRookieDetail(meetId) {
  const meet = rookieMeets.find((item) => item.id === meetId);
  if (!meet) return;
  selectedRookieMeet = meetId;

  document.querySelector("#rookie-detail-region").textContent = meet.region;
  document.querySelector("#rookie-detail-place").textContent = meet.place;
  document.querySelector("#rookie-detail-year").textContent = meet.year;
  document.querySelector("#rookie-detail-meet").textContent = meet.meet;
  document.querySelector("#rookie-men-total").textContent = meet.men.total;
  document.querySelector("#rookie-men-athlete").textContent = meet.men.athlete;
  document.querySelector("#rookie-women-total").textContent = meet.women.total;
  document.querySelector("#rookie-women-athlete").textContent = meet.women.athlete;
  document.querySelector("#rookie-source-link").href = meet.source;

  document.querySelectorAll(".rookie-map-pin").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.meetId === meetId));
  });

  if (window.d3 && rookieMapSvg) {
    window.d3.select(rookieMapSvg)
      .selectAll(".rookie-prefecture")
      .classed("is-selected", (feature) => feature.properties.N03_001 === meet.prefecture);
  }
}

function drawRookieMap() {
  if (!rookieMapStage || !rookieMapSvg || !rookieMapMarkers) return;
  if (!window.d3 || !window.JAPAN_PREFECTURES) {
    rookieMapError.hidden = false;
    return;
  }

  const width = Math.max(300, Math.round(rookieMapStage.clientWidth));
  const height = Math.max(340, Math.round(rookieMapStage.clientHeight));
  const mapGeoJSON = getRookieMapGeoJSON();
  const resultPrefectures = new Set(rookieMeets.map((meet) => meet.prefecture));
  const projection = window.d3.geoMercator().fitExtent(
    [[22, 18], [width - 22, height - 18]],
    mapGeoJSON
  );
  const path = window.d3.geoPath(projection);
  const svg = window.d3.select(rookieMapSvg);

  rookieMapError.hidden = true;
  rookieMapSvg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.selectAll(".rookie-prefecture, .rookie-leader, .rookie-leader-dot").remove();
  rookieMapMarkers.replaceChildren();

  svg.selectAll(".rookie-prefecture")
    .data(mapGeoJSON.features)
    .join("path")
    .attr("class", (feature) => {
      const name = feature.properties.N03_001;
      const classes = ["rookie-prefecture"];
      if (resultPrefectures.has(name)) classes.push("has-result");
      if (rookieMeets.find((meet) => meet.id === selectedRookieMeet)?.prefecture === name) classes.push("is-selected");
      return classes.join(" ");
    })
    .attr("d", path);

  rookieMeets.forEach((meet) => {
    const projected = projection(meet.coordinates);
    if (!projected) return;
    const offset = width < 500 ? meet.mobileOffset : meet.offset;
    const labelX = Math.max(54, Math.min(width - 54, projected[0] + offset[0]));
    const labelY = Math.max(25, Math.min(height - 25, projected[1] + offset[1]));

    svg.append("line")
      .attr("class", "rookie-leader")
      .attr("x1", projected[0])
      .attr("y1", projected[1])
      .attr("x2", labelX)
      .attr("y2", labelY);

    svg.append("circle")
      .attr("class", "rookie-leader-dot")
      .attr("cx", projected[0])
      .attr("cy", projected[1])
      .attr("r", 3.5);

    const button = document.createElement("button");
    const place = document.createElement("span");
    const totals = document.createElement("strong");
    button.type = "button";
    button.className = "rookie-map-pin";
    button.dataset.meetId = meet.id;
    button.setAttribute("aria-pressed", String(meet.id === selectedRookieMeet));
    button.setAttribute("aria-label", `${meet.region} ${meet.meet}、男子${meet.men.total}kg、女子${meet.women.total}kg`);
    button.style.left = `${labelX}px`;
    button.style.top = `${labelY}px`;
    place.textContent = `${meet.region}・${meet.year}`;
    totals.textContent = `男 ${meet.men.total}｜女 ${meet.women.total}`;
    button.append(place, totals);
    button.addEventListener("click", () => updateRookieDetail(meet.id));
    rookieMapMarkers.append(button);
  });
}

if (rookieMapStage) {
  const mapReady = window.JAPAN_PREFECTURES_READY || Promise.resolve(window.JAPAN_PREFECTURES);
  mapReady.then(() => {
    drawRookieMap();
    const rookieMapResizeObserver = new ResizeObserver(drawRookieMap);
    rookieMapResizeObserver.observe(rookieMapStage);
  }).catch(() => {
    rookieMapError.hidden = false;
  });
}
