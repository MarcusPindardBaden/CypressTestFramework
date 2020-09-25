const locator = require('../common/Locators/preLoginLocators')

module.exports =
{
    // Selected the username and password sections and fills them out before clicking sign in
    login(username, password)
    {
        let unameInput = cy.get(locator.usernameInput);
        unameInput.click();
        unameInput.type(username);
        let pwordInput = cy.get(locator.passwordInput);
        pwordInput.click();
        pwordInput.type(password);
        cy.wait(250);
        cy.get(locator.signInButton).click();
    }
}