//////////////////////////////////////////////////////////////////////////////////////////////
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
//
// P.S. Есть «подводный камень» при работе с типами.

'use strict'

let calculator = new Calculator();

function Calculator() {

    this.read = function () {
        this.numberOne = +prompt('Введите первое число', '');
        this.numberTwo = +prompt('Введите второе число', '');
    }

    this.sum = function () {
        return (
            this.numberOne + this.numberTwo
        );
    }

};

calculator.read();

alert("Sum = " + calculator.sum());