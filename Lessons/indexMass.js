const weightDenys = 77,
    heightDenys = 1.86,
    weightPetr = 72,
    heightPetr = 1.88;

let indexDenys,
    indexPetr,
    result;

indexDenys = weightDenys / heightDenys ** 2;
indexPetr = weightPetr / heightPetr ** 2;

console.log('Індекс маси:')
console.log('Denys: ', indexDenys);
console.log('Petr: ', indexPetr);

result = indexDenys < indexPetr;
console.log('Індекс Дениса менше за Петра ', Boolean(result));
result = indexPetr < indexDenys;
console.log('Індекс Петра менше за Дениса ', Boolean(result));
