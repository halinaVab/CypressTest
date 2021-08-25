class BasePage {
	search(text) {
		cy.get('#twotabsearchtextbox').type(text);
		cy.get('#nav-search-submit-button').click();
	}
}

export default new BasePage();
