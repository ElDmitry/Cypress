const submitButton = '.page-login__form > .hi-button';
const googleAuthButton = '.page-login__sso-link--google';
const appleAuthButton = '.page-login__sso-link--apple';
const registrationButton = '.hi-button.ng-star-inserted';
const resetPassword = '.page-access-shell__restore';
const support = '.page-access-shell__support-text';

describe('Find all items', () => {
  beforeEach('visit to LMS auth page',() => {
    cy.visit('https://lms.ithillel.ua/auth');
  });
  it('Find login form', () => {
    cy.get('.page-login__form').should('be.visible');
  });
  it('Find submit button', () => {
    cy.get(submitButton).should('be.visible'); 
  });
  it('Find Google authorization button', () => {
    cy.get(googleAuthButton).should('be.visible');
  });
  it('Find Apple authorization button', () =>{
    cy.get(appleAuthButton).should('be.visible'); 
  });
  it('Find registration button', () => {
    cy.get(registrationButton).should('be.visible')
  });
  it('Find reset password link', () => {
    cy.get(resetPassword).should('be.visible')
  });
  it('Find support link', () => {
    cy.get(support).should('be.visible')
  })
})