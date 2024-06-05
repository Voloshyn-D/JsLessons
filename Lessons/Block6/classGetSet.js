"use strict";
/* 
ЗАДАЧА:
1.Переделайте функцию конструктор, которую мы создали в прошлой практике в синтаксис класса.
2.С помощью свойства get создайте скорость в км\час пересчитанную из мили\ч (1 миля равна 1.6км) 
3.С помощью set присвойте значение переменной speedUS скорость в км\ч. (Формула: скорость в милях\ч деленные на 1.6)
4.Запустите методы ускорения и торможения, которые мы создали в прошлой практике.

ДАННЫЕ из прошлой практики:

const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.mark} едедет со скоростью ${this.speed} км\ч`);
};

ПОДСКАЗКА:
В классе, создайте свойство this.speedUS но не присваивайте ему значение, которые получают свойства из параметров конструктора. speedUS должно считаться посредствам сеттера и геттера.

*/

class Car {
  constructor(mark, speed) {
    this.mark = mark;
    this.speed = speed;
    this.spedUp;
  }
  get speed() { return this.spedUp * 1.6 }
  set speed(speed) { this.spedUp = speed / 1.6; }
  accelerate() {
    this.speed += 10;
    console.log(`${this.mark} їде зі швидкістю: ${this.speed} км\ч`);
  };
  break() {
    this.speed -= 5;
    console.log(`${this.mark} їде зі швидкістю: ${this.speed} км\ч`);
  };
}

const lada = new Car("Lada", 90);
const skoda = new Car("Skoda", 75);

lada.accelerate();
skoda.break();
console.log(lada);
console.log(skoda);

//console.log(skoda.kmSpeed);
