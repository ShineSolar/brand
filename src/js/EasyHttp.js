// Initalizing the class. Headers are not required
function EasyHttp(url, headers = []) {
	this.url = url;
	this.headers = headers;
	this.header_length = headers.length;
}

EasyHttp.prototype.makePostRequest = function(data, callback) {

	// opening AJAX request
	const ajax = new XMLHttpRequest();
	ajax.open('POST', this.url);

	// Setting correct headers
	for (let i = 0; i < this.header_length; i++) {
		ajax.setRequestHeader(this.headers[i].name, this.headers[i].value);
	}

	// sending data and waiting for response
	ajax.send(data)
	ajax.onload = callback;

}

EasyHttp.prototype.makeGetRequest = function(callback) {

	// opening AJAX request
	const ajax = new XMLHttpRequest();
	ajax.open('GET', this.url);

	// Setting correct headers
	for (let i = 0; i < this.header_length; i++) {
		ajax.setRequestHeader(this.headers[i].name, this.headers[i].value);
	}

	// sending data and waiting for response
	ajax.send()
	ajax.onload = callback;

}
