"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
const btnReset = document.querySelector(".btn--reset");

class Workout {   //Клас тренування
  date = new Date();
  id = (Date.now() + "").slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
  _setDescription() {
    const months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December",
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)}
    ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = "cycling";
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    this.speed = this.distance * this.duration / 60;
    return this.speed;
  }
}

class App {
  _workouts = [];
  _map;
  _mapEvent;
  constructor() {
    this._getPosition(); //запуск логіки застосунка
    this._getLocalStorage(); //Отримання данних з LS
    form.addEventListener("submit", this._newWorkout.bind(this));//обробка події, метод _newWorkout
    inputType.addEventListener("change", this._toogleField);//обробка події, метод _toogleField 
    containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));//обробка події, плавне переміщення між тренуваннями 
    btnReset.addEventListener("click", this.reset);
  };
  _getPosition() { //метод запроса данних о місцезнаходження користувача, в разі успіху запускаємо функцію _loadMap
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),

        function () { // модальне вікно у випадку відказу надавати дозвіл на місцезнаходження
          alert("Ви не надали доступ до своєї геолокації");
        }
      )
  };
  _loadMap(position) { //метод завантаження карти на сторінці
    //console.log(position);
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    this._map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this._map);

    L.marker(coords)//координати мого містця перебування
      .addTo(this._map)
      .bindPopup('Рідний дім')
      .openPopup();

    this._map.on("click", this._showForm.bind(this)); //обробка події натискання по мапі, метод _showForm

    this._workouts.forEach((work) => this._renderWorkMarket(work));// підгружаємо наші мітки
  };
  _showForm(mapE) { //метод відображення форми при натисканні на мапу
    this._mapEvent = mapE;
    //console.log(mapEvent);
    form.classList.remove("hidden");
    inputDistance.focus();
  };
  _toogleField() {
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  };
  //метод нанесення маркера на мапу
  _newWorkout(e) {
    e.preventDefault();

    // Функція на перевірку цілого числа, повертае true/fals
    const validInputs = (...inputs) => inputs.every((inp) => Number.isFinite(inp));
    // Функція на перевірку додатного числа, повертае true/fals
    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);

    //Данні з форм
    const type = inputType.value;
    const distance = +inputDistance.value; //одразу конвертуємо в число задля уникнення помилок
    const duration = +inputDuration.value; //одразу конвертуємо в число задля уникнення помилок
    const { lat, lng } = this._mapEvent.latlng;
    let workout;

    if (type === "running") { //Біг
      const cadence = +inputCadence.value;
      if (
        //!Number.isFinite(distance) ||
        //!Number.isFinite(duration) ||
        //!Number.isFinite(cadence) //перевірка на число 
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert("Необхідно ввести ціле додатне число!")
      }

      workout = new Running([lat, lng], distance, duration, cadence);
      console.log(workout);
    }

    if (type === "cycling") { //Велосипед
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration) // elevation може бути від'ємним
      ) {
        return alert("Необхідно ввести ціле додатне число!")
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);

    }
    this._workouts.push(workout);
    console.log(this._workouts);

    //Перевірка данних на коректність

    //Якщо це пробіжка створюємо об'єкт пробіжки

    //Якщо це велосипед то створюємо об'єкт велосипед

    //Додати об'єкт в масив warkout




    //Рендер маркера тренування на мапі
    this._renderWorkMarket(workout);
    this._renderWorout(workout);
    this._hideForm();
    this._setLocalStorage();
  };

  //Очищення поля вводу прихованння форми
  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value = "";
    form.classList.add("hidden")
  }

  _renderWorkMarket(workout) {
    L.marker(workout.coords)
      .addTo(this._map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "mark-popup",
        })
      )
      .setPopupContent(`${workout.type === "running" ? "🏃‍♂️" : "🚴"} ${workout.description} км`)
      .openPopup();
  }

  //Рендер списку тренувань
  _renderWorout(workout) {
    let html =
      `<li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${workout.type === "running" ? "🏃‍♂️" : "🚴"}</span>
      <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">км</span>
        </div >
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">хв</span>
      </div>
    `;
    if (workout.type === "running") {
      html +=
        `<div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">хв/км</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">крок</span>
        </div>
        </li>
      `;
    }
    if (workout.type === "cycling") {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">км/год</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevation}</span>
            <span class="workout__unit">м</span>
          </div>
        </li>`;
    }
    form.insertAdjacentHTML("afterend", html);
  }

  _moveToPopup(e) {
    const workoutEL = e.target.closest(".workout");
    if (!workoutEL) return;
    const workout = this._workouts.find((work) => work.id === workoutEL.dataset.id);
    this._map.setView(workout.coords, 13, { animate: true, pan: { duration: 1 } });
  }

  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this._workouts));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workouts"));
    if (!data) return;
    this._workouts = data;
    this._workouts.forEach((work) => this._renderWorout(work));

  }
  reset() {
    localStorage.removeItem("workouts");
    location.reload();
  }
}

const app = new App();
app._getPosition;



