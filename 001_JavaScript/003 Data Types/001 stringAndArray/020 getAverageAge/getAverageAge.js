// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
//
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
//
// Например:
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

'use strict'

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {

    /*     let sumAgeUsers = 0;
    
        for (let index = 0; index < arr.length; index++) {
            sumAgeUsers += arr[index].age;
        }
    
        return sumAgeUsers / arr.length; */

    return arr.reduce((sumAgeUsers, user) => sumAgeUsers + user.age, 0) / arr.length;

}

alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28