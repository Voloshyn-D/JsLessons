"use strict";

/*
ЗАДАЧИ:

1) Создайте массив уникальных событий "events"(события), которые произошли в игре, за все время матча.
2) После окончания матча оказалось что выдача желтой карточки на 64-ой минуте матча была ошибочка. Удалите это свойство из Map.
3) Подсчитайте среднее время появления событий с учетом того что матч идет 90 минут. Напишите результат в консоль: (Пример: Событие в этом матче, появлялось в среднем, раз в 5 мин.)
4) Переберите Map, чтобы получить в консоль результат, какие события матча происходили в первой половине и какие во второй. Результат вывода в консоли должен быть таким:
[ПЕРВАЯ ПОЛОВИНА] 17: GOAL
[ПЕРВАЯ ПОЛОВИНА] 36: Substitution ... и так далее

*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//const events = [...new Set(gameEvents.values())];
//console.log(events);

//gameEvents.delete(64);
//console.log(gameEvents);

/*
const events = [...gameEvents.values()];
let goal = 0;
for (let value of events) {
  if (value == "⚽️ GOAL") {
    goal++
  }
}
console.log(Math.floor(90 / goal));
*/

for (let [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[ПЕРША ПОЛОВИНА] ${key}: ${value}`);
  }
  else if (key > 45 && key <= 90) {
    console.log(`[ДРУГА ПОЛОВИНА] ${key}: ${value}`);
  }
  else console.log(`Матч тривав на ${key - 90} хв більше, сталася подія: ${value}`);
}
/*
for (let [min, value] of gameEvents) {               // Теж саме але набагато компактніше
  const half = min <= 45 ? "[ПЕРША ПОЛОВИНА]" : "[ДРУГА ПОЛОВИНА]";
  console.log(`${half} ${min}: ${value}`);
}*/