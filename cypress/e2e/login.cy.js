/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */
describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('should display login page correctly', () => {
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.get('input[type="button"]').should('have.value', 'Login');
  });

  it('should display alert when username is empty', () => {
    cy.get('input[type="button"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"id" is not allowed to be empty');
    });
  });


  it('should display alert when password is empty', () => {
    cy.get('input[type="button"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when username and password are wrong', () => {
    cy.get('input[type="email"]').type('jhon.doe@email.com');
    cy.get('input[type="password"]').type('passwordtest');
    cy.get('input[type="button"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid email or password');
    });
  });

  it('should display homepage when username and password are correct', () => {
    cy.get('input[type="email"]').type('akuaku@aku.com');
    cy.get('input[type="password"]').type('akuakuaku');
    cy.get('input[type="button"]').click();

    cy.get('li').contains(/^Home$/).should('be.visible');
  });

});
