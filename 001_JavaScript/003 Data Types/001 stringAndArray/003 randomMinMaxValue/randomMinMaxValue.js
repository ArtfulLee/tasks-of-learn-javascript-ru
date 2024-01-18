//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
//
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
//
// Пример работы функции:
//
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

/* function randomNumber(min, max) {

    let maxMin = max - min;
    let mathRandom = Math.random();
    let mathRandomMaxMin = mathRandom * maxMin;
    let result = min + mathRandomMaxMin;

    return result; // return min + Math.random() * (max - min);

}

alert(randomNumber(1, 5)); */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
//
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
//
// Пример работы функции:
//
// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

function randomNumber(min, max) {

    return Math.floor(min + Math.random() * (max + 1 - min));

}

alert(randomNumber(17, 21));