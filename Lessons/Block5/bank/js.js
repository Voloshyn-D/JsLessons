"use strict";

const account1 = {
  owner: "Dmitrii Fokeev",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  pin: 1111,
};

const account2 = {
  owner: "Anna Filimonova",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 2222,
};

const account3 = {
  owner: "Polina Filimonova",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 3333,
};

const account4 = {
  owner: "Stanislav Ivanchenko",
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//Вивід на сторінку всіх зарахувань та зняття 
function displayMovements(movements, sort = false) {
  containerMovements.innerHTML = "";
  const move = sort ? movements.slice().sort((a, b) => a - b) : movements;
  move.forEach(function (value, i) {
    const text = value < 0 ? "зняття" : "зарахування";
    const type = value < 0 ? "withdrawal" : "deposit";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i + 1} ${text}
      </div>
      <div class="movements__date">3 дні тому</div>
      <div class="movements__value">${value}₴</div>
    </div>
  
      `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

//Створення логіну з ПІБ в об'єкті
function createLogIn(accs) {
  accs.forEach(function (acc) {
    acc.logIn = acc.owner
      .toLowerCase()
      .split(" ")
      .map((val) => val[0])
      .join("");
  });
  return accs;
}
console.log(createLogIn(accounts));

//Розрахунок поточного балансу аккаунта
function clcBalance(acc) {
  acc.balance = acc.movements.reduce(function (acc, val) {
    return acc + val;
  })
  labelBalance.innerText = acc.balance + "₴";
}

//розрахунок та вивід в нижню панель суми приходу, відправлення та доступної суми коштів
function infoBalance(movements) {
  const sumIn = movements
    .filter((value) => value > 0)
    .reduce((sum, val) => sum + val);
  labelSumIn.innerText = sumIn + "₴";

  const sumOut = movements
    .filter((value) => value < 0)
    .reduce((sum, val) => sum + val);
  labelSumOut.innerText = Math.abs(sumOut) + "₴"; // прибрав знак мінус 

  labelSumInterest.innerText = (sumIn + sumOut) + "₴";
}

//функція запуска функцій
function updateUi(acc) {
  clcBalance(acc);
  displayMovements(acc.movements);
  infoBalance(acc.movements);
}

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find((acc) => acc.logIn === inputLoginUsername.value);
  console.log(currentAccount);
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    containerApp.style.opacity = 100;
    console.log("Pin Ok");
    inputLoginUsername.value = inputLoginPin.value = ""; // Приховали логін і пароль
    updateUi(currentAccount);
  }
})

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const resiveAcc = accounts.find((acc) => acc.logIn === inputTransferTo.value)
  const amount = Number(inputTransferAmount.value);
  console.log(resiveAcc, amount);
  if (
    resiveAcc &&
    amount > 0 &&
    amount <= currentAccount.balance &&
    resiveAcc.logIn != currentAccount.logIn) {
    console.log("Платіжка ок");
    currentAccount.movements.push(-amount);
    resiveAcc.movements.push(amount);
    updateUi(currentAccount);
    inputTransferTo.value = inputTransferAmount.value = "";
  }
})

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  //const userLogInClose = inputCloseUsername
  if (inputCloseUsername.value === currentAccount.logIn &&
    Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex((acc) => acc.logIn === currentAccount.logIn) //знаходимо індекс аккаунта
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = "";
  }

})

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0) {
    currentAccount.movements.push(amount);
    updateUi(currentAccount);
  }
  inputLoanAmount.value = "";
})

const allBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, val) => acc + val);


let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  console.log("click");
  sorted = !sorted;
})
