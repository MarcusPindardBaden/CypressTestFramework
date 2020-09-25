const articlePage = require('./articlePageLocators');


module.exports = 
{
    // Fills out the 3 essential sections of the article so that it can be published
    fillOutArticle(title, description, body)
    {
        let titleBox = cy.get(articlePage.titleInput);
        titleBox.click();
        titleBox.type(title);
        let descriptionBox = cy.get(articlePage.descriptionBox);
        descriptionBox.click();
        descriptionBox.type(description);
        let article = cy.get(articlePage.articleBodyInput);
        article.click();
        article.type(body);
    },

    // Selects the tags section of the article and fills in with input
    fillOutTags(tags)
    {
        let tagSection = cy.get(articlePage.tagSection);
        tagSection.click();
        tagSection.type(tags);
    },

    // takes the "missing" input and checks if it matches any of the texts. If it does then it fills out the
    // article apart from that key section
    missOutThatSection (input1, input2, input3, missing)
    {
        if(missing == 'title')
        {
            let descriptionBox = cy.get(articlePage.descriptionBox);
            descriptionBox.click();
            descriptionBox.type(input1);
            let article = cy.get(articlePage.articleBodyInput);
            article.click();
            article.type(input2);
        }
        else if(missing == 'description')
        {
            let titleBox = cy.get(articlePage.titleInput);
            titleBox.click();
            titleBox.type(input1);
            let article = cy.get(articlePage.articleBodyInput);
            article.click();
            article.type(input2);
        }
        else if(missing == 'body')
        {
            let titleBox = cy.get(articlePage.titleInput);
            titleBox.click();
            titleBox.type(input1);
            let descriptionBox = cy.get(articlePage.descriptionBox);
            descriptionBox.click();
            descriptionBox.type(input2);
        }
        else
        {
            cy.log("something's gone wrong here")
        }
        this.fillOutTags(input3);
    },

    // Takes a username, finds the first instance of their name on the global feed, takes the parent element
    // and finds the article link from the parent element, clicks on the article
    selectAnArticleFromUser(profile)
    {
        let userProfile = cy.get('a[href ="/profile/'+profile+'"]').first();
        let articlePreview = userProfile.parents('app-article-preview');
        let articleTitle = articlePreview.find('a[class = "preview-link"]');
        articleTitle.click();
        cy.wait(1000);
    },

    // Deletes the article when on article page
    deleteArticle()
    {
        let button = cy.get(articlePage.deleteArticleButton).first();
        button.click();
    }
}