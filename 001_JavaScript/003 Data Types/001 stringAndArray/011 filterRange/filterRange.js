///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
//
// Функция должна возвращать новый массив и не изменять исходный.
//
// Например:
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// alert( filtered ); // 3,1 (совпадающие значения)
//
// alert( arr ); // 5,3,8,1 (без изменений)

'use strict'

/* function filterRange(arr, start, end) {

    let newArrayFromFilterRange = [];

    for (let key of arr) {

        if (key >= start && key <= end) {
            newArrayFromFilterRange.push(key);
        } continue;

    }

    return newArrayFromFilterRange;
} */

function filterRange(arr, start, end) {
    return arr.filter(item => (item >= start && item <= end));
}

let arr = [5, 3, 8, 1];
let newArray = filterRange(arr, 1, 4);

alert(newArray);
alert(arr);