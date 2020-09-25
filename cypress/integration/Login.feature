@login
Feature: User tries to log on to application

    This feature covers 2 stories of a user trying to log in, one
    with correct credentials, the other without

Scenario Outline: User can login correctly with right credentials then log back out
Given a user loads the website
And they go to the login page
When they enter correct login credentials "<username>" "<password>"
Then they land on their page correctly
And the user is able to go to their account settings
And the logOut button is visible on their account settings
And the user is able to successfully log out
Examples:
    | username | password |
    | cvtrtest@convertr.io  | Password!23 |

Scenario Outline: Valid error message appears with incorrect credentials entered
Given a user loads the website
And they go to the login page
When they enter invalid credentials "<username>" "<password>"
Then they should be shown an error message that it is invalid
Examples:
    | username | password |
    | ThisNameIs  | Trash  |