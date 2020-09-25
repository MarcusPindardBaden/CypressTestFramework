const commonMethods = require('../common/Methods/commonMethods');
const homePageLocators = require('../common/Locators/homePageLocators'); 
const preLoginLocators = require('../common/Locators/preLoginLocators');
const loginPage = require('./loginPage');

Then('they land on their page correctly', async() =>
{
    cy.log("new step started");
    cy.get(homePageLocators.navBarToggle, { timeout: 10000});
});

Then('the user is able to go to their account settings', () =>
{
    cy.get(homePageLocators.accountSettings).click();
    cy.get(homePageLocators.yourSettingsText);
});

Then('the logOut button is visible on their account settings', () =>
{
    cy.get(homePageLocators.logOutButton);
});

Then('the user is able to successfully log out', () =>
{
    cy.get(homePageLocators.logOutButton).click();
    cy.get(preLoginLocators.signInTab, { timeout: 10000});
});

When('they enter invalid credentials {string} {string}', async(arg1, arg2)=>
{
    await loginPage.login(arg1, arg2);
});

Then('they should be shown an error message that it is invalid', ()=>
{
    cy.wait(1000);
    // let message = commonMethods.errorMessage(preLoginLocators.errorMessage);
    cy.get(preLoginLocators.errorMessage).should('have.text', ' email or password is invalid ');
    
})