const firsName = "John"
const lastName = "Travolta"

function calcAge(){
    return 2023 - this.birthYear
}

const userFirst = {               
    firsName,
    lastName,
    birthYear: 1999,
    calcAge
}

const userSecond = {               //this = user
    firsName,
    lastName,
    birthYear: 1924,
    calcAge
}

console.log(userFirst.calcAge())
console.log(userSecond.calcAge())
