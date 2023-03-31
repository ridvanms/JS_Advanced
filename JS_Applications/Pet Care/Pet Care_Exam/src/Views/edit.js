import { html } from "../../node_modules/lit-html/lit-html.js";
import * as pet from "../data/offers.js";
import { createSubmitHandler } from "../util.js";
// TODO Replace with actual view
const editTemplate = (data, onEdit) => html`
  <section id="editPage">
    <form @submit=${onEdit} class="editForm">
      <img src=${data.image} />
      <div>
        <h2>Edit PetPal</h2>
        <div class="name">
          <label for="name">Name:</label>
          <input .value=${data.name} name="name" id="name" type="text" />
        </div>
        <div class="breed">
          <label for="breed">Breed:</label>
          <input .value=${data.breed} name="breed" id="breed" type="text" />
        </div>
        <div class="Age">
          <label for="age">Age:</label>
          <input name="age" id="age" type="text" .value=${data.age} />
        </div>
        <div class="weight">
          <label for="weight">Weight:</label>
          <input name="weight" id="weight" type="text" .value=${data.weight} />
        </div>
        <div class="image">
          <label for="image">Image:</label>
          <input name="image" id="image" type="text" .value=${data.image} />
        </div>
        <button class="btn" type="submit">Edit Pet</button>
      </div>
    </form>
  </section>
`;
export async function editPage(ctx) {
  const id = ctx.params.id;
  const form = await pet.getById(id);

  ctx.render(editTemplate(form, createSubmitHandler(onEdit)));

  function onEdit(data) {
    const { name, breed, age, weight, image } = data;
    if ([name, breed, age, weight, image].some((f) => f == ""))
      return alert("All fields are required!");
    pet.update(id, data);
    ctx.page.redirect(`/details/${id}`);
  }
}
