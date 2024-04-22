/* 
ЗАДАЧА:

1. - Вам нужно создать калькулятор индекса массы тела(BMI), с помощью объектов. 
2. - Индекс массы тела рассчитывается по формуле: вес в Кг / Рост в квадрате.

Например, масса человека = 74 кг, рост = 172 см. Следовательно, индекс массы тела в этом случае равен:
ИМТ = 74кг / 1,722м² ≈ 25,01 кг/м²

3. - Для каждого из сравниваемых людей, создайте объект со свойствами которые будут содержать их имя, массу тела и рост.
4. - Создайте метод в объекте который будет считать индекс массы тела и возвращать результат
5. Сравните индексы массы тел двух людей (данные ниже), и выведите в консоль результат. 
Например: Индекс массы тела Петра (28.1), больше индекса массы тела Дениса (24.3)!.

ДАННЫЕ:

    Петр: Вес: 72кг рост: 1.88м
    Денис: Вес: 82кг рост: 1.73м

ПОДСКАЗКА:

1. - В качестве метода можете использовать как Function Declaration, так и Fancrion Expression.
2. - Не забывайте про сокращенную запись свойств.
3. - Не забывайте про метод this.
*/
const weightDenys = 65,
    heightDenys = 1.8,
    weightPetr = 72,
    heightPetr = 1.88;

function resIndexMassDenys() {
    return this.weightDenys / this.heightDenys ** 2
}

const person1 = {
    name: "Petr",
    weightPetr,
    heightPetr,
    resIndexMassPetr() {
        return this.weightPetr / this.heightPetr ** 2
    }
}

const person2 = {
    name: "Denys",
    weightDenys,
    heightDenys,
    resIndexMassDenys
}

if (person1.resIndexMassPetr() > person2.resIndexMassDenys()) {
    console.log(`Індекс маси тіла ${person1.name} = ${person1.resIndexMassPetr()} 
більше індекса маси ${person2.name} = ${person2.resIndexMassDenys()}`)
} else if (person2.resIndexMassDenys() > person1.resIndexMassPetr()) {
    console.log(`Індекс маси тіла ${person2.name} = ${person2.resIndexMassDenys()} 
більше індекса маси ${person1.name} = ${person1.resIndexMassPetr()}`)
} else console.log("Сталася помилка")

/*console.log(person1)
console.log(person1.resIndexMassPetr())
console.log(person2)
console.log(person2.resIndexMassDenys())*/

