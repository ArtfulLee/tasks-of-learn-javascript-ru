// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
//
// let user = {
//   name: "Василий Иванович",
//   age: 35
// };

let user = {
    name: "Василий Иванович",
    age: 35
};

let newUser = JSON.stringify(user);
alert(newUser);

newUser = JSON.parse(newUser);
alert(newUser.name);

// Why?
// let newUser = JSON.parse(JSON.stringify(user));