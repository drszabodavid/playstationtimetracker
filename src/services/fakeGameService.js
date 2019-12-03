import axios from 'axios';



//
//
// let games = [
//   {
//     gameplayCompletionist: 91,
//     gameplayMain: 35,
//     gameplayMainExtra: 62,
//     id: "36936",
//     imageUrl: "https://howlongtobeat.com/gameimages/36936_Nioh.jpg",
//     name: "Nioh",
//     liked: true,
//     completed: false,
//     timeSpent: 3,
//     get remainingTime() {
//       return this.gameplayMain - this.timeSpent > 0 ? this.gameplayMain - this.timeSpent : 0;
//     }
//   },
//   {
//     gameplayCompletionist: 34.5,
//     gameplayMain: 11.5,
//     gameplayMainExtra: 82.5,
//     id: "62935",
//     imageUrl: "https://howlongtobeat.com/gameimages/62935_The_Outer_Worlds.jpg",
//     name: "The Outer Worlds",
//     liked: true,
//     completed: false,
//     timeSpent: 0,
//     get remainingTime() {
//         return this.gameplayMain - this.timeSpent > 0 ? this.gameplayMain - this.timeSpent : 0;
//     }
//   },
//   {
//     gameplayCompletionist: 11,
//     gameplayMain: 5.5,
//     gameplayMainExtra: 10.5,
//     id: "60145",
//     imageUrl:
//       "https://howlongtobeat.com/gameimages/50087_Nioh_-_Bloodsheds_End_DLC.jpg",
//     name: "Nioh - Bloodshed's End DLC",
//     liked: false,
//     completed: true,
//     timeSpent: 3,
//     get remainingTime() {
//         return this.gameplayMain - this.timeSpent > 0 ? this.gameplayMain - this.timeSpent : 0;
//     }
//   },
//   {
//     gameplayCompletionist: 9.5,
//     gameplayMain: 3,
//     gameplayMainExtra: 5,
//     id: "7230",
//     imageUrl:
//       "https://howlongtobeat.com/gameimages/256px-Portal_standalonebox.jpg",
//     name: "Portal",
//     liked: false,
//     timeSpent: 0,
//     completed: false,
//     get remainingTime() {
//         return this.gameplayMain - this.timeSpent > 0 ? this.gameplayMain - this.timeSpent : 0;
//     }
//   },
//   {
//     gameplayCompletionist: 20.5,
//     gameplayMain: 11.5,
//     gameplayMainExtra: 15.5,
//     id: "10469",
//     imageUrl: "https://howlongtobeat.com/gameimages/256px-Tr2011cover.jpg",
//     name: "Tomb Raider (2013)",
//     liked: false,
//     completed: false,
//     timeSpent: 0,
//     get remainingTime() {
//         return this.gameplayMain - this.timeSpent > 0 ? this.gameplayMain - this.timeSpent : 0;
//     }
//   },
//   {
//     gameplayCompletionist: 35,
//     gameplayMain: 11.5,
//     gameplayMainExtra: 18,
//     id: "2708",
//     imageUrl: "https://howlongtobeat.com/gameimages/doom_2016.jpg",
//     name: "Doom (2016)",
//     liked: false,
//     completed: false,
//     timeSpent: 0,
//     get remainingTime() {
//         return this.gameplayMain - this.timeSpent > 0 ? this.gameplayMain - this.timeSpent : 0;
//     }
//   },
//   {
//     gameplayCompletionist: 155,
//     gameplayMain: 46.5,
//     gameplayMainExtra: 75.5,
//     id: "27100",
//     imageUrl:
//       "https://howlongtobeat.com/gameimages/46360_Nioh_-_Dragon_of_the_north_DLC.jpg",
//     name: "Red Dead Redemption 2",
//     liked: false,
//     completed: false,
//     timeSpent: 3,
//     get remainingTime() {
//         return this.gameplayMain - this.timeSpent > 0 ? this.gameplayMain - this.timeSpent : 0;
//     }
//   },
//   {
//     gameplayCompletionist: 22.5,
//     gameplayMain: 9,
//     gameplayMainExtra: 11.5,
//     id: "20737",
//     imageUrl: "https://howlongtobeat.com/gameimages/Metro2033Redux_292x136.jpg",
//     name: "Metro 2033 Redux",
//     liked: false,
//     completed: false,
//     timeSpent: 0,
//     get remainingTime() {
//         return this.gameplayMain - this.timeSpent > 0 ? this.gameplayMain - this.timeSpent : 0;
//     }
//   },
//   {
//     gameplayCompletionist: 50.5,
//     gameplayMain: 20.5,
//     gameplayMainExtra: 31,
//     id: "38050",
//     imageUrl:
//       "https://howlongtobeat.com/gameimages/46360_Nioh_-_Dragon_of_the_north_DLC.jpg",
//     name: "God of War (2018)",
//
//     liked: false,
//     completed: false,
//     timeSpent: 0,
//     get remainingTime() {
//         return this.gameplayMain - this.timeSpent > 0 ? this.gameplayMain - this.timeSpent : 0;
//     }
//   },
//   {
//     gameplayCompletionist: 51.5,
//     gameplayMain: 24,
//     gameplayMainExtra: 36.5,
//     id: "26286",
//     imageUrl:
//       "https://howlongtobeat.com/gameimages/Hollow_Knight_collection_branding.jpg",
//     name: "Hollow Knight",
//
//     liked: false,
//     completed: false,
//     timeSpent: 0,
//     get remainingTime() {
//         return this.gameplayMain - this.timeSpent > 0 ? this.gameplayMain - this.timeSpent : 0;
//     }
//   }
// ];
export function getGames(userId) {
    return axios.get(`http://localhost:8080/${userId}/games`);
}

export function getGame(id) {
    // return games.find(g => g.id === id);
}

export function saveGame(game) {

    console.log(game);

    let gameToSave = {
        "UserId" : 2,
        "id" : game["id"],
        "imageUrl" : game["imageUrl"],
        "name" : game["name"],
        "gameplayCompletionist" : game["gameplayCompletionist"],
        "gameplayMain" : game["gameplayMain"],
        "gameplayMainExtra" : game["gameplayMainExtra"],
    }

    console.log(gameToSave)

    axios.post("http://localhost:8080/games/save", gameToSave)
        .then(response => {
            if (response.status === 200) {
                console.log(game);
            } else {
                throw new Error("Error");
            }
        }).catch(error => {
        console.log(error)
    });
}

export function updatePlayTime(game, time) {
    // time = time * 10000;
    // let hour = Math.floor(time / 1000 / 60 / 60);
    // let gameToChange = games.find(g => g.id === game.id);
    // console.log(hour);
    //
    // gameToChange.timeSpent += hour;
}

export function deleteGame(id) {
    // let gameInDb = games.find(g => g.id === id);
    // games.splice(games.indexOf(gameInDb), 1);
    // return gameInDb;
}
