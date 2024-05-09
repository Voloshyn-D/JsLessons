"use strict"

const hotel = new Map();
hotel.set("categories", ["std", "eco", "suit", "lux"]);
hotel.set(true, "Ми відкриті");
hotel.set(false, "Ми закриті");
//console.log(hotel.get("categories"));
console.log(hotel);

const setHotel = new Set(hotel);
console.log(setHotel);