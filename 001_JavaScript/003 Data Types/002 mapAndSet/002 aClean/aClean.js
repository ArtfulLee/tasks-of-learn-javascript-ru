// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
//
// Например:
//
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
//
// Например:
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var 1

 'use strict'

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

    let sortArr = []; // промежуточный сортированый массив.
    let newArray = []; // возвращаемый массив, return.
    let currentElementArr = []; // временный массив для записи текущего проверяемого элемента массива arr, положить его в новый массив или нет.

    // если массив newArray пустой, то заполняем 0-ой элемент нового массива newArray 0-ым элементом с массива arr
    if (newArray.length == 0) {
        newArray[0] = arr[0];
    }

    if (newArray.length > 0) {

        // если массив newArray не пустой, то перебераем элементы массива arr и ищем эти элементы в новом массиве newArray.
        for (let indexArr = 0; indexArr < arr.length; indexArr++) {

            // берем по индексу элемент массива arr и разбиваем элемент на новый массив currentElementArr для сортировки и проверки.
            currentElementArr = arr[indexArr].split('');
            // счетчик для поиска элемента в новом массиве для for ниже
            let indexCheckNewArray = 0;

            // перебираем новый массив newArray
            for (indexCheckNewArray; indexCheckNewArray < newArray.length; indexCheckNewArray++) {

                // строка элемента по индексу старого массива arr
                let str1 = (currentElementArr.sort()).join('');

                // Делаем нижний регистр строк
                str1 = str1.toLowerCase();

                // Проверяем, есть ли str1 в sortArr
                // Если нет, то добавляем его в sortArr и arr[indexArr] добавляем в newArray
                if (!(sortArr.includes(str1))) {
                    sortArr.push(str1);

                    if (arr[0] != arr[indexArr]) {
                        newArray.push(arr[indexArr]);
                    }

                }

            }

        }

        return newArray;

    }

}

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era" 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var 2 may be better

'use strict'

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

    let sortArr = [];
    let newArray = [];
    let checkElementArr;

    for (let indexArr = 0; indexArr < arr.length; indexArr++) {

        if (newArray.length == 0) {
            sortArr.push(arr[indexArr].split('').sort().join('').toLowerCase());
            newArray.push(arr[indexArr]);
        }

        checkElementArr = arr[indexArr].split('').sort().join('').toLowerCase();

        if (!(sortArr.includes(checkElementArr))) {
            sortArr.push(checkElementArr);
            newArray.push(arr[indexArr]);
        }

    }

    return newArray;

}

alert(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// answer learn.javascript.ru

'use strict'

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // разбиваем слово на буквы, сортируем и объединяем снова в строку
        let sorted = word.toLowerCase().split("").sort().join(""); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));