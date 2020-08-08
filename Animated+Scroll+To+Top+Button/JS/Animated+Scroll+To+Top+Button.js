window.addEventListener("scroll", () => {
	const scroll = document.querySelector(".scrollTop");
	scroll.classList.toggle("active", window.scrollY > 500);
	scroll.addEventListener("click", scrollToTop);
});

function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}
