'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrol = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

//Плавне прогортання сторінки
btnScrol.addEventListener("click", function () {
  /* window.scrollTo({      //старий метод
     left: section1.getBoundingClientRect().left + window.pageXOffset,
     top: section1.getBoundingClientRect().top + window.pageYOffset,
     behavior: "smooth"
   })
 */
  section1.scrollIntoView({ behavior: "smooth" });
})

/* 
//Виконання події один раз
const h1 = document.querySelector("h1");

function alerH1() {
  alert("Hello");
  h1.removeEventListener("mouseenter", alerH1)
}

h1.addEventListener("mouseenter", alerH1); //подія
*/

//Плавне прогортання сторінки до потрібної інформації 
const nav = document.querySelector(".nav__links");
nav.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target); //отримуємо елемент на який натиснули
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
})

//Робота з табами
const tabs = document.querySelectorAll(".operations__tab");
const tabContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", function (e) {
  e.preventDefault();
  const clicked = e.target.closest(".operations__tab")
  console.log(clicked);
  if (!clicked) return;

  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  tabsContent.forEach((content) => content.classList.remove("operations__content--active"));

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
})

//робота з прозорістю 
function hover(e, opacity) {
  const link = e.target;

  if (link.classList.contains("nav__link")) {
    const sibling = link.closest(".nav").querySelectorAll(".nav__link");
    //const logo = link.closest("nav").querySelector(".nav__logo");

    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    //logo.style.opacity = this;
  }
}

nav.addEventListener("mouseover", hover.bind(0.5));
nav.addEventListener("mouseout", hover.bind(1));

//Спосіб прив'язати наш header 
const navConteiner = document.querySelector(".nav")

function callBack(entries) {
  //console.log(entries[0]);
  if (!entries[0].isIntersecting) {
    navConteiner.classList.add("sticky");
  } else navConteiner.classList.remove("sticky");
}

const options = {
  threshold: 0,
  rootMargin: "-90px",
};

const observer = new IntersectionObserver(callBack, options);
observer.observe(document.querySelector(".header"));

//Спливання секцій
const allSections = document.querySelectorAll(".section");
function revealSection(entries, observe) {
  //console.log(entries[0]);
  if (entries[0].isIntersecting) {
    entries[0].target.classList.remove("section--hidden");
    observe.unobserve(entries[0].target);// більше не відслідковуємо
  }
}

const sectionsObserver = new IntersectionObserver(revealSection, { threshold: 0.15, });

allSections.forEach((section) => {
  sectionsObserver.observe(section);
  section.classList.add("section--hidden");
})

//Прогрузка зображень
const images = document.querySelectorAll(".features__img");

function loadImg(entries, observe) {
  //console.log(entries[0]);
  if (entries[0].isIntersecting) {
    entries[0].target.src = entries[0].target.dataset.src; // присвоюємо src данні з data-src де зберігається зображення вищої якості
  } else return

  entries[0].target.addEventListener("load", function () { //після дозавантаження зображення ми прибираємо блюр 
    entries[0].target.classList.remove("lazy-img");
  })
  observe.unobserve(entries[0].target); // більше не відслідковуємо зображення
}

const imgObserver = new IntersectionObserver(loadImg, { threshold: 0.15, });

images.forEach((img) => {
  imgObserver.observe(img);
})

//Слайдер
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotsContainer = document.querySelector(".dots");

let currSlide = 0;
const maxSlides = slides.length;

/* //для комфортної роботи зі слайдером
slider.style.scale = 0.5; 
slider.style.overflow = "visible";
*/

function createDots() {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML("beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
createDots();

function goToSlide(slide) {
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
};

function activateDots(slide) {
  document.querySelectorAll(".dots__dot").forEach((dot) => dot.classList.remove("dots__dot--active"));
  //goToSlide(slide);
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
}

goToSlide(0);
activateDots(0);

function nextSlide() {
  if (currSlide === maxSlides - 1) currSlide = 0;
  else currSlide++;
  goToSlide(currSlide);
  activateDots(currSlide);
};

function prevSlide() {
  if (currSlide === 0) currSlide = maxSlides - 1;
  else currSlide--;
  goToSlide(currSlide);
  activateDots(currSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDots(slide);
  }
})