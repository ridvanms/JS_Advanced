import { html } from "../../node_modules/lit-html/lit-html.js";
import * as games from "../data/offers.js";
const catalogTemplate = (cards) => html`
  <section id="catalog-page">
    <h1>All Games</h1>
    ${cards.length
      ? html`${cards.map(cardTemplate)}`
      : html`<h3 class="no-articles">No articles yet</h3>`}
  </section>
`;

const cardTemplate = (data) => html`
  <div class="allGames">
    <div class="allGames-info">
      <img src=${data.imageUrl} />
      <h6>${data.category}</h6>
      <h2>${data.title}</h2>
      <a href="/details/${data._id}" class="details-button">Details</a>
    </div>
  </div>
`;

export async function catalogPage(ctx) {
  const form = await games.getAllGames();
  function refreshPage() {
    var page_y = document.getElementsByTagName("body")[0].scrollTop;
    window.location.href =
      window.location.href.split("?")[0] + "?page_y=" + page_y;
  }
  window.onload = function () {
    setTimeout(refreshPage, 35000);
    if (window.location.href.indexOf("page_y") != -1) {
      var match = window.location.href.split("?")[1].split("&")[0].split("=");
      document.getElementsByTagName("body")[0].scrollTop = match[1];
    }
  };
  ctx.render(catalogTemplate(form));
}
