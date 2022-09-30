import "./style.css";
import { clearComicsContainer } from "./refresh-comics";
import { loadData } from "./get-data";
import { searchComics, addComics, input } from "./inputs";

for (let i = 0; i < 20; i++) {
  loadData("Spider-Man", i);
}

const buttonSearch = document.querySelector(".header__search-button");
const buttonShowMore = document.querySelector(".show-more-button");

buttonSearch.addEventListener("click", searchComics);
buttonShowMore.addEventListener("click", addComics);
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    buttonSearch.click();
  }
});
