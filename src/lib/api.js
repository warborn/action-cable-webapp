import { saveItem, getItem } from "../lib/local-storage";

const API_URL = "http://localhost:3000";

const request = (endpoint, options) => fetch(`${API_URL}${endpoint}`, options);

const commitLogin = (response) => {
  if (response.status === 200) {
    saveItem("Authorization", response.headers.get("Authorization"));
  }

  return response;
};

const post = async (endpoint, payload) => {
  return request(endpoint, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: getItem("Authorization"),
    },
  });
};

const login = (payload) => {
  return post("/login", payload)
    .then(commitLogin)
    .then((response) => response.json());
};

export default {
  post,
  login,
};
