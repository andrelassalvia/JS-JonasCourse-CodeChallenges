"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Knabry",
      "Lewandovski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witzel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandovski", "Knabry", "Lewandovski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
1. Create one player array for each team (variables 'players1' and 'players2'
DESTRUCTURING ARRAYS
*/
const [player1, player2] = game.players;
console.log(player1);
console.log(player2);

/*
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field player
DESTRUCTURING ARRAYS
*/
const [gk1, ...playersField1] = player1;
console.log(gk1, playersField1);

/*
3. Create an array 'allPlayers' containing all players of both teams (22
  players)
  */
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

/*
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
*/
const player1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(player1Final);

/*5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2'
*/
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

/*6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in*/

function printGoals(...scored) {
  console.log(`${scored.length} goals were scored`);
}
printGoals(...game.scored);

/*
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
*/
// team1 < team2 && console.log(`Team 1 is more likely to win.`);
// team1 > team2 && console.log(`Team 2 is more likely to win.`);

/*
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski"
*/

const entryData = game.scored.entries();

for (const [gol, player] of entryData) {
  console.log(`Goal ${gol + 1}: ${player}`);
}
/*
2. Use a loop to calculate the average odd and log it to the console (We already 
  studied how to calculate averages, you can go check if you don't remember)
  */

const chances = Object.values(game.odds);
const count = chances.length;
console.log(count);
let sum = 0;
for (const value of chances) {
  sum += value;
}
const avg = sum / count;
console.log(avg);

/*
Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 
*/

const results = Object.entries(game.odds);
for (const [time, chance] of results) {
  const teamStr = time === "x" ? "draw" : `victory ${game[time]}`;
  console.log(`Odd of ${teamStr}: ${chance}`);
}

/*
Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
*/
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
