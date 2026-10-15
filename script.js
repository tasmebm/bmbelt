function toggleMenu() {
const nav = document.getElementById("nav");
if (nav) {
nav.classList.toggle("open");
}
}

document.addEventListener("click", function(event) {
const nav = document.getElementById("nav");
const menuButton = document.querySelector(".menu-btn");

if (
nav &&
menuButton &&
!nav.contains(event.target) &&
!menuButton.contains(event.target)
) {
nav.classList.remove("open");
}
});