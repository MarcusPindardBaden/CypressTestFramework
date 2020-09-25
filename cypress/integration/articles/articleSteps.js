const homePageLocators = require("../common/Locators/homePageLocators");
const homePage = require("../common/Locators/homePageLocators");
const articleMethods = require("./articleMethods");
const articlePage = require("./articlePageLocators");
const preLoginLocators = require("../common/Locators/preLoginLocators");
const userProfileLocators = require('../common/Locators/userProfileLocators');



When('they go to write a new article', () =>
{
    cy.get(homePage.newArticle).click();
});

When('they fill out each section of the article {string} {string} {string} {string}', (arg1, arg2, arg3, arg4) =>
{
    articleMethods.fillOutArticle(arg1, arg2, arg3);
    articleMethods.fillOutTags(arg4);
});

When('they click publish article', ()=>
{
    cy.get(articlePage.publishArticleButton).click();
});

Then('the article should be successfully published {string}', (arg1)=>
{
    let article = cy.get(articlePage.articlePageLoaded, { timeout: 10000});
    let title = article.get(articlePage.titleContainer);
    title.contains(arg1);
});

Then('the user should be able to delete the article', ()=>
{
    articleMethods.deleteArticle();
    cy.get(homePageLocators.navBarToggle, { timeout: 10000});
});





When('they fill out the title {string}, description {string}, and article itself {string}', (arg1, arg2, arg3) =>
{
    articleMethods.fillOutArticle(arg1, arg2, arg3)
})





When('they fill out the article {string} {string} {string} without a key section {string}', (arg1, arg2, arg3, arg4) =>
{
    articleMethods.missOutThatSection(arg1, arg2, arg3, arg4);
})

Then('the correct error message should appear for that section {string}', (section)=>
{
    let errorMessage = cy.get(preLoginLocators.errorMessage);
    errorMessage.contains(section + " can't be blank");
});





When('they go to global feed', async()=>
{
    let feedToggle = cy.get(homePageLocators.navBarToggle);
    feedToggle.find(homePageLocators.inactiveTab).click();
});

When('they click on an article that is not theirs {string}', (arg1)=>
{
    cy.wait(500);
    let firstTag = cy.get(homePageLocators.feedTag).first();
    firstTag.click();
    cy.wait(1000);
    articleMethods.selectAnArticleFromUser(arg1);
});

Then('there should not be a delete button visible on the page', ()=>
{
    cy.get(articlePage.deleteArticleButton).should('not.be.visible');
});

Then('if they click on the other users account there should not be a delete button visible for articles', ()=>
{
    let userProfile = cy.get(articlePage.userProfileLink).first();
    userProfile.click();
    cy.get(articlePage.deleteArticleButton).should('not.exist');
});


