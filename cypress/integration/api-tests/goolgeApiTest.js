describe('Google API', () => {
	it('', () => {
		cy.request(
			'https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916'
		).then(response => {
			cy.log(response.body.products.length);
			//cy.log(response.body.products[0]);
			//  cy.log(Object.keys( ));
			const first = response.body.products[0];
			for (let key in first) {
				cy.log(key + ' : ' + first[key]);
			}
		});
	});
});
