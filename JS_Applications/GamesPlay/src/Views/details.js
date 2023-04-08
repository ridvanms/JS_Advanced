import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as comments from "../data/comments.js";
import * as offer from "../data/offers.js";
import { createSubmitHandler, getUserData } from "../util.js";

const detailsTemplate = (data, onDelete, onComment, userName) => html`
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src=${data.imageUrl} />
        <h1>${data.title}</h1>
        <span class="levels">MaxLevel: ${data.maxLevel}</span>
        <p class="type">${data.category}</p>
      </div>

      <p class="text">${data.summary}</p>
      ${data.isOwner
        ? html`<div class="buttons">
            <a href="/edit/${data._id}" class="button">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button"
              >Delete</a
            >
          </div>`
        : nothing}
      ${data.hasUser && !data.isOwner
        ? html`<article class="create-comment">
            <label>Add new comment:</label>
            <form @submit=${onComment} class="form">
              <textarea name="comment" placeholder="Comment......"></textarea>
              <input class="btn submit" type="submit" value="Add Comment" />
            </form>
          </article>`
        : nothing}

      <div class="details-comments">
        ${data.comments.length
          ? html`<h2>Comments:</h2>
              <ul>
                ${data.comments.map((c) => commentsTemplate(c))}
              </ul>`
          : html`<p class="no-comment">No comments.</p>`}
      </div>
    </div>
  </section>
`;
const commentsTemplate = ({ comment }) => html`<li class="comment">
  <p>Content: ${comment}</p>
</li>`;

// <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const userData = getUserData();
  const form = await offer.getById(id);

  if (userData) {
    form.isOwner = userData._id == form._ownerId;
  }
  form.hasUser = Boolean(userData);
  form.comments = await comments.getComments(id);

  async function onComment({ comment }) {
    await comments.createComment({ gameId: id, comment });
    document.getElementsByName("comment")[0].value = "";
    ctx.page.redirect(`/details/${id}`);
  }

  ctx.render(detailsTemplate(form, onDelete, createSubmitHandler(onComment)));

  async function onDelete() {
    const choice = confirm("Are you sure?");
    if (choice) {
      await offer.deletePet(id);
      ctx.page.redirect("/catalog");
    }
  }
}
