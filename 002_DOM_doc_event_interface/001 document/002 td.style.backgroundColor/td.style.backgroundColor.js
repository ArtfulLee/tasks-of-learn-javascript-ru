let table = document.body.firstElementChild;

for (let index = 0; index < table.children[0].children.length; index++) {
    table.children[0].children[index].children[index].bgColor = 'red';
}