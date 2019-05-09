const newUtil = new Util();

const hoverEvent = element => {
	const className = element.classList[0];
	const idName = element.id;

	const shapes = document.querySelectorAll(`.${className}`);
	for (let i = 0; i < shapes.length; i++) {
		const loopElement = shapes[i];
		if (loopElement.id !== idName) {
			newUtil.swapClasses(loopElement, "smaller-size", "larger-size");
		} else {
			newUtil.swapClasses(loopElement, "larger-size", "smaller-size");
		}
	}
};

const removeHoverEvent = () => {
	const shapesClass = ".parallelogram";
	const shapes = document.querySelectorAll(shapesClass);
	for (let i = 0; i < shapes.length; i++) {
		const loopElement = shapes[i];
		newUtil.removeClass(loopElement, "larger-size smaller-size");
	}
};
