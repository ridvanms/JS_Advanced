import { clearUserData, getUserData } from "../util.js";

const HOST = "http://localhost:3030";

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };

  const userData = getUserData();
  if (userData) {
    const token = userData.accessToken;
    options.headers["X-Authorization"] = token;
  }

  if (data !== undefined) {
    options.headers["Content-Type"] = "Application/json";
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(HOST + url, options);

    let result;
    if (response.status != 204) {
      result = await response.json();
    }
    if (response.ok == false) {
      if (response.status === 403) {
        clearUserData();
      }
      const error = result;
      throw error;
    }
    return result;
  } catch (err) {
    alert(`Error: ${err.message}`);
    console.log("Error", err);
  }
}
export const get = request.bind(null, "get");
export const post = request.bind(null, "post");
export const put = request.bind(null, "put");
export const del = request.bind(null, "delete");
