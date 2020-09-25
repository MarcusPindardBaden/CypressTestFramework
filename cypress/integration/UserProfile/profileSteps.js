const homePageLocators = require('../common/Locators/homePageLocators');
const profileLocators = require('./profileLocators');
const profileMethods = require('./profileMethods');

When('they click on settings', () => 
{
    cy.get(homePageLocators.accountSettings).click();
});

When('they enter a short bio {string} and their password {string}',(arg1, arg2) =>
{
    profileMethods.updateBio(arg1, arg2);
});

When('they click update settings', ()=>
{
    cy.wait(250);
    cy.get(profileLocators.updateSettingsButton).click();
});

Then('they are taken to their profile page', ()=>
{
    cy.get(profileLocators.profilePage, { timeout: 10000 });
});

Then('their bio {string} is visible under their name', (arg1)=>
{
    let bio = profileMethods.getBio();
    bio.contains(arg1);
});





When('they clear their bio and enter their password {string}', (arg1)=>
{
    profileMethods.clearBio(arg1);
});

Then('no bio is visible under their name', ()=>
{
    let bio = profileMethods.getBio();
    bio.should('not.have.text');
});