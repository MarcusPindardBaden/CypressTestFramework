module.exports = 
{
    // Locators for both the write article page and the article page when published

    titleInput: 'input[formcontrolname = "title"]',
    descriptionBox: 'input[formcontrolname = "description"]',
    articleBodyInput: 'textarea[formcontrolname = "body"]',
    tagSection: "input[ng-reflect-form]",
    publishArticleButton: "button", //No other buttons on the write article page
    articlePageLoaded: "div[class = 'article-page']", //Useful for verifying that the article page loaded successfully.
    deleteArticleButton: "button[class = 'btn btn-sm btn-outline-danger']",
    titleContainer: "div[class = 'container']", //Element contains text which has the title of the article in
    userProfileLink: "a[class = 'author']" //Used when on the published article page
}