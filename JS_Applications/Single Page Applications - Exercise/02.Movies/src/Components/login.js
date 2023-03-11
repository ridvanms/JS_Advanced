import { showView, updateNav } from "./util.js";
import { homePage } from "./home.js";

const loginSection = document.querySelector("#form-login");
const form = loginSection.querySelector("form");
form.addEventListener("submit", onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  await login(email, password);
  updateNav();
  homePage();
}

async function login(email, password) {
  const loginUrl = `http://localhost:3030/users/login`;
  try {
    const res = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const user = await res.json();
    localStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    alert("Opps! Wrong email or password");
    throw err;
  }
}

export function loginPage() {
  showView(loginSection);
}
