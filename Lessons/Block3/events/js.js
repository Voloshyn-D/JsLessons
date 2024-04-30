"use strict";

const elem = document.querySelector(".box_1");
const audio = new Audio("audio/Mountain Audio - Menu Click.mp3");

const elems = document.querySelectorAll(".boxes__box");

for (let value of elems) {
  value.addEventListener("click", () => {
    value.classList.add("newStyle");
    audio.play();
  });
}
