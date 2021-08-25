describe('arrays ', () => {
	let planets = new Map();
	planets.set('Mercury', { radius: 2440, density: 5.43, distance: 0.395 });
	planets.set('Venus', { radius: 6052, density: 5.24, distance: 0.723 });
	planets.set('Earth', { radius: 6378, density: 5.52, distance: 1 });
	planets.set('Mars', { radius: 3396, density: 3.93, distance: 1.53 });
	planets.set('Jupiter', { radius: 71492, density: 1.33, distance: 5.21 });
	planets.set('Saturn', { radius: 60268, density: 0.69, distance: 9.551 });
	planets.set('Uranus', { radius: 25559, density: 1.27, distance: 19.213 });
	planets.set('Neptune', { radius: 24764, density: 1.64, distance: 30.07 });

	it('Create map', () => {
		printPlanets(planets);
	});

	it('Print one map entity', () => {
		//cy.log(planets.get('Saturn'))
		printPlanet('Saturn');
	});

	it('Print one map size', () => {
		//print size
		cy.log(planets.size);
	});

	it('has', () => {
		cy.log('has');
	});

	it('Delete by key', () => {
		planets.delete('Uranus');
		printPlanets(planets);
	});

	it('Merge planets', () => {
		let planets2 = new Map();
		planets.set('Mercury', { radius: 2440, density: 5.43, distance: 0.395 });
		planets.set('Venus2', { radius: 6052, density: 5.24, distance: 0.723 });
		planets.set('Earth3', { radius: 6378, density: 5.52, distance: 1 });

		let merged = new Map([...planets, ...planets2]);
		printPlanets(merged);
	});

	it('Go through object', () => {
		let planet = { planet: 'Mercury', radius: 2440, density: 5.43, distance: 0.395 };
		for (let key in planet) {
			cy.log(key + ' : ' + planet[key]);
		}
	});
	function printPlanet(key) {
		const value = planets.get(key);
		cy.log(key + ' : ' + Object.keys(value).map(objKey => `${objKey} : ${value[objKey]} `));
	}

	function printPlanets(planetsMap) {
		planetsMap.forEach((value, key) => {
			cy.log(
				key +
					': ' +
					Object.keys(value)
						.map(objKey => objKey + ':' + value[objKey])
						.join(', ')
			);
		});
	}
});
