'use strict'

const credits = 23580;
const pricePerDroid = 3000;

let amountOfDroids = prompt('Сколько дроидов вы хотите приобрести?');
const totalPrice = amountOfDroids * pricePerDroid;

if (amountOfDroids == null) {
    console.log('Отменено пользователем!');
}

if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    console.log(`Вы купили ${amountOfDroids} дроидов, на счету осталось ${credits-totalPrice} кредитов`);
}