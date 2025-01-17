const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const ul = document.querySelector("ul");
const final = document.querySelector(".final");

let currentItems = [];

function renderList(items) {
  const html = items.map((element) => `
    <li>
      <img src="${element.src}" alt="${element.name}">
      <p>${element.name}</p>
      <p class="price">R$ ${element.price}</p>
    </li>
  `).join('');
  ul.innerHTML = html;
}

function createList() {
  currentItems = menuOptions;
  renderList(currentItems);
  btn4.disabled = false;
  final.style.display = "none";
}

function veganList() {
  currentItems = menuOptions.filter((item) => item.vegan);
  renderList(currentItems);
  btn4.disabled = false;
  final.style.display = "none";
}

function carnList() {
  currentItems = menuOptions.filter((item) => !item.vegan);
  renderList(currentItems);
  btn4.disabled = false;
  final.style.display = "none";
}

function applyDiscount() {
  currentItems = currentItems.map((item) => ({
    ...item,
    price: (item.price * 0.9).toFixed(2),
  }));
  renderList(currentItems);
  btn4.disabled = true;
  final.style.display = "none";
}

function finalPrice() {
  const totalPrice = currentItems.reduce((total, item) => total + parseFloat(item.price), 0);
  final.style.display = "flex";
  final.innerHTML = `
    <div class="total">
      <p class="finalvalue">Valor Final:</p>
      <span class="value">R$ ${totalPrice.toFixed(2)}</span>
    </div>
  `;
}

btn1.addEventListener("click", createList);
btn2.addEventListener("click", veganList);
btn3.addEventListener("click", carnList);
btn4.addEventListener("click", applyDiscount);
btn5.addEventListener("click", finalPrice);
