import { makeComic } from "./refresh-comics";

async function loadData(hero_name, offset) {
  let result = await fetch(
    `https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&title=${hero_name}&orderBy=focDate&offset=${offset}&ts=1&apikey=17b2382722e21264ee5c37dc45804f4f&hash=7fcfa1844415ed98be0c08d9e2fcccea`,
    { mode: "cors" }
  );
  let resultJson = await result.json();
  let resultsArray = resultJson.data.results;

  function findComics() {
    for (let i = 0; i < resultsArray.length; i++) {
      makeComic(
        resultsArray[i].images[0].path,
        resultsArray[i].pageCount,
        resultsArray[i].series.name,
        resultsArray[i].issueNumber
      );
    }
  }
  findComics();
}

export { loadData };
