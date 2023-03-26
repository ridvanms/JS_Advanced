import { html } from "../../node_modules/lit-html/lit-html.js";

//TODO - Replace with actual layout
export const layoutTemplate = (userData, content) => html`
  <header>
    <!-- Navigation -->
    <a id="logo" href="/"
      ><img id="logo-img" src="./images/logo.png" alt=""
    /></a>
    <nav>
      <div>
        <a href="/catalog">Dashboard</a>
      </div>
      <!-- Logged-in users -->
      ${userData
        ? html`<div class="user">
            <a href="/addAlbum">Add Album</a>
            <a href="/Logout">Logout</a>
          </div>`
        : html`<div class="guest">
            <a href="/Login">Login</a>
            <a href="/Register">Register</a>
          </div>`}
    </nav>
  </header>
  <main>${content}</main>
`;
