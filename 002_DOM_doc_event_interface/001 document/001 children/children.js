// Напишите код, как получить…
//
// элемент <div>?
// <ul>?
// второй <li> (с именем Пит)?

alert(document.body.firstElementChild);
alert(document.body.lastElementChild.previousElementSibling);
alert(document.body.children[1].children[1].outerText);