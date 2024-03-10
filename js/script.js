var currentSlide = 0;
var totalSlides = document.querySelectorAll(".review").length;

function scrollReviews(direction) {
  if (direction === 1 && currentSlide < totalSlides - 1) {
    currentSlide++;
  } else if (direction === -1 && currentSlide > 0) {
    currentSlide--;
  }

  var reviewsList = document.querySelector(".reviews-list");
  var newTransformValue = -currentSlide * 100 + "%";
  reviewsList.style.transform = "translateX(" + newTransformValue + ")";
}
