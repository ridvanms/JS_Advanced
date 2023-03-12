import { homePage } from "./home.js";
import { showView } from "./util.js";

const addMovieSection = document.querySelector("#add-movie");
const form = addMovieSection.querySelector("form");
form.addEventListener("submit", addMovie);

export function addMoviePage() {
  showView(addMovieSection);
}

async function addMovie(event) {
  event.preventDefault();

  let formData = new FormData(form);

  let title = formData.get("title");
  let description = formData.get("description");
  let img = formData.get("img");
  console.log(img);

  await createMovie(title, description, img);
  form.reset();
  homePage();
}

async function createMovie(title, description, img) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.accessToken);
  await fetch("http://localhost:3030/data/movies", {
    method: "post",
    headers: {
      "content-type": "application/json",
      "X-authorization": user.accessToken, 
    },
    body: JSON.stringify({ title, description, img }),
  });
}
