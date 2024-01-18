///////////////////////////////////////////////////////////////////////////////////////////////
// Напишите функцию-конструктор Accumulator(startingValue).
//
// Объект, который она создаёт, должен уметь следующее:
//
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.
//
// Ниже вы можете посмотреть работу кода:
//
// let accumulator = new Accumulator(1); // начальное значение 1
//
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
//
// alert(accumulator.value); // выведет сумму этих значений

///////////////////////////////////////////////////////////////////////////////////////////////
// varOne

/* 'use strict'

let accumulator = new Accumulator(1); // начальное значение 1

function Accumulator(startingValue) {

    this.startingValue = startingValue;

    this.read = function () {
        this.numberOne = +prompt('Введите число, которое необходимо прибавить к текущему', '');
        this.startingValue = this.startingValue + this.numberOne;
        this.value = this.startingValue;
        return this.value;
    }

}

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений */

///////////////////////////////////////////////////////////////////////////////////////////////
// varTwo

'use strict'

function Accumulator(startingValue) {

    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Введите число, которое необходимо прибавить к текущему', '');
    }

}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value); // выведет сумму этих значений