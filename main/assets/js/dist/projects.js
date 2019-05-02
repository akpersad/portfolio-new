"use strict";

var hoverEvent = function hoverEvent(element) {
	console.log(element);
	var className = element.classList[0];
	var idName = element.id;

	var shapes = document.querySelectorAll("." + className);
	// debugger;
	for (var i = 0; i < shapes.length; i++) {
		var loopElement = shapes[i];
		if (loopElement.id !== idName) {
			loopElement.classList.add("smaller-size");
			loopElement.classList.remove("larger-size");
		} else {
			loopElement.classList.remove("smaller-size");
			loopElement.classList.add("larger-size");
		}
	}
};

var removeHoverEvent = function removeHoverEvent() {
	var shapesClass = ".parallelogram";
	var shapes = document.querySelectorAll(shapesClass);
	for (var i = 0; i < shapes.length; i++) {
		var loopElement = shapes[i];
		loopElement.classList.remove("larger-size");
		loopElement.classList.remove("smaller-size");
	}
};