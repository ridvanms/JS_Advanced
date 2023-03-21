<<<<<<< HEAD
console.log("We are in the app.js");
console.log("We are in the app.js");
console.log("We are in the app.js");
=======
import * as api from "./users.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { showHome } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";

// window.api = api;

const main = document.querySelector("main");

// const homePage = document.getElementById("homePage");
// const registerPage = document.getElementById("registerPage");
// const loginPage = document.getElementById("loginPage");
// const catalogPage = document.getElementById("dashboard-holder");
// const detailsPage = document.getElementById("detailsPage");
// const createPage = document.getElementById("createPage");
document.getElementById("views").remove();

document.querySelector("nav").addEventListener("click", onNavigate);

const links = {
  "/": showHome,
  "/catalog": catalogPage,
  "/login": loginPage,
  "/register": registerPage,
  "/detail": detailsPage,
  "/create": createPage,
};
const context = {
  showSection,
  goTo,
};

//NOTE
goTo("/");

function showSection(section) {
  main.replaceChildren(section);
}

function onNavigate(event) {
  console.log(event);
  let target = event.target;
  if (target.tagName == "IMG") {
    target = target.parenElement;
  }
  if (target.tagName == "A") {
    event.preventDefault();

    const url = new URL(target.href);
    goTo(url.pathname);
  }
}
function goTo(name) {
  const handler = links[name];
  if (typeof handler == "function") {
    handler(context);
  }
}
>>>>>>> e0b9c365626621c6a25108395568871fd7a7459d
