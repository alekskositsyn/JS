'use strict';

let button = document.querySelector('button');
let model = document.getElementById('myModal');
let span = document.querySelector('span');
const selector = document.querySelector('div');

selector.classList.add('magictime', 'puffIn')

const modelOpen = function() {
    model.style.display = 'block';
}
const modelClose = function() {
    model.style.display = 'none';
}
button.addEventListener('click', modelOpen);
span.addEventListener('click', modelClose);


