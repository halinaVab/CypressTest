import promisify from 'cypress-promise';

describe('Google API', function () {
	it('', async function () {
		const result = await promisify(
			cy.request('https://storage.googleapis.com/mannequin/2018/data/productwall/accessories/en_us.json?c=1571310916')
		);

		cy.log(result.body.products.length);
		const first = result.body.products[0];
		for (let key in first) {
			cy.log(key + ' : ' + first[key]);
		}
	});
});
