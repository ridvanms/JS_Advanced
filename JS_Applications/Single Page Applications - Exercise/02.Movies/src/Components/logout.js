import { homePage } from "./home.js";
import { showView, updateNav } from "./util.js";

const section = document.querySelector("#home-page");
export function logoutPage() {
  localStorage.removeItem("user");
  updateNav();
  showView(section);
}
updateNav();
homePage();
