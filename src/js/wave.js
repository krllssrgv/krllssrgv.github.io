export default function setWave(isChangeMode) {
	const blocks = [
		...document.querySelectorAll('section'),
		document.querySelector('.me'),
		document.querySelector('.image')
	];

	blocks.forEach((e) => {
		e.addEventListener('click', (event) => {
			if (!isChangeMode) {
				const blockWave = document.createElement('span'),
					elementRect = e.getBoundingClientRect(),
					elementSize = Math.max(elementRect.width, elementRect.height),
					x = event.clientX - elementRect.left - elementSize / 2,
					y = event.clientY - elementRect.top - elementSize / 2;

				blockWave.style.width = `${elementSize}px`;
				blockWave.style.height = `${elementSize}px`;
				blockWave.style.left = `${x}px`;
				blockWave.style.top = `${y}px`;
				blockWave.classList.add('wave');

				e.appendChild(blockWave);

				blockWave.addEventListener('animationend', () => {
						blockWave.remove();
				});
			}
		});
	});
}