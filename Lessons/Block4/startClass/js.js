"use strict";

let i = 0;

class Card {
    constructor(srs, alt, price, oldPrice, type, descr, parent) {
        this.srs = srs;
        this.alt = alt;
        this.price = price;
        this.oldPrice = oldPrice;
        this.type = type;
        this.descr = descr;
        this.parent = parent;
        this.sale = Math.floor(this.price / this.oldPrice * 100 - 100);
    }
    reder() {
        document.querySelector(this.parent).insertAdjacentHTML("beforeend",
            `
        <div class="card">
            <img class="card__img" src="${this.srs}" alt="${this.alt}" />
            <div class="card__sale">${this.sale}%</div>
            <div class="card__price">
            ${this.price}<span class="card__old-Price"> <s>${this.oldPrice}</s> </span>
            </div>
            <div class="card__type">${this.type}</div>
            <div class="card__descr">${this.descr}</div>
          </div>
         `
        )
    }
}

document.querySelector(".btn").addEventListener("click", function () {
    i++;
    if (i >= 6) { i = 0; }
    new Card(
        `img/tv-${i + 1}.png`,
        "tv",
        27999,
        90999,
        "Стара колекція",
        "щось супер круте?",
        ".cards"
    ).reder();

})

/*
let copyOfCard = new Card(
    "img/tv-2.png",
    "tv",
    18800,
    28500,
    "Стара колекція",
    "гіпер дупер супер",
    ".cards"
);
copyOfCard.reder();
*/
