const preLoginLocators = require('../common/Locators/preLoginLocators');
const profileLocators = require('./profileLocators');

module.exports = 
{

    updateBio(bio, password)
    {
        let bioInput = cy.get(profileLocators.bioInput, {timeout: 10000});
        bioInput.click().type(bio);
        let passwordInput = cy.get(profileLocators.passwordInput);
        passwordInput.click().type(password);
    },

    clearBio(password)
    {
        let bioInput = cy.get(profileLocators.bioInput, {timeout: 10000});
        bioInput.click().clear();
        let passwordInput = cy.get(profileLocators.passwordInput);
        passwordInput.click().type(password);
        cy.get(profileLocators.updateSettingsButton).click();
    },

    getBio()
    {
        let container = cy.get(profileLocators.profileContainer);
        let bio = container.find('p');
        return bio;
    }
}