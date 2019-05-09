"use strict";

var newUtil = new Util();

(function () {
	var barWidth = document.querySelector(".health").offsetWidth;
	document.querySelector(".shade").style.width = barWidth;
})();

function openModal(element, event) {
	// remove "#" from #modal
	var target = "exampleModalCenter";

	// use dynamic target to reference given modal
	var modalWindow = document.getElementById(target);

	if (modalWindow.classList) {
		newUtil.addClass(modalWindow, "open d-block");
	}
	event.preventDefault();
}

function closeModal() {
	var closeBtns = document.querySelectorAll(".modal-close");
	var modalOverlays = document.querySelectorAll(".modal-overlay");

	closeBtns.forEach(function (btn) {
		btn.addEventListener("click", function (event) {
			// target the whole modal
			var modalWindow = this.parentNode.parentNode;

			modalWindow.classList.remove("open");
		});
	});

	modalOverlays.forEach(function (overlay) {
		// get the whole modal using overlay argument
		var modalWindow = overlay.parentNode;

		// close modal if click event is fired on overlay background
		overlay.addEventListener("click", function () {
			modalWindow.classList.remove("open");
		});
	});
}