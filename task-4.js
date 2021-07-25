console.log('======');
console.log('Task 4');
console.log('======');
let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let number = Number(prompt('Сколько дроидов нужно купить?'));
if (number === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = number * pricePerDroid;
}
if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
} else {
    console.log(`Вы купили ${number} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
}