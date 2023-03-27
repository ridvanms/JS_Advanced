import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";

import { logout } from "./data/auth.js";

import { getUserData } from "./util.js";

import { layoutTemplate } from "./Views/layout.js";
import { homePage } from "./Views/home.js";
import { loginPage } from "./Views/login.js";
import { registerPage } from "./Views/register.js";
import { dashboardPage } from "./Views/dashboard.js";
import { addAlbumPage } from "./Views/addMusic.js";
import { detailsPage } from "./Views/details.js";
import { editPage } from "./Views/edit.js";

const root = document.getElementById("wrapper");

page(decorateContext);

page("index.html", "/");
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/logout", logoutAction);
page("/catalog", dashboardPage);
page("/catalog/:id", detailsPage);
page("/catalog/:id/edit", editPage);
page("/create", addAlbumPage);

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
