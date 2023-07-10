import { get, post } from "./api.js";

const endpoints = {
  allGameComments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
  addComment: `/data/comments`,
};

export async function createComment(data) {
  return post(endpoints.addComment, data);
}
export async function getComments(gameId) {
  return get(endpoints.allGameComments(gameId));
}
