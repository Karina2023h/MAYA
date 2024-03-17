const sizeIcons = document.querySelectorAll(".size-icon");
const products = document.querySelectorAll(".product");

sizeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const size = icon.dataset.size;

    products.forEach((product) => {
      product.style.display = "block";
      if (!product.classList.contains(size)) {
        product.style.display = "none";
      }
    });
  });
});
