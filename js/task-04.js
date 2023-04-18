// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// const counter = document.querySelector("#counter");

const spanValue = document.querySelector("#value");

const btnInc = document.querySelector(`[data-action="increment"]`);

const btnDec = document.querySelector(`[data-action="decrement"]`);

let counterValue = 0;

btnInc.addEventListener("click", onIncBtn);
btnDec.addEventListener("click", onDecBtn);

function onIncBtn() {
  counterValue += 1;
  spanValue.textContent = counterValue;
}

function onDecBtn() {
  counterValue -= 1;
  spanValue.textContent = counterValue;
}

// spanValue.textContent = counterValue;
console.log(counterValue);
