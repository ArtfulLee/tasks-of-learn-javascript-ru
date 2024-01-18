////////////////////////////////////////////////////////////////////////////////////////////////
// Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?
//
// function A() { ... }
// function B() { ... }
//
// let a = new A;
// let b = new B;
//
// alert( a == b ); // true
// Если да – приведите пример вашего кода.

'use strict'

function A() {
    return newObject;
}

function B() {
    return newObject;
}

let newObject = {};


alert( new A() == new B() ); // true