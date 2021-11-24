import BasePage from '../../page-objects/amazonPages/basePage';

describe('Amazon tests', () => {
	before('Open amazon Page', () => {
		cy.visit('/');
	});

	it('Test amazon Home page', () => {
		//comment
		cy.percySnapshot("Home")
	});
});
