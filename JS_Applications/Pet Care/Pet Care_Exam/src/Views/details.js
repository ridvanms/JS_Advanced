import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import {
  createDonation,
  getDonations,
  getUserDonation,
} from "../data/donations.js";
import * as offer from "../data/offers.js";
import { getUserData } from "../util.js";

const detailsTemplate = (data, onDelete, onDonate) => html`
  <section id="detailsPage">
    <div class="details">
      <div class="animalPic">
        <img src=${data.image} />
      </div>
      <div>
        <div class="animalInfo">
          <h1>Name: ${data.name}</h1>
          <h3>Breed: ${data.breed}</h3>
          <h4>Age: ${data.age}</h4>
          <h4>Weight: ${data.weight}</h4>
          <h4 class="donation">Donation: ${data.donations}$</h4>
        </div>

        ${data.isOwner || data.canDonate
          ? html`<div class="actionBtn">
              ${data.isOwner
                ? html`<a href="/edit/${data._id}" class="edit">Edit</a>
                    <a
                      @click=${onDelete}
                      href="javascript:void(0)"
                      class="remove"
                      >Delete</a
                    >`
                : html`${data.canDonate
                    ? html` <a
                        @click=${onDonate}
                        href="javascript:void(0)"
                        class="donate"
                        >Donate</a
                      >`
                    : nothing}`}
            </div>`
          : nothing}
      </div>
    </div>
  </section>
`;

// <a @click=${onDelete} href="javascript:void(0)" id="delete-btn"
export async function detailsPage(ctx) {
  const id = ctx.params.id;
  const userData = getUserData();

  const requests = [offer.getById(id), getDonations(id)];
  if (userData) requests.push(getUserDonation(id, userData._id));

  const [form, donations, hasDonated] = await Promise.all(requests);
  form.donations = donations * 100;

  if (userData) {
    form.isOwner = userData._id == form._ownerId;
    form.canDonate = hasDonated == 0;
  }

  ctx.render(detailsTemplate(form, onDelete, onDonate));

  async function onDelete() {
    const choice = confirm("Are you sure?");
    if (choice) await offer.deletePet(id);
    ctx.page.redirect("/catalog");
  }

  async function onDonate() {
    await createDonation(id);
    ctx.page.redirect(`/details/${id}`);
  }
}
