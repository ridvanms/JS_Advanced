import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as musics from "../data/musics.js";
import { getUserData } from "../util.js";

const detailsTemplate = (offer, onDelete) => html`<section id="details">
  <div id="details-wrapper">
    <p id="details-title">${offer.details}</p>
    <div id="img-wrapper"><img src=${offer.imageUrl} alt="example1" /></div>
    <div id="info-wrapper">
      <p>
        <strong>Band:</strong><span id="details-singer">${offer.singer}</span>
      </p>
      <p>
        <strong>Album name:</strong
        ><span id="details-album">${offer.album}</span>
      </p>
      <p>
        <strong>Release date:</strong
        ><span id="details-release">${offer.release}</span>
      </p>
      <p>
        <strong>Label:</strong><span id="details-label">${offer.label}</span>
      </p>
      <p>
        <strong>Sales:</strong><span id="details-sales">${offer.sales}</span>
      </p>
    </div>
    <div id="likes">Likes: <span id="likes-count">0</span></div>

    <!--Edit and Delete are only for creator-->
    <div id="action-buttons">
      ${offer.canEdit
        ? html`<a href="/catalog/${offer._id}/edit" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
              >Delete</a
            >`
        : offer.hasApplicant
        ? html`<a href="" id="like-btn">Like</a>`
        : nothing}
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;

  const offer = await musics.getById(id);

  const userData = getUserData();

  userData ? (offer.hasApplicant = true) : (offer.hasApplicant = false);

  if (userData && userData._id == offer._ownerId) offer.canEdit = true;

  ctx.render(detailsTemplate(offer, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure?");
    if (choice) {
      await musics.deleteMusic(id);
      ctx.page.redirect("/catalog");
    }
  }
}
1