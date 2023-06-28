setInterval(function () {
  var line = document.querySelector(".title-container::after");
  line.style.animation = "none";
  void line.offsetWidth; // Trigger reflow to restart the animation
  line.style.animation = null;
}, 2000);