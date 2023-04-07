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

export async function catalogPage(ctx) {
  const form = await pets.getAll();
  ctx.render(catalogTemplate(form));
}
