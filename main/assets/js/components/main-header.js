(function() {
	const lightSwitch = document.querySelector("#lightSwitch");
	const mainHeader = document.querySelector(".js-main-header");
	// Theme switch
	if (window.CSS && CSS.supports("color", "var(--fake-var)")) {
		const initTheme = () => {
			const darkThemeSelected =
				localStorage.getItem("lightSwitch") !== null &&
				localStorage.getItem("lightSwitch") === "dark";
			// update checkbox
			lightSwitch.checked = darkThemeSelected;
			// update body data-theme attribute
			if (darkThemeSelected) {
				document.body.setAttribute("data-theme", "dark");
			} else {
				document.body.removeAttribute("data-theme");
			}
		};

		const resetTheme = () => {
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
			lightSwitch.addEventListener("change", function() {
				resetTheme(); // update color theme
			});
		}
	} else {
		lightSwitch.parentElement.style.display = "none";
	}

	// Main Header component JS
	if (mainHeader) {
		const trigger = mainHeader.getElementsByClassName("js-main-header__nav-trigger")[0];
		const nav = mainHeader.getElementsByClassName("js-main-header__nav")[0];
		// detect click on nav trigger
		// debugger;
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

/* exported scrollToElement */
const scrollToElement = element => {
	const elementId = element.getAttribute("data-scrollTo");
	document.querySelector(`#${elementId}`).scrollIntoView({
		behavior: "smooth"
	});
};

// const isInViewport = elem => {
// 	const bounding = elem.getBoundingClientRect();
// 	return (
// 		bounding.top >= 0 &&
// 		bounding.left >= 0 &&
// 		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
// 		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
// 	);
// };

// const section1 = document.querySelector("#test1234");
// const section2 = document.querySelector("#test12345");
// const section3 = document.querySelector("#test12346");

// window.addEventListener(
// 	"scroll",
// 	function() {
// 		if (isInViewport(section1)) {
// 			console.log("IN VIEW 1");
// 		} else if (isInViewport(section2)) {
// 			console.log("IN VIEW 2");
// 		} else if (isInViewport(section3)) {
// 			console.log("IN VIEW 3");
// 		}
// 	},
// 	false
// );
