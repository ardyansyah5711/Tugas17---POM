class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  getUsernameInput() {
    return cy.get('input[name="username"]');
  }

  getPasswordInput() {
    return cy.get('input[name="password"]');
  }

  getLoginButton() {
    return cy.get('button[type="submit"]');
  }

  getDashboardTitle() {
    return cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module');
  }

  getLoginHeaderText() {
    return cy.get('.orangehrm-login-title');
  }
}

export default LoginPage;
