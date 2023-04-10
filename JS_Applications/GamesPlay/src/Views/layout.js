import { html } from "../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (userData, content) => html`
  <header id="head" >
            <h1><a class=" animate__animated animate__backInLeft animate__delay-1s" href="/">GamesPlay</a></h1>
            <nav>
                <a href="/catalog">All games</a>
                ${
                  userData
                    ? html`
                        <a href="/create">Create Game</a>
                        <a href="/logout">Logout</a>
                      `
                    : html`
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                      `
                }
            </nav>
        </header>
    <main id="main-content">${content}</main>
  </header>
`;
