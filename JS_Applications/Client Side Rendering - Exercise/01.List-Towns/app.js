import { html, render } from "./node_modules/lit-html/lit-html.js";

let townsInput = document.getElementById("towns");
let root = document.getElementById("root");
document.getElementById("btnLoadTowns").addEventListener("click", onLoadTowns);

let townsTemplate = (data) => html`
  <ul>
    ${data.map((town) => html`<li>${town}</li>`)}
  </ul>
`;
function onLoadTowns(event) {
  event.preventDefault();
  if (!townsInput.value) return;

  let towns = townsInput.value.split(", ");
  if (!towns) towns = townsInput.value;
  console.log(towns);
  render(townsTemplate(towns), root);
}
