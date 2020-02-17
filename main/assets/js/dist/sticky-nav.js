"use strict";

var sections = document.querySelector(".sections").querySelectorAll("section.section-parts");
var nav = document.querySelector("#sticky-nav_nav");
var navHeight = nav.offsetHeight;
var navTop = nav.offsetTop;
var newUtil = new Util();

var stickykNav = function stickykNav() {
	if (window.pageYOffset >= navTop) {
		newUtil.addClass(nav, "position-fixed");
	} else {
		newUtil.removeClass(nav, "position-fixed");
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
				newUtil.removeClass(anchorTags[j], "active");
			}
			var temp1 = "a." + sections[i].id;
			newUtil.addClass(document.querySelector(temp1), "active");
		} else if (isScrolledBottom()) {
			newUtil.removeClass(anchorTags[len - 2], "active");
			var temp2 = "a." + sections[len - 1].id;
			newUtil.addClass(document.querySelector(temp2), "active");
		}
	}
});