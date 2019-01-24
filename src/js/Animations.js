function ShineAnimation(selector, start = 0, end = 0, duration = 0) {
	this.element = document.querySelector(selector);
	this.start = start;
	this.end = end;
	this.duration = duration;
}

ShineAnimation.prototype.fadeUp = function() {
	this.element.classList.add('animated');
}

ShineAnimation.prototype.load = function() {
	this.element.classList.add('loader');
}

ShineAnimation.prototype.countUp = function() {

	let range = this.end - this.start;
	let current = this.start;
	let increment = this.end > this.start ? 1 : -1;
	let stepTime = Math.abs(Math.floor(this.duration / range));

	let timer = setInterval(function() {
	    current += increment;
	    this.element.innerText = current;
	    if (current == this.end) {
	        clearInterval(timer);
	    }
	}, stepTime);

}
