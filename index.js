const burger = document.getElementById("burger");
const menu = document.getElementById("side-menu");
const overlay = document.getElementById("menu-overlay");
const closeBtn = document.getElementById("close-menu");

burger.addEventListener("click", () => {
    menu.classList.add("open");
    overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("show");
});

// Закрытие по клику вне меню
overlay.addEventListener("click", () => {
    menu.classList.remove("open");
    overlay.classList.remove("show");
});