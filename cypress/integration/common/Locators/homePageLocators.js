module.exports =
{
    activeTab: 'a[class = "nav-link active"]', // finds the active tab on the page
    accountSettings: 'a[href = "/settings"]', 
    yourSettingsText: 'h1[class = "text-xs-center"]', // used to verify that the user has landed on the settings page
    logOutButton: 'button[class = "btn btn-outline-danger"]', 
    newArticle: 'a[href = "/editor"]', //Selector for writing a new article
    inactiveTab: 'a[class = "nav-link"]', // finds the inactive tab. Useful for selecting global feed
    navBarToggle: "div[class = 'feed-toggle']", // The nav bar for 'Your Feed' and 'Global Feed'
    feedTag: "a[class = 'tag-default tag-pill']" //Selector for tags on the feed pages
}