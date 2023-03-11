const views = [...document.querySelectorAll(".view-section")];

function hideAll() {
  views.forEach((v) => (v.style.display = "none"));
}

export function showView(section) {
  hideAll();
  section.style.display = "block";
}

export function updateNav() {
  const user = JSON.parse(localStorage.getItem("user"));
  const welcomeMsgContainer = document.querySelector("#welcome-msg");
  if (user) {
    document
      .querySelectorAll(".user")
      .forEach((u) => (u.style.display = "inline"));
    document
      .querySelectorAll(".guest")
      .forEach((g) => (g.style.display = "none"));
    welcomeMsgContainer.textContent = `Welcome ${user.email}`;
  } else {
    document
      .querySelectorAll(".user")
      .forEach((u) => (u.style.display = "none"));
    document
      .querySelectorAll(".guest")
      .forEach((g) => (g.style.display = "inline"));
    welcomeMsgContainer.textContent = ``;
  }
}
  