import http from "./httpService";

const apiEndpoint = "/games";


export function getGames() {
    return http.get(apiEndpoint);
  }