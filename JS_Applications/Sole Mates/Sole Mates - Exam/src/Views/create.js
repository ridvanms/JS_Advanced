import { html } from "../../node_modules/lit-html/lit-html.js";
import { createShoes } from "../data/offers.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (onCreate) => html` <section id="create">
  <div class="form">
    <h2>Add item</h2>
    <form @submit=${onCreate} class="create-form">
      <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
      <input type="text" name="model" id="shoe-model" placeholder="Model" />
      <input
        type="text"
        name="imageUrl"
        id="shoe-img"
        placeholder="Image url"
      />
      <input
        type="text"
        name="release"
        id="shoe-release"
        placeholder="Release date"
      />
      <input
        type="text"
        name="designer"
        id="shoe-designer"
        placeholder="Designer"
      />
      <input type="text" name="value" id="shoe-value" placeholder="Value" />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export const createPage = async (ctx) => {
  ctx.render(createTemplate(createSubmitHandler(onCreate)));

  async function onCreate(data) {
    const { brand, model, imageUrl, release, designer, value } = data;
    if ([brand, model, imageUrl, release, designer, value].some((f) => f == ""))
      return alert("All fields are required");
    await createShoes(data);
    ctx.page.redirect("/catalog");
  }

  //TODO use redirect location from requirements
};
