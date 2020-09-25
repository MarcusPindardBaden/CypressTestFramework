const preLoginLocators = require('./Locators/preLoginLocators');
const loginPage = require('../login/loginPage')

Given('a user loads the website', () =>
{
    cy.visit('http://localhost:4202/');
});

Given('they go to the login page', ()=>
{
    cy.get(preLoginLocators.signInTab).click();
});

When('they enter correct login credentials {string} {string}', async(arg1, arg2)=>
{
    await loginPage.login(arg1, arg2);
});

