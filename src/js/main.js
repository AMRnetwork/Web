
function formOthers(ele) {
	function handleChange() {
		let item = document.querySelector(`.${ele}Other`);
		if(this.value === 'Other') {
			item.classList.add("active");
			return;
		}

		item.classList.remove("active");
		return;
	}

	document.querySelector(`#${ele}`).addEventListener('change', handleChange);
}


function mobileMenu(ele) {
	function handleChange() {
		document.querySelector(`.nav`).classList.toggle("active");
		this.classList.toggle("active");
	}

	document.querySelector(ele).addEventListener('click', handleChange);
}

mobileMenu('.mobile-button')
formOthers('sectors');
formOthers('oneHealth');