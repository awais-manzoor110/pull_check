const {Department} = require('../pageObjects/department')

describe('Test departments', () => {
  let user_data
  let department = new Department()
  before(() => {
    cy.visit(Cypress.config().baseUrl)
    cy.fixture('data.json').then((data) => {
      user_data = data
    })
  })
  it('Verify that user is able to create a new department', () => {
    cy.login()
    cy.button('Departments', {timeout: 30000})
    cy.button('Create Department')
    department.department_name(user_data.department_name)
    department.department_description(user_data.department_description)
    department.linked_entity(...user_data.linked_entities)
    department.link_users(...user_data.linked_users)
    cy.button('Finish')
    department.finish_button()
    department.successfully_created_department_assertion()
  })
})
