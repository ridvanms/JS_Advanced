import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";

// import { logout } from "./data/auth.js";

import { getUserData } from "./util.js";

import { layoutTemplate } from "./views/layout/layout.js";
import { homePage } from "./views/home.js";
import { logout } from "./data/auth.js";
import { createPage } from "./views/create.js";
import { loginPage } from "./views/users/login.js";
import { registerPage } from "./views/users/register.js";

const root = document.body;

page(decorateContext);

page("index.html", "/");
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/logout", logoutAction);
// page("/catalog", catalogPage);
// // page("/search", searchPage);
page("/create", createPage);
// page("/details/:id", detailsPage);
// page("/edit/:id", editPage);
page.start();

function decorateContext(ctx, next) {
  ctx.render = renderView;
  next();
}

function renderView(content) {
  const userData = getUserData();
  render(layoutTemplate(userData, content), root);

  document.querySelector("header").addEventListener("click", (e) => {
    let list = document.querySelector("header").querySelectorAll("a");
    if (list.length) {
      list.forEach((el) => {
        el.classList.remove("animate__animated", "animate__jello");
      });
    }
    if (e.target.tagName === "A") {
      e.target.classList.add("animate__animated", "animate__jello");
    }
  });
}

function logoutAction(ctx) {
  logout();
  ctx.page.redirect("/");
}
