import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllMusics } from "../data/musics.js";

const dashboardTemplate = (musics) => html`
  <section id="dashboard">
    ${musics.length > 0
      ? html`<h2>Albums</h2>
          <ul class="card-wrapper">
            ${musics.map(cardTemplate)}
          </ul>`
      : html`<h2>There are no albums added yet.</h2>`}
  </section>
`;

const cardTemplate = (music) => html`<li class="card">
  <img src="${music.imageUrl}" alt="travis" />
  <p>
    <strong>Singer/Band: </strong><span class="singer">${music.singer}</span>
  </p>
  <p><strong>Album name: </strong><span class="album">${music.album}</span></p>
  <p><strong>Sales:</strong><span class="sales">${music.sales}</span></p>
  <a class="details-btn" href="/catalog/${music._id}">Details</a>
</li>`;

export async function dashboardPage(ctx) {
  const musics = await getAllMusics();

  ctx.render(dashboardTemplate(musics));
}
