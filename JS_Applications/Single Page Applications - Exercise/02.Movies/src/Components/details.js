import { showView } from "./util.js";
import { spinner } from "./home.js";

const section = document.querySelector("#add-movie");

export function detailsPage(id) {
  showView(section);
  displayMovie(id);
}

async function displayMovie(id) {
  section.innerHTML = spinner();

  const user = JSON.parse(localStorage.getItem("user"));
  const [movie, likes, ownLikes] = await Promise.all([
    getMovie(id),
    getLikes(id),
    getOwnLike(id, user),
  ]);

  section.replaceChildren(movieDetail(movie, user, likes, ownLikes));
}

function movieDetail(movie, user, likes, ownLikes) {
  const el = document.createElement("div");
  el.classList.add("container");
  el.innerHTML = `
    <div class="row bg-light text-dark">
        <h1>${movie.title}</h1>

        <div class="col-md-8">
            <img
            class="img-thumbnail"
            src="${movie.img}"
            alt="Movie"
            />
        </div>
        <div class="col-md-4 text-center">
            <h3 class="my-3">Movie Description</h3>
            <p>
            ${movie.description}
            </p>${createControl(movie, user, likes, ownLikes)}
        </div>
    </div>
    `;
  const likeBtn = el.querySelector(".likeBtn");

  if (likeBtn) {
    likeBtn.addEventListener("click", (e) => likeMovie(e, movie._id, user));
  }
  return el;
}
function createControl(movie, user, likes, ownLikes) {
  const isOwner = user && user._id === movie._ownerId;

  let controls = [];
  if (isOwner) {
    controls.push(`<a class="btn btn-danger" href="#">Delete</a>`);
    controls.push(`<a class="btn btn-warning" href="#">Edit</a>`);
  } else if (user && ownLikes == false) {
    controls.push(`<a class="btn btn-primary likeBtn" href="#">Like</a>`);
  }
  controls.push(`<span class="enrolled-span">Liked: ${likes}</span>`);
  return controls.join("");
}

async function getMovie(id) {
  const res = await fetch(`http://localhost:3030/data/movies/${id}`);
  const movie = await res.json();

  return movie;
}
async function getLikes(id) {
  const res = await fetch(
    `http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`
  );
  const likes = await res.json();

  return likes;
}
async function getOwnLike(movieId, user) {
  if (!user) return false;

  const userId = user._id;
  const res = await fetch(
    `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`
  );
  const like = await res.json();

  return like.length > 0;
}

async function likeMovie(e, movieId, user) {
  e.preventDefault();

  await fetch(`http://localhost:3030/data/likes`, {
    method: "post",
    headers: {
      "content-type": "application/json",
      "x-authorization": user.accessToken,
    },
    body: JSON.stringify({ movieId }),
  });
  detailsPage(movieId);
}
