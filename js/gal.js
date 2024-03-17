const sizeIcons = document.querySelectorAll(".size-icon");

sizeIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    sizeIcons.forEach((icon) => {
      icon.classList.remove("selected");
    });
    icon.classList.add("selected");
  });
});
