import SearchResultPage from '../../page-objects/amazonPages/searchResultPage';
import BasePage from '../../page-objects/amazonPages/basePage';

describe('Amazon tests', () => {
	before('Open amazon Page', () => {
		cy.visit('/');
	});

	//fffff
	it('C2 Test amazon Search', () => {
		// comment17аа
		cy.percySnapshot("Home")
		BasePage.search('Iphone');
		SearchResultPage.isOnSerachResultPage();
	});
});
