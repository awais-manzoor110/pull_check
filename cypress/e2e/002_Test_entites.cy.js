const {Entities} = require('../pageObjects/entities')

describe('Test entites', () => {
  let user_data
  let entities = new Entities()
  before(() => {
    cy.visit(Cypress.config().baseUrl)
    cy.fixture('data.json').then((data) => {
      user_data = data
    })
  })
  it('Verify that user is able to create a category in a entity', () => {
    cy.login()
    entities.creating_category(...user_data.entities_names)
  })
})
