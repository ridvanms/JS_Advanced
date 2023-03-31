import { html } from "../../node_modules/lit-html/lit-html.js";
import * as pets from "../data/offers.js";
import { createSubmitHandler } from "../util.js";

// TODO Replace with actual view
const searchTemplate = (onSearch, cards) => html`
  <section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSearch} class="search-wrapper cf">
      <input
        id="#search-input"
        type="text"
        name="search"
        placeholder="Search here..."
        required
      />
      <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
      ${cards.length
        ? html`<ul class="card-wrapper">
            ${cards.map(searchCardsTemplate)}
          </ul>`
        : html`<h2>"There are no results found."</h2> `}
    </div>
  </section>
`;
const searchCardsTemplate = (card) => html`<li class="card">
  <img src=${card.imageUrl} alt="travis" />
  <p><strong>Brand: </strong><span class="brand">${card.brand}</span></p>
  <p><strong>Model: </strong><span class="model">${card.model}</span></p>
  <p><strong>Value:</strong><span class="value">${card.value}</span>$</p>
  <a class="details-btn" href="/details/${card._id}">Details</a>
</li>`;

export async function searchPage(ctx) {
  const form = await pets.getAll();
  ctx.render(searchTemplate(createSubmitHandler(onSearch), form));

  function onSearch() {}
}
