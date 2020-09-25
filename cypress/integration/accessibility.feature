Feature: There should be no accessibility bugs that appear on the pages

Scenario Outline: User doesn't have any accessibility issues on the homepage
Given a user loads the website
And they go to the login page
When they enter correct login credentials "<username>" "<password>"
Then the homepage should appear with no accessibility issues
Examples:
    | username | password |
    | cvtrtest@convertr.io  | Password!23  |