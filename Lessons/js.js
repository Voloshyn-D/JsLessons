const firstName = prompt("Напишіть перше ім'я");
const secondName = prompt("Напишіть друге ім'я");

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

//alert("Сумістнісь імен " + firstName + " + " + secondName + " = " + randomNumber + "%");
//alert(`Сумістнісь імен ${firstName} + ${secondName} = ${randomNumber}%`);

if (randomNumber < 33) {
    alert(`Результат сумістності імен ${firstName} і ${secondName} дорівнює
${randomNumber}% спробуйте пошукати інше ім'я`)
}
else if (randomNumber >= 33 && randomNumber < 66) {
    alert(`Результат сумістності імен ${firstName} і ${secondName} дорівнює
${randomNumber}% сумістність хороша але може бути краще`)
}
else if (randomNumber > 66) {
    alert(`Результат сумістності імен ${firstName} і ${secondName} дорівнює
${randomNumber}% Ідеальна сумістність`)
}
else { alert("Error") }
