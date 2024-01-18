// Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:
//
// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
//
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
//
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
//
// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

function fnFormatDate(date) {
    let currentDate = new Date();
    let diffTime = currentDate - date;

    if (diffTime <= 1000) {
        return 'прямо сейчас';
    } else if (diffTime <= 30000) {
        return '30 сек. назад';
    } else if (diffTime <= 300000) {
        return '5 мин. назад';
    } else if (diffTime <= 86400000) {
        let aYesterday = date;

        aYesterday = [
            '0' + aYesterday.getDate(),
            '0' + (aYesterday.getMonth() + 1),
            ' ' + aYesterday.getFullYear(),
            '0' + aYesterday.getHours(),
            '0' + aYesterday.getMinutes()
        ].map(component => component.slice(-2));

        aYesterdayString = aYesterday.slice(0, 3).join('.') + ' ' + aYesterday.slice(3).join(':');
        return aYesterdayString;
    }

}

alert(fnFormatDate(new Date(new Date - 1))); // "прямо сейчас"
alert(fnFormatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
alert(fnFormatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert(fnFormatDate(new Date(new Date - 86400 * 1000)));