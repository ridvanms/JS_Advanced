import { html } from "../../node_modules/lit-html/lit-html.js";
import { getById, updateMusics } from "../data/musics.js";
import { createSubmitHandler } from "../util.js";

// TODO Replace with actual view

const editTemplate = (offer, onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Album</h2>
      <form @submit=${onEdit} class="edit-form">
        <input
          .value=${offer.singer}
          type="text"
          name="singer"
          id="album-singer"
          placeholder="Singer/Band"
        />
        <input
          .value=${offer.album}
          type="text"
          name="album"
          id="album-album"
          placeholder="Album"
        />
        <input
          .value=${offer.imageUrl}
          type="text"
          name="imageUrl"
          id="album-img"
          placeholder="Image url"
        />
        <input
          .value=${offer.release}
          type="text"
          name="release"
          id="album-release"
          placeholder="Release date"
        />
        <input
          .value=${offer.label}
          type="text"
          name="label"
          id="album-label"
          placeholder="Label"
        />
        <input
          .value=${offer.sales}
          type="text"
          name="sales"
          id="album-sales"
          placeholder="Sales"
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function editPage(ctx) {
  const id = ctx.params.id;

  const offer = await getById(id);

  ctx.render(editTemplate(offer, createSubmitHandler(onEdit)));

  async function onEdit(
    { singer, album, imageUrl, release, label, sales },
    form
  ) {
    if ([singer, album, imageUrl, release, label, sales].some((f) => f == "")) {
      return alert("All fields are required!");
    }
    await updateMusics(id, { singer, album, imageUrl, release, label, sales });
    form.reset();

    ctx.page.redirect("/catalog/" + id);
  }
}
