(() => {
  const research = window.newcomerResearch || null;
  const newcomerRows = (window.newcomerResultRows || []).map((row) => ({
    ...row,
    recordKind: "newcomer"
  }));
  const championshipRows = (window.prefectureChampionshipResultRows || []).map((row) => ({
    ...row,
    recordKind: "championship"
  }));

  function getVerifiedNewcomerUrl(scopeType, scopeName, fallbackUrl) {
    const entries = scopeType === "district" ? research?.districts : research?.prefectures;
    return entries?.find((item) => item.name === scopeName)?.resultUrl || fallbackUrl;
  }

  function addRecord(target, scopeName, row) {
    target[scopeName] ||= { men: {}, women: {} };
    const current = target[scopeName][row.sex][row.weightClass];
    target[scopeName][row.sex][row.weightClass] = current == null
      ? row.total
      : Math.max(current, row.total);
    const allClasses = target[scopeName][row.sex].all;
    target[scopeName][row.sex].all = allClasses == null
      ? row.total
      : Math.max(allClasses, row.total);
  }

  function buildDataset(rows, useResearchUrls = false) {
    const latestMeetByScope = new Map();
    rows.forEach((row) => {
      const scopeKey = `${row.scopeType}:${row.scopeName}`;
      const current = latestMeetByScope.get(scopeKey);
      if (!current || row.heldAt > current.heldAt) latestMeetByScope.set(scopeKey, row);
    });

    const currentRows = rows.filter((row) => {
      const scopeKey = `${row.scopeType}:${row.scopeName}`;
      return latestMeetByScope.get(scopeKey)?.meetId === row.meetId;
    });
    const prefectureRecords = {};
    const districtRecords = {};
    currentRows.forEach((row) => {
      const target = row.scopeType === "prefecture" ? prefectureRecords : districtRecords;
      addRecord(target, row.scopeName, row);
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
        newcomerCategory: row.newcomerCategory,
        recordKind: row.recordKind,
        sourceScope: row.sourceScope,
        organizerUrl: row.organizerUrl,
        sourceUrl: useResearchUrls
          ? getVerifiedNewcomerUrl(row.scopeType, row.scopeName, row.sourceUrl)
          : row.sourceUrl
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

    return {
      currentRows,
      prefectureRecords,
      prefectureMeets,
      districtMeets,
      sources: meets.filter((meet) => meet.scopeType === "prefecture")
    };
  }

  const rookie = buildDataset(newcomerRows, true);
  const championship = buildDataset(championshipRows);
  const rookiePrefectureCount = rookie.sources.length;
  const championshipPrefectureCount = championship.sources.length;

  window.prefectureRecordData = {
    categories: {
      rookie: "新人大会最高Total",
      championship: "県大会最高Total"
    },
    asOf: research?.asOf || "2026-09-07",
    recordsByMeetType: {
      rookie: rookie.prefectureRecords,
      championship: championship.prefectureRecords
    },
    prefectureMeetsByMeetType: {
      rookie: rookie.prefectureMeets,
      championship: championship.prefectureMeets
    },
    districts: {
      rookie: rookie.districtMeets,
      championship: []
    },
    sourcesByMeetType: {
      rookie: rookie.sources,
      championship: championship.sources
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
      rookie: research,
      championship: null
    },
    resultRowsByMeetType: {
      rookie: rookie.currentRows,
      championship: championship.currentRows
    },
    countsByMeetType: {
      rookie: {
        confirmed: rookiePrefectureCount,
        unconfirmed: 47 - rookiePrefectureCount
      },
      championship: {
        confirmed: championshipPrefectureCount,
        unconfirmed: 47 - championshipPrefectureCount
      }
    },
    audit: research?.audit || null,
    resultRows: [...rookie.currentRows, ...championship.currentRows]
  };
})();
