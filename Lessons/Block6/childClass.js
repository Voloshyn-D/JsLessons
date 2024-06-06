"use strict";
/* 

ЗАДАЧА:
1.Используй функцию конструктор чтобы создать электор автомобиль(ElectroCar), который будет дочерним классом автомобиля. Помимо свойств марки(mark) и скорости(speed), у дочернего класса электро автомобиля, создайте свойство уровня заряда батареи(charge).
2.Создайте метод зарядки электро автомобиля, у которого будет параметр (chargeTo) который при вызове этого метода, будет менять уровень заряда в свойствах электро автомобиля.
3. Создайте метод ускорения(accelerate) который будет увеличивать скорость на 20км\ч и уменьшать уровень заряда авто на 1%. И выводить сообщение: "Tesla едет со скоростью 120км\ч, с уровнем заряда 22%"
4.Создайте экземпляр дочернего класса и поэкспериментируйте с вызовом методов.

ДАННЫЕ из прошлой практики:
*/

const Car = function (mark, speed) {
  this.mark = mark;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.mark} Їде зі швидкістю: ${this.speed} км/г`);
};
Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.mark} Їде зі швидкістю: ${this.speed} км/г`);
};

function ElectroCar(mark, speed, charge) {
  Car.call(this, mark, speed);
  this.charge = charge;
};
ElectroCar.prototype = Object.create(Car.prototype);//батьківські методи Car

const tesla = new ElectroCar("tesla", 240, 30);
//tesla.accelerate();
//tesla.break();

ElectroCar.prototype.chargeTo = function (chargeLevel) {
  this.charge = chargeLevel;
  console.log(`Рівень заряду у ${this.mark}: ${this.charge}%`);
};

ElectroCar.prototype.accelerate20 = function () {
  if (this.charge <= 0) return this.speed = 0;
  this.charge = this.charge - 1;
  this.speed += 20;
  console.log(`${this.mark} Їде зі швидкістю: ${this.speed} км/г, заряд батареї ${this.charge}%`);
};

//tesla.chargeTo(0);
//tesla.accelerate20();

function newElectroCar(mark, speed, charge, weight) {
  ElectroCar.call(this, mark, speed, charge);
  //this.weight = weight;
}

newElectroCar.prototype = Object.create(ElectroCar.prototype);

const bmw = new newElectroCar("BMW", 240, 65);
bmw.accelerate20();
bmw.accelerate();
bmw.break();
console.log(bmw);



