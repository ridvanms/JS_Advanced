import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import * as service from "../data/service.js";
import { searchByText } from "../data/searchService.js";
import { createSubmitHandler, getUserData } from "../util.js";

const searchTemplate = (data, onSearch) => html`
  <section id="search">
    <div class="form">
      <h2>Search</h2>
      <form @submit=${onSearch} class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">
      ${data.length
        ? html`${data.map(fruitTemplate)}`
        : html`<p class="no-result">No result.</p>`}

      <!--If there are matches display a div with information about every fruit-->
    </div>
  </section>
`;

const fruitTemplate = (fruit) => html`
  <div class="fruit">
    <img src=${fruit.imageUrl} alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/details/${fruit._id}">More Info</a>
  </div>
`;

export async function searchPage(ctx) {
  let form = await service.getAll();
  function update() {
    ctx.render(searchTemplate(form, createSubmitHandler(onSearch)));
  }
  update();
  async function onSearch({ search }) {
    if (search == "") return alert("the field need to be filled");
    form = await searchByText(search);
    update();
  }
}
