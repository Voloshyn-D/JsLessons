"use strict";

let elemOutput = document.querySelector("div"); //отримуємо тег де будемо зберігати рандомне число
let elemButton = document.querySelector(".check"); // отримуємо тег кнопки "Перевірка!" за допомогою класа 
let elemButtonAgain = document.querySelector(".again");// Отримуємо тег кнопки "Знову" за допомогою класа
let elemInput = document.querySelector("input");// отримуємо тег input де будемо забирати число
let elemHeader = document.querySelector(".message");
let elemQuantity = document.querySelector(".score");
let elemRecord = document.querySelector(".highscore");
let elemBody = document.querySelector("body");


let attemp = 20;
let record;


function randomNumber() {
    let newNumber = Math.floor(Math.random() * 100);
    while (newNumber > 20) {
        newNumber = Math.floor(Math.random() * 100);
    }
    return newNumber;
}
let newNumber = randomNumber();

function resCheck() {
    let userNumber = Number(elemInput.value);
    if (userNumber == newNumber && attemp != false) {
        elemHeader.innerHTML = "Перемога 🏆";
        elemOutput.innerHTML = newNumber;
        //elemBody.style.background = "#60b347";
        elemBody.classList.add("newStyle")
        elemRecord.textContent = attemp;
        return attemp;
    } else if (userNumber < newNumber && attemp != false) {
        elemHeader.innerHTML = "Замало";
        attemp--;
        elemQuantity.textContent = attemp;
    } else if (userNumber > newNumber && attemp != false) {
        elemHeader.innerHTML = "Забагато";
        attemp--;
        elemQuantity.textContent = attemp;
    } else if (attemp == false) {
        elemQuantity.textContent = 0;
        elemHeader.innerHTML = "💥Ви програли💥";
    }
}

elemButton.addEventListener("click", () => { record = resCheck() })

elemButtonAgain.addEventListener("click", () => {
    attemp = 20;
    elemBody.classList.remove("newStyle")
    elemRecord.textContent = record;
    elemOutput.innerHTML = "?";
    elemHeader.textContent = "Почніть вгадувати...";
    newNumber = randomNumber();
    elemQuantity.textContent = attemp;
    elemInput.value = "";
})
console.log(newNumber);

