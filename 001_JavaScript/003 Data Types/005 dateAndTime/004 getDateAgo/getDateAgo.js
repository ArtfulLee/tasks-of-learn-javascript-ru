// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
//
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
//
// Функция должна надёжно работать при значении days=365 и больших значениях:
//
// let date = new Date(2015, 0, 2);
//
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.

let date = new Date(2015, 0, 2);

function fnGetDateAgo(date, days) {
    let newTimeForDate = new Date(date);
    newTimeForDate.setDate(newTimeForDate.getDate() - days)
    return newTimeForDate;
}

alert(fnGetDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(fnGetDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(fnGetDateAgo(date, 365)); // 2, (2 Jan 2014)
alert(fnGetDateAgo(date, 0)); // 2, (2 Jan 2014)