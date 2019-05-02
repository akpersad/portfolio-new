const hoverEvent = element => {
	console.log(element);
	const className = element.classList[0];
	const idName = element.id;

	const shapes = document.querySelectorAll(`.${className}`);
	// debugger;
	for (let i = 0; i < shapes.length; i++) {
		const loopElement = shapes[i];
		if (loopElement.id !== idName) {
			loopElement.classList.add("smaller-width");
			loopElement.classList.remove("larger-width");
		} else {
			loopElement.classList.remove("smaller-width");
			loopElement.classList.add("larger-width");
		}
	}
};

const removeHoverEvent = () => {
	const shapesClass = ".parallelogram";
	const shapes = document.querySelectorAll(shapesClass);
	for (let i = 0; i < shapes.length; i++) {
		const loopElement = shapes[i];
		loopElement.classList.remove("larger-width");
		loopElement.classList.remove("smaller-width");
	}
};
