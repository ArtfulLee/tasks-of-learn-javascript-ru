// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
//
// Если объект salaries пуст, то результат должен быть 0.
//
// Например:
//
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
//
// alert( sumSalaries(salaries) ); // 650

let oSalaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function fnSumSalaries(oSalaries) {
    let aSalariesUsersArray = Object.values(oSalaries);

    if (aSalariesUsersArray.length > 0) {
        let iSumSalUsers = 0;

        for (let key of aSalariesUsersArray) {
            iSumSalUsers += key;
        }

        return iSumSalUsers;
    } else {
        return 0;
    }

}

alert(fnSumSalaries(oSalaries)); // 650