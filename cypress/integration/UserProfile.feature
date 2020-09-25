Feature: User updates features on their profile

Scenario Outline: User can update their bio
Given a user loads the website
And they go to the login page
When they enter correct login credentials "<username>" "<password>"
And they click on settings
And they enter a short bio "<bio>" and their password "<password>"
And they click update settings
Then they are taken to their profile page
And their bio "<bio>" is visible under their name
Examples:
    | username | password | bio |
    | cvtrtest@convertr.io  | Password!23 | *insert funny quote here* |

Scenario Outline: User can clear their bio
Given a user loads the website
And they go to the login page
When they enter correct login credentials "<username>" "<password>"
And they click on settings
And they clear their bio and enter their password "<password>"
And they click update settings
Then they are taken to their profile page
And no bio is visible under their name
Examples:
    | username | password |
    | cvtrtest@convertr.io  | Password!23 |