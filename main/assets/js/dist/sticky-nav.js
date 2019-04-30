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

window.addEventListener("scroll", function (event) {
	var curPos = this.pageYOffset;
	var len = sections.length;
	stickykNav();
	for (var i = 0; i < len; i++) {
		var top = sections[i].offsetTop - navHeight;
		var bottom = top + sections[i].offsetHeight;

		if (curPos >= top && curPos <= bottom) {
			console.log(sections[i]);
			var anchorTags = nav.querySelectorAll("a");
			for (var j = 0; j < anchorTags.length; j++) {
				anchorTags[j].classList.remove("active");
			}
			document.querySelector("a." + sections[i].id).classList.add("active");
		}
		// else if (element.scrollHeight - element.scrollTop === element.clientHeight) {
		// 	console.log("Hello");
		// document.querySelector('.sections').scrollHeight - document.querySelector('.sections').scrollTop === document.querySelector('.sections').clientHeight
		// }
	}
});