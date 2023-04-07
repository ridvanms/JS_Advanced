import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../data/service.js";
const catalogTemplate = (data) => html`
  <h2>Fruits</h2>
  ${data.length
    ? html` <section id="dashboard">${data.map(fruitTemplate)}</section>`
    : html`${data ? html`<h2>No fruit info yet.</h2>` : nothing}`}
`;
const fruitTemplate = (data) => html`
  <div class="fruit">
    <img src=${data.imageUrl} alt="example1" />
    <h3 class="title">${data.name}</h3>
    <p class="description">${data.description}</p>
    <a class="details-btn" href="/details/${data._id}">More Info</a>
  </div>
`;
export async function fruitPage(ctx) {
  const form = await service.getAll();
  ctx.render(catalogTemplate(form));
}
