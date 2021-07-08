describe('Test ui ', () => {
	it.only('Google search', () => {
		cy.visit(
			'https://store.google.com/us/collection/accessories_wall?hl=en-US'
		);

		cy.get('.header-search-icon').click();
		cy.get("input[aria-label='Search Google Store']").type(
			'Google Pixel Buds{enter}'
		);
		cy.get('a[href="/product/pixel_buds_a_series"]').should('exist');
	});
});
