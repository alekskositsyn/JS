'use strict';

const showBasket = document.querySelector('.basket');
const closeBasket = document.querySelector('span');
const basket = document.querySelector('.modal');
const btnBuy = document.querySelectorAll('.buy');

btnBuy.forEach(function(button){
    button.addEventListener('click', createItem);
});
closeBasket.addEventListener('click', function () {
    basket.classList.add('hidden');
});

showBasket.addEventListener('click', function () {
    basket.classList.remove('hidden');
});

let products = {};

function createItem(event) {
    const cardProduct = event.target.parentNode;

    const card = {
        id : cardProduct.id,
        nameProduct : cardProduct.querySelector('.productName'),
        price : cardProduct.querySelector('.price'),
        count : 1,
    }
    addProductToProducts(card);
    ifExistItem(card);
    addSum();
    
}

function addProductToProducts(card) {
    if (products[card.id] == undefined) {
        products[card.id] = {
            price: card.price.innerHTML,
            name: card.nameProduct.innerHTML,
            count: 1
        }
    } else {
        products[card.id].count++;
    }
}

function ifExistItem(card) {
    let td = document.querySelector(`.count[data-id="${card.id}"]`);
    if (td) {
        td.textContent++;
        return;
    }
    addItemToBasket(card);
}


function addItemToBasket(card) {

    let tr = document.createElement('tr');
    tr.id = card.id;
    tr.innerHTML += `
    <td>${card.id}</td>
    <td>${card.nameProduct.innerHTML}</td>
    <td>${card.price.innerHTML}</td>
    <td class="count" data-id="${card.id}">${card.count}</td>`;
    let tbody = document.querySelector('tbody');
    tbody.insertAdjacentElement("beforeend", tr);
}

function addSum() {
    document.querySelector('.summ').textContent = getSumm();
}
function getSumm() {
    let sum = 0;
    for (let key in products) {
        sum += products[key].price * products[key].count;
    }
    return sum;
}
