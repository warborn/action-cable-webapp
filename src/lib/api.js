import { saveItem, getToken, removeItem } from "../lib/local-storage";

const API_URL = process.env.REACT_APP_API_URL;

const request = (endpoint, options) =>
  fetch(`${API_URL}${endpoint}`, {
    ...options,
    mode: "cors",
    headers: {
      ...options.headers,
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: getToken(),
    },
  });

const commitLogin = (response) => {
  if (response.status === 200) {
    saveItem("Authorization", response.headers.get("Authorization"));
  }

  return response;
};

const commitLogout = (response) => {
  if (response.status === 204) {
    removeItem("Authorization");
  }

  return response;
};

const post = async (endpoint, payload) =>
  request(endpoint, {
    method: "POST",
    body: JSON.stringify(payload),
  });

const get = async (endpoint) =>
  request(endpoint, {
    method: "GET",
  });

const deleteRequest = async (endpoint) =>
  request(endpoint, { method: "DELETE" });

const login = (payload) => {
  return post("/login", payload)
    .then(commitLogin)
    .then((response) => response.json());
};

const logout = () => {
  return deleteRequest("/logout").then(commitLogout);
};

export default {
  get,
  post,
  login,
  logout,
};
