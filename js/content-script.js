document.addEventListener("DOMContentLoaded", () => {
	const homeStyle = document.createElement('style');
	homeStyle.type = 'text/css';
	
	const css = `
	@import url(https://tsutoringo.github.io/Nyobiko-themeCSS/smart.css);
	:root {
		--background-tertiary: #ae0000;
		--background-secondary-alt: #C11B1B;
		--background-secondary: #ae0000;
		--background-primary: #FFF;
		--normal-text: #a9aaab;
		--darken-text: #3a3a3a;
		--divider-color: #c60000;
		--list-hover-bg-color: #c90907;
		--gate-colosed-color-1: #36393f80;
		--gate-colosed-color-2: #20222560;
	}
	.exercise .section-item.question-list .exercise-item {
		border: none;
		box-shadow: 0 1px 1px rgba(0,0,0,0.16);
	}
	.exercise .section-item .type-descriptive .answers[data-correct],.exercise .section-item li.answers-choice {
		border: none;
	}
	.wrapper .footer {
		border: none;
	}
	`;
	
	homeStyle.innerText = css.replace(/\n|\t/g, '');
	document.head.appendChild(homeStyle);
});