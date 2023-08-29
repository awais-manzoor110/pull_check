/// <reference types="cypress" />
const {LoginPage} = require('../pageObjects/login')
let login = new LoginPage()
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... }

// Cypress.Commands.add("Validation_check", (check_name = null) => {
//   cy.get(check_name).check();
// });

Cypress.Commands.add('login', () => {
  cy.fixture('data.json').then((data) => {
    let user_data = data
    login.email_field(user_data.email)
    login.password_field(user_data.password)
    login.login_buttton()
  })
})
Cypress.Commands.add('first_name', () => {
  const firstNames = [
    'John',
    'Jane',
    'David',
    'Emily',
    'Michael',
    'Olivia',
    'William',
    'Sophia'
  ]

  function generateRandomName() {
    const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length)

    const randomFirstName = firstNames[randomFirstNameIndex]

    return randomFirstName
  }

  return generateRandomName()
})

Cypress.Commands.add('last_name', () => {
  const lastNames = [
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson'
  ]

  function generateRandomName() {
    const randomLastNameIndex = Math.floor(Math.random() * lastNames.length)

    const randomLastName = lastNames[randomLastNameIndex]

    return randomLastName
  }

  return generateRandomName()
})
Cypress.Commands.add('button', (btnname) => {
  cy.contains(btnname).click()
})
