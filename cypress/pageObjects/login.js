exports.LoginPage = class LoginPage {
    email_f = '[formcontrolname="email"]';
    pass_f = '[formcontrolname="password"]';
    login_btn = '[type="submit"]';

    email_field(email) {
        cy.get(this.email_f).type(email);
    }

    password_field(password) {
        cy.get(this.pass_f).type(password);
    }

    login_buttton() {
        cy.get(this.login_btn).click();
    }
};
