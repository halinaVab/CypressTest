describe('arrays ', () => {
	let planets = [
		{ planet: 'Mercury', radius: 2440, density: 5.43, distance: 0.395 },
		{ planet: 'Venus', radius: 6052, density: 5.24, distance: 0.723 },
		{ planet: 'Earth', radius: 6378, density: 5.52, distance: 1 },
		{ planet: 'Mars', radius: 3396, density: 3.93, distance: 1.53 },
		{ planet: 'Jupiter', radius: 71492, density: 1.33, distance: 5.21 },
		{ planet: 'Saturn', radius: 60268, density: 0.69, distance: 9.551 },
		{ planet: 'Uranus', radius: 25559, density: 1.27, distance: 19.213 },
		{ planet: 'Neptune', radius: 24764, density: 1.64, distance: 30.07 },
	];

	it('Print Planets C1', () => {
		cy.log("Test");
		printPlanets(planets);
	});

	it('Add property to planets', () => {
		planets.map(function (planet) {
			return (planet.solarSystem = true);
		});
		printPlanets(planets);
	});

	it('Add object to array', () => {
		planets.push({
			planet: 'SomeNewPlanet',
			radius: 24764,
			density: 1.64,
			distance: 30.07,
			solarSystem: false,
		});
		printPlanets(planets);
	});

	it('sum up', () => {
		cy.log(planets.reduce((a, b) => ({ radius: a.radius + b.radius })));
	});

	it('Filter', () => {
		printPlanets(getPlanetsWithDistance(planets, 5));
	});

	it('Remove by indexOf', () => {
		planets.splice(
			planets.map((planet) => planet.planet).indexOf('SomeNewPlanet'),
			1
		);
		printPlanets(planets);
	});

	it('Sort by radius', () => {
		sortPlanetsByRadius(planets);
		printPlanets(planets);
	});

	it('Sort by name', () => {
		sortPlanetsByName(planets);
		printPlanets(planets);
	});

	it('Print length', () => {
		cy.log(planets.length);
	});

	function sortPlanetsByRadius(planets) {
		planets.sort(function (a, b) {
			return a.radius - b.radius;
		});
	}

	function sortPlanetsByName(planets) {
		planets.sort(function (a, b) {
			if (a.planet < b.planet) return -1;
			if (a.planet > b.planet) return 1;
			return 0;
		});
	}

	function printPlanets(planets) {
		planets.forEach((planet) => {
			cy.log(
				Object.keys(planet)
					.map((key) => key + ':' + planet[key])
					.join(', ')
			);
		});
	}

	function getPlanetsWithDistance(planets, number) {
		return planets.filter((planet) => planet.density > 5);
	}
});
