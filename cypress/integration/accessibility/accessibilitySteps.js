const homePageLocators = require('../common/Locators/homePageLocators');

Then('the homepage should appear with no accessibility issues', ()=>
{
    cy.get(homePageLocators.navBarToggle, { timeout: 10000});
    cy.injectAxe();
    cy.checkA11y();
});