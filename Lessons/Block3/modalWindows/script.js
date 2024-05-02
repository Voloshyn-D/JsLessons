"use strict";

let arrModalWindows = document.querySelectorAll(".show-modal");
let closeButton = document.querySelector(".close-modal");
let modalWindow = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

for (let value of arrModalWindows) {
    value.addEventListener("click", () => {
        modalWindow.classList.toggle("hidden");
        overlay.classList.toggle("hidden")
    })
}

closeButton.addEventListener("click", () => {
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden")
})

overlay.addEventListener("click", () => {
    modalWindow.classList.add("hidden");
    overlay.classList.add("hidden")
})

document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        modalWindow.classList.add("hidden");
        overlay.classList.add("hidden")
    }
})
