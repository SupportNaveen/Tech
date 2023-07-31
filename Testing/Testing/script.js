<<<<<<< Updated upstream
=======
window.addEventListener("scroll", function () {
  var goToTopButton = document.getElementById("go-to-top");
  if (window.pageYOffset > 200) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
});

document.getElementById("go-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const toggleSwitch = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});
>>>>>>> Stashed changes
