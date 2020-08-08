function clock() {
	const hours = document.querySelector("#hour");
	const minutes = document.querySelector("#minutes");
	const seconds = document.querySelector("#seconds");

	const ms = new Date().getTime();
	const time = new Date(ms);

	const h = time.getHours();
	const m = time.getMinutes();
	const s = time.getSeconds();
	hours.textContent = h;
	minutes.textContent = m;
	seconds.textContent = s;
}

const interval = setInterval(clock, 1000);
