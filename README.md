Hi there, just thought I'd briefly explain some bits that may help get this set up and running. 

After running npm i to get the package.json working fine the command 'npm run test' should start all the tests and create a html mochawesome
report after. Keep in mind that some of the commands are set to run node with VSCode and powershell and may need changing (this should just be for the statement separators though)

The requested tasks have been done with the scenarios first written out in cucumber format. There are also 2 tests based around the user changing their bio.
The test are split up by appropriate feature file with their corresponding folder containing step definitions/methods/locators.
There are also common locators that are placed for ease of use of all the methods/step definitions. 
There is also one test that covers accessibility on the home page, although it only provides real useful value if you run the tests through cypress instead of via CLI.

I tried to work in screenshots to be added on the mochawesome test reports if the test has failed but couldn't configure it in time.
The logic for it is visible in the cypress.json and support/index.js files.

Also with more time the intention was to flesh out the accessibility tests more to provide more in depth tests. 
The test checks the entire page and I believe the violations can be shown in the console logs (if you use cypress open then run the tests).

I hope you enjoy going through my framework and that it is easy enough to understand!
