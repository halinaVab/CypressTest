describe('arrays ', () => {
	it('Create map', () => {
		let planets = new Map();
		planets.set('Mercury', { radius: 2440, density: 5.43, distance: 0.395 });
		planets.set('Venus', { radius: 6052, density: 5.24, distance: 0.723 });
		planets.set('Earth', { radius: 6378, density: 5.52, distance: 1 });
		planets.set('Mars', { radius: 3396, density: 3.93, distance: 1.53 });
		planets.set('Jupiter', { radius: 71492, density: 1.33, distance: 5.21 });
		planets.set('Saturn', { radius: 60268, density: 0.69, distance: 9.551 });
		planets.set('Uranus', { radius: 25559, density: 1.27, distance: 19.213 });
		planets.set('Neptune', { radius: 24764, density: 1.64, distance: 30.07 });

		//print all
		planets.forEach((value, key) => {
			cy.log(
				key +
					': ' +
					Object.keys(value)
						.map((objKey) => objKey + ':' + value[objKey])
						.join(', ')
			);
		});

		//print one

		//print size
		cy.log(planets.size);
	});
});
