class HomePage {

    inputToSearch = () => {return "//textarea[@name='q']"};
    

    writeText(){
        cy.xpath(this.inputToSearch()).type('automatización').type('{enter}')
    }
    


} export default HomePage;