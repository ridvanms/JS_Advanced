import { get, post, put, del } from "./api.js";

const endpoints = {
  allGames: "/data/games?sortBy=_createdOn%20desc",
  byId: "/data/games/",
  createGame: "/data/games",
  newGames: "/data/games?sortBy=_createdOn%20desc&distinct=category",
};

export async function getAllGames() {
  return get(endpoints.allGames);
}
export async function getNewGames() {
  return get(endpoints.newGames);
}
export async function getById(id) {
  return get(endpoints.byId + id);
}
export async function create(data) {
  return post(endpoints.createGame, data);
}

export async function update(id, data) {
  return put(endpoints.byId + id, data);
}
export async function deletePet(id) {
  return del(endpoints.byId + id);
}
