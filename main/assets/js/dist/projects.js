"use strict";

var newUtil = new Util();

var hoverEvent = function hoverEvent(element) {
	var className = element.classList[0];
	var idName = element.id;

	var shapes = document.querySelectorAll("." + className);
	for (var i = 0; i < shapes.length; i++) {
		var loopElement = shapes[i];
		if (loopElement.id !== idName) {
			newUtil.swapClasses(loopElement, "smaller-size", "larger-size");
		} else {
			newUtil.swapClasses(loopElement, "larger-size", "smaller-size");
		}
	}
};

var removeHoverEvent = function removeHoverEvent() {
	var shapesClass = ".parallelogram";
	var shapes = document.querySelectorAll(shapesClass);
	for (var i = 0; i < shapes.length; i++) {
		var loopElement = shapes[i];
		newUtil.removeClass(loopElement, "larger-size smaller-size");
	}
};