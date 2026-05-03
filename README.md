Playwright SauceDemo Automation Project

Overview
This project is an automation testing project for the SauceDemo website using Playwright and JavaScript.
The goal of the project is to demonstrate a clear and structured approach to building automated tests.

Key Features
The project is built using the Page Object Model approach, which separates the test logic from the page structure.
It also uses a data driven approach to run multiple scenarios with different users and inputs.
Tests are configured to run on multiple browsers including Chromium, Firefox and WebKit.
The tests include validations of page titles, URLs and error messages.

Test Coverage
The project includes a full login test suite.
Positive scenarios cover successful login with different user types.
Negative scenarios cover locked users, invalid credentials and empty fields, including validation of error messages.

There is also an end to end test that covers the full purchase flow.
This includes adding products to the cart, completing the checkout process and verifying the order completion screen.

Project Structure
The tests folder contains all test files.
The pages folder contains the page objects with locators and actions.
The data folder contains test data such as URLs, users and constants.

Technologies
The project is built using JavaScript, Playwright and Node.js.

How to Run
Install dependencies using npm install
Run the tests using npx playwright test
View the test report using npx playwright show report
