const sections = document.querySelector(".sections").querySelectorAll("section");
const nav = document.querySelector("#sticky-nav_nav");
const navHeight = nav.offsetHeight;
const navTop = nav.offsetTop;
const newUtil = new Util();

const stickykNav = () => {
	if (window.pageYOffset >= navTop) {
		newUtil.addClass(nav, "position-fixed");
	} else {
		newUtil.removeClass(nav, "position-fixed");
	}
};

const isScrolledBottom = () => {
	const pageHeight = document.documentElement.offsetHeight;
	const windowHeight = window.innerHeight;
	const scrollPosition =
		window.scrollY ||
		window.pageYOffset ||
		document.body.scrollTop +
			((document.documentElement && document.documentElement.scrollTop) || 0);

	if (pageHeight <= windowHeight + scrollPosition) {
		return true;
	}
	return false;
};

/* exported scrollToElement */
const scrollToElement = targetElement => {
	const elementId = targetElement.getAttribute("data-scrollTo");
	const element = document.querySelector(`#${elementId}`);
	const bodyRect = document.body.getBoundingClientRect().top;
	const elementRect = element.getBoundingClientRect().top;
	const elementPosition = elementRect - bodyRect;
	const offsetPosition =
		elementPosition - navHeight - (window.pageYOffset >= navTop ? 0 : navHeight);

	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth"
	});
};

window.addEventListener("scroll", function(event) {
	const curPos = this.pageYOffset;
	const len = sections.length;
	stickykNav();
	for (let i = 0; i < len; i++) {
		const top = sections[i].offsetTop - navHeight;
		const bottom = top + sections[i].offsetHeight;
		const anchorTags = nav.querySelectorAll("a");

		if (curPos >= top && curPos <= bottom) {
			for (let j = 0; j < anchorTags.length; j++) {
				newUtil.removeClass(anchorTags[j], "active");
			}
			document.querySelector(`a.${sections[i].id}`).classList.add("active");
		} else if (isScrolledBottom()) {
			newUtil.removeClass(anchorTags[len - 2], "active");
			document.querySelector(`a.${sections[len - 1].id}`).classList.add("active");
		}
	}
});
