// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
//
// Параметры:
//
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function fnGetLastDayOfMonth(year, month) {
    let lastDay = new Date(year, month + 1, 0);

    /*     let lastDay;
        let lastDate;
        let oneDay;
        let nextFirstDayMonth;
    
        oneDay = 24 * 3600 * 1000;
        lastDate = new Date();
        lastDate.setFullYear(year, month);
        nextFirstDayMonth = new Date(year, month + 1, 1);
        lastDay = new Date(nextFirstDayMonth - oneDay); */

    return lastDay.getDate();
}

alert(fnGetLastDayOfMonth(2012, 1));