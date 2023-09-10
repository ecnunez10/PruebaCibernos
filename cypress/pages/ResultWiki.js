class ResultWiki {



    validateDateTheFirstAutomation(){
        cy.get('p').contains('1785').should('be.visible');
    }    


    screenshotPage(){
        cy.screenshot('capture');
    }
    

}export default ResultWiki;


