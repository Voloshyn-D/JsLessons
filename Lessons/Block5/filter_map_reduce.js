"use strict";
/*
ЗАДАЧИ:

Создайте функцию calcAverageHumanAge которая будет принимать в себя массив с годами собак и будет делать с этими данными следующее:

1. Пересчитайте собачий возраст, в возраст человека по формуле: 
если возраст собаки меньше или равен 2 годам, то человеческий возраст = 2 * возраст собаки. Если собаке больше 2-х лет то человеческий возраст = 16 + собачий возраст * 4

2.Вычислите всех собак которым больше либо равно 18 человеческих лет.

3. Вычислите среднее значение возраста всех взрослых собак в пересчете на человеческие года.

4.Запустите функцию для двух массивов данных:
*/

const dogs1 = [5, 2, 4, 1, 15, 8, 3];
const dogs2 = [16, 6, 10, 5, 6, 1, 4];
/*
function ageCalc(ageArr) {
    const ageHumen = ageArr.map(function (age) {
        if (age <= 2) return age * 2
        else return 16 + age * 4
    })
    return ageHumen;
}
const age = ageCalc(dogs1);
console.log(age);

let filterAge = age.filter((ageDog) => ageDog >= 18)
console.log(filterAge);

const sum = filterAge.reduce((sum, val) => sum + val)
console.log(sum / filterAge.length);
*/
function ageCalc(ageArr) {
    const ageHumen = ageArr.map(function (age) {
        if (age <= 2) return age * 2
        else return 16 + age * 4
    })

    const filterAge = ageHumen.filter((ageDog) => ageDog >= 18);
    const sum = filterAge.reduce((sum, val) => sum + val)

    console.log(ageHumen);
    console.log(filterAge);
    console.log(sum / filterAge.length);
}
ageCalc(dogs1)
ageCalc(dogs2)
ageCalc([...dogs1, ...dogs2])