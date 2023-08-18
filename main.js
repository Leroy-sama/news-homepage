const openBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-menu");
const navLinks = document.querySelector("ul");

openBtn.addEventListener('click', () => {
    openBtn.style.display = "none"
    closeBtn.style.display = "block"
    navLinks.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    closeBtn.style.display = "none"
    openBtn.style.display = "block"
    navLinks.classList.remove('open')
})