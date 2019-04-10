(function() {
	const themeSwitch = document.getElementById("themeSwitch");
	const mainHeader = document.getElementsByClassName("js-main-header")[0];
	// Theme switch
	if (window.CSS && CSS.supports("color", "var(--fake-var)")) {
		const initTheme = () => {
			const darkThemeSelected =
				localStorage.getItem("themeSwitch") !== null &&
				localStorage.getItem("themeSwitch") === "dark";
			// update checkbox
			themeSwitch.checked = darkThemeSelected;
			// update body data-theme attribute
			if (darkThemeSelected) {
				document.body.setAttribute("data-theme", "dark");
			} else {
				document.body.removeAttribute("data-theme");
			}
		};

		const resetTheme = () => {
			if (themeSwitch.checked) {
				// dark theme has been selected
				document.body.setAttribute("data-theme", "dark");
				localStorage.setItem("themeSwitch", "dark");
			} else {
				document.body.removeAttribute("data-theme");
				localStorage.removeItem("themeSwitch");
			}
		};

		if (themeSwitch) {
			initTheme(); // if user has already selected a specific theme -> apply it
			themeSwitch.addEventListener("change", function() {
				resetTheme(); // update color theme
			});
		}
	} else {
		themeSwitch.parentElement.style.display = "none";
	}

	// Main Header component JS
	if (mainHeader) {
		const trigger = mainHeader.getElementsByClassName("js-main-header__nav-trigger")[0];
		const nav = mainHeader.getElementsByClassName("js-main-header__nav")[0];
		// detect click on nav trigger
		trigger.addEventListener("click", function(event) {
			event.preventDefault();
			const ariaExpanded = !Util.hasClass(nav, "main-header__nav--is-visible");
			// show nav and update button aria value
			Util.toggleClass(nav, "main-header__nav--is-visible", ariaExpanded);
			trigger.setAttribute("aria-expanded", ariaExpanded);
			if (ariaExpanded) {
				// opening menu -> move focus to first element inside nav
				nav.querySelectorAll(
					"[href], input:not([disabled]), button:not([disabled])"
				)[0].focus();
			}
		});
	}
})();
