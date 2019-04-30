const sections = document.querySelector(".sections").querySelectorAll("section");
const nav = document.querySelectorAll("nav")[1];
const navHeight = nav.offsetHeight;

window.addEventListener("scroll", function(event) {
	const curPos = this.pageYOffset;
	const len = sections.length;
	const element = event.target;
	for (let i = 0; i < len; i++) {
		const top = sections[i].offsetTop - navHeight;
		const bottom = top + sections[i].offsetHeight;

		if (curPos >= top && curPos <= bottom) {
			console.log(sections[i]);
			const anchorTags = nav.querySelectorAll("a");
			for (let j = 0; j < anchorTags.length; j++) {
				anchorTags[j].classList.remove("active");
			}
			document.querySelector(`a.${sections[i].id}`).classList.add("active");
		}
		// else if (element.scrollHeight - element.scrollTop === element.clientHeight) {
		// 	console.log("Hello");
		// }
	}
});
