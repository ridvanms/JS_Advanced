import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as offer from "../data/offers.js";
import { getUserData } from "../util.js";

// TODO Replace with actual view
const detailsTemplate = (data, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Shoe Details</p>
      <div id="img-wrapper">
        <img src=${data.imageUrl} alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>Brand: <span id="details-brand">${data.brand}</span></p>
        <p>Model: <span id="details-model">${data.model}</span></p>
        <p>Release date: <span id="details-release">${data.release}</span></p>
        <p>Designer: <span id="details-designer">${data.designer}</span></p>
        <p>Value: <span id="details-value">${data.value}</span></p>
      </div>

      <!--Edit and Delete are only for creator-->
      ${data.isOwner
        ? html`
            <div id="action-buttons">
              <a href="/edit/${data._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >
            </div>
          `
        : nothing}
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const form = await offer.getById(id);

  const user = getUserData();
  if (user) {
    form.isOwner = user._id == form._ownerId;
  }

  ctx.render(detailsTemplate(form, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure?");
    if (choice) await offer.deleteShoes(id);
    ctx.page.redirect("/catalog");
  }
}
