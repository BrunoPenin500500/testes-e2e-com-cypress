# End-to-end Testing with Cypress

Sample project to demonstrate end-to-end (e2e) tests written with [Cypress](https://cypress.io) running on GitHub Actions.

## Pre-requirements

To clone and run this project, you will need:

- [git](https://git-scm.com/dowloads) (I've used version `2.34.1`)
- [node.js](https://nodejs.org/en/) (I've used version `v18.15.0` while writing this doc)
- npm (I've used version `9.5.0` while writing this doc)

**Note:** When installing Node.js, npm is automatically installed.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)

## Configuring the environment variables

Before running the tests, some environment variables need to be set up.

Make a copy of the [`cypress.env.example.json`](./cypress.env.example.json) file as `cypress.env.json`, and set the appopriate values for all the variables.

**Note** The `cypress.env.json` file is not tracked by git since it's listed in the `.gitignore` file.

## Running the tests

In this project, you can run tests in interactive and headless modes, both on desktop and tablet viewports.

### Headless mode

Run `npm test` (or `npm t` for short) to run all tests in headless mode using a desktop viewport.

Run `npm run test:tablet` to run the appopriate tests in headless mode using a tablet viewport.

### Interactive mode

Run `npm run cy:open` to open the __Cypress App__ to run tests in interactive mode using a desktop viewport.

Run `npm run cy:open:tablet` to open the __Cypress App__ to run tests in interactive mode using a tablet viewport.

Made withn by [Bruno Penin](www.linkedin.com/in/bruno-penin)

