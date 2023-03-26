import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { layoutTemplate } from "./Views/layout.js";
import { getUserData } from "./util.js";
import { homePage } from "./Views/home.js";
import { loginPage } from "./Views/login.js";
import { registerPage } from "./Views/register.js";
import { logout } from "./data/auth.js";

// TODO change render root depending on project HTML structure
const root = document.body;

page(decorateContext);

page("index.html", "/");
page("/", homePage);
page("/login", loginPage);
page("/register", registerPage);
page("/logout", logoutAction);
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
