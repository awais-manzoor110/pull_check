exports.Department = class Department {
  dep_name = '[formcontrolname="departmentName"]'
  dep_description = '[formcontrolname="description"]'
  d_title = '.col-sm-9> h5'
  d_des = '.col-sm-9> p'

  department_name(dp_name) {
    cy.get(this.dep_name).type(dp_name)
  }

  department_description(dp_description) {
    cy.get(this.dep_description).type(dp_description)
  }

  linked_entity(...entities) {
    cy.button(' Link Entity/Category ')
    entities.forEach((entity) => {
      cy.get(`[name=${entity}]`).click({force: true})
    })
  }
  link_users(...users) {
    cy.button(' Link Users ')
    users.forEach((user) => {
      cy.get(`[name=${user}]`).click({force: true})
    })
  }
  information_assertion(dep_title, dep_description) {
    cy.get(this.d_title).should('have.text', dep_title)
    cy.get(this.d_des).should('have.text', dep_description)
  }

  finish_button() {
    cy.contains('button', 'Finish').click()
  }

  successfully_created_department_assertion() {
    cy.contains('Department created successfully..!').should('be.visible')
  }
}
