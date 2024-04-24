'use strict'

/*
let i = 100

do {
    console.log(`message ${i}`)
    i++
} while (i <= 10)
*/

let someNumber = Math.floor(Math.random() * 10) 

while (someNumber !== 10) {
    console.log(`рандомне число = ${someNumber}`)
    someNumber = Math.floor(Math.random() * 10) +1
    if (someNumber === 10) {
        console.log("Win number = 10")
    }
}

