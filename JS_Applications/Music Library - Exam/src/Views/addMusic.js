import { html } from "../../node_modules/lit-html/lit-html.js";
import { createMusic } from "../data/musics.js";
import { createSubmitHandler } from "../util.js";

const addAlbumTemplate = (onAddMusic) => html` <section id="create">
  <div class="form">
    <h2>Add Album</h2>
    <form @submit=${onAddMusic} class="create-form">
      <input
        type="text"
        name="singer"
        id="album-singer"
        placeholder="Singer/Band"
      />
      <input type="text" name="album" id="album-album" placeholder="Album" />
      <input
        type="text"
        name="imageUrl"
        id="album-img"
        placeholder="Image url"
      />
      <input
        type="text"
        name="release"
        id="album-release"
        placeholder="Release date"
      />
      <input type="text" name="label" id="album-label" placeholder="Label" />
      <input type="text" name="sales" id="album-sales" placeholder="Sales" />

      <button type="submit">post</button>
    </form>
  </div>
</section>`;

export function addAlbumPage(ctx) {
  ctx.render(addAlbumTemplate(createSubmitHandler(onAddMusic)));

  async function onAddMusic({
    singer,
    album,
    imageUrl,
    release,
    label,
    sales,
  }) {
    if ([singer, album, imageUrl, release, label, sales].some((f) => f == "")) {
      return alert("All fields are required!");
    }
    await createMusic({
      singer,
      album,
      imageUrl,
      release,
      label,
      sales,
    });
    ctx.page.redirect("/catalog");
  }
}
