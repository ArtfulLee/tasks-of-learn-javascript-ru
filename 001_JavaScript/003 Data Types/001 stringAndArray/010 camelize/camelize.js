/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//
// Примеры:
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

'use strict'

function camelize(str) {

    let result;
    let strArray = str.split('');

    for (let i = 0; i < strArray.length; i++) {

        if (strArray[i] == '-') {
            strArray.splice(i, 1);
            strArray[i] = strArray[i].toUpperCase();
        }

    }

    return (
        result = strArray.join('')
    );
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));