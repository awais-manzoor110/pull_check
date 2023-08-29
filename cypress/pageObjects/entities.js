exports.Entities = class Entities {
  category_n = '[formcontrolname="categoryName"]'
  home_btn = '.btn.btn-white'

  category_name(ct_name) {
    cy.get(this.category_n).type(ct_name)
  }

  creating_category(...entities) {
    cy.fixture('data.json').then((data) => {
      let user_data = data
      entities.forEach((entity) => {
        cy.contains(`${entity}`, {timeout: 40000}).click()
        cy.button('Create Category')
        cy.get(this.category_n).type(user_data.category_name)
        cy.button('Save')
        cy.get(this.home_btn).click()
        // cy.reload(true)
      })
    })
  }
}
