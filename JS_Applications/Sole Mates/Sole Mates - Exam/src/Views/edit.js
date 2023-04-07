import { html } from "../../node_modules/lit-html/lit-html.js";

import * as shoes from "../data/offers.js";
import { createSubmitHandler } from "../util.js";
// TODO Replace with actual view
const editTemplate = (data, onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit item</h2>
      <form @submit=${onEdit} class="edit-form">
        <input
          .value=${data.brand}
          type="text"
          name="brand"
          id="shoe-brand"
          placeholder="Brand"
        />
        <input
          .value=${data.model}
          type="text"
          name="model"
          id="shoe-model"
          placeholder="Model"
        />
        <input
          .value=${data.imageUrl}
          type="text"
          name="imageUrl"
          id="shoe-img"
          placeholder="Image url"
        />
        <input
          .value=${data.release}
          type="text"
          name="release"
          id="shoe-release"
          placeholder="Release date"
        />
        <input
          .value=${data.designer}
          type="text"
          name="designer"
          id="shoe-designer"
          placeholder="Designer"
        />
        <input
          .value=${data.value}
          type="text"
          name="value"
          id="shoe-value"
          placeholder="Value"
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;
export async function editPage(ctx) {
  const id = ctx.params.id;
  const form = await shoes.getById(id);

  ctx.render(editTemplate(form, createSubmitHandler(onEdit)));

  function onEdit(data) {
    const { brand, model, imageUrl, release, designer, value } = data;
    if ([brand, model, imageUrl, release, designer, value].some((f) => f == ""))
      return alert("All fields are required!");
    shoes.updateShoes(id, data);
    ctx.page.redirect(`/details/${id}`);
  }
}
