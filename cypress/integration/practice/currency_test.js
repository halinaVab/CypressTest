import Chance from 'chance';

describe('Currency converter', () => {
	it('Currency rate should match expected values', () => {
		cy.visit('https://www.xe.com/currencyconverter/');

		cy.fixture('currency').then((data) => {
			const currencyNumber = Chance().integer({
				min: 0,
				max: data.rates.length - 1,
			});

			cy.get('#midmarketFromCurrency').click();
			cy.get('li').contains(data.base).click();

			cy.get('#midmarketToCurrency').click();
			cy.get('li').contains(data.rates[currencyNumber].shortName).click();

			cy.get("label[for='amount']").click();
			cy.get('main').contains('Convert').click({ force: true });

			cy.get('p[class*="result__BigRate"]').should(($rate) => {
				expect($rate).to.contain(data.rates[currencyNumber].rate);
			});
		});
	});
});
