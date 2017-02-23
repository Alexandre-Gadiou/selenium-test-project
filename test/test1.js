var webbrowserio = require('webdriverio');
var assert = require('assert');


describe('Test Pages Title', function() {

	this.timeout(10000000);
	var browser = {};

	before( function() {
		browser = webbrowserio.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
		return browser.init();
	});

	it('Google', function (done) {
		 browser
		  .url('https://www.google.fr')
		  .getTitle().then( function (title) {
		  	assert.equal(title, 'Google');
		 }).call(done);
	});

	after(function() {
	  return browser.end();
	});

});