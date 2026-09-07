(() => {
  const rows = window.newcomerResultRows || [];
  const research = window.newcomerResearch || null;
  const latestMeetByScope = new Map();

  rows.forEach((row) => {
    const scopeKey = `${row.scopeType}:${row.scopeName}`;
    const current = latestMeetByScope.get(scopeKey);
    if (!current || row.heldAt > current.heldAt) {
      latestMeetByScope.set(scopeKey, row);
    }
  });

  const currentRows = rows.filter((row) => {
    const scopeKey = `${row.scopeType}:${row.scopeName}`;
    return latestMeetByScope.get(scopeKey)?.meetId === row.meetId;
  });

  function addRecord(target, scopeName, row) {
    target[scopeName] ||= { men: {}, women: {} };
    const current = target[scopeName][row.sex][row.weightClass];
    target[scopeName][row.sex][row.weightClass] = current == null
      ? row.total
      : Math.max(current, row.total);
  }

  const prefectureRecords = {};
  const districtRecords = {};
  currentRows.forEach((row) => {
    if (row.scopeType === "prefecture") {
      addRecord(prefectureRecords, row.scopeName, row);
    } else if (row.scopeType === "district") {
      addRecord(districtRecords, row.scopeName, row);
    }
  });

  const meets = [...new Map(
    currentRows.map((row) => [row.meetId, {
      id: row.meetId,
      eventName: row.eventName,
      heldAt: row.heldAt,
      hostPrefecture: row.hostPrefecture,
      scopeType: row.scopeType,
      scopeName: row.scopeName,
      region: row.region,
      prefectures: row.coveredPrefectures,
      organizerUrl: row.organizerUrl,
      sourceUrl: row.sourceUrl
    }])
  ).values()];

  const prefectureMeets = Object.fromEntries(
    meets
      .filter((meet) => meet.scopeType === "prefecture")
      .map((meet) => [meet.scopeName, meet])
  );

  const districtMeets = meets
    .filter((meet) => meet.scopeType === "district")
    .map((meet) => ({
      ...meet,
      name: `${meet.scopeName}新人`,
      shortName: meet.scopeName,
      url: meet.organizerUrl,
      records: districtRecords[meet.scopeName] || { men: {}, women: {} }
    }));

  window.prefectureRecordData = {
    category: "新人大会・クラシック",
    asOf: research?.asOf || "2026-09-07",
    recordsByMeetType: {
      rookie: prefectureRecords
    },
    prefectureMeetsByMeetType: {
      rookie: prefectureMeets
    },
    districts: {
      rookie: districtMeets
    },
    sourcesByMeetType: {
      rookie: meets.filter((meet) => meet.scopeType === "prefecture")
    },
    districtResearch: {
      rookie: {
        asOf: research?.asOf || "2026-09-07",
        years: research?.period || "2025・2026年",
        confirmed: research
          ? research.districts.filter((item) => item.status === "verified").map((item) => item.name)
          : ["近畿"],
        notConfirmed: research
          ? research.districts.filter((item) => item.status !== "verified").map((item) => item.name)
          : []
      }
    },
    researchByMeetType: {
      rookie: research
    },
    resultRows: currentRows
  };
})();
