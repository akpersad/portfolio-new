"use strict";

var sections = document.querySelector(".sections").querySelectorAll("section");
var nav = document.querySelector("#sticky-nav_nav");
var navHeight = nav.offsetHeight;
var navTop = nav.offsetTop;

var stickykNav = function stickykNav() {
	if (window.pageYOffset >= navTop) {
		nav.classList.add("position-fixed");
	} else {
		nav.classList.remove("position-fixed");
	}
};

var isScrolledBottom = function isScrolledBottom() {
	var pageHeight = document.documentElement.offsetHeight;
	var windowHeight = window.innerHeight;
	var scrollPosition = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

	if (pageHeight <= windowHeight + scrollPosition) {
		return true;
	}
	return false;
};

/* exported scrollToElement */
var scrollToElement = function scrollToElement(targetElement) {
	var elementId = targetElement.getAttribute("data-scrollTo");
	var element = document.querySelector("#" + elementId);
	var bodyRect = document.body.getBoundingClientRect().top;
	var elementRect = element.getBoundingClientRect().top;
	var elementPosition = elementRect - bodyRect;
	var offsetPosition = elementPosition - navHeight - (window.pageYOffset >= navTop ? 0 : navHeight);

	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth"
	});
};

window.addEventListener("scroll", function (event) {
	var curPos = this.pageYOffset;
	var len = sections.length;
	stickykNav();
	for (var i = 0; i < len; i++) {
		var top = sections[i].offsetTop - navHeight;
		var bottom = top + sections[i].offsetHeight;
		var anchorTags = nav.querySelectorAll("a");

		if (curPos >= top && curPos <= bottom) {
			for (var j = 0; j < anchorTags.length; j++) {
				anchorTags[j].classList.remove("active");
			}
			document.querySelector("a." + sections[i].id).classList.add("active");
		} else if (isScrolledBottom()) {
			anchorTags[len - 2].classList.remove("active");
			document.querySelector("a." + sections[len - 1].id).classList.add("active");
		}
	}
});