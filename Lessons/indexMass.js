const weightDenys = 82;
const heightDenys = 1.73;
const weightPetr = 72;
const heightPetr = 1.88;

let resultDenys;
let resultPetr;
let result;

resultDenys = weightDenys / heightDenys ** 2;
resultPetr = weightPetr / heightPetr ** 2;

console.log('Denys: ', resultDenys);
console.log('Petr: ', resultPetr);

result = resultDenys < resultPetr;
console.log('Індекс Дениса менше за Петра ', Boolean(result));
result = resultPetr < resultDenys;
console.log('Індекс Петра менше за Дениса ', Boolean(result));
