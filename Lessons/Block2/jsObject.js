const user = {
    name: "John",
    age: 30,
    placeOfBirth: {
        coutry: "UA",
        city: "Kharkov"
    }
}

user.placeOfBirth.coutry = "USA"
user.placeOfBirth["dateOfBirth"] = 1999
//delete user.placeOfBirth.city
delete user["placeOfBirth"].city
console.log(user)
/*user.sex = "male"
console.log(user)

delete user.sex
console.log(user)*/

/*user["sex"] = "male"
console.log(user)

delete user["sex"]
console.log(user)*/

/*const propertyName = "newProperty"

user[propertyName + " 2"] = "propertyValue"
console.log(user["newProperty 2"])*/

//const answer = prompt("Напишіть слово name чи age")
//alert(user[answer])