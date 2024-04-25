"use strict"
/*
let arr = [1, 2, 3, 4, 5]

for (let value of arr) { //только для масивов
    console.log(value);
}
*/
let obj = {
    name: "john",
    lasnName: "travolta",
    age: 30
}

for (let key in obj) { //желательно только для обьектов 
    console.log(key);
    console.log(obj[key]);
}

