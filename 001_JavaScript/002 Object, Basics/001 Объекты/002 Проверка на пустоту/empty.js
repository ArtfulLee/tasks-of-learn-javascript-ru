///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//
// Должно работать так:
//
// let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false

let schedule = {};

function isEmpty() {

    for (let key in schedule) {
        return false;
    } return true;

}

alert(isEmpty(schedule));

schedule['8:30'] = 'get up';

alert(isEmpty(schedule));