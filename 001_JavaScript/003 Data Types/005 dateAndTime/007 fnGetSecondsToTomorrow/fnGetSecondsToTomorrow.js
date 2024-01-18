// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
//
// Например, если сейчас 23:00, то:
//
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function fnGetSecondsToTomorrow() {
    let nowDate = new Date();
    let currentDate = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate() + 1);
    return (
        ((currentDate - nowDate) / 1000).toFixed(0)
    );
}

alert(fnGetSecondsToTomorrow());