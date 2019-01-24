function FormValidate() {
	this.form_elements = document.querySelectorAll('[data-shine-validate]');
}

FormValidate.prototype.validateElements = function() {
	var len = this.form_elements.length;
	for (var i = 0; i < len; i++) {
		this.form_elements[i].addEventListener('blur', function() { 
			this.classList.add('blurred'); 
		}, false);
	}
}
