///////////////////////////////////////////////////////////////////////////////////////////////////////
// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
// Например:
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

'use strict'

let calculator = new Calculator();

function Calculator() {

    this.read = function() {
        this.numberOne = +prompt('Введите первое число', '');
        this.numberTwo = +prompt('Введите второе число', '');
    }

    this.sum = function() {
        return (
            this.numberOne + this.numberTwo
        );
    }

    this.mul = function() {
        return (
            this.numberOne * this.numberTwo
        );
    }

};

calculator.read();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );