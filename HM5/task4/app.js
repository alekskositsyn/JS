'use strict';

const btns = document.querySelectorAll('button');



const openDatails = function(event) {
    const product = event.target.parentNode;

    const productContains = {
        wrap : product,
        datails : product.querySelector('.datails'),
        img : product.querySelector('img'),
        productName : product.querySelector('.productName'),
        button : product.querySelector('button'),
    }

    const textOnButton = productContains.button.innerText;
    if (textOnButton === 'Datails') {
        showMoreText(productContains);
    } else if (textOnButton === 'Close') {
        hideMoreText(productContains);
    }
};
btns.forEach(function(button){
    button.addEventListener('click', openDatails);
});

function showMoreText(productContains) {
    productContains.img.style.display = 'none';
    productContains.datails.style.display = 'block';
    productContains.button.innerText = 'Close';
}
function hideMoreText(productContains) {
    productContains.img.style.display = 'block';
    productContains.datails.style.display = 'none';
    productContains.button.innerText = 'Datails';
}


