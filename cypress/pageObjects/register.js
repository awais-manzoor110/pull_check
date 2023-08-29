exports.RegisterPage = class RegisterPage {
  fields_vali = ".invalid-feedback.ng-star-inserted";
  first_name = '[formcontrolname="firstName"]';
  last_name = '[formcontrolname="lastName"]';
  email = '[formcontrolname="email"]';
  job_t = '[formcontrolname="jobTitle"]';
  country_drp = "#mat-select-value-1";
  search_int = '[placeholder="Search"]';
  number = "#phone";
  company = '[formcontrolname="company"]';
  eng = "mat-option:first-child";
  employee_drp = ".mat-select-value.ng-tns-c56-3";
  employee_no = "#mat-option-1";
  language_drp = "#mat-select-value-5";
  radio_btn_1 = "#profile-1";
  radio_btn_2 = "#profile-2";
  package = "[value='+']";
  passowrd_f = '[formcontrolname="password"]';
  confrom_password_f = '[formcontrolname="confirmPassword"]';
  success_m = "h1";
  set_password_btn = "[type='submit']";

  try_for_free_button() {
    cy.contains("Try For Free").click();
  }

  fields_validations() {
    cy.get(this.fields_vali).then(($txt) => {
      let text = $txt.text();
      expect(text).to.contain("required");
    });
  }

  first_name_field(fname) {
    cy.get(this.first_name).type(fname);
  }
  last_name_field(lname) {
    cy.get(this.last_name).type(lname);
  }
  email_field(emails) {
    cy.get(this.email).type(emails);
  }
  job_title_field(job_title) {
    cy.get(this.job_t).type(job_title);
  }

  country_dropdown(country_name) {
    cy.get(this.country_drp).click();
    cy.get(this.search_int).type(country_name).type("{enter}");
  }
  phone_number(num) {
    cy.get(this.number).type(num);
  }
  company_name(name) {
    cy.get(this.company).type(name);
  }

  employees_dropdown() {
    cy.get(this.employee_drp).click();
    cy.get(this.employee_no).click();
  }

  default_language() {
    cy.get(this.language_drp).click();
    cy.get(this.eng).click();
  }

  first_radio_button() {
    cy.get(this.radio_btn_1).click({ force: true });
  }
  second_radio_button() {
    cy.get(this.radio_btn_2).click({ force: true });
  }

  package_amount() {
    cy.get(this.package).click({ multiple: true });
  }

  successfull_email_sent_assertion() {
    cy.contains("Successfully Saved!").should("be.visible");
  }

  password_field(password) {
    cy.get(this.passowrd_f).type(password);
  }
  confrom_password_field(password) {
    cy.get(this.confrom_password_f).type(password);
  }
  set_passowrd_button() {
    cy.get(this.set_password_btn).click();
  }
  successfull_password_creation_assertion() {
    cy.get(this.success_m).should("be.visible");
  }
};
