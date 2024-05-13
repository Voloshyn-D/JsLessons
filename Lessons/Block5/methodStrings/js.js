"use strict";

/*
ЗАДАЧИ:

Создайте программу которая будет преобразовывать переменные слова в которых разделены нижним тире, в переменные которые будут записанны в camelCase нотации.
/////////

Подсказки:
1) Решение должно работать с переменными из 2-х слов. Не больше
2)Чтобы получить строку введенных данных из textarea, можно получить значение свойства value, DOM элемента textarea
3) Практика сложная, поэтому если на чем то застряли, посмотрите решение проблемы и пробуйте дальше самостоятельно.
4)Записать результат вы можете в div с классом output, через innerText
5)  По итогу переменные должны выглядеть так: 
underscoreCase
firstName
someVariable
calculateAge
delayedDeparture

*/

document.querySelector(".btn").addEventListener("click", function () {
    const arrWords = [];
    const resultArrWords = [];
    const dataTextarea = document.querySelector(".text").value;
    const newArrWords = dataTextarea.split("\n");
    const button = document.querySelector(".output");

    for (let i = 0; i < newArrWords.length; i++) {
        if (newArrWords[i] == "" || newArrWords[i].trim() == "") { continue }           // якщо немає слів пропускаємо
        arrWords.push(newArrWords[i].trim().split("_").join(" ").toLocaleLowerCase());
        //trim() прибираю всі пробіли, split("_") join(" ") розділяю слово на 2 слова, преобразую всі літери в маленькі
        console.log(arrWords[i].slice(0, arrWords[i].indexOf(" ")));
    }

    for (let value of arrWords) {
        let firstWorld = value.slice(0, value.indexOf(" ")); //одержуємо перше слово
        let secondWorld = value.slice(value.lastIndexOf(" ") + 1);//одержуємо друге слово

        secondWorld = secondWorld[0].toLocaleUpperCase() + secondWorld.slice(1); //робимо першу букву заглавною
        resultArrWords.push(firstWorld + secondWorld);
    }

    button.innerText = new String(resultArrWords).replaceAll(",", "\n");

})
//console.log(newArrWords);

