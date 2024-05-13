"use strict"

document.querySelector(".btn").addEventListener("click", function () {
    const arrWords = [];
    const resultArrWords = [];
    const dataTextarea = document.querySelector(".text").value;
    const newArrWords = dataTextarea.split("\n");
    const button = document.querySelector(".output");

    for (let i = 0; i < newArrWords.length; i++) {
        if (newArrWords[i] == "" || newArrWords[i].trim() == "") { continue }           // якщо немає слів пропускаємо
        arrWords.push(newArrWords[i].trim().toLocaleLowerCase().split("_"));
    }
    for (let i = 0; i < arrWords.length; i++) {
        const [firstWorld, secondWorld] = arrWords[i];
        resultArrWords.push(firstWorld + secondWorld[0].toLocaleUpperCase() + secondWorld.slice(1))
    }

    document.querySelector(".output").innerText = new String(resultArrWords).replaceAll(",", "\n");

})