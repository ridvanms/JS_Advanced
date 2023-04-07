import { get, post } from "./api.js";

const endpoints = {
  getByQuery: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`,
};

export function searchByText(searchText) {
  const query = encodeURIComponent(searchText);
  return get(endpoints.getByQuery(query));
}
