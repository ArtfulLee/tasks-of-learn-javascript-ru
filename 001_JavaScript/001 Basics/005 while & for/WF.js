'use strict'

///////////////////////////////////////////////////////////////////////////////////////////
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

/* let writeNumber = +prompt("введите число", "");

while (writeNumber <= 100) {

    if (writeNumber == '' || writeNumber === null) {
        break;
    }

    if (writeNumber <= 100) {
        writeNumber = +prompt("введите число", "");
    }

}

alert(writeNumber); */

/* let num;

do {
  num = prompt("Введите число больше 100?", '');
} while (num <= 100 && num); */

///////////////////////////////////////////////////////////////////////////////////////////
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

let maxNumberInterval = +prompt("Введите максимальное значение интервала для вычисления натуральных чисел", '');
let minNumberInterval = +prompt("Введите стартовое значение интервала", '');

reDo:

for (minNumberInterval; minNumberInterval <= maxNumberInterval; minNumberInterval++) {

    for (let i = 2; i < minNumberInterval; i++) {
        if (minNumberInterval % i == 0) continue reDo;
    }

    let naturalNumber = minNumberInterval;
    alert(naturalNumber);

}

alert("The End");

///////////////////////////////////////////////////////////////////////////////////////////