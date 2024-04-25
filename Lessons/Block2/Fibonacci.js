'use strict'

const arrResult = []

const fibonacciNumber = (n) => {
    let outputArr = []

    if (n === 1) {
        outputArr.push(0)
    } else if (n === 2) {
        outputArr = [0, 1]
    } else if (n > 2) {
        outputArr = [0, 1]
        for (let i = 2; i < n; i++) {
            outputArr.push(outputArr.at(-1) + outputArr.at(-2))
        }
    }else outputArr = ["Error"]
    return outputArr
}

//fibonacciNumber(0)
console.log(`Послідовність Фібоначи наступна: ${fibonacciNumber(100)}`)
