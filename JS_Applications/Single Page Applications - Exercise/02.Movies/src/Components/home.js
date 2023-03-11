import { showView } from "./util.js";

const homeSelection = document.querySelector("#home-page");
const catalog = homeSelection.querySelector(".card-deck");

export function homePage() {
  showView(homeSelection);
  displayMovies();
}

async function displayMovies() {
  catalog.innerHTML = spinner();
  setTimeout(async () => {
    const movies = await getMovies();
    catalog.replaceChildren(...movies.map(createMoviePreview));
  }, 2000);
}
function spinner() {
  return `
  <div class="title-container">
    <div class="spinner">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" />
      </svg>
    </div>
  </div>
`;
}

function createMoviePreview(movie) {
  const element = document.createElement("div");

  element.className = "card mb-4";
  element.innerHTML = `
    <img class="card-img-top"src="${movie.img}"
      alt="Card image cap" width="400">
    <div class="card-body">
      <h4 class="card-title">${movie.title}</h4>
    </div>
    <div class="card-footer">
      <a data-id="${movie._id}" href="/details/${movie._id}">
        <button type="button" class="btn btn-info">Details</button>
      </a>
    </div>
  `;
  return element;
}

async function getMovies() {
  //url for getting movies
  let url = `http://localhost:3030/data/movies`;
  let res = await fetch(url);
  let data = await res.json();

  return data;
}
