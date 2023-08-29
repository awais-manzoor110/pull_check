/// <reference types="cypress" />
exports.TaskPage = class TaskPage {
  task_name_f = "[name='tasktName']"
  department_drp = '.mat-select-arrow-wrapper'
  department = "[name='deptId']"
  group_n = "[formcontrolname='groupName']"
  check_t = '.column-type-box.ng-star-inserted'
  vali_t = 'div[class="col-sm-6 ng-star-inserted"]'
  chck_title = "[formcontrolname='title']"

  task_tab() {
    cy.contains('Tasks', {timeout: 30000}).click()
  }

  create_task_button() {
    cy.contains('Create Task').click()
  }

  task_name_field(task_name) {
    cy.get(this.task_name_f).type(task_name)
  }

  department_dropdown() {
    cy.get(this.department_drp).first().click()
  }

  seleted_department() {
    cy.get(this.department).first().click()
  }

  save_button() {
    cy.contains('Save').click()
  }

  created_task_assertion(t_name) {
    cy.contains(t_name).then(($t) => {
      const txt = $t.text()
      expect(txt).to.equal(t_name)
    })
  }
  task_setup(t_name) {
    cy.contains('div', t_name).siblings().click()
  }
  add_new_group_button() {
    cy.contains('Add New Group').click()
  }

  group_name_field(group_name) {
    cy.get(this.group_n).type(group_name)
  }

  submit_button() {
    cy.contains('Submit').should('be.visible').click()
  }

  check_submit_button() {
    cy.xpath("(//button[.=' Submit '])[2]").click()
  }

  add_check_button() {
    cy.contains('Add New Check').click()
  }

  check_type(check_name, validation_name) {
    cy.get(this.check_t).each(($t, index, $list) => {
      let check_n = $t.text()
      switch (check_n) {
        case check_name:
          cy.contains(check_name).click()
          cy.contains(validation_name).click()
          break
        default:
          break
        // for remaining checks and validation, code is pending here
      }
    })
  }

  check_title(title) {
    cy.get(this.chck_title).type(title)
  }
  successfull_check_creation_assertion() {
    cy.contains('Successfully Saved!').should('be.visible')
  }
}
