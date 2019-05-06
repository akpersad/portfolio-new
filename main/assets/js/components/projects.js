const hoverEvent = element => {
	const className = element.classList[0];
	const idName = element.id;

	const shapes = document.querySelectorAll(`.${className}`);
	for (let i = 0; i < shapes.length; i++) {
		const loopElement = shapes[i];
		if (loopElement.id !== idName) {
			loopElement.classList.add("smaller-size");
			loopElement.classList.remove("larger-size");
		} else {
			loopElement.classList.remove("smaller-size");
			loopElement.classList.add("larger-size");
		}
	}
};

const removeHoverEvent = () => {
	const shapesClass = ".parallelogram";
	const shapes = document.querySelectorAll(shapesClass);
	for (let i = 0; i < shapes.length; i++) {
		const loopElement = shapes[i];
		loopElement.classList.remove("larger-size");
		loopElement.classList.remove("smaller-size");
	}
};
