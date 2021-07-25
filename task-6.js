console.log('======');
console.log('Task 6');
console.log('======');
let sum = 0, num;
do {
    num = prompt('Введите число');
    if (isNaN(num)) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        sum += Number(num);
    }
} while (num !== null)
alert(`Общая сумма чисел равна ${sum}`);