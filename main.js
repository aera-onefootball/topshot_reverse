const searchResults = document.getElementById("search-results");
const log = document.getElementById("result");

searchResults.addEventListener("input", updateValue);

let toDataCsv = (values) =>
  encodeURI("data:text/csv;charset=utf-8," + values.join("\n"));

function parseTopshotData(data) {
  const moments = data.data.searchEditionListings.data.searchSummary.data.data;
  const values = moments.map((moment) => [
    moment.set.flowName,
    moment.play.stats.playerName,
    moment.play.stats.playCategory,
    moment.play.stats.teamAtMoment,
    moment.play.stats.nbaSeason,
    moment.setPlay.circulations.circulationCount,
    moment.setPlay.circulations.forSaleByCollectors,
    moment.setPlay.circulations.ownedByCollectors,
    moment.priceRange.min,
    moment.averageSaleData.averagePrice,
    moment.averageSaleData.numSales,
  ]);
  return values;
}

function updateValue(e) {
  const data = JSON.parse(e.target.value);
  const values = parseTopshotData(data);
  console.log(values);
  log.textContent = values.join("\n");
}
