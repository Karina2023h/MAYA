function filterProducts(category) {
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    const productCategory = product.dataset.category;
    if (productCategory === category) {
      product.style.display = "block"; // Показуємо товар, якщо він належить до вибраної категорії
    } else {
      product.style.display = "none"; // Ховаємо товар, якщо він не належить до вибраної категорії
    }
  });
}
