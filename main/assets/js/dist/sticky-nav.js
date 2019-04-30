"use strict";

var sections = document.querySelector(".sections").querySelectorAll("section");
var nav = document.querySelectorAll("nav")[1];
var navHeight = nav.offsetHeight;

window.addEventListener("scroll", function (event) {
	var curPos = this.pageYOffset;
	var len = sections.length;
	var element = event.target;
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
		// }
	}
});