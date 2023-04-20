// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input
// і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
const refs = {
  inputEl: document.querySelector("#controls input"),

  createBtn: document.querySelector("button[data-create]"),

  destroyBtn: document.querySelector("button[data-destroy]"),
};

const boxes = document.querySelector("#boxes");

refs.createBtn.addEventListener("click", createBoxes());

refs.destroyBtn.addEventListener("click", destroyBoxes());

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = 30 + "px";
    box.style.height = 30 + "px";
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);
  }
  document.body.append(boxes);
}

function getAmount() {
  const amount = refs.inputEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
