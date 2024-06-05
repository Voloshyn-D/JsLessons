"use strict"

class User {
    constructor(fullName, birthYear) {
        this.firstName;
        this.lastName;
        this.age;
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    get fullName() { return `${this.firstName} ${this.lastName}` }; //спочатку отримуємо firstName і lastName із seter
    set fullName(val) {
        if (val.length < 3) {
            console.log("Ім'я не коректне, спробуйте знову");
            return;
        }
        const name = val.split(" ");
        [this.firstName, this.lastName] = name;
    }
    get birthYear() { return new Date().getFullYear() - this.age }//cпочатку отримуємо age із seter 
    set birthYear(val) {
        if (val.length < 4 || val.length > 4) {
            console.log("Некоректні данні");
            return;
        };
        this.age = new Date().getFullYear() - val; //вираховуємо вік
    }
}

const anna = new User("Anna Kvitka", 1997);
console.log(anna);
console.log(anna.fullName);
console.log(anna.birthYear);