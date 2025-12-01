const burger = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

// abrir/fechar menu
burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

// fechar menu clicando nos links
mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });
});

// fechar clicando fora do menu
document.addEventListener("click", (e) => {
    if (mobileMenu.classList.contains("open") &&
        !mobileMenu.contains(e.target) &&
        !burger.contains(e.target)) {
        mobileMenu.classList.remove("open");
    }
});

// fechar menu automaticamente ao aumentar para desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
        mobileMenu.classList.remove("open");
    }
});
