document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const confirmOrderButton = modal.querySelector(".confirm-order-btn");
  const selectedSize = document.getElementById("selected-size");
  const orderNumberModal = document.getElementById("order-number");

  // При клике на кнопку "Підтвердити замовлення"
  confirmOrderButton.addEventListener("click", function () {
    const orderNumber = orderNumberModal.textContent;
    const size = selectedSize.textContent.split(": ")[1]; // Извлекаем размер из текста
    const message = `Підтвердження замовлення: Номер товара - ${orderNumber}, Розмір - ${size}`;

    // Отправляем запрос к API Телеграма
    fetch(
      "https://api.telegram.org/bot7137681405:AAF351KCaa8dxo0TWB23M1aPk-0HT2bpMzo/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "-1002144280183",
          text: message,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data)) // Обработка ответа от API
      .catch((error) => console.error("Error:", error)); // Обработка ошибок
  });
});
