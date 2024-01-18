//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//
// Функция должна быть нечувствительна к регистру:
//
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

'use strict'

function checkSpam(str) {
    str = str.toLowerCase();
    return str.includes('viagra') || str.includes('xxx');

}

alert(checkSpam('innocent rabbit'));