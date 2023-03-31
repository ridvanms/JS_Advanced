import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { layoutTemplate } from "./Views/layout.js";
import { getUserData } from "./util.js";
import { homePage } from "./Views/home.js";
import { loginPage } from "./Views/login.js";
import { registerPage } from "./Views/register.js";
import { logout } from "./data/auth.js";
import { catalogPage } from "./Views/dashboard.js";
import { createPage } from "./Views/create.js";
import { detailsPage } from "./Views/details.js";
import { editPage } from "./Views/edit.js";
import { searchPage } from "./Views/search.js";

// TODO change render root depending on project HTML structure
const root = document.body;

import * as api from "./data/donations.js";
window.api = api;

page(decorateContext);

page("index.html", "/");
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/logout", logoutAction);
page("/catalog", catalogPage);
page("/search", searchPage);
page("/create", createPage);
page("/details/:id", detailsPage);
page("/edit/:id", editPage);
page.start();

function decorateContext(ctx, next) {
  ctx.render = renderView;

  next();
}

//TODO Inject Dependencies
function renderView(content) {
  const userData = getUserData();
  render(layoutTemplate(userData, content), root);
}

function logoutAction(ctx) {
  logout();
  ctx.page.redirect("/");
}
