'use strict'

const arr2 = []

const arr = [
    "John",
    "Travolta",
    2024 - 1992,
    "UA",
    true,
    ["Anna", "Petr", "Den"],
    false
]
/*
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "string") {continue} 
    console.log(arr[i])
}
*/
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") break 
    console.log(arr[i])
}
/*
for (let i = 0; i < arr.length; i++) {
    console.log(typeof arr[i])
    arr2.push(typeof arr[i])
}

console.log(arr2)
*/
/*for (let i = 1; i <= 10; i++) {
    if (i > 1 && i <= 4) {
        console.log(`Это сообщение появилось ${i} раза`)
    }
    else console.log(`Это сообщение появилось ${i} раз`)
}*/