/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию sumInput(), которая:
//
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

/* 'use strict'

let numForArr;
let sumNumArray = 0;
let numbersArray = [];

function sumInput() {

    numForArr = prompt('Write number', '0');

    if (numForArr === '' || numForArr === null) {

        for (let numArr of numbersArray) {
            sumNumArray += Number(numArr);
        }

    } else if (isFinite(numForArr)) {
        numbersArray.push(numForArr);
        sumInput();
    } else {

        for (let numArr of numbersArray) {
            sumNumArray += Number(numArr);
        }

    }

    return sumNumArray;

}

alert(sumInput()); */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var 2 (better)

'use strict'

let numForArr;
let sumNumArray = 0;
let numbersArray = [];

function sumInput() {

    while (true) {

        numForArr = prompt('Write number', '0');

        if (numForArr === '' || numForArr === null || !isFinite(numForArr)) {
            break;
        }

        numbersArray.push(+numForArr);
    }

    for (let numArr of numbersArray) {
        sumNumArray += Number(numArr);
    }

    return sumNumArray;
}

alert(sumInput());