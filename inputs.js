import { loadData } from "./get-data";
import { clearComicsContainer } from "./refresh-comics";

const input = document.querySelector(".header__search-input");
let iteration_count = 0;
let input_value = "Spider-Man";

function searchComics() {
  clearComicsContainer();
  iteration_count = 0;
  input_value = input.value;
  loadData(input_value, iteration_count);
}

function addComics() {
  iteration_count += 1;
  loadData(input_value, iteration_count);
}

export { searchComics, addComics, input };
