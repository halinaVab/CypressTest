import Chance from 'chance';

describe('Conditions', () => {
	it('If else', () => {
		let age = Chance().age();
		cy.log(`Age ${age} is : `);
		if (age <= 12) cy.log('Child');
		else if (age < 20) cy.log('Teen');
		else if (age <= 55) cy.log('Adult');
		else if (age <= 150) cy.log('Senoir');
	});
	it('Switch', () => {
		let age = Chance().age();
		cy.log(`Age ${age} is : `);
		switch (true) {
			case age >= 0 && age <= 10: {
				cy.log('Child');
				break;
			}
			case age > 10 && age <= 20: {
				cy.log('Teen');
				break;
			}
			case age > 20 && age <= 55: {
				cy.log('Adult');
				break;
			}
			case age > 55 && age <= 150: {
				cy.log('Senoir');
				break;
			}
			default:
				cy.log('INVALID AGE');
		}
	});

	it('Tern', () => {
		let age = Chance().age();
		cy.log(`Age ${age} is : `);
		let type = age < 10 ? 'child' : age < 20 ? 'Teen' : age < 55 ? 'Adult' : age < 150 ? 'Senior' : 'Invalid age';
		cy.log(type);
	});
});
