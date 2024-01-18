/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
//
// ucFirst("вася") == "Вася";

'use strict'

function ucFirst(str) {

    if (!(str.trim() == '')) {
        str = str[0].toUpperCase() + str.substring(1);
        return str;
    } else {
        return str; // странная проверка, чтобы функция все равно возвращала пустоту. https://plnkr.co/edit/H9Gih4Q3IIbQ0hen?p=preview&preview
    }

}

alert(ucFirst(''));