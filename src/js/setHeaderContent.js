export default function setHeaderContent(isChangeMode) {
	const onChange = document.querySelector('#on_change'),
		  offChange = document.querySelector('#off_change');

	if (isChangeMode) {
		offChange.classList.remove('header__buttons--active');
		onChange.classList.add('header__buttons--active');
	} else {
		onChange.classList.remove('header__buttons--active');
		offChange.classList.add('header__buttons--active');
	}
}