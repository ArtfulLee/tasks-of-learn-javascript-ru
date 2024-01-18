/* thumbs.onclick = function (event) {
    let thumbnail = event.target.closest('a');

    if (!thumbnail) return;

    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
}

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
} */

let largeImg = document.querySelector('#largeImg');
let thumbsID = document.querySelector('#thumbs');
let allLinks = document.querySelectorAll('#thumbs img');

console.log(largeImg);
console.log(thumbsID);
console.log(allLinks);

thumbs.onclick = function (event) {

    let target = event.target.closest('a');
    console.log(target);

    if (!target) return;

    switchImage(target);
    event.preventDefault();
}

function switchImage(target) {

    largeImg.src = target.href;
    largeImg.title = target.title;
    
}
