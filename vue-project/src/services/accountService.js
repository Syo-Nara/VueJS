import Axios from "./callerService";

let login = (credentials) => {
  return Axios.post("/auth/login", credentials);
};

let signup = (credentials) => {
  return Axios.post("/auth/signup", credentials);
};

let logout = () => {
  localStorage.removeItem("token");
};

let getToken = () => {
  return localStorage.getItem("token");
};

let saveToken = (token) => {
  localStorage.setItem("token", token);
};

let isLogged = () => {
  let token = localStorage.getItem("token");
  return !!token;
};

export const accountService = {
  login,
  logout,
  saveToken,
  getToken,
  isLogged,
  signup,
};
