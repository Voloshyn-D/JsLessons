"use strict";

const audio = new Audio("audio/Mountain Audio - Menu Click.mp3");
const audioWin = new Audio("audio/huge win.wav");
const arrBox = document.querySelectorAll(".boxes__box");
let newArrBox;


for (const value of arrBox) {
    value.addEventListener("click", () => {
        if (value.previousElementSibling != null) {
            value.previousElementSibling.before(value);
            audio.play();
            newArrBox = document.querySelectorAll(".boxes__box");
        } else {
            value.nextElementSibling.after(value);
            audio.play();
            newArrBox = document.querySelectorAll(".boxes__box");
        }
        if (newArrBox[0].classList.contains("box_a") &&
            newArrBox[1].classList.contains("box_b") &&
            newArrBox[2].classList.contains("box_c") &&
            newArrBox[3].classList.contains("box_d") &&
            newArrBox[4].classList.contains("box_e") &&
            newArrBox[5].classList.contains("box_f")) {
            audioWin.play();
        }
    })
}
