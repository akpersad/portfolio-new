"use strict";

(function () {
	var lightSwitch = document.querySelector("#lightSwitch");
	var mainHeader = document.querySelector(".js-main-header");
	// Theme switch
	if (window.CSS && CSS.supports("color", "var(--fake-var)")) {
		var initTheme = function initTheme() {
			var darkThemeSelected = localStorage.getItem("lightSwitch") !== null && localStorage.getItem("lightSwitch") === "dark";
			// update checkbox
			lightSwitch.checked = darkThemeSelected;
			// update body data-theme attribute
			if (darkThemeSelected) {
				document.body.setAttribute("data-theme", "dark");
			} else {
				document.body.removeAttribute("data-theme");
			}
		};

		var resetTheme = function resetTheme() {
			if (lightSwitch.checked) {
				// dark theme has been selected
				document.body.setAttribute("data-theme", "dark");
				localStorage.setItem("lightSwitch", "dark");
			} else {
				document.body.removeAttribute("data-theme");
				localStorage.removeItem("lightSwitch");
			}
		};

		if (lightSwitch) {
			initTheme(); // if user has already selected a specific theme -> apply it
			lightSwitch.addEventListener("change", function () {
				resetTheme(); // update color theme
			});
		}
	} else {
		lightSwitch.parentElement.style.display = "none";
	}

	// Main Header component JS
	if (mainHeader) {
		var trigger = mainHeader.getElementsByClassName("js-main-header__nav-trigger")[0];
		var nav = mainHeader.getElementsByClassName("js-main-header__nav")[0];
		// detect click on nav trigger
		trigger.addEventListener("click", function (event) {
			event.preventDefault();
			var ariaExpanded = !Util.hasClass(nav, "main-header__nav--is-visible");
			// show nav and update button aria value
			Util.toggleClass(nav, "main-header__nav--is-visible", ariaExpanded);
			trigger.setAttribute("aria-expanded", ariaExpanded);
			if (ariaExpanded) {
				// opening menu -> move focus to first element inside nav
				nav.querySelectorAll("[href], input:not([disabled]), button:not([disabled])")[0].focus();
			}
		});
	}
})();