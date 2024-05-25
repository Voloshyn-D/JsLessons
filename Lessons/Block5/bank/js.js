"use strict";

const account1 = {
  owner: "Dmitrii Fokeev",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "RUB",
  locale: "pt-PT",
};

const account2 = {
  owner: "Anna Filimonova",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: "Polina Filimonova",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  pin: 3333,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "EUR",
  locale: "es-PE",
};

const account4 = {
  owner: "Stanislav Ivanchenko",
  movements: [430, 1000, 700, 50, 90],
  pin: 4444,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
  ],
  currency: "USD",
  locale: "ru-RU",
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

function formatMovementDate(date) {
  const calcDaysPassed = (date1, date2) => Math.round((date1 - date2) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "Сьогодні";
  if (daysPassed === 1) return "Вчора";
  if (daysPassed >= 2 && daysPassed <= 4) return `Пройшло ${daysPassed} дня`
  if (daysPassed <= 7) return `Пройшло ${daysPassed} днів`
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const day = `${date.getDate()}`.padStart(2, 0);
  const hour = `${date.getHours()}`.padStart(2, 0);
  const minute = `${date.getMinutes()}`.padStart(2, 0);
  return `${day}/${month}/${year} ${hour}:${minute}`;
}

//Вивід на сторінку всіх зарахувань та зняття 
function displayMovements(acc, sort = false) {
  containerMovements.innerHTML = "";
  const move = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
  move.forEach(function (value, i) {
    const text = value < 0 ? "зняття" : "зарахування";
    const type = value < 0 ? "withdrawal" : "deposit";
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i + 1} ${text}
      </div>
      <div class="movements__date">${displayDate}</div>
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
  displayMovements(acc);
  infoBalance(acc.movements);
}

//Час/таймер на сайті --timeout --interval
function startLogOut() {
  let time = 600;

  function tick() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const second = String(time % 60).padStart(2, 0);

    labelTimer.textContent = `${min}:${second}`;
    if (time === 0) {
      clearInterval(timer)
      containerApp.style.opacity = 0;
    }
    time--;
  }
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
}

// кнопка входу в аккаунт
let currentAccount;
let timer;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find((acc) => acc.logIn === inputLoginUsername.value);
  console.log(currentAccount);
  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    /*
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const day = `${now.getDate()}`.padStart(2, 0);
    const hour = `${now.getHours()}`.padStart(2, 0);
    const minute = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year} ${hour}:${minute}`;
    */
    const local = navigator.language;//визначення мови браузера для подальших розрахунків дати
    const option = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      //timeZoneName: "long",
      hour12: false
    };

    setInterval(() => { //оновлюємо кожну секунду
      labelDate.textContent = Intl.DateTimeFormat(local, option).format(new Date());
    }, 1000);


    containerApp.style.opacity = 100;
    console.log("Pin Ok");
    inputLoginUsername.value = inputLoginPin.value = ""; // Приховали логін і пароль
    updateUi(currentAccount);
    if (timer) clearInterval(timer);//перевірка на скидання таймера
    timer = startLogOut();
  }
})

//кнопка переказу грошей
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
    currentAccount.movementsDates.push(new Date().toISOString());
    updateUi(currentAccount);
    clearInterval(timer);
    timer = startLogOut();
    inputTransferTo.value = inputTransferAmount.value = "";
  }
})

//кнопка видалення аккаунта
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

//кнопка внесення грошей
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0) {
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    updateUi(currentAccount);
    clearInterval(timer);
    timer = startLogOut();
  }
  inputLoanAmount.value = "";
})

//Баланс з усіх аккаунтів
const allBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, val) => acc + val);

//кнопка сортування при натисканні на Фільтр
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  console.log("click");
  sorted = !sorted;
})

labelBalance.addEventListener("click", function () {
  Array.from(document.querySelectorAll(".movements__value"), function (val, i) {
    return (val.innerText = val.textContent.replace("₴", "UA"));
  });
});

