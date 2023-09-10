class ResultPage {

    resultAutomation = () => {return '//h3[text()="Automatización - Wikipedia, la enciclopedia libre"]'}

    clickOnResult(){
        cy.xpath(this.resultAutomation()).scrollIntoView().click()
    }

} export default ResultPage;