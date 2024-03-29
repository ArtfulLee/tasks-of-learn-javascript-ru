// Пусть arr – массив строк.
//
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
//
// Например:
//
// function unique(arr) {
//   /* ваш код */
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// alert( unique(strings) ); // кришна, харе, :-O

'use strict'

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {

    let uniqueArray = [];

    for (let key of arr) {

        if (!(uniqueArray.includes(key))) {
            uniqueArray.push(key);
        }

    }

    return uniqueArray;

}

alert(unique(strings)); // кришна, харе, :-O