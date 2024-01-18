// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
//
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
//
// let arr = [1, 2, 3];
//
// shuffle(arr);
// // arr = [3, 2, 1]
//
// shuffle(arr);
// // arr = [2, 1, 3]
//
// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

'use strict'

let array = [1, 2, 3];

let counter = {
    123: 0,
    132: 0,
    231: 0,
    213: 0,
    312: 0,
    321: 0,
}

function shuffle(array) {

    for (let indexArray = array.length - 1; indexArray > 0; indexArray--) {

        let randomNumber = Math.floor(Math.random() * (indexArray + 1));
        [array[indexArray], array[randomNumber]] = [array[randomNumber], array[indexArray]];

    }

}

function start() {

    for (let index = 0; index < 1000000; index++) {
        shuffle(array);
        counter[array.join('')]++;
    }

    for (let key in counter) {
        alert(`${key}: ${counter[key]}`);
    }

}

start();