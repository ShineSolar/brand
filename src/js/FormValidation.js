const inputsToValidate = document.querySelectorAll('[data-shine-validate]');
if (inputsToValidate !== null) {

const numberOfInputsToValidate = inputsToValidate.length;

	for (let i = 0; i < numberOfInputsToValidate; i++) {
		inputsToValidate[i].addEventListener('blur', function() {
			inputsToValidate[i].classList.add('blurred');
		}, false);
	}

}
