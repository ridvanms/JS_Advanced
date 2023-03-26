import { get, post, put, del } from "./api.js";

const endpoints = {
  musics: "/data/albums?sortBy=_createdOn%20desc",
  byId: "/data/albums/",
};

export async function getAllMusics() {
  return get(endpoints.musics);
}
export async function getById(id) {
  return get(endpoints.byId + id);
}
export async function createMusic(data) {
  return post(endpoints.musics, data);
}
export async function updateMusics(id, data) {
  return put(endpoints.byId + id, data);
}
export async function deleteMusic(id) {
  return del(endpoints.byId + id);
}
