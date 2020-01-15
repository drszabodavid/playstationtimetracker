import http from "./httpService";

export function getGames(userId) {
  return http.get(`/games/${userId}`);
}

export function getGame(id) {
  // return games.find(g => g.id === id);
}

export function saveGame(game) {
  let gameToSave = {
    UserId: localStorage.getItem("userId"),
    id: game["id"],
    imageUrl: game["imageUrl"],
    name: game["name"],
    gameplayCompletionist: game["gameplayCompletionist"],
    gameplayMain: game["gameplayMain"],
    gameplayMainExtra: game["gameplayMainExtra"]
  };

  http.post("/games/save", gameToSave);
}

export function updatePlayTime(game, timeToSave) {
  let timeScored = timeToSave * 10000;
  let hour = Math.floor(timeScored / 1000 / 60 / 60);
  let data = {
    gameId: game["id"],
    time: hour
  };
  http.post("/games/update", data);
}

export function completeGame(game) {
  let selectedGameId = game["id"];
  http.post(`/games/complete/${selectedGameId}`);
}

export function starGame(game) {
  let selectedGameId = game["id"];
  http.post(`/games/star/${selectedGameId}`);
}

export function deleteGame(selectedGame) {
  let selectedGameId = selectedGame["id"];
  http.post(`/games/${selectedGameId}`);
}
