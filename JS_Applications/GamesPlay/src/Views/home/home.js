import { html } from "../../../node_modules/lit-html/lit-html.js";
import { getNewGames } from "../../data/offers.js";

const homeTemplate = (cards) => html`
  <section @no id="welcome-world">
    <div
      class="welcome-message animate__animated animate__lightSpeedInRight animate__delay-1s"
    >
      <h2>ALL new games are</h2>
      <h3>Only in GamesPlay</h3>
    </div>
    <img
      class="animate__animated animate__zoomInDown"
      src="./images/four_slider_img01.png"
      alt="hero"
    />
    <div id="home-page">
      <h1>Latest Games</h1>
      ${cards.length
        ? html` ${cards.map((c) => cardTemplate(c))}`
        : html`<p class="no-articles">No games yet</p>`}
    </div>
  </section>
`;
const showLatestGames = (cards) => html`
  <div id="home-page">
    <h1>Latest Games</h1>
    ${cards.length
      ? html` ${cards.map((c) => cardTemplate(c))}`
      : html`<p class="no-articles">No games yet</p>`}
  </div>
`;
const cardTemplate = (card) => html`
  <div class="game ">
    <div class="image-wrap">
      <img src=${card.imageUrl} />
    </div>
    <h3>${card.title}</h3>
    <div class="rating">
      <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
    <div class="data-buttons">
      <a href="/details/${card._id}" class="btn details-btn">Details</a>
    </div>
  </div>
`;
export async function homePage(ctx) {
  const form = await getNewGames();

  ctx.render(homeTemplate(form));
}
