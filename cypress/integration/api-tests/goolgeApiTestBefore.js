describe('Google API', () => {
	before('Send request', function () {
		cy.request('https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916')
			.its('body.products')
			.as('products');
	});

	it('', function () {
		cy.log(this.products.length);
		const first = this.products[0];
		for (let key in first) {
			cy.log(key + ' : ' + first[key]);
		}
	});
});
