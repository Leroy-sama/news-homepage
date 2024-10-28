const hamburger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
	navLinks.classList.toggle("active");
	hamburger.classList.toggle("active");
});

document.querySelectorAll(".link").forEach((n) => {
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navLinks.classList.remove("active");
	});
});
