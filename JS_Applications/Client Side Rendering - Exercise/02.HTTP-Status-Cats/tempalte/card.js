import { html } from "../node_modules/lit-html/lit-html.js";
import { styleMap } from "../node_modules/lit-html/directives/style-map.js";
export const card = (cats) => {
  return cats.map((cat) => {
    return html`
      <li>
        <img
          src="./images/${cat.imageLocation}.jpg"
          width="250"
          height="250"
          alt="Card image cap"
        />
        <div class="info">
          <button class="showBtn">
            ${cat.info ? "Hide" : "Show"} status code
          </button>
          <div
            class="status"
            style=${styleMap(
              cat.info ? { display: "block" } : { display: "none" }
            )}
            id="${cat.id}"
          >
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
          </div>
        </div>
      </li>
    `;
  });
};
