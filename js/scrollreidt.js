let currentHeader = 1;

function changeHeader() {
  // Скрываем текущий активный хедер
  document.getElementById("header" + currentHeader).classList.remove("active");

  // Увеличиваем номер текущего хедера
  currentHeader = (currentHeader % 3) + 1;

  // Показываем новый активный хедер
  document.getElementById("header" + currentHeader).classList.add("active");
}
