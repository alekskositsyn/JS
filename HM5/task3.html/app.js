'use strict';

let button = document.querySelector('button');
let model = document.getElementById('myModal');
let span = document.querySelector('span');

const modelOpen = function() {
    model.style.display = 'block';
}
const modelClose = function() {
    model.style.display = 'none';
}
button.addEventListener('click', modelOpen);
span.addEventListener('click', modelClose);


