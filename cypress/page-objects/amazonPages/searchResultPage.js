class SearchResultPage{

    isOnSerachResultPage(){
        cy.get('#priceRefinements').should('be.visible');
    }

}

export default new SearchResultPage();
