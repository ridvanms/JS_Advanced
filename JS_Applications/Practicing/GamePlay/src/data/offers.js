import { get, post, put, del } from "./api.js";

const endpoints = {
  allGames: "/data/games?sortBy=_createdOn%20desc",
  byId: (id) => `/data/games/${id}`,
  createGame: "/data/games",
  newGames: "/data/games?sortBy=_createdOn%20desc&distinct=category",
};

export async function getAllGames() {
  return get(endpoints.allGames);
}
export async function getNewGame() {
  return get(endpoints.newGames);
}
export async function getById(id) {
  return get(endpoints.byId(id));
}
export async function create(data) {
  return post(endpoints.createGame, data);
}
export async function update(id, data) {
  return put(endpoints.byId(id), data);
}
export async function deleteGame(id) {
  return del(endpoints.byId(id));
}
