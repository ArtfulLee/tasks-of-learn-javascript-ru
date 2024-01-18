'use strict'

let user = {
    name: "Иван",
    sizes: {
        height: {
            heightOne: 182,
            heightTwo: 200,
            heightThree: 300,
        },
        width: 50,
    },
    finish: "Yes",
};

let clone = {};

copyObject(clone, user);
showPropObject(clone);

function copyObject(clone, user) {

    for (let prop in user) {

        if (typeof user[prop] == 'object' && user[prop] !== null) {
            clone[prop] = {};
            copyObject(clone[prop], user[prop]);
        } else {
            clone[prop] = user[prop];
        }

    }

}

function showPropObject(clone) {

    for (let key in clone) {

        if (typeof clone[key] == 'object' && clone[key] !== null) {
            showPropObject(clone[key]);
        } else {
            alert('Property: ' + key + '; ' + 'Key: ' + clone[key] + ';'); // Как выводить полный путь свойства, к примеру: clone.sizes.height.heightOne
        }

    }

}