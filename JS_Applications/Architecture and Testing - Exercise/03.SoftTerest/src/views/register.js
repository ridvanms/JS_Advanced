import { register } from "../api/users.js";

const section = document.getElementById("registerPage");
const from = section.querySelector("form");
from.addEventListener("submit", onsubmit);

let ctx = null;

export function registerPage(context) {
  ctx = context;
  context.showSection(section);
}

async function onsubmit(event) {
  event.preventDefault();
  const formData = new formData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  await register(email, password);
  ctx.goTo("/");
}
