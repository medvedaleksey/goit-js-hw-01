console.log('======');
console.log('Task 5');
console.log('======');
let country = prompt('Выберите страну:').toLowerCase;
let price, isAccessible = true;
switch (country) {
    case 'китай':
        price = 100;
        break;
    case 'чили':
        price = 250;
        break;
    case 'австралия':
        price = 170;
        break;
    case 'индия':
        price = 80;
        break;
    case 'ямайка':
        price = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна');
        isAccessible = false;
}
if (isAccessible) {
    alert(`Доставка в ${country.charAt(0).toUpperCase + country.slice(1)} будет стоить ${price} кредитов`);
}