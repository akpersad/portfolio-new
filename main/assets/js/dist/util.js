"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// eslint-disable-line semi
var Util = function () {
	function Util() {
		var inputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "No Arguements Passed";

		_classCallCheck(this, Util);

		this.inputs = inputs;
	}

	/*
 class manipulation functions
 */
	// Inputs: HTML ELement, String


	_createClass(Util, [{
		key: "hasClass",
		value: function hasClass(el, className) {
			if (el == null || className == null) {
				console.warn("Make sure el (HTML Element) and className (string) are passed!");
			} else {
				if (el.classList) {
					return el.classList.contains(className);
				}
				return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
			}
			return true;
		}

		// Inputs: HTML ELement, String

	}, {
		key: "addClass",
		value: function addClass(el, className) {
			if (el == null || className == null) {
				console.warn("Make sure el (HTML Element) and className (string) are passed!");
			} else {
				var classList = className.split(" ");
				if (el.classList) {
					el.classList.add(classList[0]);
				} else if (!this.hasClass(el, classList[0])) {
					el.className += " " + classList[0];
				}
				if (classList.length > 1) {
					this.addClass(el, classList.slice(1).join(" "));
				}
			}
		}

		// Inputs: HTML ELement, String

	}, {
		key: "removeClass",
		value: function removeClass(el, className) {
			if (el == null || className == null) {
				console.warn("Make sure el (HTML Element) and className (string) are passed!");
			} else {
				var classList = className.split(" ");
				if (el.classList) {
					el.classList.remove(classList[0]);
				} else if (this.hasClass(el, classList[0])) {
					var reg = new RegExp("(\\s|^)" + classList[0] + "(\\s|$)");
					el.className = el.className.replace(reg, " ");
				}
				if (classList.length > 1) {
					this.removeClass(el, classList.slice(1).join(" "));
				}
			}
		}

		// Inputs: HTML ELement, String, Boolean

	}, {
		key: "toggleClass",
		value: function toggleClass(el, className, bool) {
			if (el == null || className == null) {
				console.warn("Make sure el (HTML Element) and className (string) are passed!");
			} else if (bool) {
				this.addClass(el, className);
			} else {
				this.removeClass(el, className);
			}
		}
	}, {
		key: "swapClasses",
		value: function swapClasses(el, classNameToAdd, classNameToRemove) {
			if (el == null || classNameToAdd == null || classNameToRemove == null) {
				console.warn("Make sure el (HTML Element) and classNameToAdd / classNameToRemove (string) are passed!");
			} else {
				this.addClass(el, classNameToAdd);
				this.removeClass(el, classNameToRemove);
			}
		}

		// Inputs: HTML ELement, Object

	}, {
		key: "setAttributes",
		value: function setAttributes(el, attrs) {
			if (el == null || attrs == null) {
				console.warn("Make sure el (HTML Element) and attrs (Object {} ) are passed!");
			} else {
				for (var key in attrs) {
					if (attrs[key]) {
						el.setAttribute(key, attrs[key]);
					}
				}
			}
		}

		/*
   DOM manipulation
  */
		// Inputs: HTML ELement, String

	}, {
		key: "getChildrenByClassName",
		value: function getChildrenByClassName(el, className) {
			var childrenByClass = [];
			if (el == null || className == null) {
				console.warn("Make sure el (HTML Element) and className (string) are passed!");
			} else {
				for (var i = 0; i < el.children.length; i++) {
					if (this.hasClass(el.children[i], className)) {
						childrenByClass.push(el.children[i]);
					}
				}
				return childrenByClass;
			}
			return childrenByClass;
		}
	}, {
		key: "getAllChildrenNodes",
		value: function getAllChildrenNodes() {
			var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

			return element.querySelectorAll("*");
		}

		/*
  Animate height of an element
  */
		// Inputs: Integer, Integer, HTML ELement, Integer, Function

	}, {
		key: "setHeight",
		value: function setHeight(start, to, element, duration, cb) {
			if (start == null || to == null || element == null || duration == null || cb == null) {
				console.warn("Inputs: Integer, Integer, HTML Element, Integer, Function");
			} else {
				var change = to - start;
				var currentTime = void 0;

				var animateHeight = function animateHeight(timestamp) {
					if (!currentTime) {
						currentTime = timestamp;
					}
					var progress = timestamp - currentTime;
					var parseIntValue = progress / duration * (change + start);
					var val = parseInt(parseIntValue, 10);

					element.setAttribute("style", "height:" + val + "px;");
					if (progress < duration) {
						window.requestAnimationFrame(animateHeight);
					} else {
						cb();
					}
				};

				// set the height of the element before starting animation -> fix bug on Safari
				element.setAttribute("style", "height:" + start + "px;");
				window.requestAnimationFrame(animateHeight);
			}
		}

		/*
  Smooth Scroll
  */
		// Inputs: Integer, Integer, Function

	}, {
		key: "scrollTo",
		value: function scrollTo(final, duration, cb) {
			var start = window.scrollY || document.documentElement.scrollTop;
			var currentTime = void 0;

			var animateScroll = function animateScroll(timestamp) {
				if (!currentTime) {
					currentTime = timestamp;
				}
				var progress = timestamp - currentTime;
				if (progress > duration) {
					progress = duration;
				}
				var val = Math.easeInOutQuad(progress, start, final - start, duration);

				window.scrollTo(0, val);

				if (progress < duration) {
					window.requestAnimationFrame(animateScroll);
				} else {
					cb();
				}
			};

			window.requestAnimationFrame(animateScroll);
		}

		/*
   Focus utility classes
  */
		// Move focus to an element
		// Inputs: HTML ELement

	}, {
		key: "moveFocus",
		value: function moveFocus(element) {
			element.focus();
			if (document.activeElement !== element) {
				element.setAttribute("tabindex", "-1");
				element.focus();
			}
		}

		/*
   Misc
  */
		// Inputs: Array, HTML ELement

	}, {
		key: "getIndexInArray",
		value: function getIndexInArray(array, el) {
			return Array.prototype.indexOf.call(array, el);
		}
	}]);

	return Util;
}();

console.log("done");