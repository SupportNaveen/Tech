const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
});
