(function(window) {
	window.fetch('/test/toto').then(function(response) {
		return response.json();
	}).then(function(json) {
		console.log('parsed json', json);
		var paragraph = document.getElementById('test');
		paragraph.innerHTML = json.hello;
	}).catch(function(ex) {
		console.log('parsing failed', ex);
	});
})(window);