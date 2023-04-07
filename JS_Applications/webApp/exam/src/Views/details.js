import { html, nothing } from "../../node_modules/lit-html/lit-html.js";

import * as service from "../data/service.js";
import { getUserData } from "../util.js";

const detailsTemplate = (data, onDelete) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${data.imageUrl} alt="example1" />
      <p id="details-title">${data.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>${data.description}</p>
          <p id="nutrition">Nutrition</p>
          <p id="details-nutrition">${data.nutrition}</p>
        </div>

        ${data.isOwner
          ? html`<div id="action-buttons">
              <a href="/edit/${data._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
                >Delete</a
              >
            </div>`
          : nothing}
      </div>
    </div>
  </section>
`;

export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const userData = getUserData();
  const form = await service.getById(id);

  if (userData) {
    form.isOwner = userData._id == form._ownerId;
  }

  ctx.render(detailsTemplate(form, onDelete));

  async function onDelete() {
    const choice = confirm("Are you sure?");
    if (choice) {
      await service.deleteFruit(id);
      ctx.page.redirect("/catalog");
    }
  }
}
