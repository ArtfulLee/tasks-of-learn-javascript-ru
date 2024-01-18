// Напишите функцию count(obj), которая возвращает количество свойств объекта:
//
// let user = {
//   name: 'John',
//   age: 30
// };
//
// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.
//
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».

let oUser = {
    name: 'John',
    age: 30
};

function fnCount(oUser) {
    return Object.keys(oUser).length;
}

alert(fnCount(oUser)); // 2