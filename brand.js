function ShineAnimation(selector, start, end, duration) {
	this.element = document.querySelector(selector);
	this.start = typeof start  === undefined ? 0 : start;
	this.end = typeof end  === undefined ? 0 : end;
	this.duration = typeof duration  === undefined ? 0 : duration;
}

ShineAnimation.prototype.fadeUp = function() {
	this.element.classList.add('animated');
}

ShineAnimation.prototype.load = function() {
	this.element.innerText = '';
	this.element.classList.add('loader');
}

ShineAnimation.prototype.countUp = function() {

	var range = this.end - this.start;
	var current = this.start;
	var increment = this.end > this.start ? 1 : -1;
	var stepTime = Math.abs(Math.floor(this.duration / range));

	var timer = setInterval(function() {
	    current += increment;
	    this.element.innerText = current;
	    if (current == this.end) {
	        clearInterval(timer);
	    }
	}, stepTime);

}

ShineAnimation.prototype.finishPageLoad = function() {
	this.element.classList.add('loaded');
}

function ShineModal(selector) {
	this.element = document.querySelector(selector);
	this.modal = new ShineAnimation(selector+' .modal');
}

ShineModal.prototype.open = function() {

	this.element.classList.add('open');

	this.modal.fadeUp();

	this.element.addEventListener('click', function(e) {

		if (e.target.classList.contains('modal-backdrop')) this.classList.remove('open');

	}, false);

}

ShineModal.prototype.close = function() { this.element.classList.remove('open'); }

// Initalizing the class. Headers are not required
function EasyHttp(url, headers) {
	this.url = url;
	this.headers = typeof headers  === undefined ? [] : headers;
	this.header_length = this.headers.length;
}

EasyHttp.prototype.makePostRequest = function(data, callback) {

	// opening AJAX request
	var ajax = new XMLHttpRequest();
	ajax.open('POST', this.url);

	// Setting correct headers
	for (var i = 0; i < this.header_length; i++) {
		ajax.setRequestHeader(this.headers[i].name, this.headers[i].value);
	}

	// sending data and waiting for response
	ajax.send(data)
	ajax.onload = callback;

}

EasyHttp.prototype.makeGetRequest = function(callback) {

	// opening AJAX request
	var ajax = new XMLHttpRequest();
	ajax.open('GET', this.url);

	// Setting correct headers
	for (var i = 0; i < this.header_length; i++) {
		ajax.setRequestHeader(this.headers[i].name, this.headers[i].value);
	}

	// sending data and waiting for response
	ajax.send()
	ajax.onload = callback;

}

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
