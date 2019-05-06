// Utility function
const Util = () => {};

/*
	class manipulation functions
*/
// Inputs: HTML ELement, String
Util.hasClass = (el, className) => {
	if (el.classList) {
		return el.classList.contains(className);
	}
	return !!el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
};

// Inputs: HTML ELement, String
Util.addClass = (el, className) => {
	const classList = className.split(" ");
	if (el.classList) {
		el.classList.add(classList[0]);
	} else if (!Util.hasClass(el, classList[0])) {
		el.className += ` ${classList[0]}`;
	}
	if (classList.length > 1) {
		Util.addClass(el, classList.slice(1).join(" "));
	}
};

// Inputs: HTML ELement, String
Util.removeClass = (el, className) => {
	const classList = className.split(" ");
	if (el.classList) {
		el.classList.remove(classList[0]);
	} else if (Util.hasClass(el, classList[0])) {
		const reg = new RegExp(`(\\s|^)${classList[0]}(\\s|$)`);
		el.className = el.className.replace(reg, " ");
	}
	if (classList.length > 1) {
		Util.removeClass(el, classList.slice(1).join(" "));
	}
};

// Inputs: HTML ELement, String, Boolean
Util.toggleClass = (el, className, bool) => {
	if (bool) Util.addClass(el, className);
	else Util.removeClass(el, className);
};

// Inputs: HTML ELement, Object
Util.setAttributes = (el, attrs) => {
	for (const key in attrs) {
		if (attrs[key]) {
			el.setAttribute(key, attrs[key]);
		}
	}
};

/*
  DOM manipulation
*/
// Inputs: HTML ELement, String
Util.getChildrenByClassName = (el, className) => {
	const childrenByClass = [];
	for (let i = 0; i < el.children.length; i++) {
		if (Util.hasClass(el.children[i], className)) {
			childrenByClass.push(el.children[i]);
		}
	}
	return childrenByClass;
};

Util.getAllChildrenNodes = element => {
	return element.querySelectorAll("*");
};

/*
	Animate height of an element
*/
// Inputs: Integer, Integer, HTML ELement, Integer, Function
Util.setHeight = (start, to, element, duration, cb) => {
	const change = to - start;
	let currentTime;

	const animateHeight = timestamp => {
		if (!currentTime) {
			currentTime = timestamp;
		}
		const progress = timestamp - currentTime;
		const parseIntValue = (progress / duration) * (change + start);
		const val = parseInt(parseIntValue, 10);

		element.setAttribute("style", `height:${val}px;`);
		if (progress < duration) {
			window.requestAnimationFrame(animateHeight);
		} else {
			cb();
		}
	};

	// set the height of the element before starting animation -> fix bug on Safari
	element.setAttribute("style", `height:${start}px;`);
	window.requestAnimationFrame(animateHeight);
};

/*
	Smooth Scroll
*/
// Inputs: Integer, Integer, Function
Util.scrollTo = (final, duration, cb) => {
	const start = window.scrollY || document.documentElement.scrollTop;
	let currentTime;

	const animateScroll = timestamp => {
		if (!currentTime) {
			currentTime = timestamp;
		}
		let progress = timestamp - currentTime;
		if (progress > duration) {
			progress = duration;
		}
		const val = Math.easeInOutQuad(progress, start, final - start, duration);

		window.scrollTo(0, val);

		if (progress < duration) {
			window.requestAnimationFrame(animateScroll);
		} else {
			cb();
		}
	};

	window.requestAnimationFrame(animateScroll);
};

/*
  Focus utility classes
*/
// Move focus to an element
// Inputs: HTML ELement
Util.moveFocus = element => {
	element.focus();
	if (document.activeElement !== element) {
		element.setAttribute("tabindex", "-1");
		element.focus();
	}
};

/*
  Misc
*/
// Inputs: Array, HTML ELement
Util.getIndexInArray = (array, el) => {
	return Array.prototype.indexOf.call(array, el);
};

/*
	Polyfills
*/
// Closest() method
// if (!Element.prototype.matches) {
// 	Element.prototype.matches =
// 		Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
// }

// if (!Element.prototype.closest) {
// 	Element.prototype.closest = function(s) {
// 		var el = this;
// 		if (!document.documentElement.contains(el)) return null;
// 		do {
// 			if (el.matches(s)) return el;
// 			el = el.parentElement || el.parentNode;
// 		} while (el !== null && el.nodeType === 1);
// 		return null;
// 	};
// }

// //Custom Event() constructor
// if (typeof window.CustomEvent !== "function") {
// 	function CustomEvent(event, params) {
// 		params = params || { bubbles: false, cancelable: false, detail: undefined };
// 		var evt = document.createEvent("CustomEvent");
// 		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
// 		return evt;
// 	}

// 	CustomEvent.prototype = window.Event.prototype;

// 	window.CustomEvent = CustomEvent;
// }

// /*
// 	Animation curves
// */
// Math.easeInOutQuad = function(t, b, c, d) {
// 	t /= d / 2;
// 	if (t < 1) return (c / 2) * t * t + b;
// 	t--;
// 	return (-c / 2) * (t * (t - 2) - 1) + b;
// };
