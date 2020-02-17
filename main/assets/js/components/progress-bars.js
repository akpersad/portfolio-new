const newUtil = new Util();
const pageOverlay = document.querySelector("#page-overlay");

(() => {
	const barWidth = document.querySelector(".health").offsetWidth;
	const doc = document.body;
	document.querySelector(".shade").style.width = barWidth;
	pageOverlay.style.height = `${doc.offsetHeight}px`;
})();

function openModal(element, event) {
	// remove "#" from #modal
	const target = "exampleModalCenter";

	// use dynamic target to reference given modal
	const modalWindow = document.getElementById(target);

	if (modalWindow.classList) {
		newUtil.addClass(modalWindow, "open d-block");
	}

	newUtil.swapClasses(pageOverlay, "background-overlay", "d-none");
	event.preventDefault();
}

function closeModal() {
	const closeBtns = document.querySelectorAll(".modal-close");
	const modalOverlays = document.querySelectorAll(".modal-overlay");

	closeBtns.forEach(function(btn) {
		btn.addEventListener("click", function(event) {
			// target the whole modal
			const modalWindow = this.parentNode.parentNode;

			modalWindow.classList.remove("open");
		});
	});

	modalOverlays.forEach(function(overlay) {
		// get the whole modal using overlay argument
		const modalWindow = overlay.parentNode;

		// close modal if click event is fired on overlay background
		overlay.addEventListener("click", function() {
			modalWindow.classList.remove("open");
		});
	});
}
