let bubblyButtons = document.querySelector("a");
function animateButton(e) {
	e.preventDefault();
	//reset anmation
	e.target.classList.remove("animate");
	e.target.classList.add("animate");
	setTimeout(() => {
		e.target.classList.remove("animate");
	}, 700);
}
bubblyButtons.addEventListener("click", animateButton);
