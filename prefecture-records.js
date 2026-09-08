(() => {
  const research = window.newcomerResearch || null;
  // This view covers the three newcomer-only meets, not newcomer awards/divisions
  // embedded in an ordinary prefectural championship.
  const newcomerRows = (window.newcomerResultRows || []).filter((row) =>
    row.scopeType === "district" ? row.scopeName === "近畿"
      : ["東京都", "愛知県"].includes(row.scopeName)
  ).map((row) => ({
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

  function addRecord(target, scopeName, row, aggregate) {
    target[scopeName] ||= { men: {}, women: {} };
    const current = target[scopeName][row.sex][row.weightClass];
    target[scopeName][row.sex][row.weightClass] = current == null
      ? row.total
      : aggregate(current, row.total);
    const allClasses = target[scopeName][row.sex].all;
    target[scopeName][row.sex].all = allClasses == null
      ? row.total
      : aggregate(allClasses, row.total);
  }

  function buildDataset(rows, useResearchUrls = false, aggregate = Math.max) {
    rows = rows.filter((row) => Number.isFinite(row.total) && row.total > 0);
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
      addRecord(target, row.scopeName, row, aggregate);
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
        selectionSourceUrl: row.selectionSourceUrl,
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
  const kokuspo = buildDataset((window.kokuspoResultRows || [])
    .filter((row) => row.edition === window.kokuspoMetadata?.edition && row.qualificationStatus === "qualified")
    .map((row) => ({ ...row, recordKind: "kokuspo" })), false, Math.min);
  const rookiePrefectureCount = rookie.sources.length;
  const championshipPrefectureCount = championship.sources.length;

  window.prefectureRecordData = {
    categories: {
      rookie: "新人大会最高Total",
      championship: "県大会最高Total",
      kokuspo: "国スポ選考通過者の最低Total"
    },
    kokuspo: window.kokuspoMetadata || null,
    asOf: research?.asOf || "2026-09-07",
    recordsByMeetType: {
      rookie: rookie.prefectureRecords,
      championship: championship.prefectureRecords,
      kokuspo: kokuspo.prefectureRecords
    },
    prefectureMeetsByMeetType: {
      rookie: rookie.prefectureMeets,
      championship: championship.prefectureMeets,
      kokuspo: kokuspo.prefectureMeets
    },
    districts: {
      rookie: rookie.districtMeets,
      championship: []
    },
    sourcesByMeetType: {
      rookie: rookie.sources,
      championship: championship.sources,
      kokuspo: kokuspo.sources
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
      championship: championship.currentRows,
      kokuspo: kokuspo.currentRows
    },
    countsByMeetType: {
      rookie: {
        confirmed: rookiePrefectureCount,
        unconfirmed: 47 - rookiePrefectureCount
      },
      kokuspo: { confirmed: kokuspo.sources.length, unconfirmed: 47 - kokuspo.sources.length },
      championship: {
        confirmed: championshipPrefectureCount,
        unconfirmed: 47 - championshipPrefectureCount
      }
    },
    audit: research?.audit || null,
    resultRows: [...rookie.currentRows, ...championship.currentRows, ...kokuspo.currentRows]
  };
})();
