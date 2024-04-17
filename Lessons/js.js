const firstName = prompt("Напишіть перше ім'я");
const secondName = prompt("Напишіть друге ім'я");

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

//alert("Сумістнісь імен " + firstName + " + " + secondName + " = " + randomNumber + "%");
alert(`Сумістнісь імен ${firstName} + ${secondName} = ${randomNumber}%`);
