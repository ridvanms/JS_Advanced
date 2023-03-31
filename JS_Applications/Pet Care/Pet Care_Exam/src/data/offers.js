import { get, post, put, del } from "./api.js";

const endpoints = {
  all: "/data/pets?sortBy=_createdOn%20desc&distinct=name",
  byId: "/data/pets/",
};

export async function getAll() {
  return get(endpoints.all);
}
export async function getById(id) {
  return get(endpoints.byId + id);
}
export async function create(data) {
  return post(endpoints.all, data);
}
export async function update(id, data) {
  return put(endpoints.byId + id, data);
}
export async function deletePet(id) {
  return del(endpoints.byId + id);
}
