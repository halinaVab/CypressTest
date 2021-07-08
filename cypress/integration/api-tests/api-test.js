import Chance from 'chance';

describe('Test for regres', () => {
	before('', () => {});

	let testingData = [
		{
			description: 'Max Values',
			requestData: {
				name: Chance().string({ length: 100 }),
				job: Chance().string({ length: 100 }),
			},
		},
		{
			description: 'Min Values',
			requestData: {
				name: Chance().string({ length: 1 }),
				job: Chance().string({ length: 1 }),
			},
		},
	];

	testingData.forEach(({ description, requestData }) => {
		it('Positive:Create user', () => {
			cy.request('POST', 'api/users', requestData).then((response) => {
				expect(response.status).to.eq(201);
				expect(response.body).to.have.property('name', requestData.name);
				expect(response.body).to.have.property('job', requestData.job);
			});
		});
	});

	it('Positive:Create user', () => {
		cy.fixture('user').then((user) => {
			cy.request('POST', 'api/users', user).then((response) => {
				expect(response.status).to.eq(201);
				expect(response.body).to.have.property('name', user.name);
				expect(response.body).to.have.property('job', user.job);
			});
		});
	});

	it('Negative:Create user C2', () => {
		cy.fixture('user').then((user) => {
			cy.request({
				method: 'POST',
				url: 'api/login',
				failOnStatusCode: false,
				body: { email: 'nana@gmail.com' },
			}).then((response) => {
				expect(response.status).to.eq(400);
			});
		});
	});
});
