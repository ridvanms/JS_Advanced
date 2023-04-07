import { html } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../data/service.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (data, onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Fruit</h2>
      <form @submit=${onEdit} class="edit-form">
        <input
          .value=${data.name}
          type="text"
          name="name"
          id="name"
          placeholder="Fruit Name"
        />
        <input
          .value=${data.imageUrl}
          type="text"
          name="imageUrl"
          id="Fruit-image"
          placeholder="Fruit Image URL"
        />
        <textarea
          .value=${data.description}
          id="fruit-description"
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"
        ></textarea>
        <textarea
          .value=${data.nutrition}
          id="fruit-nutrition"
          name="nutrition"
          placeholder="Nutrition"
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;
export async function editPage(ctx) {
  const id = ctx.params.id;
  const form = await service.getById(id);

  ctx.render(editTemplate(form, createSubmitHandler(onEdit)));

  function onEdit(data) {
    const { name, imageUrl, description, nutrition } = data;
    if ([name, imageUrl, description, nutrition].some((f) => f == ""))
      return alert("All fields are required!");
    service.update(id, data);
    ctx.page.redirect(`/details/${id}`);
  }
}
