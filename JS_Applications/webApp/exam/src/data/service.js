import { get, post, put, del } from "./api.js";

const endpoints = {
  all: "/data/fruits?sortBy=_createdOn%20desc",
  byId: "/data/fruits/",
  createLink: "/data/fruits",
};

export async function getAll() {
  return get(endpoints.all);
}
export async function getById(id) {
  return get(endpoints.byId + id);
}
export async function create(data) {
  return post(endpoints.createLink, data);
}
export async function update(id, data) {
  return put(endpoints.byId + id, data);
}
export async function deleteFruit(id) {
  return del(endpoints.byId + id);
}
