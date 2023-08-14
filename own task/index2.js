document.addEventListener("DOMContentLoaded", function () {
    const searchContainer = document.querySelector(".search-box");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click event from propagating to document
        searchContainer.classList.toggle("active");
        if (searchContainer.classList.contains("active")) {
            searchInput.focus();
        } else {
            searchInput.blur();
        }
    });

    document.addEventListener("click", function () {
        searchContainer.classList.remove("active");
    });

    searchContainer.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click event from propagating to document
    });
});