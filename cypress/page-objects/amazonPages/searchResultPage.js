class SearchResultPage {
	isOnSerachResultPage() {
		cy.xpath('//span[@cel_widget_id="UPPER-RESULT_INFO_BAR-0"]').should('be.visible');
	}
}

export default new SearchResultPage();
