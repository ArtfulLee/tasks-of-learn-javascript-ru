// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
//
// Сделайте два варианта решения.
//
// Используя setInterval.
// Используя рекурсивный setTimeout.

let countSetInterval;
let countSetTimeout;

function printNumbersSetInterval(fromNumSetInterval, toNumSetInterval) {

    countSetInterval = setInterval(function fromPlusSetInterval() {
        alert(fromNumSetInterval);
        fromNumSetInterval++;
        if (fromNumSetInterval > toNumSetInterval) {
            clearInterval(countSetInterval);
        }
    });
}

function printNumbersSetTimeout(fromNumSetTimeout, toNumSetTimeout) {

    countSetTimeout = setTimeout(function fromPlusSetTimeout() {
        alert(fromNumSetTimeout);
        fromNumSetTimeout++;
        if (fromNumSetTimeout > toNumSetTimeout) {
            clearTimeout(countSetTimeout);
        } else countSetTimeout = setTimeout(fromPlusSetTimeout, 1000)
    });
}

printNumbersSetInterval(1, 2);
printNumbersSetTimeout(5, 7);