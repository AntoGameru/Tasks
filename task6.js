const images = document.querySelectorAll(".images-window img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let current = 0;

function showImage(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
}

showImage(current);

prevBtn.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
});

nextBtn.addEventListener("click", () => {
    current = (current + 1) % images.length;
    showImage(current);
});
