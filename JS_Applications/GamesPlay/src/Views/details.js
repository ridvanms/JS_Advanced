import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import {
  createDonation,
  getDonations,
  getUserDonation,
} from "../data/donations.js";
import * as offer from "../data/offers.js";
import { getUserData } from "../util.js";

const detailsTemplate = (data, onDelete, onDonate) => html`
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

      <!-- Bonus ( for Guests and Users ) -->
      <div class="details-comments">
        <h2>Comments:</h2>
        <ul>
          // TODO -
        </ul>
        <!-- Display paragraph: If there are no games in the database -->
        <p class="no-comment">No comments.</p>
      </div>

      <!-- Edit/Delete buttons ( Only for creator of this game )  -->
      <div class="buttons">
        <a href="/edit/${data._id}" class="button">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="button"
          >Delete</a
        >
      </div>
    </div>
  </section>
`;
const commentsTemplate = (content) => html`<li class="comment">
  <p>Content: ${content}</p>
</li>`;

// <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const userData = getUserData();

  let requests = [offer.getById(id), getDonations(id)];
  if (userData) requests.push(getUserDonation(id, userData._id));

  const [form, donations, hasDonated] = await Promise.all(requests);
  form.donations = donations * 100;

  if (userData) {
    form.isOwner = userData._id == form._ownerId;
    form.canDonate = hasDonated == 0;
  }

  function update() {
    ctx.render(detailsTemplate(form, onDelete, onDonate));
  }
  update();

  async function onDelete() {
    const choice = confirm("Are you sure?");
    if (choice) {
      await offer.deletePet(id);
      ctx.page.redirect("/catalog");
    }
  }

  async function onDonate() {
    await createDonation(id);
    form.donations += 100;
    form.canDonate = false;
    update();
  }
}
