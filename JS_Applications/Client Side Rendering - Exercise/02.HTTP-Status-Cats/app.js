import { cats } from "./catSeeder.js";
import { render } from "./node_modules/lit-html/lit-html.js";
import { card } from "./tempalte/card.js";

const allCatsSection = document.getElementById("allCats");
const ul = document.createElement("ul");

const update = () => render(card(cats), ul);
update();

allCatsSection.replaceChildren(ul);

allCatsSection.addEventListener("click", toggle);
cats.forEach((cat) => (cat.info = false));
function toggle(event) {
  if (event.target.tagName != "BUTTON") return;
  let elementId = event.target.parentNode.querySelector(".status").id;
  let cat = cats.find((cat) => cat.id == elementId);
  cat.info = !cat.info;
  update();
}
