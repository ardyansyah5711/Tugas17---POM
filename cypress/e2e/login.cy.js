import LoginPage from '../support/page_objects/loginPage';

const loginPage = new LoginPage();

describe('Login Test - OrangeHRM', () => {
  it('Tlogin successfully ', () => {
    loginPage.visit();
    loginPage.getLoginHeaderText().should('contain.text', 'Login');

    loginPage.getUsernameInput().type('Admin');
    loginPage.getPasswordInput().type('admin123');
    loginPage.getLoginButton().click();

    loginPage.getDashboardTitle().should('contain.text', 'Dashboard');
  });
});
