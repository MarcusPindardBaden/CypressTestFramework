@articles
Feature: User tries to upload and delete articles

    All user stories surrounding a user wanting to create or delete articles

Scenario Outline: User can publish a new article with all sections filled then delete it
Given a user loads the website
And they go to the login page
When they enter correct login credentials "<username>" "<password>"
And they go to write a new article
And they fill out each section of the article "<title>" "<description>" "<article>" "<tags>"
And they click publish article 
Then the article should be successfully published "<title>"
And the user should be able to delete the article
Examples:
    | username | password | title | description | article | tags |
    | cvtrtest@convertr.io  | Password!23  | Porly ritten  | it bad | cant mak sense | rong |


Scenario Outline: User can publish an article without tags then delete it
Given a user loads the website
And they go to the login page
When they enter correct login credentials "<username>" "<password>"
And they go to write a new article
And they fill out the title "<title>", description "<description>", and article itself "<article>"
And they click publish article 
Then the article should be successfully published "<title>"
And the user should be able to delete the article
Examples:
    | username | password | title | description | article |
    | cvtrtest@convertr.io  | Password!23  | Porly ritten  | it bad | cant mak sense |

Scenario Outline: User can't publish an article with a missing body, description or title
Given a user loads the website
And they go to the login page
When they enter correct login credentials "<username>" "<password>"
And they go to write a new article
And they fill out the article "<info1>" "<info2>" "<info3>" without a key section "<section>"
And they click publish article 
Then the correct error message should appear for that section "<section>"
Examples:
    | username | password | info1 | info2 | info3 | section |
    | cvtrtest@convertr.io  | Password!23  | billys | bogus | brunch | body |
    | cvtrtest@convertr.io  | Password!23  | charlies | crystal | cavern | description |
    | cvtrtest@convertr.io  | Password!23  | dillans | dreadful | deceit | title |

Scenario Outline: User cannot delete article they don't own
Given a user loads the website
And they go to the login page
When they enter correct login credentials "<username>" "<password>"
And they go to global feed
And they click on an article that is not theirs "<name>"
Then there should not be a delete button visible on the page
And if they click on the other users account there should not be a delete button visible for articles
Examples:
    | username | password | name |
    | cvtrtest@convertr.io  | Password!23  | 214qweqwe |
    