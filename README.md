Playwright SauceDemo Automation Project

Overview
This project is an automation suite for the SauceDemo website built with Playwright and JavaScript.
The goal was to create a clean, maintainable test structure using Page Object Model and external test data.

Project Structure
tests  
Contains the test files such as login and sanity tests.

pages  
Each page in the application is represented as a class with its locators and actions.

data  
Holds all reusable data such as URLs, users, error messages and negative test scenarios.

What was implemented
Login tests  
Positive scenarios for multiple user types.  
Negative scenarios using data driven approach from a separate file.

End to End sanity test  
Full purchase flow from login to order completion.

Approach
Used Page Object Model to separate UI elements from test logic.  
Moved test data outside of test files to improve readability and reuse.  
Used loops to run multiple scenarios without duplicating code.

Technologies
JavaScript  
Playwright  
Node.js

How to run
Install dependencies  
npm install

Run all tests  
npx playwright test

Run specific file  
npx playwright test tests/login.spec.js

View report  
npx playwright show-report
