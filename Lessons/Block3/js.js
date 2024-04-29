'use strict'
/*
let header = document.querySelector(".header")
let navList = document.querySelector(".nav__list")

console.log(header.firstChild);
console.log(navList.childNodes);
*/
let elem = document.querySelector("h1")
let oldDate = elem.innerHTML;

//console.log(elem.innerHTML);

//elem.innerHTML = `<p>${oldDate}</p> <p>Hello! i am a new text</p>`
elem.outerHTML = `<p>Hello! I am a new text</p>`

console.log(elem.firstChild);

elem.firstChild.data = "I am a new comment"
