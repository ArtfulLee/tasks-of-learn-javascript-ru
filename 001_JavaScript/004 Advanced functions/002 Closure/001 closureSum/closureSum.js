// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a + b.
// Да, именно таким образом, используя двойные круглые скобки(не опечатка).
// Например:
// sum(1)(2) = 3
// sum(5)(-1) = 4

function sum(num) {
    let result = num;
    function closureSum(numNext) {
        result += numNext;
        alert(result);
        return closureSum;
    }
    alert(result);
    return closureSum;
}

sum(1)(2)(1);
sum(5)(-1)(1);