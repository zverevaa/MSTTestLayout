window.addEventListener("scroll", function () {
    const header = document.querySelector(".menu");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const links = document.querySelectorAll(".menu__link");

links.forEach((link) => {
    link.addEventListener("click", function (e) {
        document.querySelectorAll(".menu__link").forEach((item) => {
            item.classList.remove("active");
        });
        this.classList.add("active");
    });
});

const ham = document.querySelector(".menu__ham");
const offscreen = document.querySelector(".menu__offscreen");

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    offscreen.classList.toggle("active");
});
