const {TaskPage} = require('../pageObjects/task')

describe('Task Operations', () => {
  let user_data
  let task = new TaskPage()

  before(() => {
    cy.visit(Cypress.config().baseUrl)
    cy.fixture('data.json').then((data) => {
      user_data = data
    })
  })
  it('Verify that user is able to create a task', () => {
    cy.login()
    task.task_tab()
    task.create_task_button()
    task.task_name_field(user_data.task_name)
    task.department_dropdown()
    task.seleted_department()
    task.save_button()
    task.created_task_assertion(user_data.task_name)
    task.task_setup(user_data.task_name)
    task.add_new_group_button()
    task.group_name_field(user_data.task_group_name)
    task.submit_button()
    task.add_check_button()
    task.check_type(user_data.check_name, user_data.validation_name)
    task.check_submit_button()
    cy.contains(' Column Title is required ').should('to.visible')
    task.check_title(user_data.check_title)
    task.check_submit_button()
    task.successfull_check_creation_assertion()
  })
})
