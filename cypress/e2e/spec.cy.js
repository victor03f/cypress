describe('pagina de login', () => {

  it('Login com sucesso', () => {
    cy.visit('http://localhost:63342/pg-login-testes-3C/index.html?_ijt=mc92nqhu83ng6e1pderfjdeblu');

    //preencher os campos de usuario e senha
    cy.get('#usuario').type('admin');
    cy.get('#senha').type('admin');
    cy.get('#entrar').click()

    cy.on('window:alert', (txt) =>{
      expect(txt).to.contains('Login efetuado!')
    });

  });

  it('Login com erro', () => {
    cy.visit('http://localhost:63342/pg-login-testes-3C/index.html?_ijt=mc92nqhu83ng6e1pderfjdeblu');

    cy.get('#usuario').type('1234');
    cy.get('#senha').type('errado');
    cy.get('#entrar').click()

    cy.get('#erro').should('be.visible')

  });

});