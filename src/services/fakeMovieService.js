import * as genresAPI from "./fakeGenreService";

const games = [
  {
    gameplayCompletionist: 91,
    gameplayMain: 35,
    gameplayMainExtra: 62,
    id: "36936",
    imageUrl: "https://howlongtobeat.com/gameimages/36936_Nioh.jpg",
    name: "Nioh",
    similarity: 1,
    timeLabels: [
      ["gameplayMain", "Main Story"],
      ["gameplayMainExtra", "Main + Extra"],
      ["gameplayCompletionist", "Completionist"]
    ],
    liked: true,
    completed : false,
    timeSpent: 3,
    get remainingTime() {
      return this.gameplayMain - this.timeSpent;
    }
  },
  {
    gameplayCompletionist: 146,
    gameplayMain: 44.5,
    gameplayMainExtra: 82.5,
    id: "50419",
    imageUrl:
      "https://howlongtobeat.com/gameimages/50419_Nioh_Complete_Edition.jpg",
    name: "Nioh: Complete Edition",
    similarity: 0.18,
    timeLabels: [
      ["gameplayMain", "Main Story"],
      ["gameplayMainExtra", "Main + Extra"],
      ["gameplayCompletionist", "Completionist"]
    ],
    liked: true,
    completed : false,
    timeSpent: 3,
    get remainingTime() {
      return this.gameplayMain - this.timeSpent;
    }
  },
  {
    gameplayCompletionist: 11,
    gameplayMain: 5.5,
    gameplayMainExtra: 10.5,
    id: "50087",
    imageUrl:
      "https://howlongtobeat.com/gameimages/50087_Nioh_-_Bloodsheds_End_DLC.jpg",
    name: "Nioh - Bloodshed's End DLC",
    similarity: 0.15,
    timeLabels: [
      ["gameplayMain", "Main Story"],
      ["gameplayMainExtra", "Main + Extra"],
      ["gameplayCompletionist", "Completionist"]
    ],
    liked: false,
    completed : true,
    timeSpent: 3,
    get remainingTime() {
      return this.gameplayMain - this.timeSpent;
    }
  },
  {
    gameplayCompletionist: 11,
    gameplayMain: 5.5,
    gameplayMainExtra: 9.5,
    id: "1",
    imageUrl:
      "https://howlongtobeat.com/gameimages/47796_Nioh_-_Defiant_Honor_DLC.jpg",
    name: "Nioh - Defiant Honor DLC",
    similarity: 0.17,
    timeLabels: [
      ["gameplayMain", "Main Story"],
      ["gameplayMainExtra", "Main + Extra"],
      ["gameplayCompletionist", "Completionist"]
    ],
    liked: false,
    timeSpent: 3,
    completed : true,
    get remainingTime() {
      return this.gameplayMain - this.timeSpent;
    }
  },
  {
    gameplayCompletionist: 11,
    gameplayMain: 8.5,
    gameplayMainExtra: 9.5,
    id: "2",
    imageUrl:
      "https://howlongtobeat.com/gameimages/46360_Nioh_-_Dragon_of_the_north_DLC.jpg",
    name: "Nioh - Dragon of the North DLC",
    similarity: 0.13,
    timeLabels: [
      ["gameplayMain", "Main Story"],
      ["gameplayMainExtra", "Main + Extra"],
      ["gameplayCompletionist", "Completionist"]
    ],
    liked: false,
    completed : false,
    timeSpent: 3,
    get remainingTime() {
      return this.gameplayMain - this.timeSpent;
    }
  },
  {
    gameplayCompletionist: 11,
    gameplayMain: 8.5,
    gameplayMainExtra: 9.5,
    id: "3",
    imageUrl:
      "https://howlongtobeat.com/gameimages/46360_Nioh_-_Dragon_of_the_north_DLC.jpg",
    name: "Nioh - Dragon of the North DLC",
    similarity: 0.13,
    timeLabels: [
      ["gameplayMain", "Main Story"],
      ["gameplayMainExtra", "Main + Extra"],
      ["gameplayCompletionist", "Completionist"]
    ],
    liked: false,
    completed : false,
    timeSpent: 3,
    get remainingTime() {
      return this.gameplayMain - this.timeSpent;
    }
  },
  {
    gameplayCompletionist: 11,
    gameplayMain: 8.5,
    gameplayMainExtra: 9.5,
    id: "4",
    imageUrl:
      "https://howlongtobeat.com/gameimages/46360_Nioh_-_Dragon_of_the_north_DLC.jpg",
    name: "Nioh - Dragon of the North DLC",
    similarity: 0.13,
    timeLabels: [
      ["gameplayMain", "Main Story"],
      ["gameplayMainExtra", "Main + Extra"],
      ["gameplayCompletionist", "Completionist"]
    ],
    liked: false,
    completed : false,
    timeSpent: 3,
    get remainingTime() {
      return this.gameplayMain - this.timeSpent;
    }
  },
  {
    gameplayCompletionist: 11,
    gameplayMain: 8.5,
    gameplayMainExtra: 9.5,
    id: "5",
    imageUrl:
      "https://howlongtobeat.com/gameimages/46360_Nioh_-_Dragon_of_the_north_DLC.jpg",
    name: "Nioh - Dragon of the North DLC",
    similarity: 0.13,
    timeLabels: [
      ["gameplayMain", "Main Story"],
      ["gameplayMainExtra", "Main + Extra"],
      ["gameplayCompletionist", "Completionist"]
    ],
    liked: false,
    completed : false,
    timeSpent: 3,
    get remainingTime() {
      return this.gameplayMain - this.timeSpent;
    }
  },
  {
    gameplayCompletionist: 11,
    gameplayMain: 8.5,
    gameplayMainExtra: 9.5,
    id: "6",
    imageUrl:
      "https://howlongtobeat.com/gameimages/46360_Nioh_-_Dragon_of_the_north_DLC.jpg",
    name: "Nioh - Dragon of the North DLC",
    similarity: 0.13,
    timeLabels: [
      ["gameplayMain", "Main Story"],
      ["gameplayMainExtra", "Main + Extra"],
      ["gameplayCompletionist", "Completionist"]
    ],
    liked: false,
    completed : false,
    timeSpent: 3,
    get remainingTime() {
      return this.gameplayMain - this.timeSpent;
    }
  },
  {
    gameplayCompletionist: 11,
    gameplayMain: 8.5,
    gameplayMainExtra: 9.5,
    id: "7",
    imageUrl:
      "https://howlongtobeat.com/gameimages/46360_Nioh_-_Dragon_of_the_north_DLC.jpg",
    name: "Nioh - Dragon of the North DLC",
    similarity: 0.13,
    timeLabels: [
      ["gameplayMain", "Main Story"],
      ["gameplayMainExtra", "Main + Extra"],
      ["gameplayCompletionist", "Completionist"]
    ],
    liked: false,
    completed : false,
    timeSpent: 3,
    get remainingTime() {
      return this.gameplayMain - this.timeSpent;
    }
  }
];

export function getGames() {
  return games;
}

export function getGame(id) {
  return games.find(g => g.id === id);
}

// export function saveGame(game) {
//   let gameInDb = games.find(m => game.id === game.id) || {};
//   gameInDb.name = movie.name;
//   gameInDb.genre = genresAPI.genres.find(g => game.id === game.genreId);
//   gameInDb.numberInStock = movie.numberInStock;
//   gameInDb.dailyRentalRate = movie.dailyRentalRate;

//   if (!movieInDb.id) {
//     movieInDb._id = Date.now();
//     movies.push(movieInDb);
//   }

//   return movieInDb;
// }

export function deleteGame(id) {
  let gameInDb = games.find(g => g.id === id);
  games.splice(games.indexOf(gameInDb), 1);
  return gameInDb;
}
