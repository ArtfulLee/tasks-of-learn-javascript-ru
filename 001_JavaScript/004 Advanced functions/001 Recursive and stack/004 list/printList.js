// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
// Как лучше: с рекурсией или без?

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list) {
    // if (typeof list === 'object') {
    //     if (list.next === null) {
    //         return alert(list.value);
    //     } else {
    //         alert(list.value);
    //         list = list.next;
    //         printList(list);
    //     }
    // }

    alert(list.value)

    if (list.next) {
        printList(list.next);
    }
}

printList(list);