import { html } from "../../node_modules/lit-html/lit-html.js";
import * as pets from "../data/offers.js";
const catalogTemplate = (cards) => html`<section id="dashboard">
  <h2 class="dashboard-title">Services for every animal</h2>
  <div class="animals-dashboard">
    ${cards.length
      ? html`${cards.map(cardTemplate)}`
      : html`<div>
          <p class="no-pets">No pets in dashboard</p>
        </div>`}
  </div>
</section>`;
const cardTemplate = (card) => html`
  <div class="animals-board">
    <article class="service-img">
      <img class="animal-image-cover" src=${card.image} />
    </article>
    <h2 class="name">${card.name}</h2>
    <h3 class="breed">${card.breed}</h3>
    <div class="action">
      <a class="btn" href="/details/${card._id}">Details</a>
    </div>
  </div>
`;
export async function catalogPage(ctx) {
  const form = await pets.getAll();
  ctx.render(catalogTemplate(form));
}
