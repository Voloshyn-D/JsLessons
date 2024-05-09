"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
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
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/* -------------------------------- №1 ------------------------------------

//1.Создайте отдельные массивы игроков каждой команды. (Переменные pleayersTeamOne и pleayersTeamTwo)
const [pleayersTeamOne, pleayersTeamTwo] = game.players;
//const { players: [pleayersTeamOne, pleayersTeamTwo] } = game; //так теж буде працювати
console.log(`перша команда ${pleayersTeamOne}`);
console.log(`друга команда ${pleayersTeamTwo}`);
*/

/* -------------------------------- №2 ------------------------------------

//2. Первый игрок в каждом массиве - это вратарь, остальные игроки это просто члены команды. Для первых игроков каждой команды, создайте переменную goalKeeper, а для всех остальных fieldPlayers.

const { players: [pleayersTeamOne, pleayersTeamTwo] } = game;
const [goalKeeper, ...fieldPlayers] = pleayersTeamOne;
console.log(`Воротар першої команди: ${goalKeeper}`);
console.log(`Члени першої команди: ${fieldPlayers}`);

const [goalKeeper2, ...fieldPlayers2] = pleayersTeamTwo;
console.log(`Воротар другої команди: ${goalKeeper2}`);
console.log(`Члени другої команди: ${fieldPlayers2}`);
*/
/*
const [goalKeeper, ...fieldPlayers] = game.players[0];
console.log(`Воротар першої команди: ${goalKeeper}`);
console.log(`Члени першої команди: ${fieldPlayers}`);
*/
/* ------------------------------ №3 №4 ------------------------------------

//3.Создайте один массив allPlayers который будет содержать всех игроков обеих команд.
//4.Добавьте в массив allPlayers еще 3-х игроков. (Имена игроков придумайте сами)
const { players: [pleayersTeamOne, pleayersTeamTwo] } = game;
const allPlayers = [...pleayersTeamOne, ...pleayersTeamTwo, "Den", "Sergey", "Anna"];
console.log(allPlayers);
*/

/* -------------------------------- №5 ------------------------------------

5. В объекте game есть объект odds, внутри которого три свойства:
team1: 1.33,
x: 3.25,
team2: 6.5.
С помощью деструктуризации объекта, создайте 3 переменные из этого объекта. При создании переменных,
let team1 = 1.33,
let x = 3.25,
let team2 = 6.5
поменяйте имя свойства x на draw.*/


let { team1, x: draw, team2 } = game.odds;
console.log(draw);


