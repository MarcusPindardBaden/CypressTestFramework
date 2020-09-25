const preLoginLocators = require("../Locators/preLoginLocators");

module.exports = {

    // None of these methods got used in the end really, as found cypress to have more effective
    // methods built in

    // Intention was to get an element and verify if it's visible
    // Found out the .should notation works a lot more effectively.
    async elementVisible(locator)
    {
        cy.wait(2000);
        cy.log(locator);
        let element = await cy.get(locator)
        if(element.is(':visible'))
        {
            return true;
        }
        else
        {
            return false;
        }
    },

    // Similar to above, found out that the click and get methods have default assertions set to
    // them so didn't need to have an extra method
    elementClickable(locator)
    {
        let element = cy.get(locator)
        console.log(element.should('be.clickable'));
        return element.should('be.clickable');
    },

    // Similar to above, the contains method has default assertions set in so don't need 
    // this method
    errorMessage(locator)
    {
        cy.log(locator);
        let errorPanel = cy.get(locator);
        cy.log(errorPanel);
        let messageElement = errorPanel.get('li');
        cy.log(messageElement);
        cy.log('started');
        cy.log(messageElement.invoke('text'));
        return messageElement.invoke('text');
    }
}