///////////////////////////////////////////////////////////////////////////////////////////////////////
// Здесь функция makeUser возвращает объект.
//
// Каким будет результат при обращении к свойству объекта ref ? Почему ?
//
//     function makeUser() {
//         return {
//             name: "Джон",
//             ref: this
//         };
//     };
//
// let user = makeUser();
//
// alert(user.ref.name); // Каким будет результат?

'use strict'

function makeUser() {
    return {
        name: "Джон",

        ref() {
            return this;
        }
        
    };
}

let user = makeUser();

alert(user.ref().name); 