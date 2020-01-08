import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndpoint = "/validation/login";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(name, password) {
  const { data : jwt } = await http.post(apiEndpoint, { name, password });
  localStorage.setItem("userId", jwt.userId);
  localStorage.setItem(tokenKey, jwt.token);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem("userId");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt
};
