// Contrived class to show ES6 support
class Helpers {
	verifyHeaderElementText(headerType, headerText) {
		it('should verify the text of a header element', () => {
			var typeOfHeader = element(by.css(headerType));
			expect(typeOfHeader.getText()).toEqual(headerText);
		});
	}
}


describe('login page', () => {
	var helpers = new Helpers();

	beforeEach(function() {
		browser.get('/login');
		browser.waitForAngular();
	});

	it('should exist', () => {
		expect(browser.getCurrentUrl()).toContain('/login');
	});

	helpers.verifyHeaderElementText('h1', 'Login');

	it('should login and redirect to the /user view', () => {
		var usernameInput = element(by.model('creds.email'));
		var passwordInput = element(by.model('creds.password'));
		element(by.css('a#fill-creds')).click();
		var submitButton = element(by.css('button[type="submit"]'));
		submitButton.click();
		expect(browser.getCurrentUrl()).toContain('/user');
	});

});
