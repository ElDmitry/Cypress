const {faker} = require('@faker-js/faker')
import '../support/commands'

describe('sign up form validation', () => {
  beforeEach('login to web-site',() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space//');
  });
  it('Login', () => {
    cy.login('testinho@meta.ua', 'Test123!');
    cy.url().should('include', '/panel/garage');
  });
  it('"Name" is 2 characters', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('Jo');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.modal-footer > .btn').click();
    cy.url().should('include', '/panel/garage')
    });
  it('"Name" is 20 characters', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('Jooooooooooooooooooo');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.modal-footer > .btn').click();
    cy.url().should('include', '/panel/garage')
    });
  it('Empty field "Name"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click();
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.modal-footer > .btn').should('have.disabled')
    });
  it('Field "Name" has error message "Name required"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').click();
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Name required')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
  });
  it('Wrong data field "Name"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('Джон');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Name is invalid')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  it('wrong data field "Name"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('12345');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Name is invalid')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  it('wrong min length field "Name"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('J');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Name has to be from 2 to 20 characters long')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  it('wrong max length field "Name"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('Johnohnohnohnohnohnjo');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Name has to be from 2 to 20 characters long')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  it('"Last Name" is 2 characters', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Sn');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.modal-footer > .btn').click();
    cy.url().should('include', '/panel/garage')
    });
  it('"Last Name" is 20 characters', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snoooooooooooooooooo');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.modal-footer > .btn').click();
    cy.url().should('include', '/panel/garage')
    }); 
  it('Field "Last name" has error message "Last name required"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').click();
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Last name required')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
  });
  it('Wrong data field "Last name"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Сноу');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Last name is invalid')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  it('Wrong data field "Last name"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('1234');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Last name is invalid')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });  
   it('wrong min length field "Last name"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('S');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Last name has to be from 2 to 20 characters long')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  it('wrong max length field "Last name"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snowwwwwwwwwwwwwwwwww');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Last name has to be from 2 to 20 characters long')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  it('Field "Email" has error message "Email required"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').click('');
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Email required')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
  });
  it('Field "Email" wrong data', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type('testinhogmail');
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Email is incorrect')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
  });
  it('"Password" is 15 characters', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test1231111111!');
    cy.get('#signupRepeatPassword').type('Test1231111111!');
    cy.get('.modal-footer > .btn').click();
    cy.url().should('include', '/panel/garage')
    });
  it('"Password" without spec. character', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Testtest');
    cy.get('#signupRepeatPassword').type('Testtest');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  it('"Password" without integer', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Testtes!');
    cy.get('#signupRepeatPassword').type('Testtes!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
      });
  it('"Password" without catital letter', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('test123!');
    cy.get('#signupRepeatPassword').type('test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  it('wrong max length field "Password"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!12312312');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  it('wrong min length field "Password"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test12!');
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
  it('Field "Password" has error message "Password required"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').click();
    cy.get('#signupRepeatPassword').type('Test123!');
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Password required')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
  });
  it('Field "Re-enter password" has error message "Re-enter password required"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').click();
    cy.get('.modal-footer').click();
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Re-enter password required')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
});
it('Field "Re-enter password" has error message "Passwords do not match"', () => {
    cy.get('.btn-primary').click();
    cy.get('#signupName').type('John');
    cy.get('#signupLastName').type('Snow');
    cy.get('#signupEmail').type(faker.internet.email());
    cy.get('#signupPassword').type('Test123!');
    cy.get('#signupRepeatPassword').type('Test123!!');
    cy.get('.modal-footer').click();
    cy.get('.invalid-feedback > p')
      .should('have.text', 'Passwords do not match')
      .and('have.css', 'color', 'rgb(220, 53, 69)')
      .and('have.css', 'border-color', 'rgb(220, 53, 69)');
});
});