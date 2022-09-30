let container = document.querySelector(".comics-container");

function clearComicsContainer() {
  container.innerHTML = "";
}

function makeComic(image, series, name, issue_number) {
  let comic = document.createElement("div");
  comic.classList.add("comic");

  let cover = document.createElement("img");
  cover.classList.add("comic-cover");
  cover.src = image + ".jpg";

  let comicDesc = document.createElement("div");
  comicDesc.classList.add("comic-description");

  let comicGenre = document.createElement("div");
  comicGenre.classList.add("comic-genre");
  comicGenre.textContent = series + " pages";

  let comicName = document.createElement("div");
  comicName.classList.add("comic-name");
  comicName.textContent = name;

  let comicIssueNumber = document.createElement("div");
  comicIssueNumber.classList.add("comic-issue-number");
  comicIssueNumber.textContent = "#" + issue_number;

  comicDesc.appendChild(comicGenre);
  comicDesc.appendChild(comicName);
  comicDesc.appendChild(comicIssueNumber);
  comic.appendChild(cover);
  comic.appendChild(comicDesc);

  appendComic(comic);
}

function appendComic(comic) {
  container.appendChild(comic);
}

export { clearComicsContainer, makeComic };
