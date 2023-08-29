const {RegisterPage} = require('../pageObjects/register')
describe('Register a company', () => {
  let user_details
  let register = new RegisterPage()
  before(() => {
    cy.visit(Cypress.config().registerUrl)
    cy.fixture('data.json').then((data) => {
      user_details = data
    })
  })

  it('Verify that all fields are mandatory', () => {
    register.try_for_free_button()
    cy.button('Next')
    register.fields_validations()
    cy.first_name().then((firstname) => {
      register.first_name_field(firstname)
    })
    cy.last_name().then((lastname) => {
      register.last_name_field(lastname)
    })
    register.email_field(user_details.email)
    register.job_title_field(user_details.job_title)
    register.country_dropdown(user_details.country_name)
    register.phone_number(user_details.phone_number)
    register.company_name(user_details.company_name)
    register.employees_dropdown()
    register.default_language()
    register.first_radio_button()
    register.second_radio_button()
    cy.wait(50000)
    cy.button('Next')
    register.package_amount()
    cy.button('Done')
    register.successfull_email_sent_assertion()
    cy.wait(11000)
    cy.request('GET', Cypress.config().passwordsetUrl).then((response) => {
      const txt = response.body[0].text
      let url = txt.split('Started\n[')[1].split(']\n\nThis')[0]
      cy.visit(url)
      register.password_field(user_details.password)
      register.confrom_password_field(user_details.password)
      register.set_passowrd_button()
      register.successfull_password_creation_assertion
      cy.button(' LogIn ')
    })
  })
})
