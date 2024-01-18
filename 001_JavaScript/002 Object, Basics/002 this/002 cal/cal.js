// ///////////////////////////////////////////////////////////////////////////////////////////////
// Создайте объект calculator(калькулятор) с тремя методами:
//
// read()(читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum()(суммировать) возвращает сумму сохранённых значений.
// mul()(умножить) перемножает сохранённые значения и возвращает результат.
//
// let calculator = {
//     // ... ваш код ...
// };
//
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

'use strict'

let calculator = {

    read() {
        this.numberOne = +prompt('Введите первое число', '');
        this.numberTwo = +prompt('Введите второе число', '');
    },

    sum() {
        return (
            this.numberOne + this.numberTwo
        );
    },

    mul() {
        return (
            this.numberOne * this.numberTwo
        );
    },

};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

/* 'use strict'

let numberOne;
let numberTwo;

let calculator = {

    read() {
        numberOne = +prompt('Введите первое число', '');
        numberTwo = +prompt('Введите второе число', '');
    },

    sum() {
        return (
            numberOne + numberTwo
        );
    },

    mul() {
        return (
            numberOne * numberTwo
        );
    },

};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); */