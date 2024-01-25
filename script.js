const menu = document.querySelector(".menu")
let isMenuOpen = false;

function toggleMenu() {
    if(isMenuOpen) {
        menu.style.display = "none";
        isMenuOpen = false
    } else {
        menu.style.display = "block";
        isMenuOpen = true
    }
}