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
