// У нас есть объект salaries с зарплатами:

let oSalaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

// Если объект salaries пустой, то нужно вернуть null.
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.

function fnTopSalary(oSalaries) {
    let nameTopSalary = null;
    let moneyValue = 0;

    for (const [key, value] of Object.entries(oSalaries)) {

        if (moneyValue < value) {
            nameTopSalary = key;
            moneyValue = value;
        }
    }

    return nameTopSalary;
}

alert(fnTopSalary(oSalaries));