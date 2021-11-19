import SearchResultPage from '../../page-objects/amazonPages/searchResultPage';
import BasePage from '../../page-objects/amazonPages/basePage';

describe('Amazon tests', () => {
	before('Open amazon Page', () => {
		cy.visit('/');
	});

	it('C2 Test amazon Search', () => {
		BasePage.search('Iphone');
		SearchResultPage.isOnSerachResultPage();
	});
});
