"use strict";

var sections = document.querySelector(".sections").querySelectorAll("section");
var nav = document.querySelectorAll("nav")[1];
var navHeight = nav.offsetHeight;

window.addEventListener("scroll", function (event) {
	var curPos = this.pageYOffset;
	var len = sections.length;
	for (var i = 0; i < len; i++) {
		var top = sections[i].offsetTop - navHeight;
		var bottom = top + sections[i].offsetHeight;

		if (curPos >= top && curPos <= bottom) {
			console.log(sections[i]);
			var anchorTags = nav.querySelectorAll("a");
			for (var j = 0; j < anchorTags.length; j++) {
				var element = anchorTags[j];
				element.classList.remove("active");
			}
			document.querySelector("a." + sections[i].id).classList.add("active");
		}
	}
});