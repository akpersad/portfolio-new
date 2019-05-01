const sections = document.querySelector(".sections").querySelectorAll("section");
const nav = document.querySelector("#sticky-nav_nav");
const navHeight = nav.offsetHeight;
const navTop = nav.offsetTop;

const stickykNav = () => {
	if (window.pageYOffset >= navTop) {
		nav.classList.add("position-fixed");
	} else {
		nav.classList.remove("position-fixed");
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
				anchorTags[j].classList.remove("active");
			}
			document.querySelector(`a.${sections[i].id}`).classList.add("active");
		} else if (isScrolledBottom()) {
			anchorTags[len - 2].classList.remove("active");
			document.querySelector(`a.${sections[len - 1].id}`).classList.add("active");
		}
	}
});
