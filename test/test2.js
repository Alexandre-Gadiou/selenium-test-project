var webdriverio = require('webdriverio');
var assert = require('assert');

describe('Test http://alexandre-gadiou.appspot.com', function() {

	this.timeout(10000000);
	var browser = {};

	before( function() {
		browser = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
		return browser.init();
	});

	it('Formation', function (done) {
		 browser.url('http://alexandre-gadiou.appspot.com/')
		 .click('a[href="/Formation"]')
		 .pause(2000)
		 .click('a[href="/Contact"]')
		 .pause(2000)
		 .getTitle().then( function (title) {
		  	assert.equal(title, 'Alexandre Gadiou : Contact');
		 })
		 .call(done);
	});


	after(function() {
	  //return browser.end();
	});

});