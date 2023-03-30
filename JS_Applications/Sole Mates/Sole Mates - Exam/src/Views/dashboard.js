import { html } from "../../node_modules/lit-html/lit-html.js";
import * as offers from "../data/offers.js";
const catalogTemplate = (cards) => html` <section id="dashboard">
  <h2>Collectibles</h2>
  <ul class="card-wrapper">
    ${cards.map(cardTemplate)}
  </ul>

  <!-- Display an h2 if there are no posts -->
  <h2>There are no items added yet.</h2>
</section>`;
const cardTemplate = (card) => html`
  <li class="card">
    <img src=${card.imageUrl} alt="eminem" />
    <p><strong>Brand: </strong><span class="brand">${card.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${card.model}</span></p>
    <p><strong>Value:</strong><span class="value">${card.value}</span>$</p>
    <a class="details-btn" href="/details/${card._id}">Details</a>
  </li>
`;
export async function catalogPage(ctx) {
  const form = await offers.getAllShoes();
  ctx.render(catalogTemplate(form));
}
