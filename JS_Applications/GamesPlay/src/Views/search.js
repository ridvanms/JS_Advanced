import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getAllGames } from "../data/offers.js";

import { searchByText } from "../data/searchService.js";
import { createSubmitHandler, getUserData } from "../util.js";

const searchTemplate = (onSearch, user, cards) => html`
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
            ${cards.map((c) => cardTemplate(c, user))}
          </ul>`
        : html`<h2>"There are no results found."</h2> `}
    </div>
  </section>
`;

const cardTemplate = (card, user) => html`<li class="card">
  <img src=${card.imageUrl} alt="travis" />
  <p><strong>Brand: </strong><span class="brand">${card.brand}</span></p>
  <p><strong>Model: </strong><span class="model">${card.model}</span></p>
  <p><strong>Value:</strong><span class="value">${card.value}</span>$</p>
  ${user
    ? html`<a class="details-btn" href="/details/${card._id}">Details</a>`
    : nothing}
</li>`;

export async function searchPage(ctx) {
  let form = await getAllGames();
  const userData = getUserData();
  function update() {
    ctx.render(searchTemplate(createSubmitHandler(onSearch), userData, form));
  }
  update();
  async function onSearch({ search }) {
    if (search == "") return;
    form = await searchByText(search);
    update();
  }
}
