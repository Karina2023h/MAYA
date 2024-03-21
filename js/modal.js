function selectSize() {
  // Знайдемо усі кнопки розміру та знімемо відмітку з обраних
  document
    .querySelectorAll(".sizes .size")
    .forEach((btn) => btn.classList.remove("selected"));
  // Позначаємо обраний розмір
  this.classList.add("selected");
}

// Додаємо обробник події для кожного розміру одягу
document.querySelectorAll(".size").forEach((item) => {
  item.addEventListener("click", selectSize);
});

// Додаємо обробник події для кнопки замовлення
document.querySelector(".order-btn").addEventListener("click", () => {
  const selectedSize = document.querySelector(".sizes .size.selected").value;
  document.getElementById("selected-size").textContent =
    "Обраний розмір: " + selectedSize;
  document.getElementById("modal").style.display = "block";
});

document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
    document.getElementById("success-modal").style.display = "none";
  });
});

// Додаємо обробник події для кнопки підтвердження замовлення в модальному вікні
document.querySelector(".confirm-order-btn").addEventListener("click", () => {
  // Тут можна викликати функцію для оформлення замовлення з обраним розміром та іншою необхідною інформацією
  console.log("Замовлення оформлено");
  // Закриваємо модальне вікно
  document.getElementById("modal").style.display = "none";
  document.getElementById("success-modal").style.display = "block";
});

const orderNumberElement = document.getElementById("order-number");
// Отримати кнопку "Замовити"
const orderButton = document.querySelector(".order-btn");

// Додати подію кліку на кнопку "Замовити"
orderButton.addEventListener("click", function () {
  // Отримати номер замовлення з тексту
  const orderNumber = orderNumberElement.textContent.match(/\d+/)[0];

  // Отримати модальне вікно
  const modal = document.getElementById("modal");
  // Відобразити модальне вікно
  modal.style.display = "block";

  // Отримати елемент для відображення номера замовлення у модальному вікні
  const modalOrderNumberElement = document.getElementById("modal-order-number");
  // Відобразити номер замовлення у модальному вікні
  modalOrderNumberElement.textContent = "Номер замовлення: " + orderNumber;
});
