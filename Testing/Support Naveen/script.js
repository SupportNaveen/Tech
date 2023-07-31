// Show/hide the page top button based on the user's scroll position
window.onscroll = function () {
    togglePageTopButton();
};

function togglePageTopButton() {
    var pageTopButton = document.querySelector(".page-top-button");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        pageTopButton.style.display = "block";
    } else {
        pageTopButton.style.display = "none";
    }
}

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s--signup');
});

// const text = document.
//     querySelector
//     (".sec-text");
// const textLoad = () => {
//     setTimeout(() => {
//         text.textContent =
//             "Developer";
//     }, 0);
//     setTimeout(() => {
//         text.textContent =
//             "Freelancer";
//     }, 4000);
//     setTimeout(() => {
//         text.textContent =
//             "Youtuber";
//     }, 8000);
// }

// textLoad();
// setInterval
//     (textLoad, 12000);

