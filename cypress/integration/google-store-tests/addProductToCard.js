describe('Card tests', function () {
	const DATA = [
		{ description: 'Single color product', mulitcolor: false },
		{ description: 'Multi color product', mulitcolor: true },
	];

	before('Open Google store Accessories page', () => {
		cy.fixture('product').as('products');
	});

	DATA.forEach(product => {
		it(`User is able to add  ${product.description} to the card`, function () {
			cy.log('GIVEN User is on Acce');
			cy.visit('https://store.google.com/us/collection/accessories_wall?hl=en-US');
			cy.log(product.description);
		});
	});
});
