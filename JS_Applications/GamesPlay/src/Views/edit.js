import { html } from "../../node_modules/lit-html/lit-html.js";
import * as pet from "../data/offers.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (data, onEdit) => html`
  <section id="edit-page" class="auth">
    <form @submit=${onEdit} id="edit">
      <div class="container">
        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" .value=${data.title} />

        <label for="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          .value=${data.category}
        />

        <label for="levels">MaxLevel:</label>
        <input
          type="number"
          id="maxLevel"
          name="maxLevel"
          min="1"
          .value=${data.maxLevel}
        />

        <label for="game-img">Image:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          .value=${data.imageUrl}
        />

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary" .value=${data.summary}></textarea>
        <input class="btn submit" type="submit" value="Edit Game" />
      </div>
    </form>
  </section>
`;
export async function editPage(ctx) {
  const id = ctx.params.id;
  const form = await pet.getById(id);

  ctx.render(editTemplate(form, createSubmitHandler(onEdit)));

  function onEdit(data) {
    const { title, category, maxLevel, imageUrl, summary } = data;
    if ([title, category, maxLevel, imageUrl, summary].some((f) => f == ""))
      return alert("All fields are required!");
    pet.update(id, data);
    ctx.page.redirect(`/details/${id}`);
  }
}
