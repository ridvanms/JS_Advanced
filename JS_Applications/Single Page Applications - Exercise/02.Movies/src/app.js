import { showView, updateNav } from "./Components/util.js";
import { loginPage } from "./Components/login.js";
import { homePage } from "./Components/home.js";
import { register } from "./Components/register.js";
import { logoutPage } from "./Components/logout.js";
import { addMoviePage } from "./Components/addMovie.js";

const routes = {
  "/": homePage,
  "/logout": logoutPage,
  "/login": loginPage,
  "/register": register,
  "/edit": editMovie,
  "/example": exampleMovie,
  "/addMovie": addMoviePage,
};

document.querySelector("nav").addEventListener("click", onNavigate);
document
  .querySelector("#add-movie-button")
  .addEventListener("click", onNavigate);

function onNavigate(event) {
  event.preventDefault();
  if (event.target.tagName == "A" && event.target.href) {
    const url = new URL(event.target.href);

    const view = routes[url.pathname];
    if (typeof view == "function") {
      view();
    }
  }
}

const exampleSection = document.querySelector("#movie-example");
const editSection = document.querySelector("#edit-movie");

function exampleMovie() {
  showView(exampleSection);
}
function editMovie() {
  showView(editSection);
}
